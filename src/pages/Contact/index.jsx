import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import Page from '../../components/Page'

import ContactMe from './components/ContactMe'
import ContactForm from './components/ContactForm'

const ContactDefault = () => {
  return (
    <Page>
      <Box bg="white">
        <ContactMe />
        <ContactForm />
        <Text textAlign="center" pb={6} color="gray.600">
          or email me at{' '}
          <Box as="a" href="mailto:testenet@ukr.net" color="blue.500">
            testenet@ukr.net
          </Box>
        </Text>
      </Box>
    </Page>
  )
}

export default ContactDefault
