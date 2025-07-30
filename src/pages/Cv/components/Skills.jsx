import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { MdOutlineNoteAdd, MdEditNote, MdOutlineDeleteForever } from 'react-icons/md'
import useAuthStore from '../../../store/useAuthStore'
import useModalEdit from '../../../utils/hooks/useModalEdit'
import listItems from '../../../services/listItems'
import ModalEdit from './Modal/ModalEdit'
import getObjectNoId from '../../../services/getObjectNoId'
import { logError } from '../../../utils/services'

const styleButton = {
  borderRadius: 'full',
  w: '40px',
  h: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px',
  borderColor: 'gray.300',
  shadow: 'md',
}

const Skills = () => {
  const { putCvInfo, cv, deleteSkillFromCv } = useAuthStore()
  const initialRef = useRef(null)
  const { skills } = cv.user.newData
  const [activeIndex, setActiveIndex] = useState(null)
  const [localSkills, setLocalSkills] = useState([...skills])

  const { text, onClose, onOpen, onChange, isOpen } = useModalEdit(localSkills)

  const handleSubmit = () => {
    const current = text[activeIndex]
    if (!current.company || !current.task || !current.responsibilities || !current.technologies) {
      onClose()
      return
    }

    putCvInfo(text, cv).then(() => {
      onClose()
    })
  }

  const handleEditClick = (index) => {
    setActiveIndex(index)
    onOpen()
  }

  const handleAddClick = () => {
    const newSkill = {
      // id: Math.random().toString(36).substring(2, 6),
      company: '...',
      task: '...',
      technologies: '...',
      responsibilities: '...',
    }
    const updateSkills = [...localSkills, newSkill]

    setLocalSkills(updateSkills)
    // putCvInfo(updateSkills, cv).then()
  }

  const handleDelClick = useCallback(
    async (skill, index) => {
      if (skill._id) {
        const { _id, email } = cv.user
        try {
          await deleteSkillFromCv(_id, skill._id, email).then()
        } catch (error) {
          logError(error('Error deleting skill', error))
        }
      } else {
        setLocalSkills((prev) => prev.filter((_, i) => i !== index))
      }
    },
    [cv.user, deleteSkillFromCv],
  )

  useEffect(() => {
    setLocalSkills(skills) // if something change with skills we put into the store before it works UI only
  }, [skills])

  return (
    <Flex direction="column" w="100%" justifyContent="left" pt="20px">
      {localSkills && <Box>Skills</Box>}
      {activeIndex !== null && (
        <ModalEdit
          isOpen={isOpen}
          text={getObjectNoId(text[activeIndex])}
          onSubmit={handleSubmit}
          onChange={(e) => onChange(e, activeIndex)}
          onClose={() => {
            setActiveIndex(null)
            onClose()
          }}
          initialRef={initialRef}
        />
      )}
      {localSkills.map((item, index) => {
        const objNoId = getObjectNoId(item)

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
              <Button sx={styleButton} bg="red.50" p={2} size="sx" onClick={() => handleDelClick(item, index)}>
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
