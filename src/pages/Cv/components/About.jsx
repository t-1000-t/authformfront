import React from 'react'
import { Box, Button, Flex, Image } from '@chakra-ui/react'
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

  // const keysContacts = Object.keys(contacts)
  console.log('Object.entries(contacts)', Object.entries(contacts))

  return (
    <Flex mb="20px" justifyContent="space-around" alignItems="flex-start">
      <Box>{listContact(contacts)}</Box>

      <Button mt={4} onClick={onOpen}>
        Edit
      </Button>

      <ModalEdit onSubmit={handleSubmit} onChange={onChange} onClose={onClose} text={text} isOpen={isOpen} />

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
