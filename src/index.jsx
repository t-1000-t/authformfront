// index.jsx
import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
// ✅ device detection
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

/** Common / base theme */
const baseTheme = extendTheme({
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
    },
    'html, body, #root': { height: '100%' },
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
  // You can also define breakpoints for responsive props:
  breakpoints: {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  },
})

/** Device-specific overrides */
// Keep these minimal: spacing, sizes, radii, and a few component defaults.
const mobileOverrides = {
  sizes: {
    container: { sm: '100%', md: '100%' },
  },
  radii: { md: '14px', lg: '18px', xl: '22px' },
  space: { 1: '0.25rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem' },
  fonts: {
    // slightly larger body on small screens for legibility
    body: "'Montserrat', sans-serif",
  },
  components: {
    Container: { baseStyle: { px: 4, maxW: 'container.sm' } },
    Button: { defaultProps: { size: 'md' } },
    Heading: {
      sizes: {
        xl: { fontSize: ['2xl'] },
        lg: { fontSize: ['xl'] },
      },
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
    Heading: {
      sizes: {
        xl: { fontSize: ['3xl'] },
        lg: { fontSize: ['2xl'] },
      },
    },
  },
}

// Pick overrides based on device
let deviceTheme

if (isMobile) {
  console.log('1')
  deviceTheme = mobileOverrides
} else if (isTablet) {
  console.log('2')
  deviceTheme = tabletOverrides
} else {
  console.log('3')
  deviceTheme = desktopOverrides
}

// Final theme = base + overrides
const theme = extendTheme(baseTheme, deviceTheme)

function DeviceAttr({ children }) {
  // Optional: add a data attribute so you can target CSS if needed
  useEffect(() => {
    let device = 'desktop'
    if (isMobile) {
      device = 'mobile'
    } else if (isTablet) {
      device = 'tablet'
    }
    document.documentElement.setAttribute('data-device', device)
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
