import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Heading } from '@chakra-ui/react'
import { BellIcon } from '@chakra-ui/icons'

function CallControls({ receivingCall, callAccepted, name, answerCall }) {
  return receivingCall && !callAccepted ? (
    <Box textAlign="center">
      <Heading size="md" mb={4}>
        {name} is calling...
      </Heading>
      <Button colorScheme="green" leftIcon={<BellIcon />} onClick={answerCall}>
        Answer
      </Button>
    </Box>
  ) : null
}

CallControls.propTypes = {
  receivingCall: PropTypes.bool.isRequired,
  callAccepted: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  answerCall: PropTypes.func.isRequired,
}

export default CallControls
