import React, { useRef, useState } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { FaRegEdit } from 'react-icons/fa'
import useAuthStore from '../../../store/useAuthStore'
import useModalEdit from '../../../utils/hooks/useModalEdit'
import ModalEdit from './Modal/ModalEdit'
import listItems from '../../../services/listItems'

const Skills = () => {
  const { putCvInfo, cv } = useAuthStore()
  const initialRef = useRef(null)
  const { skills } = cv.user.newData
  const [activeIndex, setActiveIndex] = useState(null)

  const { text, onClose, onOpen, onChange, isOpen } = useModalEdit(skills)

  const handleSubmit = () => {
    const current = text[activeIndex]
    if (!current.company || !current.task || !current.responsibilities || !current.technologies) {
      onClose()
      return
    }

    putCvInfo(text, cv).then(() => onClose())
  }

  const handleEditClick = (index) => {
    setActiveIndex(index)
    onOpen()
  }

  return (
    <>
      {skills && <Box>Skills</Box>}
      {activeIndex !== null && (
        <ModalEdit
          isOpen={isOpen}
          text={text[activeIndex]}
          onSubmit={handleSubmit}
          onChange={(e) => onChange(e, activeIndex)}
          onClose={() => {
            setActiveIndex(null)
            onClose()
          }}
          initialRef={initialRef}
        />
      )}
      {skills.map((item, index) => (
        <Box key={item.id}>
          <Flex>
            <Box>{listItems(item)}</Box>
            <Button size="sx" onClick={() => handleEditClick(index)}>
              <FaRegEdit />
            </Button>
          </Flex>
        </Box>
      ))}
    </>
  )
}

export default Skills
