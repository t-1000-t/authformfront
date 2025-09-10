import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Lottie from 'react-lottie-player'

import sendLetter2 from '../../../animations/sendLetter2.json'
import sendUnSuccess from '../../../animations/sendUnsuccess.json'
import BoxIcon from './BoxIcon'

// eslint-disable-next-line react/prop-types
const AlertSignUp = ({ status }) => {
  const result = status ? sendLetter2 : sendUnSuccess

  return (
    <Box
      bg="green.100"
      w="10xl"
      py={8}
      px={4}
      rounded="md"
      mt={4} // Adjusted the margin from mt={32} to mt={4}
      shadow="lg"
      position="fixed" // Changed position to "fixed"
      top={0} // Positioned at the top of the viewport
      right={5} // Positioned at the right of the viewport
    >
      <Flex>
        <BoxIcon variant={status ? 'success' : 'error'}>
          <Lottie animationData={result} loop play />
        </BoxIcon>
      </Flex>
    </Box>
  )
}

export default AlertSignUp
