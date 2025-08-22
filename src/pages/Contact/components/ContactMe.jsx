import React from 'react'
import { Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import Container from '../../../layouts/Container'

const ContactMe = () => {
  return (
    <Container>
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
    </Container>
  )
}

export default ContactMe
