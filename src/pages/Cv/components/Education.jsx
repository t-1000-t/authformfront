import React from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { FaRegEdit } from 'react-icons/fa'
import ModalEdit from './ModalEdit'
import useAuthStore from '../../../store/useAuthStore'
import useModalEdit from '../../../utils/hooks/useModalEdit'
import listContact from '../../../services/listContact'

const Education = () => {
  const { putCvInfo, cv } = useAuthStore()
  console.log('cv.user.newData', cv.user.newData)
  const { education } = cv.user.newData

  const { onClose, onOpen, onChange, text, isOpen } = useModalEdit(education)

  const handleSubmit = () => {
    if (!education.diploma || !education.course) {
      onClose()
      return
    }

    putCvInfo(text, cv).then(() => onClose())
  }

  return (
    <Flex direction="column" w="100%" justifyContent="left" mt="20px">
      <Text as="b" fontSize="larger" pb="10px">
        Education:
      </Text>
      <Flex>
        <Box>
          <Box>{listContact(education)}</Box>
          <ModalEdit onSubmit={handleSubmit} text={text} onClose={onClose} onChange={onChange} isOpen={isOpen} />
        </Box>
        <Button onClick={onOpen} size="xs" bg="blue.50" _hover={{ bg: 'green.200' }}>
          <FaRegEdit />
        </Button>
      </Flex>
    </Flex>
  )
}

export default Education
