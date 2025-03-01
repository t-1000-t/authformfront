import React from 'react'
import { Box, Container, Flex, Heading, Spacer } from '@chakra-ui/react'
import VideoBox from './VideoBox'
import CallControls from './CallControls'
import useCall from '../../../utils/hooks/useCall'
import ListUsers from './ListUsers'

function CallMe() {
  const {
    stream,
    callAccepted,
    callEnded,
    callerSignal,
    myVideo,
    opponentVideo,
    callUser,
    answerCall,
    endCall,
    listUsers,
  } = useCall()

  return (
    <Box bg="#282c34" color="#fff" minH="100vh" py={10}>
      <Heading textAlign="center" mb={10}>
        Zoomish
      </Heading>
      <Container centerContent maxW="container.md">
        <Flex direction="row" w="full" wrap="wrap" justifyContent="center">
          <Flex mb={8} position="relative">
            {stream && (
              <>
                ME
                <VideoBox streamRef={myVideo} isOpponent={false} />
              </>
            )}
            {callAccepted && !callEnded && (
              <>
                OPP
                <VideoBox streamRef={opponentVideo} isOpponent />
              </>
            )}
          </Flex>
          <CallControls
            receivingCall={!!callerSignal}
            callAccepted={callAccepted}
            callEnded={callEnded}
            answerCall={answerCall}
            endCall={endCall}
          />
          <Spacer />
          <ListUsers
            list={listUsers}
            callAccepted={callAccepted}
            callEnded={callEnded}
            callUser={callUser}
            endCall={endCall}
          />
        </Flex>
      </Container>
    </Box>
  )
}

export default CallMe
