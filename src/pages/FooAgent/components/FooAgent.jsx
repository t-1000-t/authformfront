import React, { useState } from 'react'
import { Box, Input, Button, Stack, Heading, Text, Link, List, ListItem, Spinner } from '@chakra-ui/react'
import Container from '../../../layouts/Container'
import useAuthStore from '../../../store/useAuthStore'

const FooAgent = () => {
  const { callFooAgent } = useAuthStore()
  const [q, setQ] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [results, setResults] = useState([])

  const onSearch = async (e) => {
    e.preventDefault()
    setError('')
    setResults([])
    if (!q.trim()) return

    setLoading(true)
    try {
      // const res = await fetch(`${API_BASE}/api/foobot`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ q, num: 3 }),
      // })
      const res = await callFooAgent({ q, num: 3 })

      const { data } = res
      if (!res.statusText === 'ok') throw new Error(data.error || 'Request failed')
      setResults(data.results || [])
    } catch (err) {
      setError(err.message || 'Search failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <Stack gap={4}>
        <Heading size="lg">FOO</Heading>

        <form onSubmit={onSearch}>
          <Stack direction={{ base: 'column', md: 'row' }} gap={3}>
            <Input placeholder="Search the web…" value={q} onChange={(e) => setQ(e.target.value)} />
            <Button type="submit" isDisabled={loading}>
              {loading ? <Spinner size="sm" /> : 'Search'}
            </Button>
          </Stack>
        </form>

        {error && <Text color="red.500">{error}</Text>}

        {!!results.length && (
          <Box>
            <List spacing={3}>
              {results.map((r) => (
                <ListItem key={r.link}>
                  <Link href={r.link} isExternal fontWeight="semibold">
                    {r.pos}. {r.title}
                  </Link>
                  <Text fontSize="sm" opacity={0.8}>
                    {r.displayLink}
                  </Text>
                  <Text fontSize="sm">{r.snippet}</Text>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Stack>
    </Container>
  )
}

export default FooAgent
