import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Badge,
  HStack,
  VStack,
  Card,
  CardBody,
  Image,
  Alert,
  AlertIcon,
  Collapse,
  Link as ChakraLink,
  Spinner,
} from '@chakra-ui/react'
import axios from '../../../utils/axios'

const SUPPORTED = ['youtube', 'instagram', 'tiktok', 'facebook', 'threads']

const patterns = {
  youtube: [
    /^https?:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]{6,}(&[\w=&-]+)*$/i,
    /^https?:\/\/(youtu\.be)\/[\w-]{6,}$/i,
    /^https?:\/\/(www\.)?youtube\.com\/shorts\/[\w-]{6,}(\?.*)?$/i,
  ],
  instagram: [/^https?:\/\/(www\.)?instagram\.com\/(p|reel|reels|tv)\/[A-Za-z0-9_-]+\/?/i],
  tiktok: [
    /^https?:\/\/(www\.)?tiktok\.com\/@[\w.-]+\/video\/\d+\/?/i,
    /^https?:\/\/(vm|vt)\.tiktok\.com\/[A-Za-z0-9]+\/?$/i,
  ],
  facebook: [
    /^https?:\/\/(www\.)?facebook\.com\/[^/]+\/videos\/\d+\/?/i,
    /^https?:\/\/m\.facebook\.com\/story\.php\?story_fbid=\d+&id=\d+/i,
    /^https?:\/\/fb\.watch\/[A-Za-z0-9_-]+\/?$/i,
  ],
  threads: [/^https?:\/\/(www\.)?threads\.net\/@[\w.-]+\/post\/[A-Za-z0-9_-]+\/?/i],
}

function detectPlatform(url) {
  const u = url.trim()
  if (!/^https?:\/\//i.test(u)) {
    return { platform: null, reason: 'URL must start with http:// or https://' }
  }
  const matchKey = SUPPORTED.find((p) => patterns[p].some((rx) => rx.test(u)))
  if (matchKey) return { platform: matchKey }
  return { platform: null, reason: 'Unsupported or unrecognized link' }
}

async function fetchPreview(url) {
  const res = await axios.post(`/api/oembed?url=${encodeURIComponent(url)}`)
  if (!res.ok) return null
  const data = await res.json()
  return {
    title: data.title,
    authorName: data.author_name,
    thumbnailUrl: data.thumbnail_url,
    providerName: data.provider_name,
    htmlEmbed: data.html,
  }
}

async function submitJob(url, platform) {
  const res = await fetch('/api/jobs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url, platform }),
  })
  return res.json()
}

const MultiPlatformDownloader = () => {
  const [input, setInput] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'validating' | 'fetching' | 'ready' | 'submitting' | 'error'
  const [error, setError] = useState(null)
  const [detected, setDetected] = useState({ platform: null })
  const [meta, setMeta] = useState(null)
  const [submitRes, setSubmitRes] = useState(null)

  const canDownload = useMemo(() => detected.platform !== null, [detected.platform])
  const inputRef = useRef(null)

  const onInputChange = useCallback((e) => setInput(e.target.value), [])

  const handlePaste = useCallback(() => {
    navigator.clipboard
      .readText()
      .then((t) => setInput(t))
      .catch(() => setError('Clipboard access failed; paste manually.'))
  }, [])

  useEffect(() => {
    setError(null)
    setSubmitRes(null)
    setMeta(null)
    if (input.trim().length === 0) {
      setDetected({ platform: null })
      setStatus('idle')
      return
    }

    setStatus('validating')
    const d = detectPlatform(input)
    setDetected(d)

    if (!d.platform) {
      setStatus('error')
      setError(d.reason || 'Invalid link')
      return
    }

    setStatus('fetching')
    fetchPreview(input)
      .then((m) => {
        setMeta(m)
        setStatus('ready')
      })
      .catch(() => {
        setMeta(null)
        setStatus('ready')
      })
  }, [input])

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    if (!detected.platform) {
      setStatus('error')
      setError('Please paste a supported link')
      return
    }
    setStatus('submitting')
    try {
      const res = await submitJob(input.trim(), detected.platform)
      setSubmitRes(res)
      if (!res.ok) {
        setStatus('error')
        setError(res.message || 'Request failed')
      } else {
        setStatus('ready')
      }
    } catch {
      setStatus('error')
      setError('Network error')
    }
  }

  const badge = (platform) => (
    <Badge variant="subtle" colorScheme={platform ? 'purple' : 'gray'}>
      {platform ? platform[0].toUpperCase() + platform.slice(1) : 'Unknown'}
    </Badge>
  )

  return (
    <Container maxW="xl" py={6}>
      <Box borderWidth="1px" rounded="2xl" p={5} boxShadow="sm">
        <VStack align="stretch" spacing={4}>
          <Box>
            <Heading as="h1" size="md" mb={1}>
              Video link downloader (safe mode)
            </Heading>
            <Text fontSize="sm" color="gray.600">
              Paste a link from YouTube, Instagram, TikTok, Facebook, or Threads. We’ll show a preview and send a job to
              your backend for permitted downloads (e.g., your own content) or an embed/open option.
            </Text>
          </Box>

          <Box as="form" onSubmit={onSubmit}>
            <VStack align="stretch" spacing={3}>
              <FormControl>
                <FormLabel htmlFor="videoUrl" fontSize="sm">
                  Video URL
                </FormLabel>
                <HStack>
                  <Input
                    id="videoUrl"
                    ref={inputRef}
                    value={input}
                    onChange={onInputChange}
                    placeholder="https://..."
                    type="url"
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck={false}
                  />
                  <Button variant="outline" onClick={handlePaste} title="Paste from clipboard">
                    Paste
                  </Button>
                </HStack>
                <HStack spacing={2} mt={2}>
                  <Text fontSize="xs" color="gray.500">
                    Detected:
                  </Text>
                  {badge(detected.platform)}
                  {status === 'validating' && (
                    <HStack spacing={1}>
                      <Spinner size="xs" />
                      <Text fontSize="xs" color="gray.500">
                        Validating…
                      </Text>
                    </HStack>
                  )}
                </HStack>
              </FormControl>

              <Collapse in={!!error} animateOpacity unmountOnExit>
                {error && (
                  <Alert status="error" borderRadius="md">
                    <AlertIcon />
                    <Text fontSize="sm">{error}</Text>
                  </Alert>
                )}
              </Collapse>

              <Collapse in={!!meta} animateOpacity unmountOnExit>
                {meta && (
                  <Card variant="outline" borderRadius="xl">
                    <CardBody>
                      <HStack align="start" spacing={3}>
                        {meta.thumbnailUrl && (
                          <Image
                            src={meta.thumbnailUrl}
                            alt={meta.title || 'thumbnail'}
                            objectFit="cover"
                            borderRadius="md"
                            boxSize="64px"
                          />
                        )}
                        <VStack align="start" spacing={0}>
                          <Text fontWeight="medium" noOfLines={1} fontSize="sm">
                            {meta.title || 'Untitled'}
                          </Text>
                          <Text fontSize="xs" color="gray.500" noOfLines={1}>
                            {`${meta.authorName || 'Unknown author'} • ${meta.providerName || 'Provider'}`}
                          </Text>
                        </VStack>
                      </HStack>

                      {meta.htmlEmbed && (
                        <Box
                          mt={3}
                          borderWidth="1px"
                          borderRadius="lg"
                          overflow="hidden"
                          // Ensure your backend sanitizes this HTML.
                          dangerouslySetInnerHTML={{ __html: meta.htmlEmbed }}
                        />
                      )}
                    </CardBody>
                  </Card>
                )}
              </Collapse>

              <HStack>
                <Button
                  type="submit"
                  colorScheme="blackAlpha"
                  isDisabled={!canDownload || status === 'submitting'}
                  isLoading={status === 'submitting'}
                >
                  Download
                </Button>

                {submitRes && submitRes.downloadUrl && (
                  <ChakraLink href={submitRes.downloadUrl} isExternal fontSize="sm" textDecoration="underline">
                    Open file
                  </ChakraLink>
                )}

                {submitRes && submitRes.jobId && !submitRes.downloadUrl && (
                  <Text fontSize="xs" color="gray.600">
                    Job queued: {submitRes.jobId}
                  </Text>
                )}
              </HStack>

              <Box>
                <details>
                  <summary>
                    <Text as="span" fontSize="sm" fontWeight="medium" cursor="pointer">
                      What’s allowed?
                    </Text>
                  </summary>
                  <Text mt={2} fontSize="xs" color="gray.600">
                    Only download content you own or have explicit permission to download. Many platforms prohibit
                    third-party downloading; your backend should enforce permitted use and may return an embed or “open
                    in app” option instead of a file.
                  </Text>
                </details>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Container>
  )
}

export default MultiPlatformDownloader
