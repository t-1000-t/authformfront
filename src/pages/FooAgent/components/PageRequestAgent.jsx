// src/pages/RequestAgent/PageRequestAgent.jsx
import React, { useState } from 'react'
import { Flex, Box, Stack, Input, Heading, Button, Text } from '@chakra-ui/react'
import Container from '../../../layouts/Container'
import useAuthStore from '../../../store/useAuthStore'

const PageRequestAgent = () => {
  const { pushDataAgentSearch } = useAuthStore()
  const [stateUrl, setStateUrl] = useState('')
  const [statePosition, setStatePosition] = useState('')
  const [stateCountry, setStateCountry] = useState('')
  const [stateTown, setStateTown] = useState('')
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')
  const [sendOk, setSendOk] = useState(false)

  const searchToInternet = async (e) => {
    e.preventDefault()

    setSendOk(false)
    setSendError('')
    setSending(true)
    try {
      const body = {
        url: stateUrl,
        position: statePosition,
        country: stateCountry,
        town: stateTown,
        num: 5,
        toTelegram: true, // set false if you only want JSON back
        // chat_id: 123456789, // optional; if omitted, backend can use ADMIN_CHAT_ID
      }
      const res = pushDataAgentSearch(body).then()
      const { data } = await res
      if (!res.status === 'ok') throw new Error(data.error || 'Request failed')
      setSendOk(true)
      // Optionally: display returned results in the UI
    } catch (err) {
      setSendError(err.message || 'Failed to search')
    } finally {
      setSending(false)
    }
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
                <Input
                  placeholder="Enter URL (e.g. https://ie.indeed.com)"
                  value={stateUrl}
                  onChange={(e) => setStateUrl(e.target.value)}
                />
                <Input
                  placeholder="Enter position (e.g. Frontend Developer)"
                  value={statePosition}
                  onChange={(e) => setStatePosition(e.target.value)}
                />
                <Input
                  placeholder="Enter Country (e.g. Ireland)"
                  value={stateCountry}
                  onChange={(e) => setStateCountry(e.target.value)}
                />
                <Input
                  placeholder="Enter Town (e.g. Dublin)"
                  value={stateTown}
                  onChange={(e) => setStateTown(e.target.value)}
                />
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
