import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  logoutAuth,
  noteDelete,
  noteup,
  signin,
  signup,
  cvdataup,
  cvUpPdf,
  pullDataCv,
  skillDelete,
} from '../services/auth'
import { removeTokenHeader } from '../utils/axios'
import { logError } from '../utils/services'

const store = (set) => ({
  accessToken: null,
  user: null,
  redirect: null,
  list: null,
  statusUpCv: null,
  cv: {
    user: {
      userId: '...',
      email: '...',
      newData: {
        title: {
          posname: '...',
          fullname: '...',
        },
        contacts: {
          email: '...',
          linkedin: '...',
          location: '...',
          languages: '...',
          img: '...',
        },
        education: {
          diploma: '...',
          course: '...',
        },
        skills: [
          {
            company: '...',
            task: '...',
            technologies: '...',
            responsibilities: '...',
          },
        ],
      },
    },
  },

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

  putCvInfo: async (obj, cvtest) => {
    const { title, contacts, education } = cvtest.user.newData
    const titleKeys = Object.keys(title)
    const contactKeys = Object.keys(contacts)
    const educationKeys = Object.keys(education)

    const newTitle = {}
    const newContact = {}
    const newEducation = {}
    // const newSkills = {}
    const objArray = Array.isArray(obj) ? obj : [obj]

    Object.entries(obj).forEach(([key, value]) => {
      if (titleKeys.includes(key)) newTitle[key] = value
      if (contactKeys.includes(key)) newContact[key] = value
      if (educationKeys.includes(key)) newEducation[key] = value
      // if (skillsKeys.includes(key)) newSkills[key] = value
    })

    try {
      set({
        cv: {
          user: {
            ...cvtest.user,
            newData: {
              title: { ...title, ...newTitle },
              contacts: { ...contacts, ...newContact },
              education: { ...education, ...newEducation },
              skills: objArray,
            },
          },
        },
      })
    } catch (error) {
      logError(error)
    }
  },

  pushCvText: async (data) => {
    try {
      const cvResult = await cvdataup(data)
      set({ statusUpCv: cvResult.status })
      if (cvResult && cvResult.status === 200) {
        const result = await pullDataCv(data.email)
        set({ cv: result })
      }
      return cvResult
    } catch (error) {
      logError(error)
      return null
    }
  },

  getCvInfo: async (data) => {
    try {
      const result = await pullDataCv(data)
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
      set({ list: list.notes })
      return list
    } catch (error) {
      logError(error)
      return null
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

  deleteSkillFromCv: async (cvId, skillId, email) => {
    try {
      const res = await skillDelete(cvId, skillId)
      if (res && res.status === 200) {
        const result = await pullDataCv(email)
        set({ cv: result })
      }
      return res
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
