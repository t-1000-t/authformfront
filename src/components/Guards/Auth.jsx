import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/useAuthStore'
// import { handleAuthentication } from '../../services/auth'
import { setAxiosInterceptors } from '../../utils/axios'
import LoadingScreen from '../LoadingScreen'

// eslint-disable-next-line react/prop-types
function Auth({ children }) {
  const navigate = useNavigate()
  const logout = useAuthStore((state) => state.logout)
  const accessToken = useAuthStore((state) => state.accessToken)

  const [isLoading, setLoading] = useState(true)

  const restoreSession = useCallback(() => {
    // handleAuthentication(accessToken)

    try {
      setLoading(false)
    } catch (err) {
      setLoading(false)
      logout()
    }
  }, [logout])

  useEffect(() => {
    setAxiosInterceptors({
      onLogout: () => {
        logout()
        navigate('/')
      },
    })

    if (accessToken) {
      restoreSession()
    } else {
      setLoading(false)
    }
  }, [accessToken, navigate, logout, restoreSession])

  if (isLoading) {
    return <LoadingScreen />
  }

  return children
}

export default Auth
