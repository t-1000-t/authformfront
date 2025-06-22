import React, { useState } from 'react'
import { Button, Input, Text } from '@chakra-ui/react'
import useAuthStore from '../../../store/useAuthStore'
import { logError } from '../../../utils/services'

const SendData = () => {
  const { cvText, accessToken, user } = useAuthStore()
  const [input, setInput] = useState('')

  const handlerSendData = async (e) => {
    e.preventDefault()

    if (!accessToken) {
      logError('Access token not available')
      return
    }

    try {
      await cvText({ data: input, email: user.userData.email }) // Assuming noteText sends the note to the server
      logError('Note sent successfully')
    } catch (error) {
      logError(error)
    } finally {
      // Clear the textarea after successfully sending the note
      setInput('')
    }
  }

  return (
    <>
      <Text>Send Data</Text>
      <Input onChange={(e) => setInput(e.currentTarget.value)} />
      <Button onClick={handlerSendData}>Send</Button>
    </>
  )
}

export default SendData
