import { Box } from '@chakra-ui/react'

import GuestNav from './GuestNav'
import GuestFooter from './GuestFooter'

function GuestLayout(props) {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" justifyContent="space-between">
      <Box flexBasis="auto" flexGrow="1" flexShrink="1">
        <GuestNav />
        <main>{props.children}</main>
      </Box>
      <GuestFooter />
    </Box>
  )
}

export default GuestLayout
