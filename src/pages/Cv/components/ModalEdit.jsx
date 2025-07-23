import React from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'

const ModalEdit = ({ isOpen, onClose, onSubmit, text, onChange, initialRef }) => {
  const { fullname, title } = text
  return (
    <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Type your details</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Your position</FormLabel>
            <Input name="title" value={title} ref={initialRef} placeholder="Title" onChange={onChange} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Full name</FormLabel>
            <Input name="fullname" value={fullname} placeholder="Full name" onChange={onChange} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onSubmit}>
            OK
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalEdit
