import React from 'react'
import { Box } from '@chakra-ui/react'
import MultiPlatformDownloader from './components/MultiPlatformDownloader'
import Page from '../../components/Page'

const DefaultDownloadVideo = () => {
  return (
    <Page>
      <Box>Download video</Box>
      <MultiPlatformDownloader />
    </Page>
  )
}

export default DefaultDownloadVideo
