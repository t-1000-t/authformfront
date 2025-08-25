// index.jsx
import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { isMobile, isTablet } from 'react-device-detect'
import './index.css'

import process from 'process'
import { BrowserRouter } from 'react-router-dom'
import baseOverrides from './assets/styles/baseOverrides'
import mobileOverrides from './assets/styles/mobileOverrides'
import tabletOverrides from './assets/styles/tabletOverrides'
import desktopOverrides from './assets/styles/desktopOverrides'
import colorConfig from './assets/styles/colorConfig'
import App from './App'
import { SocketProvider } from './context/socket-context'

// Polyfill process object
window.process = process

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
console.log('deviceType', deviceType)
let deviceOverrides = desktopOverrides
if (deviceType === 'mobile') deviceOverrides = mobileOverrides
else if (deviceType === 'tablet') deviceOverrides = tabletOverrides

console.log('deviceOverrides', deviceOverrides)
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
