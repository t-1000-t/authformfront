import React from 'react'
import { Container, Stack, Icon, Text, useBreakpointValue } from '@chakra-ui/react'
import { FaHome, FaStickyNote, FaEnvelope, FaCheck, FaInfoCircle, FaPhone, FaGamepad } from 'react-icons/fa'
import useAuthStore from '../store/useAuthStore'
import TextLink from './TextLink' // Import your reusable TextLink component

export default function GuestFooter() {
  const accessToken = useAuthStore((state) => state.accessToken)

  // Determine whether to show text or just icons
  const showText = useBreakpointValue({ base: false, md: true })

  const links = [
    { to: '/', label: 'Home', icon: FaHome },
    { to: '/notes', label: 'Notes', icon: FaStickyNote },
    { to: '/contact', label: 'Contact', icon: FaEnvelope },
    { to: '/game', label: 'Game', icon: FaGamepad },
    { to: '/check', label: 'Check', icon: FaCheck },
    { to: '/about', label: 'About', icon: FaInfoCircle },
  ]

  if (accessToken) {
    links.splice(4, 0, { to: '/call', label: 'Call', icon: FaPhone })
  }

  return (
    <Container as={Stack} py={4} bg="teal.500" maxW="1440px" rounded={{ md: '2xl' }}>
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
