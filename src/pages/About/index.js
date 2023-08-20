import { Box } from '@chakra-ui/react'
import Page from 'components/Page'

import AboutMe from './components/AboutMe'

export default function Home() {
  return (
    <Page>
      <Box bg="white">
        <AboutMe />
      </Box>
    </Page>
  )
}
