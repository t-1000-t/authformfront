// src/pages/RequestAgent/PageRequestAgent.jsx
import React, { useEffect, useState } from 'react'
import {
  Text,
  Link,
  Stack,
  Input,
  Heading,
  Button,
  Select,
  FormControl,
  FormLabel,
  Switch,
  OrderedList,
  ListItem,
} from '@chakra-ui/react'
import Container from '../../../layouts/Container'
import useAuthStore from '../../../store/useAuthStore'

const PageRequestAgent = () => {
  const { pushDataAgentSearch, botData } = useAuthStore()
  const [toggleUrl, setToggleUrl] = useState(false)
  const [stateUrl, setStateUrl] = useState('')
  const [statePosition, setStatePosition] = useState('')
  const [stateCountry, setStateCountry] = useState('')
  const [stateTown, setStateTown] = useState('')
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')
  const [sendOk, setSendOk] = useState(false)
  const [requestResults, setRequestResults] = useState({})
  const currentId = botData?.bot?.chatId

  useEffect(() => {}, [])

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
        chat_id: currentId, // optional; if omitted, backend can use ADMIN_CHAT_ID
      }
      const res = pushDataAgentSearch(body).then()
      const { data } = await res
      setRequestResults(data)
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
      <Stack gap={6} mb={6}>
        <Heading size="sm" mb={3}>
          Agent to searching in the Internet
        </Heading>
        <Text fontSize="sm" opacity={0.7} mb={4}>
          Current CHAT_ID from the DB {currentId}
        </Text>

        <FormControl display="flex" alignItems="center" m={2}>
          <FormLabel htmlFor="email-alerts" mb="0">
            Own URL
          </FormLabel>
          <Switch id="url-alerts" onChange={() => setToggleUrl(!toggleUrl)} />
        </FormControl>
        <form onSubmit={searchToInternet}>
          <Stack gap={3}>
            {toggleUrl ? (
              <Input
                placeholder="Enter your own URL (e.g. https://ie.indeed.com)"
                value={stateUrl}
                onChange={(e) => setStateUrl(e.target.value)}
              />
            ) : (
              <Select value={stateUrl} onChange={(e) => setStateUrl(e.target.value)}>
                <option value="https://ie.indeed.com">IE.Indeed.com</option>
                <option value="https://www.irishjobs.ie">IrishJobs.ie</option>
                <option value="https://www.jobs.ie">Jobs.ie</option>
                <option value="https://www.glassdoor.ie">GlassDoor.ie</option>
                <option value="https://publicjobs.ie">PublicJobs.ie</option>
                <option value="https://www.jobalert.ie">JobAlert.ie</option>
                <option value="https://www.linkedin.com">LinkedIn.com</option>
              </Select>
            )}
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
      </Stack>
      {requestResults && (
        <Heading size="sm" mb={3}>
          {requestResults.query}
        </Heading>
      )}

      {requestResults?.results?.length > 0 && (
        <OrderedList>
          {requestResults.results.map(({ pos, title, link }) => (
            <ListItem key={pos}>
              <Text as="span" mr={2}>
                {title}
              </Text>
              <br />
              <Link color="teal.500" href={link} isExternal>
                {link}
              </Link>
            </ListItem>
          ))}
        </OrderedList>
      )}
    </Container>
  )
}

export default PageRequestAgent
