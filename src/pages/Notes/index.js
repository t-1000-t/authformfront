import Page from '../../components/Page'
import { Box } from '@chakra-ui/react'
import Notes from './components/Notes'

export default function NotesDefault() {
  return (
    <Page>
      <Box bg="white">
        <Notes />
      </Box>
    </Page>
  )
}
