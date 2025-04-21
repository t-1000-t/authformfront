import React from 'react'
import { Box } from '@chakra-ui/react'
import Page from '../../components/Page'
import Notes from './components/Notes'

const NotesDefault = () => {
  return (
    <Page>
      <Box bg="white">
        <Notes />
      </Box>
    </Page>
  )
}

export default NotesDefault
