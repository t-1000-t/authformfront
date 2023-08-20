import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Alert,
  AlertIcon,
  Box,
  CloseButton,
  FormControl,
  // FormLabel,
  Input,
  Stack,
  Button,
  // Text,
  InputLeftElement,
  chakra,
  InputGroup,
  InputRightElement,
  FormHelperText,
} from '@chakra-ui/react'

import useStore from 'store/useAuthStore'

import { FaUserAlt, FaLock } from 'react-icons/fa'
const MotionButton = motion(Button)

const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)

export default function LoginForm() {
  const login = useStore((state) => state.login)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const [showPassword, setShowPassword] = useState(false)

  const handleShowClick = () => setShowPassword(!showPassword)

  async function handleLogin(e) {
    e.preventDefault()
    setIsLoading(true)
    setError(false)

    try {
      await login(username, password.trim())
    } catch (err) {
      const msg = err.response?.data?.message || err.message
      setError(msg)
      setIsLoading(false)
    }
  }

  return (
    <Box as={'form'} rounded={'lg'} shadow={'2xl'} p={8} w={{ base: 'full', md: 'md' }} onSubmit={handleLogin}>
      <Stack spacing={4}>
        {/*<FormControl id="username">*/}
        {/*  <FormLabel color="#204E78">Username or Email</FormLabel>*/}
        {/*  <Input color="gray.700" value={username} onChange={(e) => setUsername(e.target.value)} required />*/}
        {/*</FormControl>*/}
        {/*<FormControl id="password">*/}
        {/*  <FormLabel color="#204E78">Password</FormLabel>*/}
        {/*  <Input*/}
        {/*    value={password}*/}
        {/*    color="gray.700"*/}
        {/*    onChange={(e) => setPassword(e.target.value)}*/}
        {/*    type="password"*/}
        {/*    required*/}
        {/*  />*/}
        {/*</FormControl>*/}
        <Stack spacing={10}>
          {/*<Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'end'}>*/}
          {/*  <Link to="/reset-password">*/}
          {/*    <Text color="#204E78" fontSize="sm">*/}
          {/*      Forgot password?*/}
          {/*    </Text>*/}
          {/*  </Link>*/}
          {/*</Stack>*/}
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
