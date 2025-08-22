import React from 'react'
import { Box } from '@chakra-ui/react'
import Container from '../../layouts/Container'
import Page from '../../components/Page'
import CallMe from './components/CallMe'

const CallDefault = () => {
  return (
    <Page>
      <Container>
        <Box bg="white" padding="4">
          <CallMe />
        </Box>
      </Container>
    </Page>
  )
}

export default CallDefault
