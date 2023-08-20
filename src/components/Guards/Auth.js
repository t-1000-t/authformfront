import { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import useAuthStore from 'store/useAuthStore'
import { handleAuthentication } from '../../services/auth'
import { setAxiosInterceptors } from '../../utils/axios'
import LoadingScreen from '../LoadingScreen'

const Auth = ({ children }) => {
  const history = useHistory()
  const logout = useAuthStore((state) => state.logout)
  const accessToken = useAuthStore((state) => state.accessToken)

  const [isLoading, setLoading] = useState(true)

  const restoreSession = useCallback(() => {
    handleAuthentication(accessToken)

    try {
      setLoading(false)
    } catch (err) {
      setLoading(false)
      logout()
    }
  }, [accessToken, logout])

  useEffect(() => {
    setAxiosInterceptors({
      onLogout: () => {
        logout()
        history.push('/')
      },
    })

    if (accessToken) {
      restoreSession()
    } else {
      setLoading(false)
    }
  }, [accessToken, history, logout, restoreSession])

  if (isLoading) {
    return <LoadingScreen />
  }

  return children
}

export default Auth
