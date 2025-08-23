// ---------- Device-specific overrides ----------
const mobileOverrides = {
  sizes: { container: { sm: '100%', md: '100%' } },
  radii: { md: '14px', lg: '18px', xl: '22px' },
  space: { 1: '0.25rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem' },
  components: {
    Container: { baseStyle: { px: 4, maxW: 'container.sm' } },
    Button: { defaultProps: { size: 'lg' } },
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

export default mobileOverrides
