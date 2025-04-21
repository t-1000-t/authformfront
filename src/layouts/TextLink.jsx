import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const TextLink = ({ to, children, isExternal = false, ...props }) => {
  return (
    <ChakraLink
      as={isExternal ? 'a' : RouterLink}
      to={isExternal ? undefined : to}
      href={isExternal ? to : undefined}
      isExternal={isExternal}
      fontWeight="medium"
      fontSize="md"
      color="black"
      _hover={{ textDecoration: 'underline', color: 'white' }}
      {...props}
    >
      {children}
    </ChakraLink>
  )
}

// Add PropTypes for props validation
TextLink.propTypes = {
  to: PropTypes.string.isRequired, // "to" must be a string and required
  children: PropTypes.node.isRequired, // "children" can be any React node and is required
  isExternal: PropTypes.bool, // "isExternal" is optional and must be a boolean
}

// Define defaultProps to fix ESLint warning
TextLink.defaultProps = {
  isExternal: false, // Default to false if not provided
}

export default TextLink
