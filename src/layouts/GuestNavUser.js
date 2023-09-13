import useStore from 'store/useAuthStore'
import { useState } from 'react'
import { Alert, AlertIcon, Box, Button, CloseButton, Flex, Image, Stack } from '@chakra-ui/react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const MotionButton = motion(Button)

export default function UserForm() {
  const logout = useStore((state) => state.logout)

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  async function handleLogOut() {
    // e.preventDefault()
    setIsLoading(true)
    setError(false)

    try {
      await logout()
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
              <Image src="https://svgshare.com/i/Gts.svg" h={{ base: 12, md: 20 }} mt={{ base: 4, md: 0 }} />
            </Box>
          </Flex>
        </Link>
        <Stack direction="row" spacing={6}>
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
            onClick={handleLogOut}
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
