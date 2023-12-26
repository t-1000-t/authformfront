import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import './index.css'
import App from './App'

import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))




const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
})

root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>,
)
