import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

const Header = () => {
  return (
    <Box mb="20px">
      <Heading as="h1" fontSize="24px" fontWeight="bold" mb="10px">
        Full Stack Developer
      </Heading>
      <Heading as="h2" fontSize="22px" fontWeight="bold">
        Branetskyi Vladlen
      </Heading>
    </Box>
  )
}

export default Header
