import React from 'react'
import { Flex } from '@chakra-ui/react'
import FooAgent from './components/FooAgent'
import PageChat from './components/PageChat'

const DefaultFooAgent = () => {
  return (
    <Flex>
      <PageChat />
      <FooAgent />
    </Flex>
  )
}

export default DefaultFooAgent
