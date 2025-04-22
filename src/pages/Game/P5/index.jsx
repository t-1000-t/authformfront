import React from 'react'
import { Center } from '@chakra-ui/react'
import GamePageP5 from './components/GamePageP5'
import Page from '../../../components/Page'
import Container from '../../../layouts/Container'

const GameDefault = () => {
  return (
    <Center>
      <Container>
        <Page>
          <GamePageP5 />
        </Page>
      </Container>
    </Center>
  )
}

export default GameDefault
