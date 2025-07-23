import React, { useEffect, useRef } from 'react'
import { Box, Button, Heading } from '@chakra-ui/react'
import useAuthStore from '../../../store/useAuthStore'
import ModalEdit from './ModalEdit'
import useModalEdit from '../../../utils/hooks/useModalEdit'

const Header = ({ newData }) => {
  const { putCvInfo, cv } = useAuthStore()
  const initialRef = useRef(null)

  const { isOpen, text, onOpen, setText, onClose, onChange } = useModalEdit(newData)

  const handleSubmit = () => {
    if (!text.title || !text.fullname) {
      onClose()
      return
    }

    putCvInfo(text, cv).then(() => onClose())
    setText(text)
  }

  useEffect(() => {
    console.log('text', text)
    console.log('newData', newData)
  }, [text, newData])

  return (
    <Box mb="20px">
      <Heading as="h1" fontSize="24px" fontWeight="bold" mb="10px">
        {newData.title}
      </Heading>
      <Heading as="h2" fontSize="22px" fontWeight="bold">
        {newData.fullname}
      </Heading>

      <Button mt={4} onClick={onOpen}>
        Edit
      </Button>

      <ModalEdit
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        text={text}
        newData={newData}
        onChange={onChange}
        initialRef={initialRef}
      />
    </Box>
  )
}

export default Header
