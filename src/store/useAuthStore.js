import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { signin, signup, noteup, noteDelete } from 'services/auth'
import { removeTokenHeader } from 'utils/axios'

const store = (set) => ({
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
      // Perform any necessary operations, such as making API calls
      // For now, we'll assume you just want to update the state with the note
      const list = await noteup(data)
      set({ text: data.text, list: list.notes })
      // console.log('Note updated successfully')
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
