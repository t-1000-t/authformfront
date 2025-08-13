import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { isEqual } from 'lodash'
import {
  logoutAuth,
  noteDelete,
  noteup,
  signIn,
  signup,
  cvDataUp,
  cvUpPdf,
  pullDataCv,
  skillDelete,
  fooAgent,
} from '../services/auth'
import axios, { removeTokenHeader } from '../utils/axios'
import { logError } from '../utils/services'

const store = (set) => ({
  accessToken: null,
  user: null,
  redirect: null,
  listUp: null,
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
        pet: {
          own: '...',
          task: '...',
          technologies: '...',
          responsibilities: '...',
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
  hasChanged: false,
  setHasChanged: (value) => set({ hasChanged: value }),
  currentData: { section: '', localData: null },
  setCurrentData: (data) => set({ currentData: data }),
  isGlobalLoading: false,

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
    const { accessToken, user } = await signIn(username, password)
    const redirect = '/'
    set({
      user,
      accessToken,
      redirect,
    })
  },

  putCvInfo: async (obj, cvtest) => {
    const { title, pet, contacts, education, skills } = cvtest.user.newData
    const petKeys = Object.keys(pet)
    const titleKeys = Object.keys(title)
    const contactKeys = Object.keys(contacts)
    const educationKeys = Object.keys(education)

    const newPet = {}
    const newTitle = {}
    const newContact = {}
    const newEducation = {}
    let newSkills = skills

    if (Array.isArray(obj)) {
      const isSameStructure = isEqual(obj, skills)
      newSkills = isSameStructure ? skills : obj
    }

    Object.entries(obj).forEach(([key, value]) => {
      if (petKeys.includes(key)) newPet[key] = value
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
              pet: { ...pet, ...newPet },
              title: { ...title, ...newTitle },
              contacts: { ...contacts, ...newContact },
              education: { ...education, ...newEducation },
              skills: newSkills,
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
      const cvResult = await cvDataUp(data)
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

  getDataViolitySearching: async (search) => {
    try {
      const result = await axios.get(`/api/search?query=${encodeURIComponent(search)}`)
      return result.data
    } catch (e) {
      logError(e)
      return null
    }
  },

  getDataNotes: async (mail) => {
    try {
      const response = await axios.get('/api/auth/notes', { params: { email: mail } })

      return response.data
    } catch (e) {
      logError(e)
      return null
    }
  },

  hasChangeGlobalLoading: (isBool) => {
    set({ isGlobalLoading: isBool })
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
      set({ listUp: list.data.notes })
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
    set({ listUp: notes })
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

  callFooAgent: async (id) => {
    try {
      await fooAgent(id).then()
    } catch (e) {
      logError(e)
    }
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
