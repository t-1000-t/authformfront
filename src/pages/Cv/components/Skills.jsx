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

  const { text, onClose, onOpen, onChange, isOpen } = useModalEdit([
    {
      _id: '...',
      company: '...',
      task: '...',
      technologies: '...',
      responsibilities: '...',
    },
    {
      _id: '...',
      company2: '...',
      task2: '...',
      technologies2: '...',
      responsibilities2: '...',
    },
    {
      _id: '...',
      company3: '...',
      task3: '...',
      technologies3: '...',
      responsibilities3: '...',
    },
  ])

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
