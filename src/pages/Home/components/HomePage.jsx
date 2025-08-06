import React from 'react'
import { Box, Button, Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import Container from '../../../layouts/Container'
import useAuthStore from '../../../store/useAuthStore'
import { notifyUser } from '../../../utils/services'

const MotionButton = motion(Button)

const HomePage = () => {
  const accessToken = useAuthStore((state) => state.accessToken)
  const isMobile = useBreakpointValue({ base: true, md: false })

  notifyUser('accessToken', accessToken)

  return (
    <Container
      position="relative"
      mb={{ base: 36, md: 0 }}
      minH="calc(100vh - 160px)"
      display="flex"
      alignItems="center"
    >
      <Stack direction={{ base: 'column-reverse', md: 'row' }} spacing={{ base: 8, md: 16 }} w="full" align="center">
        <Flex flex={1} p={{ base: 4, md: 8 }} pl={0} direction="column" justify="center" mt={16}>
          <Box mb={8}>
            <Heading
              as="h1"
              fontSize={{ base: '3xl', sm: '4x1', md: '5xl', lg: '6xl' }}
              color="teal.800"
              lineHeight="1.2"
              mb={4}
            >
              Testing the AUTH form
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'xl' }} color="teal.600">
              Just fill out the request form, please
            </Text>
          </Box>
          <MotionButton
            as={Link}
            to="/signup"
            colorScheme="teal"
            size={isMobile ? 'md' : 'lg'}
            width={{ base: 'full', sm: 'auto' }}
            maxWidth="380px"
            height={{ base: '48px', md: '64px' }}
            fontSize={{ base: 'xl', md: '2x1' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            px={8}
          >
            Make Now
          </MotionButton>
        </Flex>
        <Flex flex={1} justify="center" align="center" position="relative" overflow="hidden">
          <Image
            alt="Login image"
            objectFit="cover"
            src="/images/typing_on_board_1919x1679.jpg"
            fullbackSrc="/images/typing_on_board_600x525.jpg"
            width="100%"
            height="100%"
            maxH="500px"
            borderRadius="lg"
            loading="eager" // Prioritize loading
          />
        </Flex>
      </Stack>
    </Container>
  )
}

export default HomePage
