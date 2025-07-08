import React, { useState } from 'react'
import { Button, Input, Text, VStack } from '@chakra-ui/react'
import useAuthStore from '../../../store/useAuthStore'
import { logError } from '../../../utils/services'

const SendData = () => {
  const { cvText, accessToken, user } = useAuthStore()
  const [input, setInput] = useState({
    title: '',
    about: '',
    info: {
      email: '',
      linked: '',
      local: '',
      lang: '',
      img: '',
    },
  })

  const handlerChange = async (e) => {
    e.preventDefault()

    const { name, value } = e.target

    if (name === 'title' || name === 'about') {
      setInput((prev) => ({ ...prev, [name]: value }))
    } else {
      setInput((prev) => ({
        ...prev,
        info: {
          ...prev.info,
          [name]: value,
        },
      }))
    }
  }

  const handlerSendData = async (e) => {
    e.preventDefault()

    if (!accessToken) {
      logError('Access token not available')
      return
    }

    try {
      await cvText({ data: input, email: user?.userData.email }) // Assuming noteText sends the note to the server
      logError('Note sent successfully')
      setInput({
        title: '',
        about: '',
        info: {
          email: '',
          linked: '',
          local: '',
          lang: '',
          img: '',
        },
      })
    } catch (error) {
      logError(error)
    }
  }

  return (
    <VStack spacing={3} align="stretch">
      <Text>Send Data</Text>
      <Input name="email" value={input.info.email} placeholder="Email" onChange={handlerChange} />
      <Input name="linked" value={input.info.linked} placeholder="Linked" onChange={handlerChange} />
      <Input name="local" value={input.info.local} placeholder="Local" onChange={handlerChange} />
      <Input name="lang" value={input.info.lang} placeholder="Lang" onChange={handlerChange} />
      <Input name="img" value={input.info.img} placeholder="Img" onChange={handlerChange} />
      <Button colorScheme="blue" onClick={handlerSendData}>
        Send
      </Button>
    </VStack>
  )
}

export default SendData
