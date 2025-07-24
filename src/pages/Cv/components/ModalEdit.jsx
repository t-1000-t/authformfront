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
  return (
    <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Type your details</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {Object.keys(text).map((item, index) => {
            return (
              /* eslint-disable-next-line react/no-array-index-key */
              <FormControl key={index}>
                <FormLabel>{item.charAt(0) + item.slice(1)}</FormLabel>
                <Input
                  name={item}
                  value={text[item] || ''} // dynamically bind the value
                  ref={index === 0 ? initialRef : null} // focus first field
                  placeholder={item}
                  onChange={onChange}
                />
              </FormControl>
            )
          })}
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
