import React from 'react'
import { Box, Container, Heading, Text } from '@chakra-ui/react'

const AboutMe = () => {
  return (
    <Container maxW="6xl" py={24} px={{ base: 6, md: 12 }}>
      <Box position="relative" maxW="850px" mx="auto" mb={{ base: 4, md: 16 }}>
        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }} textAlign="center" color="#204E78">
          About Me
        </Heading>
        <Text color="gray.800" fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }} p={2} textAlign="center">
          Hello. My name is GOO FOO!
        </Text>
      </Box>
    </Container>
  )
}

export default AboutMe
