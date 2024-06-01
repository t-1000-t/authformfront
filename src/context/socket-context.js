// src/socket-context.js
import React, { createContext, useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import useAuthStore from '../store/useAuthStore'

const SocketContext = createContext({})

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)
  const [isConnecting, setIsConnecting] = useState(true)
  const user = useAuthStore((state) => state.user)

  const connectSocket = () => {
    setIsConnecting(true)
    const newSocket = io(process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000')

    newSocket.on('connect', () => {
      newSocket.emit('userConnected', user)
      setIsConnecting(false)
    })

    newSocket.on('connect_error', (err) => {
      console.error('Connection Error:', err)
      setIsConnecting(false)
    })

    newSocket.on('disconnect', () => {
      console.log('Socket disconnected')
    })

    setSocket(newSocket)
  }

  const disconnectSocket = () => {
    if (socket?.connected) {
      socket.disconnect()
    }
  }

  useEffect(() => {
    connectSocket()
    return () => {
      disconnectSocket()
    }
  }, [user, connectSocket, disconnectSocket])

  return (
    <SocketContext.Provider value={socket}>
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
