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

  console.log('response', response)

  const { token, username, userId, userRole, currentScore } = response.data

  setSession(token)

  // const avatar = parseAvatar(profilePic)

  const user = {
    userId,
    username,
    score: Math.round(currentScore * 2000) || 300,
  }

  if (userRole === 'admin') {
    user.isAdmin = true
    user.status = 'admin'
  } else if (user.isUser) {
    user.status = 'user'
  } else {
    user.status = 'guest'
  }

  return {
    user,
    accessToken: token,
  }
}

export const signup = async ({ username, firstName, surname, email, password, avatar, isChild, promoCode }) => {
  const response = await axios.post('/api/auth/signup', {
    username: username,
    firstName: firstName,
    surname: surname,
    email: email,
    password: password,
    avatar: avatar,
    isChild: isChild,
    code: promoCode,
  })

  const { user, token } = response.data

  setSession(token)

  if (user.role === 'admin') {
    user.isAdmin = true
    user.status = 'admin'
  } else if (user.isChild) {
    user.status = 'child'
  } else {
    user.status = 'guardian'
  }

  return {
    user,
    accessToken: token,
  }
}
