import { useEffect } from 'react'

const useLocalStorageCleanup = (key) => {
  useEffect(() => {
    const sessionFlag = sessionStorage.getItem('session-alive')

    // If session storage is empty → browser was fully closed
    if (!sessionFlag) {
      localStorage.removeItem(key)
    }

    // Set session flag for this tab
    sessionStorage.setItem('session-alive', 'true')
  }, [key])
}

export default useLocalStorageCleanup
