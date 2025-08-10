import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'

import GuestNav from './GuestNav'
import GuestFooter from './GuestFooter'
import useAuthStore from '../store/useAuthStore'
import GuestNavLogout from './GuestNavLogout'

const FOOTER_HEIGHT_PX = 80

const GuestLayout = (props) => {
  const accessToken = useAuthStore((state) => state.accessToken)
  const user = useAuthStore((state) => state?.user?.userData)
  // eslint-disable-next-line react/prop-types
  const { children } = props

  const [isAccessToken, setIsAccessToken] = useState(null)
  useEffect(() => {
    setIsAccessToken(accessToken)
  }, [accessToken])

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Box as="header" flexShrink={0}>
        {!isAccessToken && !user?.idAvatar ? (
          <GuestNav />
        ) : (
          <GuestNavLogout name={user?.username} idUserName={user?.idAvatar} />
        )}
      </Box>
      <Box as="main" flex="1 1 auto" minH={0} pb="80px">
        {children}
      </Box>
      <Box>
        <GuestFooter footerHeight={FOOTER_HEIGHT_PX} />
      </Box>
    </Box>
  )
}

export default GuestLayout
