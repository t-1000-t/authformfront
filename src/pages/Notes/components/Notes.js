import { useEffect, useState, useCallback  } from 'react'
import {
  Box,
  Button,
  Container, Flex,
  FormControl,
  Heading, List, ListIcon, ListItem, Spacer,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import useAuthStore from 'store/useAuthStore'
import { motion } from 'framer-motion'
import { MdCheckCircle } from 'react-icons/md'
import axios from 'utils/axios'

const MotionButton = motion(Button)

export default function Notes() {
  const { noteText, deleteNote, accessToken, user, list, setNoteList } = useAuthStore()
  const [value, setValue] = useState('')

  // Define fetchNotes function using useCallback
  const fetchNotes = useCallback(async () => {
    try {
      const response = await axios.get('/api/auth/notes', { params: { email: user?.userData?.email }})
      setNoteList(response.data.notes)
    } catch (error) {
      console.error('Error fetching notes:', error)
    }
  }, [user?.userData?.email, setNoteList])

  useEffect(() => {
    if (user?.userData?.email) {
      fetchNotes().then()
    }
  }, [user?.userData?.email, fetchNotes]) // Include fetchNotes in the dependency array

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

  async function handleDelete(id) {

    if (!accessToken) {
      console.log('Access token not available')
      return
    }

    try {
      const result = await deleteNote(id)
      if (result.status === 200 && result.statusText === 'OK') {
        fetchNotes()
      }
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
      <List spacing={3}>
        {list?.toReversed().map((item) => {
          return(
            <ListItem>
              <Flex>
                <Box>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  {item.text}
                </Box>
                <Spacer/>
                <Button
                  size='sm'
                  height='28px'
                  width='100px'
                  border='1px'
                  borderColor='red.500'
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </Button>
              </Flex>
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}
