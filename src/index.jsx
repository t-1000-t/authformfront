import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import './index.css'
import process from 'process'

import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { SocketProvider } from './context/socket-context'

// Polyfill process object
window.process = process

const config = {
  initialColorMode: 'system', // 'light' | 'dark' | 'system'
  useSystemColorMode: true,
}

const root = createRoot(document.getElementById('root'))

const theme = extendTheme({
  config,
  styles: {
    global: {
      'html, body': {
        minHeight: '100vh',
        overflowX: 'hidden',
        bg: 'bg',
        color: 'fg',
      },
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
      500: '#369999', // Primary
      600: '#2d7f7f',
      700: '#266666',
      800: '#1e4c4c',
      900: '#143333',
    },
    accent: {
      500: '#FF6B61', // Complementary for contrast
    },
  },
  // Use semantic tokens so bg/text swap automatically in dark mode
  semanticTokens: {
    colors: {
      bg: { default: 'white', _dark: 'gray.900' },
      fg: { default: 'gray.800', _dark: 'gray.500' },
    },
  },
})

root.render(
  <>
    {/* Prevents color flash on first paint */}
    <ColorModeScript initialColorMode={config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <SocketProvider>
          <App />
        </SocketProvider>
      </BrowserRouter>
    </ChakraProvider>
  </>,
)
