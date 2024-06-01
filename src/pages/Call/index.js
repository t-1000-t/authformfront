import {Box} from '@chakra-ui/react'
import Page from 'components/Page'

import CallMe from './components/CallMe'

export default function AboutDefault() {
  return (
    <Page>
      <Box bg="white">
        <CallMe />
      </Box>
    </Page>
  )
}
