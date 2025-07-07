import React, { useState } from 'react'
import { Box, Button, Heading, Textarea } from '@chakra-ui/react'

const Header = ({ newData }) => {
  const { about, title } = newData
  const [toggle, setToggle] = useState(false)
  const [text, setText] = useState({ about: newData.about, title: newData.title })

  const handleTextChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setText((prev) => ({ ...prev, [name]: value }))
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
      <Button onClick={() => setToggle(!toggle)}>Edit</Button>
    </Box>
  )
}

export default Header
