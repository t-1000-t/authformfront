import React from 'react'
import { Heading, Text, Link, Stack } from '@chakra-ui/react'
import Container from '../../../layouts/Container'

const FooAgent = () => (
  <Container>
    <Stack gap={4}>
      <Heading size="lg">Google Search Bot</Heading>
      <Text>
        Talk to
        <Link href="https://t.me/goofoo_dev_bot" isExternal>
          @goofoo_dev_bot
        </Link>
      </Text>
      <Text fontSize="sm" opacity={0.8}>
        The bot runs on our server. Your queries are handled privately on the backend.
      </Text>
    </Stack>
  </Container>
)

export default FooAgent
