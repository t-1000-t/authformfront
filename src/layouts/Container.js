import { Box } from '@chakra-ui/react'

export default function Container({ children, ...styles }) {
  return (
    <Box maxW="1440px" mx="auto" px={2} {...styles}>
      {children}
    </Box>
  )
}
