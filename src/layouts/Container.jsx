import React from 'react'
import { Box } from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
const Container = ({ children, ...styles }) => {
  return (
    <Box maxW="1440px" mx="auto" px={2} {...styles}>
      {children}
    </Box>
  )
}

export default Container
