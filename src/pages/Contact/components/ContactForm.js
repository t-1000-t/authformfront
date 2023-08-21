import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Box,
  Button,
  Input,
  VStack,
  FormControl,
  Textarea,
  InputGroup,
  InputLeftElement,
  chakra,
} from '@chakra-ui/react'
import { FaUserAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function ContactForm() {
  const history = useHistory()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const CFaUserAlt = chakra(FaUserAlt)
  const CMdOutlineEmail = chakra(MdEmail)

  function encode(data) {
    console.log('data', data)
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': event.target.getAttribute('name'),
        name,
        email,
        message,
      }),
    })
      .then(() => history.push('/success'))
      .catch((error) => alert(error))
  }

  return (
    <Box w={{ base: 'full', md: 'auto' }} pb={4} px={4}>
      <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <VStack spacing={6} maxW="lg" w={{ md: 'md' }} mx="auto">
          <FormControl id="lastName">
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<CFaUserAlt color="gray.300" />} />
              <Input
                color="gray.700"
                value={name}
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
                onBlur={(e) => setName(e.target.value.trim())}
                required
              />
            </InputGroup>
          </FormControl>
          <FormControl id="email">
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<CMdOutlineEmail color="gray.300" />} />
              <Input
                value={email}
                type="email"
                placeholder="email address"
                onChange={(e) => setEmail(e.target.value)}
                onBlur={(e) => setEmail(e.target.value.trim())}
                required
              />
            </InputGroup>
          </FormControl>

          <FormControl id="message">
            <Textarea
              name="message"
              placeholder="Message"
              mt={1}
              rows={6}
              shadow="sm"
              focusBorderColor="brand.400"
              fontSize={{ sm: 'sm' }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </FormControl>

          <Button type="submit" size="lg" colorScheme="blue">
            Send Message
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default ContactForm
