import React, { useEffect, useState } from 'react'
import {
  Alert,
  AlertIcon,
  Button,
  CloseButton,
  Flex,
  Image,
  Stack,
  Text,
  Highlight,
  Avatar,
  Tooltip,
  Link as ChakraLink,
  MenuItem,
  MenuList,
  MenuButton,
  Menu,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import useAuthStore from '../store/useAuthStore'
import Container from './Container'
import ThemeToggleButton from '../utils/ThemeToggleButton'
// import useLocalStorage from '../utils/hooks/useLocalStorage'

// const MotionButton = motion(Button)
const MotionBox = motion.div

// eslint-disable-next-line react/prop-types
const GuestNavLogout = ({ name, idUserName }) => {
  const { logout, user, isGlobalLoading } = useAuthStore()
  // const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [openTooltip, setOpenTooltip] = useState(false)

  useEffect(() => {
    let timer
    if (user?.username && isGlobalLoading) {
      setOpenTooltip(true)
      timer = setTimeout(() => setOpenTooltip(false), 3000)
    }
    return () => clearTimeout(timer)
  }, [user?.username, isGlobalLoading])

  const handleLogOut = async () => {
    // setIsLoading(true)
    setError(false)
    const { id } = user.userData

    try {
      await logout(id)
    } catch (err) {
      const msg = err.response?.data?.message || err.message
      setError(msg)
    } finally {
      // setIsLoading(false)
    }
  }

  return (
    <Container>
      <Flex
        mx="auto"
        justify="space-between"
        align="center"
        py={4}
        px={4}
        borderBottom="1px solid"
        borderColor="gray.200"
        borderRadius="lg"
        boxShadow="sm"
        flexWrap="wrap"
      >
        {/* Logo */}
        <ChakraLink as={RouterLink} to="/">
          <Flex align="center">
            <Image src="/images/motherland.svg" h={{ base: 10, md: 16 }} alt="Logo" draggable={false} />
          </Flex>
        </ChakraLink>
        <ThemeToggleButton />
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 3, md: 4 }}
          align="center"
          mt={{ base: 4, md: 0 }}
          flexWrap="wrap"
          p={3}
          bg="gray.200"
          borderRadius="md"
          boxShadow="sm"
        >
          {idUserName && (
            <Tooltip
              isOpen={openTooltip}
              hasArrow
              placement="left-start"
              bg="brand.500"
              color="white"
              px={3}
              py={2}
              borderRadius="md"
              fontSize="sm"
              fontWeight="medium"
              boxShadow="md"
              label={
                <MotionBox
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <Highlight
                    query={['Welcome', 'page']}
                    styles={{
                      px: 2,
                      py: 1,
                      rounded: 'full',
                      bg: 'white',
                      color: 'brand.700',
                    }}
                  >
                    Welcome to your page!
                  </Highlight>
                </MotionBox>
              }
            >
              <Menu>
                <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDown size={16} />} px={{ base: 2, md: 3 }}>
                  <Flex align="center" gap={3}>
                    <Avatar size="sm" name={name} src={`https://i.pravatar.cc/150?u=${idUserName}`} />
                    <Text fontWeight="semibold" fontSize={{ base: 'md', md: 'lg' }}>
                      {name}
                    </Text>
                  </Flex>
                </MenuButton>

                <MenuList>
                  <MenuItem as={RouterLink} to="/">
                    Home
                  </MenuItem>
                  <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Tooltip>
          )}
        </Stack>

        {/* Error Message */}
        {error && (
          <Alert
            status="error"
            mt={4}
            borderRadius="md"
            boxShadow="md"
            position="relative"
            color="red.800"
            bg="red.100"
            fontWeight="medium"
          >
            <AlertIcon />
            {error}
            <CloseButton position="absolute" right="8px" top="8px" onClick={() => setError(false)} />
          </Alert>
        )}
      </Flex>
    </Container>
  )
}

export default GuestNavLogout
