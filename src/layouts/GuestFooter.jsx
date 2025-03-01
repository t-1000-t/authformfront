import React from 'react'
import { Link } from 'react-router-dom'
// import Lottie from 'react-lottie-player'
import { Container, Stack, Text } from '@chakra-ui/react'
import useAuthStore from '../store/useAuthStore'

export default function GuestFooter() {
  // const lottieRef = useRef()
  const accessToken = useAuthStore((state) => state.accessToken)

  return (
    <Container as={Stack} py={4} bg="teal.500" maxW="1440px" rounded={{ md: '2xl' }}>
      <Stack direction={{ base: 'column', sm: 'row' }} justify="center" align="center" spacing={8} color="black">
        <Text _hover={{ textDecoration: 'underline' }}>
          <Link to="/">Home</Link>
        </Text>
        <Text _hover={{ textDecoration: 'underline' }}>
          <Link to="/notes">Notes</Link>
        </Text>
        <Text _hover={{ textDecoration: 'underline' }}>
          <Link to="/contact">Contact</Link>
        </Text>
        <Text _hover={{ textDecoration: 'underline' }}>
          <Link to="/check">Check</Link>
        </Text>
        {!!accessToken && (
          <Text _hover={{ textDecoration: 'underline' }}>
            <Link to="/call">Call</Link>
          </Text>
        )}
        <Text _hover={{ textDecoration: 'underline' }}>
          <Link to="/about">About</Link>
        </Text>
      </Stack>
    </Container>
  )
}
