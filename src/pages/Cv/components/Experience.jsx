import React from 'react'
import { Text } from '@chakra-ui/react'
import Sico from './expCompanies/Sico'
import RightAbove from './expCompanies/RightAbove'

const Experience = () => {
  return (
    <Text>
      <Text as="b" fontSize="larger">
        Commercial Experience
      </Text>
      <Sico />
      <RightAbove />
    </Text>
  )
}

export default Experience
