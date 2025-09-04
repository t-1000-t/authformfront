import React from 'react'
import { Button, Flex, Text, Tooltip, useToast, VStack } from '@chakra-ui/react'
import Lottie from 'react-lottie-player'
import { promiseBasedToast } from '../../../services/promiseBasedToast'
import useAuthStore from '../../../store/useAuthStore'
import { logError } from '../../../utils/services'
import done from '../../../animations/done.json'

const SendData = () => {
  const toast = useToast({ position: 'top-right' })
  const { accessToken, cv, user, pushCvText, hasChanged } = useAuthStore()

  const handlerSendData = async (e) => {
    e.preventDefault()

    if (!accessToken) {
      logError('Access token not available')
      return
    }

    try {
      const promise = pushCvText({ newData: cv.user.newData, email: user?.userData.email }).then((result) => {
        // Search if result is valid
        if (!result || !result.data) {
          return Promise.reject(new Error('Invalid response from server'))
        }
        return result
      })
      promiseBasedToast(toast, promise)

      logError('Note sent successfully')
    } catch (error) {
      logError(error)
    }
  }

  return (
    <VStack spacing={3} align="stretch">
      <Flex justify="space-around">
        <Text>Save CV</Text>
        <Tooltip label={!hasChanged && 'Any text must be changed before saving!'} placement="left-start">
          <Button
            colorScheme="blue"
            onClick={handlerSendData}
            isDisabled={!hasChanged}
            rightIcon={
              hasChanged && <Lottie loop animationData={done} play={hasChanged} style={{ width: 50, height: 50 }} />
            }
          >
            Save
          </Button>
        </Tooltip>
      </Flex>
    </VStack>
  )
}

export default SendData
