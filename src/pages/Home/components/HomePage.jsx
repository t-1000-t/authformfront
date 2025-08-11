import React from 'react'
import { Box, Button, Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import Container from '../../../layouts/Container'
import useAuthStore from '../../../store/useAuthStore'
import { notifyUser } from '../../../utils/services'
import HighlightBox from '../../../utils/StylesBoxes/HighlightBox'

const MotionButton = motion(Button)

const HomePage = () => {
  const accessToken = useAuthStore((state) => state.accessToken)
  const isMobile = useBreakpointValue({ base: true, md: false })

  notifyUser('accessToken', accessToken)

  return (
    <Container
      mb={{ base: 36, md: 0 }}
      minH="calc(100vh - 200px)" // Adjust based on your header/footer height
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack direction={{ base: 'column-reverse', md: 'row' }} spacing={{ base: 8, md: 16 }} w="full" align="center">
        <Flex flex={1} p={{ base: 4, md: 8 }} pl={0} direction="column" justify="center" mt={16}>
          <Box mb={8}>
            <Heading
              as="h1"
              fontSize={{ base: '3xl', sm: '4x1', md: '5xl', lg: '6xl' }}
              color="brand.800"
              lineHeight="1.2"
              mb={4}
            >
              Testing the AUTH form
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'xl' }} color="brand.700">
              Just fill out the request form, please
            </Text>
          </Box>
          <HighlightBox as={MotionButton}>
            <MotionButton
              as={Link}
              to="/signup"
              bg="brand.500"
              color="white"
              _hover={{ bg: 'brand.600' }}
              _active={{ bg: 'brand.700' }}
              borderRadius="lg"
              size={isMobile ? 'md' : 'lg'}
              width={{ base: 'full' }}
              height={{ base: '48px', md: '64px' }}
              fontSize={{ base: 'xl', md: '2xl' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Make Now
            </MotionButton>
          </HighlightBox>
        </Flex>
        <Flex flex={1} justify="center" align="center" position="relative" overflow="hidden">
          <Image
            bg="accent.500"
            p={0.5}
            borderRadius="lg"
            alt="Login image"
            objectFit="cover"
            src="/images/typing_on_board_1919x1679.jpg"
            fullbackSrc="/images/typing_on_board_600x525.jpg"
            width="100%"
            height="100%"
            maxH="450px"
            loading="eager" // Prioritize loading
          />
        </Flex>
      </Stack>
    </Container>
  )
}

export default HomePage
