import React, { useRef } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { FaRegEdit } from 'react-icons/fa'
import useAuthStore from '../../../store/useAuthStore'
import useModalEdit from '../../../utils/hooks/useModalEdit'
import ModalEdit from './Modal/ModalEdit'
import listItems from '../../../services/listItems'

const Skills = () => {
  const { putCvInfo, cv } = useAuthStore()
  const initialRef = useRef(null)
  const { skills } = cv.user.newData

  const { text, onClose, onOpen, onChange, isOpen } = useModalEdit(skills)

  const handleSubmit = () => {
    if (!skills.company || !skills.task || !skills.responsibilities || !skills.technologies) {
      onClose()
      return
    }

    putCvInfo(text, cv).then(() => onClose())
  }

  return (
    <>
      {skills && <Box>Skills</Box>}
      {text.map((item) => (
        <Box key={item.id}>
          {listItems(item)}
          <ModalEdit
            isOpen={isOpen}
            text={item}
            onSubmit={handleSubmit}
            onChange={onChange}
            onClose={onClose}
            initialRef={initialRef}
          />
          <Button onClick={onOpen}>
            <FaRegEdit />
          </Button>
        </Box>
      ))}
    </>
  )
}

export default Skills
