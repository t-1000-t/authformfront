import React from 'react'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

const About = ({ newData }) => {
  const { email, linked, lang, local } = newData.info
  return (
    <Flex mb="20px">
      {/* Left Column - Text */}
      <Box flex={1}>
        <Text mb="5px">
          <Text as="span" textDecoration="underline">
            Email
          </Text>
          :&nbsp;{email}
        </Text>
        <Text mb="5px">
          <Text as="span" textDecoration="underline">
            LinkedIn
          </Text>
          :&nbsp;{linked}
        </Text>
        <Text mb="5px">
          <Text as="span" textDecoration="underline">
            Location
          </Text>
          :&nbsp;{local}
        </Text>

        <Heading as="h3" fontWeight="bold" fontSize="18px" my="15px">
          Languages:
        </Heading>
        <Text>{lang}</Text>
      </Box>

      {/* Right Column - Image */}
      <Flex flex={1} justifyContent="center" alignItems="center">
        <Image
          src="/images/I_19.jpg"
          alt="Vlad"
          maxWidth="280px"
          height="auto"
          border="1px solid"
          borderColor="gray.200"
        />
      </Flex>
    </Flex>
  )
}

export default About
