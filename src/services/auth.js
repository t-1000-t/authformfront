import jwtDecode from 'jwt-decode'
import axios from 'utils/axios'
// import useSettingsStore from 'store/useSettings'
// import useAuthStore from 'store/useAuthStore'
// import parseAvatar from 'utils/parseUserAvatar'

export const handleAuthentication = (accessToken) => {
  if (isValidToken(accessToken)) {
    setSession(accessToken)
  }
}

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
  }
}

export const signin = async (name, password) => {
  const response = await axios.post('/api/auth/login', {
    email: name,
    password: password,
  })

  console.log('response LOGIN', response.data)

  const { token, userData, userId } = response.data

  setSession(token)

  // const avatar = parseAvatar(profilePic)

  const user = {
    userId,
    username: userData.role,
    score: Math.round(2000) || 300,
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
  const response = await axios.post('/api/auth/signup', {
    username: username,
    surname: surname,
    email: email,
    password: password,
    message: message,
    role: role,
    avatar: avatar,
  })

  console.log('response DATA', response.data)

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
