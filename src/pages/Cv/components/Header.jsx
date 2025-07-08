import React, { useRef, useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from '@chakra-ui/react'
import useAuthStore from '../../../store/useAuthStore'

const Header = ({ newData }) => {
  const { putCvInfo, cv } = useAuthStore()
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const { about, title } = newData
  const [toggle, setToggle] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState({ about: newData.about, title: newData.title })

  const handleTextChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setText((prev) => ({ ...prev, [name]: value }))
  }

  const handelCancel = () => {
    setText({ about: newData.about, title: newData.title })
    setToggle(false)
  }
  const handleSubmit = () => {
    putCvInfo(text, cv).then()
    setToggle(false)
  }

  return (
    <Box mb="20px">
      <Heading as="h1" fontSize="24px" fontWeight="bold" mb="10px">
        {title}
      </Heading>
      {toggle && (
        <Textarea name="title" value={text.title ? text.title : newData.title} onChange={handleTextChange}>
          {text.title}
        </Textarea>
      )}
      <Heading as="h2" fontSize="22px" fontWeight="bold">
        {about}
      </Heading>
      {toggle && (
        <Textarea name="about" value={text.about ? text.about : newData.about} onChange={handleTextChange}>
          {text.about}
        </Textarea>
      )}
      <Button onClick={() => handleSubmit()}>Ok</Button>
      <Button onClick={() => setToggle(!toggle)}>Edit</Button>
      <Button onClick={() => handelCancel()}>Cancel</Button>
      <Button onClick={() => setIsOpen(!isOpen)}>Modal</Button>
      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Type your details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Your position</FormLabel>
              <Input ref={initialRef} placeholder="Title" />
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
            <Button onClick={() => setIsOpen(!isOpen)}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Header
