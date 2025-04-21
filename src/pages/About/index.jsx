import React from 'react'
import { Box } from '@chakra-ui/react'
import Page from '../../components/Page'

import AboutMe from './components/AboutMe'

const AboutDefault = () => {
  return (
    <Page>
      <Box bg="white">
        <AboutMe />
      </Box>
    </Page>
  )
}

export default AboutDefault
