import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { logoutAuth, noteDelete, noteup, signin, signup, cvdataup, cvUpPdf, pullDataCv } from '../services/auth'
import { removeTokenHeader } from '../utils/axios'
import { logError } from '../utils/services'

const store = (set) => ({
  accessToken: null,
  user: null,
  redirect: null,
  list: null,
  cv: null,

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
    const redirect = '/'
    set({
      user,
      redirect,
      idAvatar,
    })
  },

  login: async (username, password) => {
    const { accessToken, user } = await signin(username, password)
    const redirect = '/'
    set({
      user,
      accessToken,
      redirect,
    })
  },

  putCvInfo: async (obj) => {
    try {
      set({ cv: { data: obj } })
    } catch (error) {
      logError(error)
    }
  },

  cvText: async (data) => {
    try {
      const cvlist = await cvdataup(data)
      set({ list: cvlist.data })
    } catch (error) {
      logError(error)
    }
  },

  getCvInfo: async (data) => {
    try {
      console.log('data', data)
      const result = await pullDataCv(data)
      console.log('result', result)
      set({ cv: result })
    } catch (error) {
      logError(error)
    }
  },

  cvPdfUp: async (data) => {
    try {
      await cvUpPdf(data)
    } catch (error) {
      logError(error)
      throw error
    }
  },

  noteText: async (data) => {
    try {
      const list = await noteup(data)
      set({ text: data.text, list: list.notes })
    } catch (error) {
      logError(error)
    }
  },

  deleteNote: async (id) => {
    try {
      return await noteDelete(id)
    } catch (error) {
      logError(error)
      return null
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
  },
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
