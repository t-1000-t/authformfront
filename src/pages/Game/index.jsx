import React from 'react'
import { Center } from '@chakra-ui/react'
import GamePage from './components/GamePage'
import Page from '../../components/Page'
import Container from '../../layouts/Container'

const GameDefault = () => {
  return (
    <Center>
      <Container>
        <Page>
          <GamePage />
        </Page>
      </Container>
    </Center>
  )
}

export default GameDefault
