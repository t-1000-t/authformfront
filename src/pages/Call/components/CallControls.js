import React from 'react'
import { Box, Button, Heading } from '@chakra-ui/react'
import { BellIcon } from '@chakra-ui/icons'

function CallControls({ receivingCall, callAccepted, name, answerCall }) {
  return (
    <>
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
    </>
  )
}

export default CallControls
