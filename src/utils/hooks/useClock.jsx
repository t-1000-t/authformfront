import { useEffect, useRef, useState } from 'react'

const useClock = ({ initialTime }) => {
  const [time, setTime] = useState(() => new Date())
  const intervalId = useRef(null)

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(initialTime)
    }, 1000)

    return () => {
      clearInterval(intervalId.current)
    }
  }, [initialTime])

  return [time] // time.toLocalTimeString()
}

export default useClock
