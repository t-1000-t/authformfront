import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import useAuthStore from 'store/useAuthStore'
import { motion } from 'framer-motion'

const MotionButton = motion(Button)

export default function Notes() {
  const { noteText, accessToken, user } = useAuthStore()
  const [value, setValue] = useState('')

  useEffect(() => {

  }, [])

  async function handleInputChange(e) {
    e.preventDefault()

    if (!accessToken) {
      console.log('Access token not available')
      return
    }

    try {
      await noteText({ text: value, email: user.userData.email}) // Assuming noteText sends the note to the server
      console.log('Note sent successfully')

      // Clear the textarea after successfully sending the note
      setValue('')
    } catch (error) {
      console.error('Error sending note:', error)
    }
  }

  return (
    <Container maxW={'6xl'} py={24} px={{ base: 6, md: 12 }}>
      <form onSubmit={handleInputChange}>
        <Box position="relative" maxW="850px" mx="auto" mb={{ base: 4, md: 16 }}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }} textAlign={'center'} color="#204E78">
            LIST of MY NOTES
          </Heading>
          <FormControl>
            <Textarea
              value={value}
              placeholder='Please, write some note'
              onChange={(e) => setValue(e.target.value)}
              size='sm'
            />
          </FormControl>
          <Stack spacing={10}>
            <MotionButton
              colorScheme="teal"
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </MotionButton>
          </Stack>
        </Box>
      </form>
    </Container>
  )
}
