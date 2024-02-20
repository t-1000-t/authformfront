import create from 'zustand'
import { persist } from 'zustand/middleware'

import { signin, signup } from 'services/auth'
import { removeTokenHeader } from 'utils/axios'

const store = (set) => ({
  accessToken: null,
  user: null,
  redirect: null,
  signup: async ({ username, surname, email, password, role, message, avatar }) => {
    const { user } = await signup({
      username,
      surname,
      email,
      password,
      message,
      role,
      avatar,
    })

    let redirect = '/'

    set({
      user,
      redirect,
    })
  },
  login: async (username, password) => {
    const { accessToken, user } = await signin(username, password)

    let redirect = '/'

    set({
      user,
      accessToken,
      redirect,
    })
  },
  logout: () => {
    // clear state
    set({ accessToken: null, user: null, redirect: null })
    // useSettingsStore.getState().reset()

    // clear local storage
    localStorage.removeItem('auth')
    // localStorage.removeItem('settings')

    // clearing session (zoom stores user email and name)
    sessionStorage.clear()

    // clear saved token from axios
    removeTokenHeader()
  },
  setToken: (token) => {
    set({ accessToken: token })
  }
})

const useAuthStore = create(
  persist(store, {
    name: 'auth',
    partialize: (state) => ({
      user: state.user,
      accessToken: state.accessToken,
    }),
  }),
)

export default useAuthStore
