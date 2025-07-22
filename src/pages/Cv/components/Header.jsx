import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Box, Button, Heading, Textarea } from '@chakra-ui/react'
import useAuthStore from '../../../store/useAuthStore'
import ModalEdit from './ModalEdit'

const Header = ({ newData }) => {
  const { putCvInfo, cv } = useAuthStore()
  const initialRef = useRef(null)
  const [obj, setObj] = useState({})
  // const finalRef = useRef(null)
  const { fullname, title } = newData
  const [toggle, setToggle] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState({ fullname: newData.fullname, title: newData.title })

  const handleTextChange = useCallback((e) => {
    e.preventDefault()
    const { name, value } = e.target
    setText((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handelCancel = useCallback(() => {
    setText({ fullname: newData.fullname, title: newData.title })
    setToggle(false)
    setIsOpen(false)
  }, [newData])

  const handleSubmit = useCallback(() => {
    console.log('text', text)
    console.log('cv', cv)
    putCvInfo(text, cv).then()
    setToggle(false)
    setIsOpen(false)
  }, [text, cv, putCvInfo])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  useEffect(() => {
    setObj({
      initialRef,
      isOpen,
      onClose: handleClose,
      handleTextChange,
      handleSubmit,
      handelCancel,
      title: text.title ? text.title : newData.title,
      fullname: text.fullname ? text.fullname : newData.fullname,
    })
  }, [initialRef, isOpen, handleClose, handleTextChange, handleSubmit, handelCancel, text, newData])

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
        {fullname}
      </Heading>
      {toggle && (
        <Textarea name="fullname" value={text.fullname ? text.fullname : newData.fullname} onChange={handleTextChange}>
          {text.fullname}
        </Textarea>
      )}
      {/* <Flex justifyContent="space-around"> */}
      {/*  <Button onClick={() => handleSubmit()}>Ok</Button> */}
      {/*  <Button onClick={() => setToggle(!toggle)}>Edit</Button> */}
      {/*  <Button onClick={() => handelCancel()}>Cancel</Button> */}
      {/* </Flex> */}
      <Button onClick={() => setIsOpen(!isOpen)}>Modal</Button>
      <ModalEdit obj={obj} />
    </Box>
  )
}

export default Header
