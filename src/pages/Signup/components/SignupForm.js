import { useState } from 'react'
// import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'
import {
  Alert,
  AlertIcon,
  Avatar,
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react'
import useAuthStore from 'store/useAuthStore'

import { IoIosArrowRoundBack } from 'react-icons/io'
import { FaUserAlt, FaLock, FaUserPlus } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
const MotionButton = motion(Button)

function SignupForm({ avatar }) {
  const CFaUserAlt = chakra(FaUserAlt)
  const CFaUserPlus = chakra(FaUserPlus)
  const CFaLock = chakra(FaLock)
  const CMdOutlineEmail = chakra(MdEmail)

  const signup = useAuthStore((state) => state.signup)

  const [username, setUserName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState()
  const [password, setPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const [showPassword, setShowPassword] = useState(false)

  const handleShowClick = () => setShowPassword(!showPassword)

  async function handleSignup(e) {
    e.preventDefault()
    setError(false)

    if (password.trim().length < 7) {
      return setError('password should have a minimum of seven characters.')
    }

    setIsLoading(true)

    try {
      await signup({
        username,
        surname,
        email,
        password: password.trim(),
      })
      setIsLoading(false)
    } catch (err) {
      const msg = err?.response?.data?.error || err.message

      setError(msg)

      setIsLoading(false)
    }
  }

  return (
    <Box w={{ base: 'full', md: 'sm' }} mx="auto">
      <Flex color="gray.600" align="center" as="button" mx="auto">
        <IoIosArrowRoundBack />
        <Link to="/" fontSize="xs">
          Back
        </Link>
      </Flex>

      <Stack shadow="2xl" rounded="lg" spacing={4} py={6} px={4} mt={2} as={'form'} onSubmit={handleSignup}>
        <Flex align="center" justify="center" direction="column" px={2}>
          <Avatar h="90px" w="90px" src={avatar} />
          <Text fontWeight="bold">{username}</Text>
        </Flex>
        <FormControl id="firstName">
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<CFaUserAlt color="gray.300" />} />
            <Input
              color="gray.700"
              value={username}
              placeholder="First name"
              onChange={(e) => setUserName(e.target.value)}
              onBlur={(e) => setUserName(e.target.value.trim())}
              required
            />
          </InputGroup>
        </FormControl>
        <FormControl id="lastName">
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<CFaUserPlus color="gray.300" />} />
            <Input
              color="gray.700"
              value={surname}
              placeholder="Last name"
              onChange={(e) => setSurname(e.target.value)}
              onBlur={(e) => setSurname(e.target.value.trim())}
              required
            />
          </InputGroup>
        </FormControl>
        <FormControl id="email">
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<CMdOutlineEmail color="gray.300" />} />
            <Input
              value={email}
              type="email"
              placeholder="email address"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={(e) => setEmail(e.target.value.trim())}
              required
            />
          </InputGroup>
        </FormControl>
        <FormControl id="password">
          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300" children={<CFaLock color="gray.300" />} />
            <Input
              value={password}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              onBlur={(e) => setPassword(e.target.value.trim())}
              required
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormHelperText textAlign="right">
            <Link>forgot password?</Link>
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
            Create Account
          </MotionButton>
          {error && (
            <Alert status="error" mt={4} color="orange.700" fontWeight="semibold">
              <AlertIcon />
              <CloseButton position="absolute" right="8px" top="8px" onClick={() => setError(false)} />
              {error}
            </Alert>
          )}
        </Stack>
      </Stack>
    </Box>
  )
}

export default SignupForm
