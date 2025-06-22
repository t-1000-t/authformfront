import React from 'react'
import { Wrap } from '@chakra-ui/react'

const CardWrap = ({ children }) => {
  return (
    <Wrap
      maxW="210mm" // A4 width
      minH="297mm" // A4 height
      boxShadow="md" // Optional: add shadow for paper-like effect
      bg="blue.50"
      align="center"
      justify="left"
      spacing="20px" // Add some spacing between items
      pl={20}
      pr={10} // Add some padding right
      pt={15} // Add some padding top
      pb={15} // Add some padding bottom
    >
      {children}
    </Wrap>
  )
}

export default CardWrap
