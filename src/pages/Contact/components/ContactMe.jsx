import React from 'react'
import { Container, Heading, Text, useBreakpointValue } from '@chakra-ui/react'

const ContactMe = () => {
  return (
    <Container maxW="5xl" py={12} px={{ base: 6, md: 12 }}>
      <Heading fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }} textAlign="center">
        <Text
          as="span"
          position="relative"
          _after={{
            content: "''",
            width: 'full',
            height: useBreakpointValue({ base: '20%', md: '30%' }),
            position: 'absolute',
            bottom: 1,
            left: 0,
            bg: 'blue.400',
            zIndex: -1,
          }}
        >
          Contact Me
        </Text>
      </Heading>
      <Text textAlign="center" color="gray.500" fontSize="xl" p={2} fontWeight="semibold">
        If you have any queries feel free to contact me.
      </Text>
    </Container>
  )
}

export default ContactMe
