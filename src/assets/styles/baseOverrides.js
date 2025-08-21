// ---------- Base theme OVERRIDES (plain object) ----------
import colorConfig from './colorConfig'

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

export default baseOverrides
