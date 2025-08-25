import React from 'react'
import { Box } from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
const Container = ({ children, ...styles }) => {
  return (
    <Box position="relative" px={{ base: 3, md: 6 }} py={{ base: 3, md: 6 }} {...styles}>
      {children}
    </Box>
  )
}

export default Container
