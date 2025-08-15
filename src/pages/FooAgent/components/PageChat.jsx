// src/pages/Chat/PageChat.jsx
import React, { useEffect, useState } from 'react'
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Stack,
  Badge,
  Divider,
  Link,
  Input,
  Textarea,
  Button,
  Select,
} from '@chakra-ui/react'
import Container from '../../../layouts/Container'
import { useSocket } from '../../../context/socket-context'
import useAuthStore from '../../../store/useAuthStore'

const PageChat = () => {
  const { socket } = useSocket()
  const { getRichChat } = useAuthStore()

  // live feed state
  const [events, setEvents] = useState([])

  // send form state
  const [chatId, setChatId] = useState(null) // e.g. 123456789
  const [text, setText] = useState('Hello from web!')
  const [parseMode, setParseMode] = useState('Markdown') // or 'HTML'
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')
  const [sendOk, setSendOk] = useState(false)

  useEffect(() => {
    if (!socket) return () => {}

    const onIncoming = (msg) => {
      setEvents((prev) => [{ type: 'incoming', ...msg }, ...prev].slice(0, 100))
    }
    const onResults = (msg) => {
      setEvents((prev) => [{ type: 'results', ...msg }, ...prev].slice(0, 100))
    }

    socket.on('tg:incoming', onIncoming)
    socket.on('tg:results', onResults)

    return () => {
      socket.off('tg:incoming', onIncoming)
      socket.off('tg:results', onResults)
    }
  }, [socket])

  const sendToTelegram = async (e) => {
    e.preventDefault()
    setSendOk(false)
    setSendError('')

    const trimmedChatId = String(chatId).trim()
    if (!trimmedChatId) {
      setSendError('chat_id is required (numeric Telegram chat id).')
      return
    }

    setSending(true)
    try {
      const res = getRichChat({
        chatId: /^\d+$/.test(trimmedChatId) ? Number(trimmedChatId) : trimmedChatId,
        t: text,
        mode: parseMode,
      })
      const { data } = await res
      if (!data.ok) throw new Error(data?.error || 'Send failed')

      setSendOk(true)
    } catch (err) {
      setSendError(err.message || 'Send failed')
    } finally {
      setSending(false)
    }
  }

  return (
    <Container>
      <Stack gap={6}>
        <Heading size="md">Telegram Bot — Live Feed</Heading>
        <Text fontSize="sm" opacity={0.7}>
          CHAT
        </Text>

        {/* Send to Telegram form */}
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="sm" mb={3}>
            Send message to Telegram
          </Heading>
          <form onSubmit={sendToTelegram}>
            <Stack gap={3}>
              <Input
                placeholder="chat_id (e.g. 123456789)"
                value={chatId}
                onChange={(e) => setChatId(e.target.value)}
              />
              <Select value={parseMode} onChange={(e) => setParseMode(e.target.value)}>
                <option value="Markdown">Markdown</option>
                <option value="HTML">HTML</option>
              </Select>
              <Textarea placeholder="Message text" value={text} onChange={(e) => setText(e.target.value)} rows={4} />
              <Stack direction="row" align="center">
                <Button type="submit" isLoading={sending}>
                  Send
                </Button>
                {sendOk && <Text color="green.500">Sent ✅</Text>}
                {sendError && <Text color="red.500">{sendError}</Text>}
              </Stack>
              <Text fontSize="xs" opacity={0.7}>
                Tip: <code>chat_id</code> is the numeric ID you get from <code>ctx.from.id</code> when the user messages
                your bot.
              </Text>
            </Stack>
          </form>
        </Box>

        <Divider />

        {/* Live feed list */}
        <List spacing={3}>
          {events.map((e, idx) => (
            <ListItem key={`${e.at || idx}-${e.type}`} p={3} borderWidth="1px" borderRadius="lg">
              <Stack gap={2}>
                <Box>
                  <Badge>{e.type === 'incoming' ? 'Incoming' : 'Results'}</Badge>
                  <Text as="span" ml={2} fontWeight="semibold">
                    @{e.from?.username || e.from?.id}
                  </Text>
                  <Text as="span" ml={2} fontSize="sm" opacity={0.7}>
                    {new Date(e.at || Date.now()).toLocaleTimeString()}
                  </Text>
                </Box>

                <Text>
                  <strong>Query:</strong> {e.q}
                </Text>

                {e.type === 'results' && Array.isArray(e.results) && (
                  <Stack gap={2}>
                    {e.results.slice(0, 3).map((r) => (
                      <Box key={r.link}>
                        <Link href={r.link} isExternal fontWeight="semibold">
                          {r.title}
                        </Link>
                        <Text fontSize="sm" opacity={0.8}>
                          {r.snippet}
                        </Text>
                      </Box>
                    ))}
                  </Stack>
                )}
              </Stack>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Container>
  )
}

export default PageChat
