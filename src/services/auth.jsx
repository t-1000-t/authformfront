import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import instance from '../utils/axios'
// import useAuthStore from 'store/useAuthStore'

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

export const useAuthHandler = () => {
  const history = useNavigate()

  const handleAuthentication = (accessToken) => {
    if (isValidToken(accessToken)) {
      setSession(accessToken)

      if (accessToken) {
        history.push('/')
      }
    }
  }

  return handleAuthentication
}

export const cvdataup = async (data) => {
  // data is object { data: '', email: 'goo@gmail.com' }
  const result = await instance.post('/api/auth/cvdata', data)
  return result.data
}

export const noteup = async (data) => {
  // data is object { text: '', email: 'goo@gmail.com' }
  const result = await instance.post('/api/auth/notes', data)
  return result.data
}

export const noteDelete = async (id) => {
  const { status, statusText } = await instance.delete(`/api/auth/notes/${id}`)

  return { status, statusText }
}

export const signin = async (name, password) => {
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

export default useAuthHandler
