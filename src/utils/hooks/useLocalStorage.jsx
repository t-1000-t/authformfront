import { useState } from 'react'
import { logError } from '../services'

const useLocalStorage = (key, initialValue) => {
  // Get from local storage then parse stored json or return initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      logError(error)
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that persists the new value
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      // const valueToStore = value instanceof Function ? value(storedValue) : value
      // setStoredValue(valueToStore)
      setStoredValue(value)
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      logError(error)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
