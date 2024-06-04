import React, { useEffect, useRef, useState } from 'react'
import Peer from 'simple-peer'
import { useSocket } from '../../../context/socket-context'
import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Input,
  Text,
  useClipboard,
  VStack,
  Heading,
  useToast,
} from '@chakra-ui/react'
import { PhoneIcon, CopyIcon, BellIcon, CloseIcon } from '@chakra-ui/icons'
import process from 'process'

window.process = process

export default function CallMe() {
  const socket = useSocket()

  const [me, setMe] = useState('')
  const [stream, setStream] = useState(null)
  const [receivingCall, setReceivingCall] = useState(false)
  const [caller, setCaller] = useState('')
  const [callerSignal, setCallerSignal] = useState(null)
  const [callAccepted, setCallAccepted] = useState(false)
  const [idToCall, setIdToCall] = useState('')
  const [callEnded, setCallEnded] = useState(false)
  const [name] = useState('VLAD')
  const myVideo = useRef(null)
  const opponentVideo = useRef(null)
  const connectionRef = useRef(null)

  const { onCopy } = useClipboard(me)
  const toast = useToast()

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream)
        if (myVideo.current) {
          myVideo.current.srcObject = currentStream
        }
      })
      .catch(error => console.error('Error accessing media devices.', error))

    socket.on('me', (id) => {
      setMe(id)
    })

    socket.on('callUser', (data) => {
      setReceivingCall(true)
      setCaller(data.from)
      setCallerSignal(data.signal)
    })

    return () => {
      socket.off('me')
      socket.off('callUser')
    }
  }, [socket])

  useEffect(() => {
    if (stream && myVideo.current) {
      myVideo.current.srcObject = stream
    }
    setMe(socket.id)
  }, [stream, socket.id, socket])

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
        connectionRef.current.destroy();
      }
      if (stream) {
        stream.getTracks().forEach(track => track.stop())
      }
    }
  }, [stream])

  return (
    <Box bg="#282c34" color="#fff" minH="100vh" py={10}>
      <Heading textAlign="center" mb={10}>
        Zoomish
      </Heading>
      <Container centerContent>
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
        <VStack spacing={4} mb={8}>
          <Button
            leftIcon={<CopyIcon />}
            colorScheme="blue"
            onClick={() => {
              onCopy()
              toast({
                title: 'Copied',
                description: 'Your ID has been copied.',
                status: 'success',
                duration: 2000,
                isClosable: true,
              })
            }}
          >
            Copy ID
          </Button>
          <Text>{me}</Text>
          <Input
            width="20rem"
            variant="filled"
            placeholder="ID to call"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />
          {callAccepted && !callEnded ? (
            <Button
              colorScheme="red"
              leftIcon={<CloseIcon />}
              onClick={endCall}
            >
              End Call
            </Button>
          ) : (
            <IconButton
              colorScheme="blue"
              aria-label="call"
              icon={<PhoneIcon />}
              onClick={() => callUser(idToCall)}
            />
          )}
        </VStack>
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
      </Container>
    </Box>
  )
}
