import React, { useState, useCallback, useEffect } from 'react'
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { MdCheckCircle } from 'react-icons/md'
import useAuthStore from '../../../store/useAuthStore'
import { logError } from '../../../utils/services'

const MotionButton = motion(Button)

const Notes = () => {
  const { getDataNotes, noteText, deleteNote, accessToken, user, listUp, setNoteList } = useAuthStore()
  const { email } = user.userData
  const [value, setValue] = useState('')

  // Define fetchNotes function using useCallback
  const getNotes = useCallback(async () => {
    try {
      const result = await getDataNotes(email).then()
      setNoteList(result.notes)
      return result
    } catch (error) {
      logError(error)
      return null
    }
  }, [email, setNoteList])

  useEffect(() => {
    if (email) {
      getNotes().then()
    }
  }, [email, getNotes]) // Include fetchNotes in the dependency array

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!accessToken) {
      logError('Access token not available')
      return
    }

    try {
      await noteText({ text: value, email: user.userData.email }) // Assuming noteText sends the note to the server
      logError('Note sent successfully')

      // Clear the textarea after successfully sending the note
      setValue('')
    } catch (error) {
      logError(error)
    }
  }

  async function handleDelete(id) {
    if (!accessToken) {
      logError('Access token not available')
      return
    }

    try {
      const result = await deleteNote(id)
      if (result.status === 200 && result.statusText === 'OK') {
        getNotes().then()
      }
    } catch (error) {
      logError(error)
    }
  }

  const handleCombineKeysDownUp = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault()
      handleSubmit(e).then()
    }
  }

  return (
    <Container maxW="6xl" py={24} px={{ base: 6, md: 12 }}>
      <form onSubmit={handleSubmit}>
        <Box position="relative" maxW="850px" mx="auto" mb={{ base: 4, md: 16 }}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }} textAlign="center" color="#204E78">
            LIST of MY NOTES
          </Heading>
          <FormControl>
            <Textarea
              onKeyDown={handleCombineKeysDownUp}
              value={value}
              placeholder="Please, write some note"
              onChange={(e) => setValue(e.target.value)}
              size="sm"
            />
          </FormControl>
          <Stack spacing={10}>
            <MotionButton colorScheme="teal" type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Submit
            </MotionButton>
          </Stack>
        </Box>
      </form>
      <List spacing={3}>
        {listUp?.toReversed().map((item) => {
          return (
            <ListItem key={item._id}>
              <Flex>
                <Box>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  {item.text}
                </Box>
                <Spacer />
                <Button
                  size="sm"
                  height="28px"
                  width="100px"
                  border="1px"
                  borderColor="red.500"
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

export default Notes
