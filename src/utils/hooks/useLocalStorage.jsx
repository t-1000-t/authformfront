import { useEffect, useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  // Get from local storage then parse stored json or return initialValue
  const [storedValue, setStoredValue] = useState(() => JSON.parse(window.localStorage.getItem(key)) ?? initialValue)

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue))
  }, [key, storedValue])

  return [setStoredValue]
}

export default useLocalStorage
