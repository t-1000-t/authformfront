import React from 'react'
import { Text } from '@chakra-ui/react'
import getFirstBigLetter from './getFirstBigLetter'

const listItems = (obj) => {
  if (!obj) return () => {}
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

    // Make links clickable
    if (name.toLowerCase().includes('own')) {
      displayValue = (
        <a
          href={`https://${value}`}
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
        <Text as="span">
          <i>{getFirstBigLetter(name)}</i>
        </Text>
        :&nbsp;{displayValue}
      </Text>
    )
  })
}

export default listItems
