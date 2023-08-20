import axios from 'axios'

const instance = axios.create()

instance.defaults.baseURL = process.env.REACT_APP_SERVER_API
// instance.defaults.baseURL = process.env.REACT_APP_LOCAL_API

export const setAxiosInterceptors = ({ onLogout }) => {
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        if (onLogout) {
          onLogout()
        }
      }

      return Promise.reject(error)
    },
  )
}

export const removeTokenHeader = () => {
  delete instance.defaults.headers.common.token
}

export default instance
