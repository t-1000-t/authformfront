import React from 'react'
import { Box, Button, Flex, Image } from '@chakra-ui/react'
import { FaRegEdit } from 'react-icons/fa'
import ModalEdit from './ModalEdit'
import useAuthStore from '../../../store/useAuthStore'
import useModalEdit from '../../../utils/hooks/useModalEdit'
import listContact from '../../../services/listContact'

const About = () => {
  const { putCvInfo, cv } = useAuthStore()
  const { contacts } = cv.user.newData

  const { onClose, onOpen, onChange, text, isOpen } = useModalEdit(contacts)

  const handleSubmit = () => {
    if (!text.email || !text.linkedin || !text.location || !text.language) {
      onClose()
      return
    }

    putCvInfo(text, cv).then(() => onClose())
  }

  return (
    <Flex w="100%" justifyContent="space-between" mt="20px">
      <Flex>
        <Box>{listContact(contacts)}</Box>
        <ModalEdit onSubmit={handleSubmit} onChange={onChange} onClose={onClose} text={text} isOpen={isOpen} />
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
