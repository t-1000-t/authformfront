import React, { useEffect, useRef, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Peer from 'simple-peer'
// import { useVideoChat } from '../../../utils/hooks/useVideoChat'
import { useSocket } from '../../../context/socket-context'
// import useAuthStore from '../../../store/useAuthStore'
import { Box, Button, IconButton, Text, Textarea } from '@chakra-ui/react'
import { BellIcon, PhoneIcon } from '@chakra-ui/icons'

import process from 'process'

window.process = process

export default function CallMe() {
  const socket = useSocket()

  const [me, setMe] = useState("")
  const [stream, setStream] = useState(null)
  const [receivingCall, setReceivingCall] = useState(false)
  const [caller, setCaller] = useState("")
  const [callerSignal, setCallerSignal] = useState(null)
  const [callAccepted, setCallAccepted] = useState(false)
  const [idToCall, setIdToCall] = useState("")
  const [callEnded, setCallEnded] = useState(false)
  const [name] = useState("VLAD")
  const myVideo = useRef(null)
  const opponentVideo = useRef(null)
  const connectionRef = useRef(null)


  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((currentStream) => {
      setStream(currentStream)
      if (myVideo.current) {
        myVideo.current.srcObject = currentStream
      }
    }).catch(error => console.error('Error accessing media devices.', error))

    socket.on("me", (id) => {
      console.log('me ID', id)
      setMe(id)
    })

    socket.on("callUser", (data) => {
      setReceivingCall(true)
      setCaller(data.from)
      setCallerSignal(data.signal)
    })

    return () => {
      socket.off("me")
      socket.off("callUser")
    }
  }, [socket])

  useEffect(() => {
    console.log('0')
    if (stream && myVideo.current) {
      console.log('1')
      myVideo.current.srcObject = stream
    }
    console.log('2')
    setMe(socket.id)

  }, [stream, socket.id, socket])

  const callUser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      })
    })

    peer.on("stream", (currentStream) => {
      opponentVideo.current.srcObject = currentStream
    })

    peer.on('error', err => console.error('Peer error:', err))

    socket.on("callAccepted", (signal) => {
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

    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: caller })
    })

    peer.on("stream", (currentStream) => {
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
      connectionRef.current.destroy() // This will close the peer connection
    }
    if (stream) {
      stream.getTracks().forEach(track => track.stop()) // This will stop the local stream tracks
    }
    setReceivingCall(false)
    setCaller("")
    setCallerSignal(null)
    setCallAccepted(false)
  };

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

  return (
    <>
      <h1 style={{ textAlign: "center", color: '#fff' }}>Zoomish</h1>
      <div className="container">
        <div className="video-container">
          {callAccepted && (
            <Box
              h="136px"
              w="136px"
              rounded="full"
              position="relative"
              flexShrink={0}
            >
              <Box overflow="hidden" h="100%" w="100%" rounded="full">
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
            >
              <Box overflow="hidden" h="100%" w="100%" rounded="full">
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
            </Box>
          )}
        </div>
        <div className="myId">
          <Box>
            <CopyToClipboard text={me} style={{ marginBottom: "2rem" }}>
              <Button variant="contained" color="primary" startIcon={<BellIcon fontSize="large" />}>
                Copy ID
              </Button>
            </CopyToClipboard>
            <Text>{me}</Text>
          </Box>
          <Textarea
            style={{ width: "20rem" }}
            id="filled-basic"
            label="ID to call"
            variant="filled"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />
          <div className="call-button">
            {callAccepted && !callEnded ? (
              <Button variant="contained" color="secondary" onClick={endCall}>
                End Call
              </Button>
            ) : (
              <IconButton color="primary" aria-label="call" onClick={() => callUser(idToCall)}>
                <PhoneIcon fontSize="large" />
              </IconButton>
            )}
          </div>
        </div>
        <div>
          {receivingCall && !callAccepted ? (
            <div className="caller">
              <h1>{name} is calling...</h1>
              <Button variant="contained" color="primary" onClick={answerCall}>
                Answer
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}
// return (
  //   <Container maxW={'6xl'} py={24} px={{ base: 6, md: 12 }}>
  //     <Box position="relative" maxW="850px" mx="auto" mb={{ base: 4, md: 16 }}>
  //       <Heading fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }} textAlign={'center'} color="#204E78">
  //         PAGE of CALLER
  //       </Heading>
  //       <Text color={'gray.800'} fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }} p={2} textAlign="center">
  //         Hello. CALL ME!
  //       </Text>
  //     </Box>
  //
  //     <Flex
  //       rounded="lg"
  //       px={4}
  //       ml={{ lg: 12, xl: 16 }}
  //       mb={{ base: 8, lg: 0 }}
  //       w="full"
  //       maxW={{ lg: 'lg' }}
  //       direction="column"
  //       position="relative"
  //       textColor="blackAlpha.800"
  //       justify="space-between"
  //       align="start"
  //     >
  //       {video.callAccepted && !video.callEnded ? (
  //         <Box
  //           h="136px"
  //           w="136px"
  //           rounded="full"
  //           position="relative"
  //           flexShrink={0}
  //         >
  //           <Box overflow="hidden" h="100%" w="100%" rounded="full">
  //             <TimerCircle
  //               totalTime={video.totalTime}
  //               stream={video.opponentVideo}
  //               endVideo={video.endVideo}
  //               socket={socket}
  //             />
  //           </Box>
  //         </Box>
  //       ) : (
  //         <Avatar h="136px" w="136px" />
  //       )}
  //
  //       <Stack direction="row" align="center" spacing={8}>
  //         {video.stream?.active ? (
  //           <Box
  //             h="136px"
  //             w="136px"
  //             rounded="full"
  //             position="relative"
  //             flexShrink={0}
  //           >
  //             <Box overflow="hidden" h="100%" w="100%" rounded="full">
  //               <video
  //                 playsInline
  //                 muted
  //                 id="myVideoId"
  //                 ref={video.myVideo}
  //                 autoPlay
  //                 style={{
  //                   maxWidth: '100%',
  //                   objectFit: 'cover',
  //                   borderRadius: '50%',
  //                   transform: 'translate3d(0, 0, 0)',
  //                   width: '136px',
  //                   height: '136px',
  //                 }}
  //               />
  //             </Box>
  //           </Box>
  //         ) : ( <Avatar h="136px" w="136px" /> )}
  //       </Stack>
  //     </Flex>
  //
  //   </Container>
  // )
// }
