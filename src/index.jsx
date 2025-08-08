import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import './index.css'
import process from 'process'

import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { SocketProvider } from './context/socket-context'

// Polyfill process object
window.process = process

const root = createRoot(document.getElementById('root'))

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        minHeight: '100vh',
        overflowX: 'hidden',
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
})

root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <SocketProvider>
        <App />
      </SocketProvider>
    </BrowserRouter>
  </ChakraProvider>,
)
