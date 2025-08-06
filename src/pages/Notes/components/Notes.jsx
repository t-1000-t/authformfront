import React, { useState, useCallback, useEffect } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Stack,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { MdCheckCircle } from 'react-icons/md'
import useAuthStore from '../../../store/useAuthStore'
import Container from '../../../layouts/Container'
import { logError } from '../../../utils/services'
import { promiseBasedToast, promiseBasedToastDel } from '../../../services/promiseBasedToast'

const MotionButton = motion(Button)

const Notes = () => {
  const { getDataNotes, noteText, deleteNote, accessToken, user, listUp, setNoteList } = useAuthStore()
  const toast = useToast({ position: 'top-right' })
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

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!accessToken) {
      logError('Access token not available')
      return
    }

    try {
      const promise = noteText({ text: value, email: user.userData.email }).then((result) => {
        if (!result || !result.data) {
          return Promise.reject(new Error('Invalid response from server'))
        }
        return result
      })
      promiseBasedToast(toast, promise)

      logError('Note sent successfully')
      setValue('')
    } catch (error) {
      logError(error)
    }
  }

  function handleDelete(id) {
    if (!accessToken) {
      logError('Access token not available')
      return
    }

    try {
      const promise = deleteNote(id).then((result) => {
        if (result.status === 200 && result.statusText === 'OK') {
          getNotes().then()
        }
      })
      promiseBasedToastDel(toast, promise)

      logError('Note deleted')
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
    <Container minH="calc(100vh - 200px)" maxW="6xl" py={14} px={{ base: 6, md: 12 }}>
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
        {listUp &&
          listUp?.toReversed().map((item) => {
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
