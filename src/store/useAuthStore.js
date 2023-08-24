import create from 'zustand'
import { persist } from 'zustand/middleware'

import { signin, signup } from 'services/auth'
import { removeTokenHeader } from 'utils/axios'
import useSettingsStore from './useSettings'

const store = (set) => ({
  accessToken: null,
  user: null,
  signup: async ({ username, surname, email, password, role, message, avatar }) => {
    const { accessToken, user } = await signup({
      username,
      surname,
      email,
      password,
      message,
      role,
      avatar,
    })

    set({
      user,
      accessToken,
    })
  },
  login: async (username, password) => {
    const { accessToken, user } = await signin(username, password)

    console.log('user', user)
    console.log('accessToken', accessToken)

    // user.isIncognito = userSettings?.incognito || false

    set({
      user,
      accessToken,
    })

    // if (userSettings) {
    //   // update settings
    //   useSettingsStore.setState({
    //     background: `${userSettings.bg}-${userSettings.mode}`,
    //     bgVariant: userSettings.mode,
    //     playSounds: userSettings.sounds,
    //     playAnimations: userSettings.animations,
    //     showEvaluationBar: userSettings.evalBar,
    //     pieces: userSettings.pieces,
    //     boardColor: userSettings.board,
    //     isIncognito: userSettings.incognito,
    //   })
    // }
  },
  logout: () => {
    // clear state
    set({ accessToken: null, user: null, redirect: null })
    useSettingsStore.getState().reset()

    // clear local storage
    localStorage.removeItem('auth')
    localStorage.removeItem('settings')

    // clearing session (zoom stores user email and name)
    sessionStorage.clear()

    // clear saved token from axios
    removeTokenHeader()
  },
})

const useAuthStore = create(
  persist(store, {
    name: 'auth',
    partialize: (state) => {
      console.log('state', state)

      return {
        user: state.user,
        accessToken: state.accessToken,
      }
    },
  }),
)

export default useAuthStore
