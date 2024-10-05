import Page from '../../components/Page'
import { Box } from '@chakra-ui/react'
import { Check } from './components/Check'

export default function CheckDefault() {
  return (
    <Page>
      <Box bg="white">
        <Check />
      </Box>
    </Page>
  )
}
