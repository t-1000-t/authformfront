import React from 'react'
import { Box } from '@chakra-ui/react'
import QRC from './components/QRC'
import Page from '../../components/Page'

const QRCDefault = () => {
  return (
    <Page>
      <Box>
        <QRC />
      </Box>
      <Box>QRC Default</Box>
    </Page>
  )
}

export default QRCDefault
