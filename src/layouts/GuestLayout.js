import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'

import GuestNav from './GuestNav'
import GuestNavUser from './GuestNavUser'
import GuestFooter from './GuestFooter'
import useAuthStore from '../store/useAuthStore'

function GuestLayout(props) {
  const accessToken = useAuthStore((state) => state.accessToken)
  const userName = useAuthStore((state) => state?.user?.userData?.username)

  // console.log('accessToken', accessToken)

  const [isAccessToken, setIsAccessToken] = useState(null)
  useEffect(() => {
    setIsAccessToken(accessToken)
  }, [accessToken])

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" justifyContent="space-between">
      <Box flexBasis="auto" flexGrow="1" flexShrink="1">
        {isAccessToken ? <GuestNavUser name={userName} /> : <GuestNav />}
        <main>{props.children}</main>
      </Box>
      <GuestFooter />
    </Box>
  )
}

export default GuestLayout
