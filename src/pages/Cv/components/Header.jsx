import React, { useRef } from 'react'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { FaRegEdit } from 'react-icons/fa'
import useAuthStore from '../../../store/useAuthStore'
import ModalEdit from './Modal/ModalEdit'
import useModalEdit from '../../../utils/hooks/useModalEdit'

const Header = () => {
  const { putCvInfo, cv } = useAuthStore()
  const initialRef = useRef(null)
  const { title } = cv.user.newData

  const { isOpen, text, onOpen, onClose, onChange } = useModalEdit(title)

  const handleSubmit = () => {
    if (!text.posname || !text.fullname) {
      onClose()
      return
    }

    putCvInfo(text, cv).then(() => onClose())
  }

  return (
    <Box mb="20px">
      <Flex mb="20px" justifyContent="space-between" alignItems="flex-start">
        <Box>
          <Heading as="h1" fontSize="24px" fontWeight="bold" mb="10px">
            {title.posname}
          </Heading>
          <Heading as="h2" fontSize="22px" fontWeight="bold">
            {title.fullname}
          </Heading>
        </Box>
        <Button size="xs" mt={4} onClick={onOpen} bg="white.50" _hover={{ bg: 'green.200' }}>
          <FaRegEdit />
        </Button>

        <ModalEdit
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
          text={text}
          onChange={onChange}
          initialRef={initialRef}
        />
      </Flex>
    </Box>
  )
}

export default Header
