import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { signin, signup, noteup, noteDelete, logoutAuth } from 'services/auth'
import { removeTokenHeader } from 'utils/axios'

const store = (set, get) => ({
  accessToken: null,
  user: null,
  redirect: null,
  list: null,

  signup: async ({ username, surname, email, password, role, message, avatar }) => {
    const { user, idAvatar } = await signup({
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
      idAvatar
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

  noteText: async (data) => {
    try {
      const list = await noteup(data)
      set({ text: data.text, list: list.notes })
    } catch (error) {
      console.error('Error updating note:', error)
      throw error // Throw the error to be caught by the caller, if needed
    }
  },

  deleteNote: async (id) => {
    try {
      const result = await noteDelete(id)
      return result
    } catch (error) {
      console.error('Error updating note:', error)
      throw error // Throw the error to be caught by the caller, if needed
    }
  },

  setNoteList: (notes) => {
    set({ list: notes })
  },

  logout: async (id) => {

    // clear state
    set({ accessToken: null, user: null, redirect: null })
    await logoutAuth(id)

    // clear local storage
    localStorage.removeItem('auth')

    // clear session storage
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
