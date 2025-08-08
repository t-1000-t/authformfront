import React from 'react'
import { Stack, Icon, Text, useBreakpointValue, Box } from '@chakra-ui/react'
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
import TextLink from './TextLink'
import useElasticScroll from '../utils/hooks/useElasticScrool' // Import your reusable TextLink components

const GuestFooter = () => {
  const accessToken = useAuthStore((state) => state.accessToken)
  const footerRef = useElasticScroll()

  // Determine whether to show text or just icons
  const showText = useBreakpointValue({ base: false, md: true })

  // Adjust icon size based on screen size
  const iconSize = useBreakpointValue({ base: 4, sm: 5, md: 6 })

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
      <Box
        ref={footerRef}
        overflowX="auto"
        whiteSpace="nowrap"
        sx={{
          scrollBehavior: 'smooth',
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '10px',
          },
        }}
      >
        <Stack direction="row" justify="center" align="center" spacing={6} color="black">
          {links.map(({ to, label, icon }) => (
            <TextLink key={to} to={to}>
              <Stack direction="column" align="center">
                <Icon as={icon} boxSize={iconSize} />
                {showText && <Text fontSize="sm">{label}</Text>}
              </Stack>
            </TextLink>
          ))}
        </Stack>
      </Box>
    </Container>
  )
}

export default GuestFooter
