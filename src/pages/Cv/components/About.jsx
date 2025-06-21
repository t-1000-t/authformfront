import React from 'react'
import { Box, Card, Image, Text } from '@chakra-ui/react'

const About = () => {
  return (
    <Card direction={{ base: 'column', sm: 'row' }}>
      <Text>
        <Text as="u">Email:</Text> goognya@gmail.com <br />
        <Text as="u">LinkedIn</Text>
        <br />
        <Text as="u">Location:</Text> Dublin 15
        <br />
        <Text as="b" fontSize="larger">
          Languages:
        </Text>
        <br />
        English (intermediate), Russian (native), Ukrainian (fluent)
      </Text>
      <Box>
        <Image src="/images/I_19.jpg" />
      </Box>
    </Card>
  )
}

export default About
