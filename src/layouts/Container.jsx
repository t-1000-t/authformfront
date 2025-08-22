import React from 'react'
import { Box } from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
const Container = ({ children, ...styles }) => {
  return (
    <Box
      position="relative"
      maxW={{ base: '100%', md: 'container.lg', xl: 'container.xl', '2xl': 'container.2xl' }}
      px={{ base: 3, md: 6 }}
      py={{ base: 4, md: 6 }}
      {...styles}
    >
      {children}
    </Box>
  )
}

export default Container
