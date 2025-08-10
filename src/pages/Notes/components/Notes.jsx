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

// Keep this in sync with the value used by your GuestLayout/GuestFooter
const FOOTER_HEIGHT_PX = 80

const Notes = () => {
  const { getDataNotes, noteText, deleteNote, accessToken, user, listUp, setNoteList } = useAuthStore()
  const toast = useToast({ position: 'top-right' })
  const email = user?.userData?.email
  const [value, setValue] = useState('')

  const getNotes = useCallback(async () => {
    try {
      const result = await getDataNotes(email)
      setNoteList(result.notes)
      return result
    } catch (error) {
      logError(error)
      return null
    }
  }, [email, getDataNotes, setNoteList])

  useEffect(() => {
    if (email) getNotes()
  }, [email, getNotes])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!accessToken) return logError('Access token not available')

    try {
      const promise = noteText({ text: value, email }).then((result) => {
        if (!result || !result.data) return Promise.reject(new Error('Invalid response from server'))
        return result
      })
      promiseBasedToast(toast, promise)
      setValue('')
      return null
    } catch (error) {
      logError(error)
      return null
    }
  }

  const handleDelete = (id) => {
    if (!accessToken) return logError('Access token not available')

    try {
      const promise = deleteNote(id).then((result) => {
        if (result.status === 200 && result.statusText === 'OK') getNotes()
        return result
      })
      promiseBasedToastDel(toast, promise)
      return null
    } catch (error) {
      logError(error)
      return null
    }
  }

  const handleCombineKeysDownUp = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <Container
      // Make this page a flex column that can shrink, so the list area can become a scroller
      display="flex"
      flexDirection="column"
      h="100%"
      minH={0} // <— important in flex layouts
      maxW="6xl"
      py={14}
      px={{ base: 6, md: 12 }}
    >
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

      {/* This Box is the ONLY scroller on the page for the notes list */}
      <Box
        mt={4}
        flex="1 1 auto"
        minH={0} // <— lets it shrink and overflow in flex
        overflowY="auto"
        pr="20px"
        pb={`${FOOTER_HEIGHT_PX}px`} // <— prevents last items hiding behind the fixed footer
        sx={{ overscrollBehavior: 'contain' }}
      >
        <List spacing={3}>
          {listUp?.toReversed().map((item) => (
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
          ))}
        </List>
      </Box>
    </Container>
  )
}

export default Notes
