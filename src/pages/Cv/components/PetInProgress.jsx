import React from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { MdEditNote } from 'react-icons/md'
import useAuthStore from '../../../store/useAuthStore'
import listItems from '../../../services/listItems'
import ModalEdit from './Modal/ModalEdit'
import styleButton from '../../../services/customStyles'

import useModalEdit from '../../../utils/hooks/useModalEdit'
import useDetectChange from '../../../utils/hooks/useDetectChange'

const PetInProgress = () => {
  const { cv, putCvInfo, setCurrentData } = useAuthStore()
  const { pet } = cv.user.newData
  const { isOpen, onClose, onChange, text, onOpen } = useModalEdit(pet)
  useDetectChange()

  const handleSubmit = () => {
    if (!pet.task || !pet.technologies || !pet.own || !pet.responsibilities) {
      onClose()
      return
    }

    putCvInfo(text, cv).then(() => {
      setCurrentData({ section: 'strPet', localData: pet })
      onClose()
    })
  }

  return (
    <Flex direction="column" w="100%" justifyContent="left" pt="20px">
      <Text as="b" fontSize="larger" pb="10px">
        Pet-project:
      </Text>
      <Flex>
        <Box>
          <Box m={1}>{listItems(pet)}</Box>
          <ModalEdit isOpen={isOpen} onSubmit={handleSubmit} text={text} onClose={onClose} onChange={onChange} />
        </Box>
        <Box>
          <Button sx={styleButton} onClick={onOpen} size="sx" bg="yellow.50" _hover={{ bg: 'green.200' }}>
            <MdEditNote />
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}

export default PetInProgress
