import { useState, useEffect, useRef, useCallback } from 'react'
import Peer from 'simple-peer'
import { useSocket } from '../../context/socket-context'
import getList from '../../services/getListUsers'

function useCall() {
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
  const myVideo = useRef(null)
  const opponentVideo = useRef()
  const connectionRef = useRef()

  const fetchUserList = useCallback(async () => {
    const res = await getList()
    setListUsers(res.list || [])
  }, [])

  useEffect(() => {
    fetchUserList().then()
  }, [fetchUserList])

  useEffect(() => {
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
    console.log('socketID', socketId)
  }, [socketId])

  // UseEffect to update video element
  useEffect(() => {
    if (myVideo.current && stream) {
      myVideo.current.srcObject = stream
      console.log('Assigned stream to myVideo', stream)
    }
  }, [stream]) // This will run when `stream` updates

  const callUser = (id) => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        if (!currentStream) {
          return alert('Unable to access your camera and microphone')
        }
        setStream(currentStream)
        setCallAccepted(true)

        // Assign current stream to myVideo directly here
        if (myVideo.current) {
          myVideo.current.srcObject = currentStream
        }

        const peer = new Peer({
          initiator: true,
          trickle: false,
          stream: currentStream,
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

        peer.on('error', (err) => console.error('Peer error:', err))

        socket.on('callAccepted', (signal) => {
          setCallAccepted(true)
          peer.signal(signal)
        })

        connectionRef.current = peer
      })
      .catch((error) => console.error('Error accessing media devices.', error))
  }

  const answerCall = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        if (!currentStream) {
          return alert('Unable to access your camera and microphone')
        }
        setStream(currentStream)
        setCallAccepted(true)

        if (myVideo.current) {
          myVideo.current.srcObject = currentStream
        }

        const peer = new Peer({
          initiator: false,
          trickle: false,
          stream: currentStream,
        })

        peer.on('signal', (data) => {
          socket.emit('answerCall', { signal: data, to: caller })
        })

        peer.on('stream', (currentStream) => {
          if (opponentVideo.current) {
            opponentVideo.current.srcObject = currentStream
          }
        })

        peer.on('error', (err) => console.error('Peer error:', err))

        peer.signal(callerSignal)
        connectionRef.current = peer
      })
      .catch((error) => console.error('Error accessing media devices.', error))
  }

  const endCall = () => {
    setCallEnded(true)
    if (stream) {
      stream.getTracks().forEach((track) => track.stop())
    }
    setReceivingCall(false)
    setCaller('')
    setCallerSignal(null)
    setCallAccepted(false)
    socket.off('callAccepted')
  }

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
    myVideo,
    opponentVideo,
    callUser,
    answerCall,
    endCall,
  }
}

export default useCall
