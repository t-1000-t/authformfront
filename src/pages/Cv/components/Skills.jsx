import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { FaRegEdit } from 'react-icons/fa'
import useAuthStore from '../../../store/useAuthStore'
import useModalEdit from '../../../utils/hooks/useModalEdit'
import listContact from '../../../services/listContact'
import ModalEdit from './ModalEdit'

const Skills = () => {
  const { putCvInfo, cv } = useAuthStore()
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
      <Box>{listContact(skills)}</Box>
      <ModalEdit isOpen={isOpen} text={text} onSubmit={handleSubmit} onChange={onChange} onClose={onClose} />
      <Button onClick={onOpen}>
        <FaRegEdit />
      </Button>
      <Text fontSize="md">
        <br />
        <Text as="b" fontSize="larger">
          Skills:
        </Text>
        <br />
        <Text as="i" fontSize="lg">
          Languages:
        </Text>
        &nbsp;JavaScript
        <br />
        <Text as="i" fontSize="lg">
          IDE:
        </Text>
        &nbsp;WS, VSC
        <br />
        <Text as="i" fontSize="lg">
          VCS:
        </Text>
        &nbsp;Git
        <br />
        <Text as="i" fontSize="lg">
          Platform:
        </Text>
        &nbsp;Netlify, Heroku, GitHub
        <br />
        <Text as="i" fontSize="lg">
          Bug Tracking:
        </Text>
        &nbsp;Jira Atlassian (software product developed by Atlassian)
        <br />
        <Text as="i" fontSize="lg">
          Databases:
        </Text>
        &nbsp;MongoDB
        <br />
        <Text as="i" fontSize="lg">
          Technologies:
        </Text>
        &nbsp;React (TypeScript, Hooks, Redux), Node.js (Express), Nodemailer module, Socket.io, DevTools, Rest APIs,
        JSON, Chakra UI, Bootstrap, Material-UI, Ant-Design, Flexbox, CSS Module, Photoshop.
      </Text>
    </>
  )
}

export default Skills
