import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Page from '../../components/Page'

import CallMe from './components/CallMe'

function CallDefault() {
  return (
    <Page>
      <Container maxW="2xl">
        <Box bg="white" padding="4">
          <CallMe />
        </Box>
      </Container>
    </Page>
  )
}

export default CallDefault
