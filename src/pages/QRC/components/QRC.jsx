import React, { useEffect, useMemo, useRef, useState } from 'react'
import QRCode from 'qrcode'
import { Box, Button, Input, Select, Text, FormControl, FormLabel, SimpleGrid, Heading, VStack } from '@chakra-ui/react'

// npm i qrcode
const ECC_LEVELS = ['L', 'M', 'Q', 'H']

function sanitizeFilename(input) {
  return input.replace(/[^a-z0-9-_]+/gi, '_').slice(0, 60)
}

function useDebounced(value, delay = 250) {
  const [v, setV] = useState(value)
  useEffect(() => {
    const id = setTimeout(() => setV(value), delay)
    return () => clearTimeout(id)
  }, [value, delay])
  return v
}

const QrPage = () => {
  const [text, setText] = useState('')
  const [size, setSize] = useState(256)
  const [margin, setMargin] = useState(2)
  const [ecc, setEcc] = useState('M') // default ECC
  const [pngUrl, setPngUrl] = useState('')
  const [svgText, setSvgText] = useState('')
  const canvasRef = useRef(null)

  const opts = useMemo(() => ({ text, size, margin, ecc }), [text, size, margin, ecc])
  const debounced = useDebounced(opts, 250)

  function clearCanvas(canvas) {
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    // or: ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  const handlerCleanField = () => {
    setText('')
    setPngUrl('')
    setSvgText('')
    clearCanvas(canvasRef.current)
  }

  // Generate PNG on canvas
  useEffect(() => {
    const gen = async () => {
      const c = canvasRef.current
      if (!c) return
      if (!debounced.text?.trim()) {
        clearCanvas(c)
        setPngUrl('')
        return
      }

      if (!canvasRef.current) return
      if (!debounced.text?.trim()) return
      await QRCode.toCanvas(canvasRef.current, debounced.text.trim(), {
        width: debounced.size,
        margin: debounced.margin,
        errorCorrectionLevel: debounced.ecc,
        color: { dark: '#000000', light: '#ffffff' },
      })
      const url = canvasRef.current.toDataURL('image/png')
      setPngUrl(url)
    }
    gen().then()
  }, [debounced])

  // Generate SVG text
  useEffect(() => {
    const genSvg = async () => {
      if (!debounced.text?.trim()) {
        setSvgText('')
        return
      }
      const svg = await QRCode.toString(debounced.text.trim(), {
        type: 'svg',
        width: debounced.size,
        margin: debounced.margin,
        errorCorrectionLevel: debounced.ecc,
        color: { dark: '#000000', light: '#ffffff' },
      })
      setSvgText(svg)
    }
    genSvg().then()
  }, [debounced])

  const downloadPNG = () => {
    if (!pngUrl) return
    const a = document.createElement('a')
    a.href = pngUrl
    a.download = `qr_${sanitizeFilename(text)}.png`
    a.click()
  }

  const downloadSVG = () => {
    if (!svgText) return
    const blob = new Blob([svgText], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `qr_${sanitizeFilename(text)}.svg`
    a.click()
    URL.revokeObjectURL(url)
  }

  // allow any non-empty text; no URL constructor => no 'no-new' warning
  const isValid = useMemo(() => text.trim().length > 0, [text])

  return (
    <Box minH="100vh" bg="gray.50" color="gray.900" p={6}>
      <Box maxW="5xl" mx="auto">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <VStack align="stretch" spacing={4}>
            <Heading size="lg">QR Code Generator</Heading>
            <Text fontSize="sm" color="gray.600">
              Static QR codes that never expire. Paste a URL or any text.
            </Text>

            <FormControl>
              <FormLabel>URL or Text</FormLabel>
              <Input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="https://example.com or any text"
              />
              <Text fontSize="xs" color="gray.500" mt={1}>
                Tip: For web links, include https://
              </Text>
            </FormControl>

            <SimpleGrid columns={3} spacing={3}>
              <FormControl>
                <FormLabel>Size (px)</FormLabel>
                <Input
                  type="number"
                  min={128}
                  max={2048}
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Margin</FormLabel>
                <Input
                  type="number"
                  min={0}
                  max={8}
                  value={margin}
                  onChange={(e) => setMargin(Number(e.target.value))}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Error Correction</FormLabel>
                <Select value={ecc} onChange={(e) => setEcc(e.target.value)}>
                  {ECC_LEVELS.map((lvl) => (
                    <option key={lvl} value={lvl}>
                      {lvl}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </SimpleGrid>

            <Box display="flex" gap={3} pt={2}>
              <Button onClick={downloadPNG} isDisabled={!isValid || !pngUrl} colorScheme="blue">
                Download PNG
              </Button>
              <Button onClick={downloadSVG} isDisabled={!isValid || !svgText} colorScheme="green">
                Download SVG
              </Button>
              <Button onClick={handlerCleanField} isDisabled={!isValid || !svgText} colorScheme="green">
                Clean
              </Button>
            </Box>

            <Text fontSize="xs" color="gray.500">
              Static QR codes are unlimited and never expire. Keep your link alive to keep the code working.
            </Text>
          </VStack>

          <Box bg="white" borderRadius="2xl" boxShadow="md" p={6} display="flex" flexDir="column" alignItems="center">
            <canvas
              ref={canvasRef}
              width={size}
              height={size}
              style={{ width: '100%', maxWidth: 520, aspectRatio: 1 }}
            />
            <Text fontSize="xs" color="gray.500" mt={3}>
              Live preview (PNG canvas). SVG download uses vector paths for print quality.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default QrPage
