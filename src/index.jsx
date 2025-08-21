// index.jsx
import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { isMobile, isTablet } from 'react-device-detect'
import './index.css'
import process from 'process'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { SocketProvider } from './context/socket-context'

// Polyfill process object
window.process = process

const colorConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

// ---------- Base theme OVERRIDES (plain object) ----------
const baseOverrides = {
  config: colorConfig,
  styles: {
    global: {
      ':root': { scrollbarGutter: 'stable both-edges' },
      'html, body': {
        minHeight: '100vh',
        overflowX: 'hidden',
        bg: 'bg',
        color: 'fg',
      },
      'html, body, #root': { height: '100%' },
    },
  },
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Montserrat', sans-serif",
  },
  colors: {
    brand: {
      50: '#e0f7f7',
      100: '#b3e6e6',
      200: '#80d3d3',
      300: '#4dbfbe',
      400: '#26aeae',
      500: '#369999',
      600: '#2d7f7f',
      700: '#266666',
      800: '#1e4c4c',
      900: '#143333',
    },
    accent: { 500: '#FF6B61' },
  },
  semanticTokens: {
    colors: {
      bg: { default: 'white', _dark: 'gray.900' },
      fg: { default: 'gray.800', _dark: 'gray.500' },
    },
  },
  breakpoints: {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  },
}

// ---------- Device-specific overrides ----------
const mobileOverrides = {
  sizes: { container: { sm: '100%', md: '100%' } },
  radii: { md: '14px', lg: '18px', xl: '22px' },
  space: { 1: '0.25rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem' },
  components: {
    Container: { baseStyle: { px: 4, maxW: 'container.sm' } },
    Button: { defaultProps: { size: 'xs' } },
    Heading: { sizes: { xl: { fontSize: ['2xl'] }, lg: { fontSize: ['xl'] } } },
    // MenuItem: { bgcolor: 'yellow.800', _dark: 'gray.500' },
    Link: {
      baseStyle: {
        color: 'yellow.400',
        fontSize: 'lg',
        textDecoration: 'none',
        _hover: { textDecoration: 'underline', color: 'yellow.500' },
      },
      // (optional) define a named variant
      variants: {
        emphasis: {
          color: 'yellow.400',
          fontWeight: 'semibold',
          textDecoration: 'underline',
          _hover: { color: 'yellow.500' },
        },
      },
      // (optional) make that variant default on mobile
      defaultProps: { variant: 'emphasis' },
    },
  },
}

const tabletOverrides = {
  components: {
    Container: { baseStyle: { px: 6, maxW: 'container.md' } },
    Button: { defaultProps: { size: 'lg' } },
  },
}

const desktopOverrides = {
  components: {
    Container: { baseStyle: { px: 8, maxW: 'container.lg' } },
    Button: { defaultProps: { size: 'md' } },
    Heading: { sizes: { xl: { fontSize: ['3xl'] }, lg: { fontSize: ['2xl'] } } },
  },
}

// ---------- iPadOS fix + device helper ----------
const isIpadOSLike = () => {
  if (typeof navigator === 'undefined') return false
  const ua = navigator.userAgent || ''
  const macTouch = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1
  const coarsePointer =
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(pointer: coarse)').matches
  return macTouch || (coarsePointer && /Macintosh|iPad/i.test(ua))
}

const getDeviceType = () => {
  if (isTablet || isIpadOSLike()) return 'tablet'
  if (isMobile) return 'mobile'
  return 'desktop'
}

// ---------- Pick overrides and build final theme ----------
const deviceType = getDeviceType()
let deviceOverrides = desktopOverrides
if (deviceType === 'mobile') deviceOverrides = mobileOverrides
else if (deviceType === 'tablet') deviceOverrides = tabletOverrides

const theme = extendTheme(baseOverrides, deviceOverrides)

function DeviceAttr({ children }) {
  useEffect(() => {
    document.documentElement.setAttribute('data-device', deviceType)
  }, [])
  return children
}

const root = createRoot(document.getElementById('root'))
root.render(
  <>
    <ColorModeScript initialColorMode={colorConfig.initialColorMode} />
    <ChakraProvider theme={theme}>
      <DeviceAttr>
        <BrowserRouter>
          <SocketProvider>
            <App />
          </SocketProvider>
        </BrowserRouter>
      </DeviceAttr>
    </ChakraProvider>
  </>,
)
