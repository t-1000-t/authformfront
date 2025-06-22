import React from 'react'
import { Text } from '@chakra-ui/react'

const Education = () => {
  return (
    <Text>
      <br />
      <Text as="b" fontSize="larger">
        Education:
      </Text>
      <br />
      <Text as="i">
        Odessa’s National Polytechnic&nbsp;
        <Text as="u">University:</Text>
      </Text>
      <br />
      <Text as="u">Diploma</Text>
      &nbsp;2006-2011, Computer Systems and Networks.
      <br />
      <br />
      <Text as="i">School GoIT:</Text>
      <br />
      <Text as="u">Certificate</Text>
      &nbsp;2019.2 – 2020.4
    </Text>
  )
}

export default Education
