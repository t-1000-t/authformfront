const desktopOverrides = {
  components: {
    Container: { baseStyle: { px: 8, maxW: 'container.lg' } },
    Button: { defaultProps: { size: 'md' } },
    Heading: { sizes: { xl: { fontSize: ['3xl'] }, lg: { fontSize: ['2xl'] } } },
    BoxIcon: { defaultProps: { size: 'lg' } },
  },
}

export default desktopOverrides
