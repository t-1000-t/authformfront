import React, { useRef } from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { FaRegEdit } from 'react-icons/fa'
import ModalEdit from './Modal/ModalEdit'
import useAuthStore from '../../../store/useAuthStore'
import useModalEdit from '../../../utils/hooks/useModalEdit'
import listItems from '../../../services/listItems'

const Education = () => {
  const { putCvInfo, cv } = useAuthStore()
  const initialRef = useRef(null)
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
    <Flex direction="column" w="100%" justifyContent="left" pt="20px">
      <Text as="b" fontSize="larger" pb="10px">
        Education:
      </Text>
      <Flex>
        <Box>
          <Box>{listItems(education)}</Box>
          <ModalEdit
            isOpen={isOpen}
            onSubmit={handleSubmit}
            text={text}
            onClose={onClose}
            onChange={onChange}
            initialRef={initialRef}
          />
        </Box>
        <Button onClick={onOpen} size="xs" bg="blue.50" _hover={{ bg: 'green.200' }}>
          <FaRegEdit />
        </Button>
      </Flex>
    </Flex>
  )
}

export default Education
