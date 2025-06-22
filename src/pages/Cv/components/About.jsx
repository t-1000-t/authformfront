import React from 'react'
import { Image, Text, WrapItem } from '@chakra-ui/react'

const About = () => {
  return (
    <>
      <WrapItem>
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
      </WrapItem>
      <WrapItem pl={20}>
        <Image src="/images/I_19.jpg" alt="Vlad" />
      </WrapItem>
    </>
  )
}

export default About
