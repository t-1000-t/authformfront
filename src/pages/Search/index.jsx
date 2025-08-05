import React from 'react'
import { Box } from '@chakra-ui/react'
import Page from '../../components/Page'
import Check from './components/Check'

const CheckDefault = () => {
  return (
    <Page>
      <Box bg="white">
        <Check />
      </Box>
    </Page>
  )
}

export default CheckDefault
