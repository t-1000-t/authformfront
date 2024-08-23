import { useState, useEffect, useRef, useCallback } from 'react'
import Peer from 'simple-peer'
import { useSocket } from '../../../context/socket-context'
import getList from '../../../services/getListUsers'

export function useCall() {
  const { socket, socketId } = useSocket()

  const [me, setMe] = useState('')
  const [stream, setStream] = useState(null)
  const [receivingCall, setReceivingCall] = useState(false)
  const [caller, setCaller] = useState('')
  const [callerSignal, setCallerSignal] = useState(null)
  const [callAccepted, setCallAccepted] = useState(false)
  const [callEnded, setCallEnded] = useState(false)
  const [name, setName] = useState('')
  const [listUsers, setListUsers] = useState([])
  const opponentVideo = useRef(null)
  const connectionRef = useRef(null)

  // Fetch the list of users
  const fetchUserList = useCallback(async () => {
    const res = await getList()
    setListUsers(res.list || [])
  }, [])

  useEffect(() => {
    fetchUserList().then()
  }, [fetchUserList])

  // Get user media (video and audio)
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream)
      })
      .catch(error => console.error('Error accessing media devices.', error))

    socket.on('callUser', (data) => {
      setReceivingCall(true)
      setCaller(data.from)
      setCallerSignal(data.signal)
    })

    return () => {
      socket.off('callUser')
    }
  }, [socket])

  useEffect(() => {
    setMe(socketId)
  }, [socketId])

  // Function to initiate a call to another user
  const callUser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    })

    peer.on('signal', (data) => {
      socket.emit('callUser', {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      })
    })

    peer.on('stream', (currentStream) => {
      if (opponentVideo.current) {
        opponentVideo.current.srcObject = currentStream
      }
    })

    peer.on('error', err => console.error('Peer error:', err))

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true)
      peer.signal(signal)
    })

    connectionRef.current = peer
  }

  // Function to answer an incoming call
  const answerCall = () => {
    setCallAccepted(true)

    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    })

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: caller })
    })

    peer.on('stream', (currentStream) => {
      if (opponentVideo.current) {
        opponentVideo.current.srcObject = currentStream
      }
    })

    peer.on('error', err => console.error('Peer error:', err))

    peer.signal(callerSignal)
    connectionRef.current = peer
  }

  // Function to end the call
  const endCall = () => {
    setCallEnded(true)
    if (connectionRef.current) {
      connectionRef.current.destroy()
    }
    if (stream) {
      stream.getTracks().forEach(track => track.stop())
    }
    setReceivingCall(false)
    setCaller('')
    setCallerSignal(null)
    setCallAccepted(false)
  }

  // Clean up when the component unmounts
  useEffect(() => {
    return () => {
      if (connectionRef.current) {
        connectionRef.current.destroy();
      }
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    }
  }, [stream])

  return {
    me,
    stream,
    receivingCall,
    caller,
    callerSignal,
    callAccepted,
    callEnded,
    name,
    setName,
    listUsers,
    opponentVideo,
    callUser,
    answerCall,
    endCall,
  }
}
