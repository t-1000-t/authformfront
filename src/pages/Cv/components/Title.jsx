import React, { useRef, useState } from 'react'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { MdEditNote } from 'react-icons/md'
import useAuthStore from '../../../store/useAuthStore'
import ModalEdit from './Modal/ModalEdit'
import useModalEdit from '../../../utils/hooks/useModalEdit'
import useDetectChange from '../../../utils/hooks/useDetectChange'
import styleButton from '../../../services/customStyles'

const Title = () => {
  const { putCvInfo, cv, setCurrentData } = useAuthStore()
  const initialRef = useRef(null)
  const { title } = cv.user.newData
  const [showEditNoteTitle, setShowEditNoteTitle] = useState(false)

  const { isOpen, text, onOpen, onClose, onChange } = useModalEdit(title)

  useDetectChange()

  const handleSubmit = () => {
    if (!text.posname || !text.fullname) {
      onClose()
      return
    }

    putCvInfo(text, cv).then(() => {
      const updatedTitles = cv.user.newData.title
      setCurrentData({ section: 'strTitles', localData: updatedTitles })
      onClose()
    })
  }

  return (
    <Box mb="20px" w="100%">
      <Flex
        mb="20px"
        justifyContent="space-between"
        alignItems="flex-start"
        onMouseEnter={() => setShowEditNoteTitle(true)}
        onMouseLeave={() => setShowEditNoteTitle(false)}
      >
        <Box m={1}>
          <Heading as="h1" fontSize="24px" fontWeight="bold" mb="10px">
            {title.posname}
          </Heading>

          <Heading as="h2" fontSize="22px" fontWeight="bold">
            {title.fullname}
          </Heading>
        </Box>
        <Box>
          {showEditNoteTitle && (
            <Button sx={styleButton} m={3} size="sx" onClick={onOpen} bg="yellow.50" _hover={{ bg: 'green.200' }}>
              <MdEditNote />
            </Button>
          )}
        </Box>
      </Flex>
      <ModalEdit
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        text={text}
        onChange={onChange}
        initialRef={initialRef}
      />
    </Box>
  )
}

export default Title
