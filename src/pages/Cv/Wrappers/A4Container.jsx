import React from 'react'
import { Container } from '@chakra-ui/react'

const A4Container = ({ children }) => {
  return (
    <Container maxW="794px" minH="1123px" p={0} bg="white">
      {children}
    </Container>
  )
}

export default A4Container
