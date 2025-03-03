import React, { useState } from 'react'
import { Alert, AlertIcon, Box, Button, CloseButton, Flex, Image, Stack, Text, Highlight } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useAuthStore from '../store/useAuthStore'
import Container from './Container'
import { useSocket } from '../context/socket-context'

const MotionButton = motion(Button)

// eslint-disable-next-line react/prop-types
export default function GuestNavLogout({ name, idUserName }) {
  const logout = useAuthStore((state) => state.logout)
  const { user } = useSocket()

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  async function handleLogOut() {
    // e.preventDefault()
    setIsLoading(true)
    setError(false)
    const { id } = user.userData

    try {
      await logout(id)
    } catch (err) {
      const msg = err.response?.data?.message || err.message
      setError(msg)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <Flex mx="auto" justify="space-between" py={2} align="center">
        <Link to="/">
          <Flex align="center">
            <Box h={20}>
              <Image src="/images/motherland.svg" h={{ base: 12, md: 20 }} mt={{ base: 4, md: 0 }} />
            </Box>
          </Flex>
        </Link>
        <Stack direction="row" spacing={6}>
          {idUserName && (
            <>
              <Image
                src={`https://i.pravatar.cc/50?u=${idUserName}`}
                style={{ borderRadius: '50%', wight: 50, height: 50 }}
              />
              <Box p="4">
                <Text as="ins" paddingRight="2">
                  {name},
                </Text>
                <Highlight query={['Welcome', 'page']} styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}>
                  Welcome to your page!
                </Highlight>
              </Box>
            </>
          )}
          <MotionButton
            as={Link}
            to="/"
            colorScheme="gray"
            color="teal.400"
            px={{ base: 4, md: 8 }}
            py={{ base: 2, md: 6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            fontSize={{ base: 'md', md: 'xl' }}
            isLoading={isLoading}
            onClick={() => handleLogOut()}
          >
            Logout
          </MotionButton>
        </Stack>
        {error && (
          <Alert status="error" mt={4} color="teal.700" fontWeight="semibold">
            <AlertIcon />
            <CloseButton position="absolute" right="8px" top="8px" onClick={() => setError(false)} />
            {error}
          </Alert>
        )}
      </Flex>
    </Container>
  )
}
