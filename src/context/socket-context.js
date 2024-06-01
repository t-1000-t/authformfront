// src/socket-context.js
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'

import useAuthStore from '../store/useAuthStore'

const SocketContext = createContext({})

const SocketProvider = ({ children }) => {
  const socket = useRef({})

  const [isConnecting, setIsConnecting] = useState(true)

  const user = useAuthStore((state) => state.user)


  const connectSocket = () => {
    setIsConnecting(true)
    socket.current = io(process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000')

    socket.current.on('connect', () => {
      socket.current.emit('userConnected', user)
      setIsConnecting(false)
    })
  }

  const disconnectSocket = () => {
    if (socket.current?.connected) {
      socket.current.disconnect()
    }
  }

  useEffect(() => {
    connectSocket()

    return () => {
      disconnectSocket()
    }
  }, [user])

  console.log('socket context', socket)
  console.log('user context', user)
  return (
    <SocketContext.Provider value={socket.current}>
      {!isConnecting && children}
    </SocketContext.Provider>
  )
}

const useSocket = () => {
  const context = useContext(SocketContext)
  if (context === undefined) {
    throw new Error('useSocket must be used within a SocketProvider')
  }
  return context
}

export { SocketProvider, useSocket }
