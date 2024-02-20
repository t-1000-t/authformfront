import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'

import GuestNav from './GuestNav'
import GuestNavLogout from './GuestNavLogout'
import GuestFooter from './GuestFooter'
import useAuthStore from '../store/useAuthStore'


function GuestLayout(props) {
  const accessToken = useAuthStore((state) => state.accessToken)
  const user = useAuthStore((state) => state?.user?.userData)

  const [isAccessToken, setIsAccessToken] = useState(null)
  useEffect(() => {
    setIsAccessToken(accessToken)
  }, [accessToken])

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" justifyContent="space-between">
      <Box flexBasis="auto" flexGrow="1" flexShrink="1">
        {isAccessToken ? <GuestNavLogout name={user?.username} idUserName={user?.idAvatar} /> : <GuestNav />}
        <main>{props.children}</main>
      </Box>
      <GuestFooter />
    </Box>
  )
}

export default GuestLayout
