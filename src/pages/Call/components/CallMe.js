import React from 'react'
import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import VideoBox from './VideoBox'
import CallControls from './CallControls'
import { useCall } from '../../../utils/hooks/useCall'
import ListUsers from './ListUsers'

export default function CallMe() {
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
      <Container centerContent>
        <Flex>
          <ListUsers
            list={listUsers}
            callAccepted={callAccepted}
            callEnded={callEnded}
            callUser={callUser}
            endCall={endCall}
          />
          <Flex mb={8} justify="center" alignItems="center">
            {stream && (
              <>
                ME
                <VideoBox streamRef={myVideo} isOpponent={false} />
              </>
            )}
            {callAccepted && !callEnded && (
              <>
                OPP
                <VideoBox streamRef={opponentVideo} isOpponent={true} />
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
        </Flex>
      </Container>
    </Box>
  )
}
