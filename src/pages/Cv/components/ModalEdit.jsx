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
    <Modal isOpen={obj.isOpen} onClose={obj.handelCancel}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Type your details</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Your position</FormLabel>
            <Input
              name="title"
              value={obj.title}
              ref={obj.initialRef}
              placeholder="Title"
              onChange={obj.handleTextChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Full name</FormLabel>
            <Input name="fullname" value={obj.fullname} placeholder="Full name" onChange={obj.handleTextChange} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={obj.handleSubmit}>
            OK
          </Button>
          <Button onClick={obj.handelCancel}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalEdit
