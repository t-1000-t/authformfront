import React, { useCallback, useEffect, useRef, useState } from 'react'
import Peer from 'simple-peer'
import { useSocket } from '../../../context/socket-context'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  // useToast,
} from '@chakra-ui/react'
import ListUsers from './ListUsers'
import { BellIcon } from '@chakra-ui/icons'
import process from 'process'
import getList from '../../../services/getListUsers'

window.process = process

export default function CallMe() {
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
  const opponentVideo = useRef(null)
  const connectionRef = useRef(null)

  // const toast = useToast()

  const fetchUserList = useCallback(async () => {
    const res = await getList()
    setListUsers(res.list || [])
  }, [])

  useEffect(() => {
    fetchUserList().then()
  }, [fetchUserList])

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream)
        if (myVideo.current) {
          myVideo.current.srcObject = currentStream
        }
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
    if (stream && myVideo.current) {
      myVideo.current.srcObject = stream
    }
    setMe(socketId)
  }, [stream, socketId])

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

  useEffect(() => {
    return () => {
      if (connectionRef.current) {
        connectionRef.current.destroy()
      }
      if (stream) {
        stream.getTracks().forEach(track => track.stop())
      }
    }
  }, [stream])

  console.log('listUsers', listUsers)
  return (
    <Box bg="#282c34" color="#fff" minH="100vh" py={10}>
      <Heading textAlign="center" mb={10}>
        Zoomish
      </Heading>
      <Container centerContent>
        <Flex>
          <ListUsers
          list={listUsers}
          callAccepted={callAccepted}
          callEnded={callEnded}
          callUser={callUser}
          endCall={endCall}
          setName={setName}
          />
        <Flex mb={8} justify="center">
          {callAccepted && !callEnded && (
            <Box
              h="136px"
              w="136px"
              rounded="full"
              position="relative"
              flexShrink={0}
              overflow="hidden"
              bg="black"
              mx={2}
            >
              <video
                playsInline
                ref={opponentVideo}
                autoPlay
                style={{
                  maxWidth: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  transform: 'translate3d(0, 0, 0)',
                  width: '136px',
                  height: '136px',
                }}
              />
            </Box>
          )}
          {stream && (
            <Box
              h="136px"
              w="136px"
              rounded="full"
              position="relative"
              flexShrink={0}
              overflow="hidden"
              bg="black"
              mx={2}
            >
              <video
                playsInline
                muted
                ref={myVideo}
                autoPlay
                style={{
                  maxWidth: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  transform: 'translate3d(0, 0, 0)',
                  width: '136px',
                  height: '136px',
                }}
              />
            </Box>
          )}
        </Flex>
        {receivingCall && !callAccepted && (
          <Box textAlign="center">
            <Heading size="md" mb={4}>
              {name} is calling...
            </Heading>
            <Button
              colorScheme="green"
              leftIcon={<BellIcon />}
              onClick={answerCall}
            >
              Answer
            </Button>
          </Box>
        )}
        </Flex>
      </Container>
    </Box>
  )
}
