import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Flex, Stack, Image, useBreakpointValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Container from './Container'

const MotionButton = motion(Button)

const GuestNav = () => {
  const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' })

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
        bg="white"
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

        {/* Buttons */}
        <Stack direction="row" spacing={4} align="center" mt={{ base: 4, md: 0 }} flexWrap="wrap">
          <MotionButton
            as={Link}
            to="/signup"
            bg="brand.500"
            color="white"
            _hover={{ bg: 'brand.600' }}
            _active={{ bg: 'brand.700' }}
            borderRadius="lg"
            px={{ base: 4, md: 6 }}
            py={{ base: 2, md: 4 }}
            fontSize={{ base: 'md', md: 'lg' }}
            size={buttonSize}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            Sign Up
          </MotionButton>

          <MotionButton
            as={Link}
            to="/login"
            bg="accent.500"
            color="white"
            _hover={{ bg: 'accent.600' }}
            _active={{ bg: 'accent.700' }}
            borderRadius="lg"
            px={{ base: 4, md: 6 }}
            py={{ base: 2, md: 4 }}
            fontSize={{ base: 'md', md: 'lg' }}
            size={buttonSize}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            Login
          </MotionButton>
        </Stack>
      </Flex>
    </Container>
  )
}

export default GuestNav
