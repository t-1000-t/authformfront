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
