import React, { useEffect, useState } from 'react'
import { Flex, FormControl, FormLabel, Switch } from '@chakra-ui/react'
import FooAgent from './components/FooAgent'
import PageChat from './components/PageChat'
import PageRequestAgent from './components/PageRequestAgent'
import Container from '../../layouts/Container'
import useAuthStore from '../../store/useAuthStore'

const DefaultFooAgent = () => {
  const { user, getChatBotId } = useAuthStore()
  const [showRequestAgent, setShowRequestAgent] = useState(false)
  const email = user?.userData?.email

  useEffect(() => {
    getChatBotId({ email }).then()
  }, [email])

  return (
    <Container>
      <Flex>
        <Flex direction="column" gap={4} w="full">
          <Container>
            <FormControl display="flex" alignItems="center" w="fit-content" gap={2} m={2}>
              <FormLabel htmlFor="toggle-agent-view" mb="0">
                Request Agent view
              </FormLabel>
              <Switch
                id="toggle-agent-view"
                isChecked={showRequestAgent}
                onChange={(e) => setShowRequestAgent(e.target.checked)}
                aria-label="Toggle between Request Agent and Chat views"
              />
            </FormControl>
            {showRequestAgent ? <PageRequestAgent /> : <PageChat />}
          </Container>
        </Flex>
        <FooAgent />
      </Flex>
    </Container>
  )
}

export default DefaultFooAgent
