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

const ModalEdit = ({ obj }) => {
  return (
    <Modal isOpen={obj.isOpen} onClose={obj.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Type your details</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Your position</FormLabel>
            <Input ref={obj.initialRef} placeholder="Title" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Full name</FormLabel>
            <Input placeholder="Full name" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={() => obj.onClose()}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalEdit
