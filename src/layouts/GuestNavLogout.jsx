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
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useAuthStore from '../store/useAuthStore'
import Container from './Container'
import ThemeToggleButton from '../utils/ThemeToggleButton'
// import useLocalStorage from '../utils/hooks/useLocalStorage'

const MotionButton = motion(Button)
const MotionBox = motion.div

// eslint-disable-next-line react/prop-types
const GuestNavLogout = ({ name, idUserName }) => {
  const { logout, user } = useAuthStore()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [openTooltip, setOpenTooltip] = useState(false)

  useEffect(() => {
    let timer
    if (user?.username) {
      setOpenTooltip(true)
      timer = setTimeout(() => setOpenTooltip(false), 3000)
    }
    return () => clearTimeout(timer)
  }, [user?.username])

  const handleLogOut = async () => {
    setIsLoading(true)
    setError(false)
    const { id } = user.userData

    try {
      await logout(id)
    } catch (err) {
      const msg = err.response?.data?.message || err.message
      setError(msg)
    } finally {
      setIsLoading(false)
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
        <Link to="/">
          <Flex align="center">
            <Image src="/images/motherland.svg" h={{ base: 10, md: 16 }} alt="Logo" draggable={false} />
          </Flex>
        </Link>
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
              <Flex align="center" gap={3}>
                <Avatar
                  size="md"
                  name={name}
                  src={`https://i.pravatar.cc/150?u=${idUserName}`}
                  border="2px solid"
                  // borderColor="brand.500"
                />
                <Text fontWeight="semibold" fontSize={{ base: 'md', md: 'lg' }} whiteSpace="nowrap">
                  {name},
                </Text>
              </Flex>
            </Tooltip>
          )}

          {/* Logout Button */}
          <MotionButton
            as={Link}
            to="/"
            bg="brand.500"
            color="white"
            _hover={{ bg: 'brand.600' }}
            _active={{ bg: 'brand.700' }}
            borderRadius="lg"
            px={{ base: 4, md: 6 }}
            py={{ base: 2, md: 4 }}
            fontSize={{ base: 'md', md: 'lg' }}
            isLoading={isLoading}
            onClick={handleLogOut}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            Logout
          </MotionButton>
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
