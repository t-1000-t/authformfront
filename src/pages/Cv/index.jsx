import React from 'react'
import { Box } from '@chakra-ui/react'
import Cv from './components/Cv'
import GeneratePdf from './Wrappers/GeneratePdf'
import Container from '../../layouts/Container'
import useAuthStore from '../../store/useAuthStore'

const CvDefault = () => {
  const { accessToken } = useAuthStore()
  return (
    <GeneratePdf>
      {accessToken ? (
        <Cv />
      ) : (
        <Container>
          <Box>Form of CV are available only to logged-in users.</Box>
        </Container>
      )}
    </GeneratePdf>
  )
}

export default CvDefault
