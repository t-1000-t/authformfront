import { Link } from 'react-router-dom'
import { Box, Stack, Heading, Text, Avatar, Switch, FormControl, FormLabel, useColorMode, Flex } from '@chakra-ui/react'

import LoginForm from './components/LoginForm'
import { IoIosArrowRoundBack } from 'react-icons/io'

export default function Login() {
  const { toggleColorMode } = useColorMode()

  return (
    <Box minH="100vh">
      <Stack spacing={8} maxW={'lg'} w={'full'} py={12} px={{ md: 6 }} mx="auto" position="relative">
        <Stack align={'center'}>
          <Avatar bg="teal.500" />
          <Heading color="teal.400">Welcome</Heading>
          <Text textAlign="center">
            New to us?{' '}
            <Link color="teal.500" to="/signup">
              <Box as="span" bg="teal" px={2} py={1} rounded="md">
                Sign Up
              </Box>
            </Link>
          </Text>
        </Stack>
        <LoginForm />
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Enable Dark Mode?
          </FormLabel>
          <Switch id="dark_mode" colorScheme="teal" size="lg" onChange={toggleColorMode} />
          <Flex color="gray.600" align="center" as="button" mx="auto">
            <IoIosArrowRoundBack />
            <Link to="/" fontSize="xs">
              Back
            </Link>
          </Flex>
        </FormControl>
      </Stack>
    </Box>
  )
}
