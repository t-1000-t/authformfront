import React, { useState } from 'react'
import { Box, Button, Heading, Textarea } from '@chakra-ui/react'
import useAuthStore from '../../../store/useAuthStore'

const Header = ({ newData }) => {
  const { putCvInfo, cv } = useAuthStore()
  const { about, title } = newData
  const [toggle, setToggle] = useState(false)
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
    </Box>
  )
}

export default Header
