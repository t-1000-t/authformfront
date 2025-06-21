import React from 'react'
import { Card, Text } from '@chakra-ui/react'
import Sico from './expCompanies/Sico'
import RightAbove from './expCompanies/RightAbove'

const Experience = () => {
  return (
    <Card>
      <Text as="b" fontSize="larger">
        Commercial Experience
      </Text>
      <Sico />
      <RightAbove />
    </Card>
  )
}

export default Experience
