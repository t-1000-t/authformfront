import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Stack, Heading, Text } from '@chakra-ui/react'

import SignupForm from './components/SignupForm'

export default function SignupDefault() {
  const [accountType] = useState('')
  const [avatar, setAvatar] = useState('')

  const cancelSignup = () => setAvatar('')
  const renderContent = () => {
    return <SignupForm avatar={avatar} onCancel={cancelSignup} isKid={accountType === 'kid'} />
  }

  return (
    <Box minH="100vh">
      <Stack spacing={5} maxW={'3xl'} w={'full'} py={2} px={{ md: 6 }} mx="auto" position="relative">
        <Stack align={'center'} spacing={4}>
          <Heading fontSize={{ base: '2xl', md: '4xl' }} textColor="white" lineHeight={1}>
            Sign up
          </Heading>
        </Stack>
        <Box>{renderContent()}</Box>
        <Text fontSize="x" textColor="gray.700" textAlign="center">
          Already have an account?{' '}
          <Link to="/login">
            <Box as="span" fontWeight="extrabold">
              Login
            </Box>
          </Link>
        </Text>
      </Stack>
    </Box>
  )
}
