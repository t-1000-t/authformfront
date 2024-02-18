import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import {
  Alert,
  AlertIcon,
  Box,
  CloseButton,
  FormControl,
  Input,
  Stack,
  Button,
  InputLeftElement,
  chakra,
  InputGroup,
  InputRightElement,
  FormHelperText,
} from '@chakra-ui/react'

import useAuthStore from 'store/useAuthStore'

import { FaUserAlt, FaLock } from 'react-icons/fa'
const MotionButton = motion(Button)

const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)

export default function LoginForm() {
  const login = useAuthStore((state) => state.login)
  const accessToken = useAuthStore((state) => state.accessToken)
  const setToken = useAuthStore((state) => state.setToken)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const handleShowClick = () => setShowPassword(!showPassword)

  useEffect(() => {
    if (accessToken) {
      setRedirect(true)
    }
  }, [accessToken])

  async function handleLogin(e) {
    e.preventDefault()
    setIsLoading(true)
    setError(false)
    try {
      await login(username, password.trim())
    } catch (err) {
      const msg = err.response?.data?.message || err.message
      if (msg !== false) {
        setToken(null)
      }
      setError(msg)
    } finally {
      setIsLoading(false)
    }
  }

  if (redirect) {
    navigate('/')
  }


  return (
    <Box as={'form'} rounded={'lg'} shadow={'2xl'} p={8} w={{ base: 'full', md: 'md' }} onSubmit={handleLogin}>
      <Stack spacing={4}>
        <Stack spacing={10}>
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<CFaUserAlt color="gray.300" />} />
              <Input type="email" placeholder="email address" onChange={(e) => setUsername(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none" color="gray.300" children={<CFaLock color="gray.300" />} />
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormHelperText textAlign="right">
              <Link to="/reset-password">Forgot password?</Link>
            </FormHelperText>
          </FormControl>
          <Stack spacing={10}>
            <MotionButton
              colorScheme="teal"
              isLoading={isLoading}
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign in
            </MotionButton>
            {error && (
              <Alert status="error" mt={4} color="teal.700" fontWeight="semibold">
                <AlertIcon />
                <CloseButton position="absolute" right="8px" top="8px" onClick={() => setError(false)} />
                {error}
              </Alert>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}
