// DefaultFooAgent.jsx
import React, { useEffect, useState } from 'react'
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Switch,
  Stack,
  SimpleGrid,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react'
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
    if (email) getChatBotId({ email })
  }, [email, getChatBotId])

  // Example: only for behavior toggles (not required for styles)
  const labelSize = useBreakpointValue({ base: 'sm', md: 'md' })

  return (
    <Container>
      <Stack spacing={{ base: 4, md: 6 }}>
        <Flex align="center" justify="space-between" flexWrap="wrap" gap={3}>
          <Heading fontSize={{ base: 'lg', md: 'xl' }}>Foo Agent</Heading>

          <FormControl display="flex" alignItems="center" w="fit-content" gap={2} m={0}>
            <FormLabel htmlFor="toggle-agent-view" mb="0" fontSize={labelSize}>
              Request Agent view
            </FormLabel>
            <Switch
              id="toggle-agent-view"
              isChecked={showRequestAgent}
              onChange={(e) => setShowRequestAgent(e.target.checked)}
              aria-label="Toggle between Request Agent and Chat views"
              size={useBreakpointValue({ base: 'lg', md: 'lg' })}
            />
          </FormControl>
        </Flex>

        {/* Layout area: 1 column on mobile, 2 columns on md+, with sensible gaps */}
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }} alignItems="start">
          {/* Left column */}
          <Box
            // let it grow naturally; add min-heights if needed
            p={{ base: 3, md: 4 }}
            borderWidth="1px"
            borderRadius="2xl"
          >
            <FooAgent />
          </Box>

          {/* Right column (chat/request) */}
          <Box
            p={{ base: 3, md: 4 }}
            borderWidth="1px"
            borderRadius="2xl"
            minH={{ base: 'auto', md: '60vh' }} // example: keep height on larger screens
          >
            {showRequestAgent ? <PageRequestAgent /> : <PageChat />}
          </Box>
        </SimpleGrid>
      </Stack>
    </Container>
  )
}

export default DefaultFooAgent
