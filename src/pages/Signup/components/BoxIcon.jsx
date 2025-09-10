// components/BoxIcon.jsx
import React from 'react'
import { Box, useStyleConfig } from '@chakra-ui/react'

const BoxIcon = ({ children, ...props }) => {
  const styles = useStyleConfig('BoxIcon', props) // pulls from theme
  return (
    <Box __css={styles} {...props}>
      {children}
    </Box>
  )
}

export default BoxIcon
