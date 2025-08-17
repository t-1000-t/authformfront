import React, { useState } from 'react'
import { Flex, Box, Stack, Input, Heading, Button, Text } from '@chakra-ui/react'
import Container from '../../../layouts/Container'

const PageRequestAgent = () => {
  const [stateUrl, setStateUrl] = React.useState('')
  const [statePosition, setStatePosition] = React.useState('')
  const [stateCountry, setStateCountry] = React.useState('')
  const [stateTown, setStateTown] = React.useState('')
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')
  const [sendOk, setSendOk] = useState(false)
  const searchToInternet = (e) => {
    e.preventDefault()
    setSendOk(false)
    setSendError('')

    setSending(true)
    setSending(false)
  }

  return (
    <Container>
      <Stack gap={6}>
        <Flex>
          <Box minW="528.617px" p={4} borderWidth="1px" borderRadius="lg">
            <Heading size="sm" mb={3}>
              Agent to searching in the Internet
            </Heading>
            <form onSubmit={searchToInternet}>
              <Stack gap={3}>
                <Input placeholder="Enter URL" value={stateUrl} onChange={(e) => setStateUrl(e.target.value)} />
                <Input
                  placeholder="Enter position"
                  value={statePosition}
                  onChange={(e) => setStatePosition(e.target.value)}
                />
                <Input
                  placeholder="Enter Country"
                  value={stateCountry}
                  onChange={(e) => setStateCountry(e.target.value)}
                />
                <Input placeholder="Enter Town" value={stateTown} onChange={(e) => setStateTown(e.target.value)} />
                <Stack direction="row" align="center">
                  <Button type="submit" isLoading={sending}>
                    Send
                  </Button>
                  {sendOk && <Text color="green.500">Sent ✅</Text>}
                  {sendError && <Text color="red.500">{sendError}</Text>}
                </Stack>
              </Stack>
            </form>
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}

export default PageRequestAgent
