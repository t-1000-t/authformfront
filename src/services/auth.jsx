import { jwtDecode } from 'jwt-decode'
import instance from '../utils/axios'
import useLocalStorage from '../utils/hooks/useLocalStorage'

const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false
  }

  const decoded = jwtDecode(accessToken)
  const currentTime = Date.now() / 1000

  return decoded.exp > currentTime
}

const setSession = (accessToken) => {
  if (accessToken) {
    instance.defaults.headers.common.token = accessToken

    // or this case
    // const token = {
    //   set(accessToken) {
    //     axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    //   },
    //   unset() {
    //     axios.defaults.headers.common.Authorization = ''
    //   },
    // }
  }
}

export const handleAuthentication = (accessToken) => {
  const [storedValue, setStoredValue] = useLocalStorage('token', '')
  if (isValidToken(storedValue)) {
    setSession(accessToken)

    if (accessToken) {
      setStoredValue(accessToken)
    }
  }
}

export const cvDataUp = (data) => {
  // data is object { data: '', email: 'goo@gmail.com' }
  return instance.post('/api/auth/cvdata', data)
}

export const cvUpPdf = async (data) => {
  const response = await instance.post(
    '/api/auth/cvpdf',
    { url: data.url },
    {
      responseType: 'blob', // important for binary PDF data
    },
  )
  return response.data
}

export const getBotId = (email) => {
  // email is object { email: test@net.com }
  return instance.get('/api/auth/tg/chat', { params: email })
}

export const chatBotId = (data) => {
  // data is object { chatId: number, email: test@net.com }
  return instance.post('/api/auth/tg/chat', data)
}

export const noteup = async (data) => {
  // data is object { text: '', email: 'goo@gmail.com' }
  const result = await instance.post('/api/auth/notes', data)
  return { data: result.data, status: result.status }
}

export const pullDataCv = async (str) => {
  const result = await instance.post('/api/auth/cvinfo', { email: str })

  return result.data
}

export const noteDelete = async (id) => {
  const { status, statusText } = await instance.delete(`/api/auth/notes/${id}`)

  return { status, statusText }
}

export const skillDelete = async (cvId, skillId) => {
  const { status, statusText } = await instance.delete(`/api/auth/cv/${cvId}/skills/${skillId}`)

  return { status, statusText }
}

export const signIn = async (name, password) => {
  const response = await instance.post('/api/auth/login', {
    email: name,
    password,
  })

  const { token, userData, userId } = response.data

  setSession(token)

  const user = {
    userId,
    username: userData.username,
    score: Math.round(2000) || 300,
    userData,
  }

  if (userData.role === 'admin') {
    user.isAdmin = true
    user.status = 'admin'
  } else if (userData.role === 'user') {
    user.status = 'user'
  } else {
    user.status = 'guest'
  }

  return {
    user,
    accessToken: token,
  }
}

export const signup = async ({ username, surname, email, password, role, avatar, message }) => {
  const response = await instance.post('/api/auth/signup', {
    username,
    surname,
    email,
    password,
    message,
    role,
    avatar,
  })

  const { userData, token } = response.data

  setSession(token)

  if (userData.role === 'admin') {
    userData.isAdmin = true
  } else if (userData.role === 'user') {
    userData.status = 'user'
  } else {
    userData.status = 'guest'
  }

  return {
    user: userData,
    accessToken: token,
  }
}

export const logoutAuth = async (id) => {
  await instance.post('/api/auth/logout', {
    userId: id,
  })
}

export const fooAgent = ({ q, num }) => {
  return instance.post('/api/auth/foobot', { q, num })
}

export const tgSend = ({ chatId, t, mode }) => {
  return instance.post('/api/auth/tg/send', { chatId, t, mode })
}

export const searchAgent = (data) => {
  return instance.post('/api/auth/agent/search', data)
}
