import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import axios from 'utils/axios'
import instance from 'utils/axios'
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
    axios.defaults.headers.common.token = accessToken

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

export const noteup = async (data) => {
  try {
    // data is object { text: '', email: 'goo@gmail.com' }
    const result = await axios.post('/api/auth/notes', data)

    console.log('result', result.data)
    return result.data
  } catch (error) {
    throw error
  }
}

export const noteDelete = async (id) => {
  try {
    const { status, statusText } = await axios.delete(`/api/auth/notes/${id}`)

    return { status, statusText }
  } catch (error) {
    console.error('Error deleting note:', error)
    throw error
  }
}

export const signin = async (name, password) => {
  try {
    console.log('base IN', instance.defaults.baseURL)

    const response = await axios.post('/api/auth/login', {
      email: name,
      password: password,
    })

    const { token, userData, userId } = response.data

    setSession(token)

    const user = {
      userId,
      username: userData.role,
      score: Math.round(2000) || 300,
      userData
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
      accessToken: token
    }
  } catch (error) {
    throw error
  }
}

export const signup = async ({ username, surname, email, password, role, avatar, message }) => {
  try {
    console.log('base UP', instance.defaults.baseURL)

    const response = await axios.post('/api/auth/signup', {
      username: username,
      surname: surname,
      email: email,
      password: password,
      message: message,
      role: role,
      avatar: avatar
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
  } catch (error) {
    throw error
  }
}

export default useAuthHandler
