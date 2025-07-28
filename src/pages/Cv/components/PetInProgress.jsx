import React from 'react'
import { Text } from '@chakra-ui/react'

const PetInProgress = () => {
  return (
    <Text fontSize="md" pt="20px">
      <Text as="b" fontSize="larger">
        Pet-Project
      </Text>
      &nbsp;(In Progress):
      <br />
      <Text as="i" fontSize="larger">
        Auth-Form:
      </Text>{' '}
      <Text as="u">goofoo.org</Text>
      <br />
      <Text as="i" fontSize="larger">
        React Hooks Task:
      </Text>{' '}
      Create Authentication and Verification Form.
      <br />
      <Text as="i" fontSize="larger">
        Technologies:
      </Text>{' '}
      Node.js (Express), MongoDB, Netlify, Heroku, Chakra UI, Socket.io, Console-cloud google.
      <br />
      <Text as="i" fontSize="larger">
        Responsibilities:
      </Text>{' '}
      Develop structure, accessibility, responsive, routing, token, verification, feedback form, video stream between
      users.
    </Text>
  )
}

export default PetInProgress
