import React from 'react'
import { Button, Flex, Text, VStack } from '@chakra-ui/react'
import useAuthStore from '../../../store/useAuthStore'
import { logError } from '../../../utils/services'

const SendData = () => {
  const { accessToken, cv, user, pushCvText } = useAuthStore()

  const handlerSendData = async (e) => {
    e.preventDefault()

    if (!accessToken) {
      logError('Access token not available')
      return
    }

    try {
      await pushCvText({ newData: cv.user.newData, email: user?.userData.email })
      logError('Note sent successfully')
    } catch (error) {
      logError(error)
    }
  }

  return (
    <VStack spacing={3} align="stretch">
      <Flex justify="space-between">
        <Text>Save CV</Text>
        <Button colorScheme="blue" onClick={handlerSendData}>
          Save
        </Button>
      </Flex>
    </VStack>
  )
}

export default SendData
