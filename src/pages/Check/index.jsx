import React from 'react'
import { Box } from '@chakra-ui/react'
import Page from '../../components/Page'
import Check from './components/Check'

export default function CheckDefault() {
  return (
    <Page>
      <Box bg="white">
        <Check />
      </Box>
    </Page>
  )
}
