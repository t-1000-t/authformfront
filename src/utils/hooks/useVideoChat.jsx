import { useState, useRef, useEffect, useCallback } from 'react'
import Peer from 'simple-peer'
import { logError, notifyUser } from '../services'

const useVideoChat = (socket, user, caller, callerSignal) => {
  const [stream, setStream] = useState(null)
  const [callAccepted, setCallAccepted] = useState(false)
  const [callEnded, setCallEnded] = useState(false)
  const myVideo = useRef()
  const opponentVideo = useRef()
  const peer1Ref = useRef()
  const peer2Ref = useRef()

  const callUser = async (id) => {
    try {
      const userStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      })

      if (!userStream) {
        notifyUser('Unable to access your camera and microphone')
        return null
      }

      setStream(userStream)
      setCallEnded(false)
      if (myVideo.current) {
        myVideo.current.srcObject = userStream
      }

      const peer = new Peer({
        initiator: true,
        trickle: false,
        stream: userStream,
      })

      peer.on('signal', (data) => {
        socket.emit('callUser', {
          userToCall: id,
          signalData: data,
          from: user,
        })
      })

      peer.on('stream', (opponentStream) => {
        opponentVideo.current.srcObject = opponentStream
      })

      socket.on('callAccepted', (signal) => {
        setCallAccepted(true)
        peer.signal(signal)
      })

      peer1Ref.current = peer
    } catch (error) {
      logError(error)
    }

    return null
  }

  const answerCall = async () => {
    const userStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    })

    if (!userStream) {
      notifyUser('Unable to access your camera and microphone')
    }

    setStream(userStream)
    setCallAccepted(true)
    setCallEnded(false)
    myVideo.current.srcObject = userStream

    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: userStream,
    })

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: caller.userId })
    })
    peer.on('stream', (opponentStream) => {
      opponentVideo.current.srcObject = opponentStream
    })

    peer.signal(callerSignal)
    peer2Ref.current = peer

    return null
  }

  const endVideo = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop())
    }

    setStream(null)
    setCallAccepted(false)
    socket.off('callAccepted')
  }, [stream, socket])

  useEffect(() => {
    return () => {
      endVideo()
    }
  }, [endVideo])

  return {
    stream,
    callAccepted,
    callEnded,
    myVideo,
    opponentVideo,
    callUser,
    answerCall,
    endVideo,
  }
}

export default useVideoChat
