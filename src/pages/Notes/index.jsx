import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Page from '../../components/Page'
import Notes from './components/Notes'
import useAuthStore from '../../store/useAuthStore'

const NotesDefault = () => {
  const { accessToken } = useAuthStore()

  return (
    <Page>
      <Box bg="white">
        {accessToken ? (
          <Notes />
        ) : (
          <Container>
            <Box>Notes are available only to logged-in users.</Box>
          </Container>
        )}
      </Box>
    </Page>
  )
}

export default NotesDefault
