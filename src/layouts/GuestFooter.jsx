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
import { motion } from 'framer-motion'
import { TbFileCv } from 'react-icons/tb'
import { GrGamepad } from 'react-icons/gr'
import Container from './Container'
import useAuthStore from '../store/useAuthStore'
import TextLink from './TextLink' // Import your reusable TextLink components

const MotionStack = motion(Stack)
const MotionBox = motion(Box)

const GuestFooter = () => {
  const accessToken = useAuthStore((state) => state.accessToken)

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
    <Container
      as={Stack}
      py={4}
      bg="teal.500"
      rounded={{ md: '2xl' }}
      bottom="0"
      width="100%"
      overflowX="auto"
      sx={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        scrollbarWidth: 'none',
      }}
    >
      <MotionStack
        direction="row"
        justify="center"
        align="center"
        spacing={6}
        color="black"
        px={4}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.07,
            },
          },
        }}
      >
        {links.map(({ to, label, icon }) => (
          <MotionBox
            key={to}
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
          >
            <TextLink to={to}>
              <Stack direction="column" align="center" spacing={1}>
                <Icon as={icon} boxSize={iconSize} />
                {showText && <Text fontSize="sm">{label}</Text>}
              </Stack>
            </TextLink>
          </MotionBox>
        ))}
      </MotionStack>
    </Container>
  )
}

export default GuestFooter
