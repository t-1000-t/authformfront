import React, { useRef } from 'react'
import { Box, Button, Flex, Image } from '@chakra-ui/react'
import { FaRegEdit } from 'react-icons/fa'
import ModalEdit from './Modal/ModalEdit'
import useAuthStore from '../../../store/useAuthStore'
import useModalEdit from '../../../utils/hooks/useModalEdit'
import listItems from '../../../services/listItems'
import useDetectChange from '../../../utils/hooks/useDetectChange'

const About = () => {
  const { putCvInfo, cv, setCurrentData } = useAuthStore()
  const initialRef = useRef(null)
  const { contacts } = cv.user.newData
  const { onClose, onOpen, onChange, text, isOpen } = useModalEdit(contacts)
  useDetectChange()

  const handleSubmit = () => {
    if (!text.email || !text.linkedin || !text.location || !text.languages) {
      onClose()
      return
    }

    putCvInfo(text, cv).then(() => {
      setCurrentData({ section: 'strContacts', localData: contacts })
      onClose()
    })
  }

  return (
    <Flex w="100%" justifyContent="space-between" mt="20px">
      <Flex>
        <Box>{listItems(contacts)}</Box>
        <ModalEdit
          onSubmit={handleSubmit}
          onChange={onChange}
          onClose={onClose}
          text={text}
          isOpen={isOpen}
          initialRef={initialRef}
        />
        <Button size="xs" mt={4} onClick={onOpen} bg="blue.50" _hover={{ bg: 'green.200' }}>
          <FaRegEdit />
        </Button>
      </Flex>
      {/* Right Column - Image */}
      <Box>
        <Image
          src="/images/I_19.jpg"
          alt="Vlad"
          maxWidth="280px"
          height="auto"
          border="1px solid"
          borderColor="gray.200"
        />
      </Box>
    </Flex>
  )
}

export default About
