// theme/baseOverrides.js
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
      scrollbarWidth: 'none', // Firefox
      msOverflowStyle: 'none', // IE + Edge
      'html::-webkit-scrollbar, body::-webkit-scrollbar': {
        display: 'none', // Chrome, Safari
      },
      'html, body, #root': { height: '100%' },
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: '#369999',
      },
    },
    FormLabel: {
      baseStyle: {
        color: 'rgb(255, 107, 97)',
      },
    },
    BoxIcon: {
      baseStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      },
      variants: {
        subtle: { bg: 'gray.50' },
        success: { bg: 'green.100' },
        error: { bg: 'red.100' },
      },
      sizes: {
        sm: { boxSize: '48px', rounded: 'md' },
        md: { boxSize: '64px', rounded: 'lg' },
        lg: { boxSize: '80px', rounded: 'xl' },
      },
      defaultProps: {
        variant: 'subtle',
        size: 'md',
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
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
}

export default baseOverrides
