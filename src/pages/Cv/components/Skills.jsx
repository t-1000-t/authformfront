import React, { useRef, useState } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { MdOutlineNoteAdd, MdEditNote, MdOutlineDeleteForever } from 'react-icons/md'
import useAuthStore from '../../../store/useAuthStore'
import useModalEdit from '../../../utils/hooks/useModalEdit'
import listItems from '../../../services/listItems'
import ModalEdit from './Modal/ModalEdit'

const styleButton = {
  borderRadius: 'full',
  w: '40px',
  h: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const Skills = () => {
  const { putCvInfo, cv, deleteSkillFromCv } = useAuthStore()
  const initialRef = useRef(null)
  const { skills } = cv.user.newData
  const [activeIndex, setActiveIndex] = useState(null)

  const { text, onClose, onOpen, onChange, isOpen, setText } = useModalEdit(skills)

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

  const handleAddClick = () => {
    const res = skills.push({
      company: '...',
      task: '...',
      technologies: '...',
      responsibilities: '...',
    })
    setText(res)
  }

  const handleDelClick = () => {
    deleteSkillFromCv('1', '2').then()
  }

  return (
    <Flex direction="column" w="100%" justifyContent="left" pt="20px">
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
      {skills.map((item, index) => {
        const objNoId = Object.keys(item)
          .filter((f) => f !== '_id')
          .reduce((obj, key) => ({ ...obj, [key]: item[key] }), {})

        return (
          <Box key={item._id}>
            <Flex>
              <Box>{listItems(objNoId)}</Box>
              <Button sx={styleButton} size="sx" onClick={() => handleEditClick(index)} bg="yellow.50">
                <MdEditNote />
              </Button>
              <Button sx={styleButton} bg="green.50" p={2} size="sx" onClick={() => handleAddClick(index)}>
                <MdOutlineNoteAdd />
              </Button>
              <Button sx={styleButton} bg="red.50" p={2} size="sx" onClick={() => handleDelClick(index)}>
                <MdOutlineDeleteForever />
              </Button>
            </Flex>
          </Box>
        )
      })}
    </Flex>
  )
}

export default Skills
