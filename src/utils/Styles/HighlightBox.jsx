import React from 'react'
import { Box } from '@chakra-ui/react'

const HighlightBox = ({ children }) => (
  <Box
    bg="accent.500"
    p={0.5}
    borderRadius="md"
    maxW="380px"
    display="flex"
    justifyContent="center"
    color="white"
    boxShadow="md"
  >
    {children}
  </Box>
)

export default HighlightBox
