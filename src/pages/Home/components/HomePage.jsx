import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// import Container from '../../../layouts/Container'
import HighlightBox from '../../../utils/StylesBoxes/HighlightBox'
import HomeParticlesField from './HomeParticlesField'

const MotionButton = motion(Button)

const HomePage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const [count, setCount] = useState(200)
  const [radius, setRadius] = useState(50)
  const [color, setColor] = useState('#77f')
  const [bg, setBg] = useState('#03040a')

  return (
    <Box w="100vw" h="100vh" position="relative" overflow="hidden">
      <Stack direction={{ base: 'column-reverse', md: 'row' }} spacing={{ base: 8, md: 16 }} w="full" align="center">
        <HomeParticlesField count={count} linkRadius={radius} color={color} bgColor={bg} />
        <VStack align="stretch" spacing={3}>
          <Text fontWeight="bold">Interactive Controls</Text>

          <Box>
            <FormLabel mb={1}>Count ({count})</FormLabel>
            <Slider min={100} max={1500} value={count} onChange={(val) => setCount(val)} focusThumbOnChange={false}>
              <SliderTrack>
                <SliderFilledTrack bg="blue.400" />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>

          <Box>
            <FormLabel mb={1}>Link Radius ({radius})</FormLabel>
            <Slider min={40} max={200} value={radius} onChange={(val) => setRadius(val)} focusThumbOnChange={false}>
              <SliderTrack>
                <SliderFilledTrack bg="teal.400" />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>

          <Box>
            <FormLabel mb={1}>Color</FormLabel>
            <Input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              p={0}
              h="30px"
              w="100%"
              bg="transparent"
              border="none"
              cursor="pointer"
            />
          </Box>

          <Box>
            <FormLabel mb={1}>Background</FormLabel>
            <Input
              type="color"
              value={bg}
              onChange={(e) => setBg(e.target.value)}
              p={0}
              h="30px"
              w="100%"
              bg="transparent"
              border="none"
              cursor="pointer"
            />
          </Box>
        </VStack>
        <Flex flex={1} p={{ base: 4, md: 8 }} pl={0} direction="column" justify="center" mt={16}>
          <Box mb={8}>
            <Heading
              as="h1"
              fontSize={{ base: '3xl', sm: '4x1', md: '5xl', lg: '6xl' }}
              color="brand.800"
              lineHeight="1.2"
              mb={4}
            >
              Testing the AUTH form
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'xl' }} color="brand.700">
              Just fill out the request form, please
            </Text>
          </Box>
          <HighlightBox as={MotionButton}>
            <MotionButton
              as={Link}
              to="/signup"
              bg="brand.500"
              color="white"
              _hover={{ bg: 'brand.600' }}
              _active={{ bg: 'brand.700' }}
              borderRadius="lg"
              size={isMobile ? 'md' : 'lg'}
              width={{ base: 'full' }}
              height={{ base: '48px', md: '64px' }}
              fontSize={{ base: 'xl', md: '2xl' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Make Now
            </MotionButton>
          </HighlightBox>
        </Flex>
        <Flex flex={1} justify="center" align="center" position="relative" overflow="hidden">
          <Image
            bg="accent.500"
            p={0.5}
            borderRadius="lg"
            alt="Login image"
            objectFit="cover"
            src="/images/typing_on_board_1919x1679.jpg"
            fullbackSrc="/images/typing_on_board_600x525.jpg"
            width="100%"
            height="100%"
            maxH="450px"
            loading="eager" // Prioritize loading
          />
        </Flex>
      </Stack>
    </Box>
  )
}

export default HomePage
