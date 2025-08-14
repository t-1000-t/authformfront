import React, { useCallback, useEffect, useRef, useState } from 'react'
import { MdOutlineNoteAdd, MdEditNote, MdOutlineDeleteForever } from 'react-icons/md'
import { Box, Button, Flex, Text, useToast } from '@chakra-ui/react'
import useDetectChange from '../../../utils/hooks/useDetectChange'
import useAuthStore from '../../../store/useAuthStore'
import useModalEdit from '../../../utils/hooks/useModalEdit'
import listItems from '../../../services/listItems'
import ModalEdit from './Modal/ModalEdit'
import getObjectNoId from '../../../services/getObjectNoId'
import { logError } from '../../../utils/services'
import styleButton from '../../../services/customStyles'
import { promiseBasedToastDel } from '../../../services/promiseBasedToast'

const Skills = () => {
  const { putCvInfo, cv, deleteSkillFromCv, setCurrentData } = useAuthStore()
  const toast = useToast({ position: 'top-right' })
  const initialRef = useRef(null)
  const { skills } = cv.user.newData
  const [activeIndex, setActiveIndex] = useState(null)
  const [boilerplateObj] = useState({
    company: '...',
    task: '...',
    technologies: '...',
    responsibilities: '...',
  })
  const [localSkills, setLocalSkills] = useState([...skills])

  const { text, onClose, onOpen, onChange, isOpen } = useModalEdit(localSkills)

  useDetectChange() // tracks currentData vs cv.user.newData.skills

  const handleSubmit = () => {
    const current = text[activeIndex]
    if (!current.company || !current.task || !current.responsibilities || !current.technologies) {
      onClose()
      return
    }

    putCvInfo(text, cv).then(() => {
      const updatedSkills = cv.user.newData.skills
      setCurrentData({ section: 'strSkills', localData: updatedSkills })
      onClose()
    })
  }

  const handleEditClick = (index) => {
    setActiveIndex(index)
    onOpen()
  }

  const handleAddClick = () => {
    const updateSkills = [...localSkills, boilerplateObj]

    setLocalSkills(updateSkills)
  }

  const handleDelClick = useCallback(
    (skill, index) => {
      const getCheckCurrentData = () => {
        const newSkills = (prev) => prev.filter((_, i) => i !== index)
        setLocalSkills(newSkills)
        setCurrentData({ section: 'strSkills', localData: newSkills })
      }

      if (skill._id) {
        const { _id, email } = cv.user
        try {
          const promise = deleteSkillFromCv(_id, skill._id, email).then((result) => {
            if (!result) {
              return Promise.reject(new Error('Invalid response from server'))
            }
            return result
          })
          promiseBasedToastDel(toast, promise)

          logError('Skill deleted')
        } catch (error) {
          logError(error('Error deleting skill', error))
        }
      } else {
        getCheckCurrentData()
      }
    },
    [cv.user, deleteSkillFromCv],
  )

  useEffect(() => {
    setLocalSkills(skills) // if something change with skills we put into the store before it works UI only
    if (activeIndex === null) {
      setCurrentData({ section: 'strSkills', localData: skills })
    }
  }, [skills])

  return (
    <Flex direction="column" w="100%" justifyContent="left" pt="20px">
      <Flex direction="column">
        <Text as="b" fontSize="larger" pb="20px">
          Commercial Experience:
        </Text>
      </Flex>

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
