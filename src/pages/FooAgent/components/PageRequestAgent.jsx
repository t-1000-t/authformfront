import React from 'react'
import { Flex, Box, Stack } from '@chakra-ui/react'
import Container from '../../../layouts/Container'

const PageRequestAgent = () => {
  return (
    <Container maxWidth="md">
      <Stack gap={6}>
        <Flex>
          <Box>Agent</Box>
        </Flex>
      </Stack>
    </Container>
  )
}

export default PageRequestAgent
