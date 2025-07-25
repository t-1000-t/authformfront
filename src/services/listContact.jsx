import React from 'react'
import { Text } from '@chakra-ui/react'

const listContact = (obj) => {
  console.log('obj', obj)
  return Object.entries(obj).map(([name, value]) => {
    let displayValue = value

    // Make emails clickable
    if (name.toLowerCase().includes('email') || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      displayValue = (
        <a href={`mailto:${value}`} style={{ color: 'blue', textDecoration: 'underline' }}>
          {value}
        </a>
      )
    }

    // Make links clickable
    if (name.toLowerCase().includes('linkedin')) {
      displayValue = (
        <a
          href={`https://linkedin.com/in/${value}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'blue', textDecoration: 'underline' }}
        >
          {value}
        </a>
      )
    }

    return (
      <Text key={name} mb="5px">
        <Text as="span" textDecoration="underline">
          {name}
        </Text>
        :&nbsp;{displayValue}
      </Text>
    )
  })
}

export default listContact
