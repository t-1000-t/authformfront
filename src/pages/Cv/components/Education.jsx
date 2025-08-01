import React, { useRef } from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { MdEditNote } from 'react-icons/md'
import ModalEdit from './Modal/ModalEdit'
import useAuthStore from '../../../store/useAuthStore'
import useModalEdit from '../../../utils/hooks/useModalEdit'
import listItems from '../../../services/listItems'
import useDetectChange from '../../../utils/hooks/useDetectChange'
import styleButton from '../../../services/customStyles'

const Education = () => {
  const { putCvInfo, cv, setCurrentData } = useAuthStore()
  const initialRef = useRef(null)
  const { education } = cv.user.newData
  const { onClose, onOpen, onChange, text, isOpen } = useModalEdit(education)
  useDetectChange()

  const handleSubmit = () => {
    if (!education.diploma || !education.course) {
      onClose()
      return
    }

    putCvInfo(text, cv).then(() => {
      setCurrentData({ section: 'strEducation', localData: education })
      onClose()
    })
  }

  return (
    <Flex direction="column" w="100%" justifyContent="left" pt="20px">
      <Text as="b" fontSize="larger" pb="10px">
        Education:
      </Text>
      <Flex>
        <Box>
          <Box>{listItems(education)}</Box>
          <ModalEdit
            isOpen={isOpen}
            onSubmit={handleSubmit}
            text={text}
            onClose={onClose}
            onChange={onChange}
            initialRef={initialRef}
          />
        </Box>
        <Button sx={styleButton} onClick={onOpen} size="sx" bg="yellow.50" _hover={{ bg: 'green.200' }}>
          <MdEditNote />
        </Button>
      </Flex>
    </Flex>
  )
}

export default Education
