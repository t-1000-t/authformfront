import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'

import GuestNav from './GuestNav'
import GuestFooter from './GuestFooter'
import useAuthStore from '../store/useAuthStore'
import GuestNavLogout from './GuestNavLogout'
import useSwapTheme from '../utils/hooks/useSwapTheme'

const FOOTER_HEIGHT_PX = 80

const GuestLayout = ({ children }) => {
  const accessToken = useAuthStore((state) => state.accessToken)
  const user = useAuthStore((state) => state?.user?.userData)
  const { theme, toggleTheme } = useSwapTheme()
  // eslint-disable-next-line react/prop-types

  const [isAccessToken, setIsAccessToken] = useState(null)
  useEffect(() => {
    setIsAccessToken(accessToken)
  }, [accessToken])

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Box as="header" flexShrink={0}>
        {!isAccessToken && !user?.idAvatar ? (
          <GuestNav theme={theme} toggleTheme={toggleTheme} />
        ) : (
          <GuestNavLogout name={user?.username} idUserName={user?.idAvatar} theme={theme} toggleTheme={toggleTheme} />
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
