import React, { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import Container from '../../../layouts/Container'
import useAuthStore from '../../../store/useAuthStore'

const FooAgent = () => {
  const { callFooAgent } = useAuthStore()

  const id = '1234567890'

  useEffect(() => {
    callFooAgent(id).then()
  }, [])
  return (
    <Container>
      <Box>FOO</Box>
    </Container>
  )
}

export default FooAgent
