import { Box, Flex } from '@chakra-ui/react'
import Page from 'components/Page'

import CallMe from './components/CallMe'

export default function CallDefault() {
  return (
    <Page>
      <Flex>
        <Box bg="white">
          <CallMe />
        </Box>
      </Flex>
    </Page>
  )
}
