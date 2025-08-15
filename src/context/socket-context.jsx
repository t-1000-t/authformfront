// src/socket-context.jsx
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'
import useAuthStore from '../store/useAuthStore'

const SocketContext = createContext({})

// eslint-disable-next-line react/prop-types
const SocketProvider = ({ children }) => {
  const socket = useRef(null)
  const [isConnecting, setIsConnecting] = useState(true)
  const [socketId, setSocketId] = useState('')
  const { user } = useAuthStore()

  const connectSocket = useCallback(() => {
    const url = process.env.REACT_APP_SERVER_API || 'http://localhost:2011'
    setIsConnecting(true)

    // create connection
    socket.current = io(url, {
      transports: ['websocket'],
      withCredentials: true,
    })

    socket.current.on('connect', () => {
      // mark ready
      setIsConnecting(false)

      // let server know someone connected
      socket.current.emit('userConnected', user)

      // register this socket with your user AFTER connect (important)
      if (user?.userData?.id) {
        socket.current.emit('registerSocket', user.userData.id)
      }

      // you already emit "me" from the server — capture it
      setSocketId(socket.current.id)
    })

    // (optional) still listen for "me" if you want
    socket.current.on('me', (id) => setSocketId(id))

    // cleanup on error/disconnect if you want
    socket.current.on('disconnect', () => {
      setSocketId('')
    })
  }, [user])

  const disconnectSocket = useCallback(() => {
    if (socket.current?.connected) {
      socket.current.disconnect()
    }
  }, [])

  useEffect(() => {
    connectSocket()
    return () => disconnectSocket()
  }, [connectSocket, disconnectSocket])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <SocketContext.Provider value={{ socket: socket.current, socketId, user }}>
      {!isConnecting && children}
    </SocketContext.Provider>
  )
}

const useSocket = () => {
  const ctx = useContext(SocketContext)
  if (ctx === undefined) throw new Error('useSocket must be used within a SocketProvider')
  return ctx
}

export { SocketProvider, useSocket }
