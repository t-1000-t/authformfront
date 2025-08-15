import React from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { MdEditNote } from 'react-icons/md'
import useAuthStore from '../../../store/useAuthStore'
import useModalEdit from '../../../utils/hooks/useModalEdit'
import ModalEdit from './Modal/ModalEdit'
import listItems from '../../../services/listItems'
import styleButton from '../../../services/customStyles'
import useDetectChange from '../../../utils/hooks/useDetectChange'

const Competencies = () => {
  const { cv, putCvInfo, setCurrentData } = useAuthStore()
  const { competencies } = cv.user.newData
  // const [boilerplateObj] = useState({
  //   languages: '...',
  //   ide: '...',
  //   vcs: '...',
  //   platform: '...',
  //   tracking: '...',
  //   db: '...',
  //   technologies: '...',
  // })
  const { text, onClose, onOpen, onChange, isOpen } = useModalEdit(competencies)

  useDetectChange()

  const handleSubmit = () => {
    if (
      !competencies.languages ||
      !competencies.ide ||
      !competencies.vcs ||
      !competencies.platform ||
      !competencies.tracking ||
      !competencies.db ||
      !competencies.technologies
    ) {
      onClose()
      return
    }

    putCvInfo(text, cv).then(() => {
      setCurrentData({ section: 'strCompetencies', localData: competencies })
      onClose()
    })
  }

  return (
    <Flex direction="column" w="100%" justifyContent="left" pt="20px">
      <Text as="b" fontSize="larger" pb="10px">
        Competencies:
      </Text>
      <Flex>
        <Box>
          <Box>{listItems(competencies)}</Box>
          <ModalEdit isOpen={isOpen} onSubmit={handleSubmit} text={text} onClose={onClose} onChange={onChange} />
        </Box>
        <Button sx={styleButton} onClick={onOpen} size="sx" bg="yellow.50" _hover={{ bg: 'green.200' }}>
          <MdEditNote />
        </Button>
      </Flex>
    </Flex>
  )
}

export default Competencies
