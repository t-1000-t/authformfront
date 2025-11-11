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
  Spinner,
  useToast,
} from '@chakra-ui/react'
import instance from '../../../utils/axios'

const SUPPORTED = ['youtube', 'instagram', 'tiktok', 'facebook', 'threads']

const patterns = {
  youtube: [
    /^https?:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]{6,}(&[\w=&-]+)*$/i,
    /^https?:\/\/(youtu\.be)\/[\w-]{6,}$/i,
    /^https?:\/\/(www\.)?youtube\.com\/shorts\/[\w-]{6,}(\?.*)?$/i,
    /^https?:\/\/(www\.)?studio\.youtube\.com\/video\/[\w-]{6,}$/i,
    /^https?:\/\/(www\.)?studio\.youtube\.com\/video\/[\w-]{6,}(\/[a-z]+)?(\?.*)?$/i,
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
  const { data } = await instance.get('/api/vdownload/oembed', { params: { url } })
  return {
    title: data.title ?? null,
    authorName: data.author_name ?? null,
    thumbnailUrl: data.thumbnail_url ?? null,
    providerName: data.provider_name ?? null,
    htmlEmbed: data.html ?? null,
  }
}

async function submitUrl(url, platform) {
  const { data } = await instance.post('/api/vdownload/urls', {
    url,
    platform,
    ownerConsent: true,
  })
  return data
}

const MultiPlatformDownloader = () => {
  const [input, setInput] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const [detected, setDetected] = useState({ platform: null })
  const [meta, setMeta] = useState(null)
  const [submitRes, setSubmitRes] = useState(null)

  const toast = useToast()
  const inputRef = useRef(null)
  const canDownload = useMemo(() => detected.platform !== null, [detected.platform])

  // Guards for Studio open
  const studioOpenedRef = useRef(false) // run auto-open once per input
  const studioWindowRef = useRef(null) // reuse the named window/tab
  const [showStudioButton, setShowStudioButton] = useState(false) // show button if popup blocked

  const onInputChange = useCallback((e) => {
    setSubmitRes(null)
    setInput(e.target.value)
  }, [])

  // Reset guards per new input
  useEffect(() => {
    studioOpenedRef.current = false
    setShowStudioButton(false)
  }, [input])

  useEffect(() => {
    setError(null)
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
      const res = await submitUrl(input.trim(), detected.platform)
      setSubmitRes(res)
      setStatus(res.ok ? 'ready' : 'error')
      if (!res.ok) setError(res.message || 'Request failed')

      // Open YouTube Studio in the background (no jump)
      if (res?.policy === 'studio-only' && res?.studioUrl && !studioOpenedRef.current) {
        studioOpenedRef.current = true

        // Open (or reuse) a named window WITHOUT noopener, so we can blur it
        let win = studioWindowRef.current
        if (!win || win.closed) {
          win = window.open('about:blank', 'YT_STUDIO_TAB') // no noopener here intentionally
          studioWindowRef.current = win
        }

        if (win) {
          // Keep focus on this tab
          try {
            win.blur()
          } catch (err) {
            throw new Error('blur', err)
          }
          try {
            window.focus()
          } catch (err) {
            throw new Error('focus', err)
          }
          // Navigate the new tab after a tiny delay
          setTimeout(() => {
            try {
              win.location.href = res.studioUrl
            } catch (err) {
              throw new Error('local ref', err)
            }
          }, 100)

          toast({
            title: 'YouTube Studio opened in a new tab',
            description: 'You can switch to it whenever you like.',
            status: 'info',
            duration: 2500,
            isClosable: true,
          })
        } else {
          // Popup blocked — keep current tab; show manual button
          setShowStudioButton(true)
          toast({
            title: 'Popup blocked',
            description: 'Click the button to open YouTube Studio.',
            status: 'warning',
            duration: 3000,
            isClosable: true,
          })
        }

        return undefined
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
                          dangerouslySetInnerHTML={{ __html: meta.htmlEmbed }}
                        />
                      )}
                    </CardBody>
                  </Card>
                )}
              </Collapse>

              <HStack>
                <Button
                  color="white"
                  type="submit"
                  colorScheme="blackAlpha"
                  isDisabled={!canDownload || status === 'submitting'}
                  isLoading={status === 'submitting'}
                >
                  Download
                </Button>

                {/* Manual fallback button appears only if popup got blocked */}
                {submitRes?.studioUrl && showStudioButton && (
                  <Button
                    onClick={() => {
                      const win = window.open(submitRes.studioUrl, 'YT_STUDIO_TAB', 'noopener,noreferrer')
                      if (win) {
                        studioWindowRef.current = win
                        setShowStudioButton(false)
                      }
                    }}
                    variant="solid"
                    title="Open in YouTube Studio (official download)"
                  >
                    Open in YouTube Studio (Download)
                  </Button>
                )}

                {submitRes?.downloadUrl && (
                  <Button
                    onClick={() => {
                      window.location.href = submitRes.downloadUrl
                    }}
                  >
                    Save to device
                  </Button>
                )}

                {!submitRes?.downloadUrl && submitRes?.ok && !showStudioButton && (
                  <Text fontSize="xs" color="gray.600">
                    Job queued: {submitRes.urlId}
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
