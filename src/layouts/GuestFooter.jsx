import React from 'react'
import { Stack, Icon, Text, useBreakpointValue } from '@chakra-ui/react'
import {
  FaHome,
  FaStickyNote,
  FaAddressCard,
  FaCheck,
  FaInfoCircle,
  FaPhone,
  FaGamepad,
  FaDatabase,
} from 'react-icons/fa'
import { TbFileCv } from 'react-icons/tb'
import { GrGamepad } from 'react-icons/gr'
import Container from './Container'
import useAuthStore from '../store/useAuthStore'
import TextLink from './TextLink' // Import your reusable TextLink components

const GuestFooter = () => {
  const accessToken = useAuthStore((state) => state.accessToken)

  // Determine whether to show text or just icons
  const showText = useBreakpointValue({ base: false, md: true })

  const links = [
    { to: '/', label: 'Home', icon: FaHome },
    { to: '/notes', label: 'Notes', icon: FaStickyNote },
    { to: '/contact', label: 'Contact', icon: FaAddressCard },
    { to: '/p5', label: 'Game P5', icon: FaGamepad },
    { to: '/phas', label: 'Game Phas', icon: GrGamepad },
    { to: '/search', label: 'Search', icon: FaCheck },
    { to: '/mysql_db', label: 'DB', icon: FaDatabase },
    { to: '/about', label: 'About', icon: FaInfoCircle },
  ]

  if (accessToken) {
    links.splice(-1, 0, { to: '/call', label: 'Call', icon: FaPhone })
    links.splice(1, 0, { to: '/cv', label: 'CV', icon: TbFileCv })
  }

  return (
    <Container as={Stack} py={4} bg="teal.500" rounded={{ md: '2xl' }} bottom="0" width="100%">
      <Stack direction="row" justify="center" align="center" spacing={6} color="black">
        {links.map(({ to, label, icon }) => (
          <TextLink key={to} to={to}>
            <Stack direction="column" align="center">
              <Icon as={icon} boxSize={6} />
              {showText && <Text fontSize="sm">{label}</Text>}
            </Stack>
          </TextLink>
        ))}
      </Stack>
    </Container>
  )
}

export default GuestFooter
