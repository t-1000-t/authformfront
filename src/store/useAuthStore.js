import create from 'zustand'
import { persist } from 'zustand/middleware'

import { signin, signup } from 'services/auth'
import { removeTokenHeader } from 'utils/axios'
import useSettingsStore from './useSettings'

const store = (set, get) => ({
  accessToken: null,
  user: null,
  signup: async ({ username, firstName, surname, email, password, avatar, isChild, promoCode, premiumSignup }) => {
    const { accessToken, user } = await signup({
      username,
      firstName,
      surname,
      email,
      password,
      avatar,
      isChild,
      promoCode,
    })

    let redirect = '/settings?change-username=true'
    if (premiumSignup && !user.isPremium) {
      redirect = '/premium-signup'
    }

    set({
      user,
      accessToken,
      redirect,
    })
  },
  login: async (username, password) => {
    const { accessToken, user, userSettings } = await signin(username, password)

    console.log('user', user)
    console.log('accessToken', accessToken)

    user.isIncognito = userSettings?.incognito || false

    set({ user, accessToken })

    if (userSettings) {
      // update settings
      useSettingsStore.setState({
        background: `${userSettings.bg}-${userSettings.mode}`,
        bgVariant: userSettings.mode,
        playSounds: userSettings.sounds,
        playAnimations: userSettings.animations,
        showEvaluationBar: userSettings.evalBar,
        pieces: userSettings.pieces,
        boardColor: userSettings.board,
        isIncognito: userSettings.incognito,
      })
    }
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

// setInterval(() => {
//   logout()
// }, 1000)

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
