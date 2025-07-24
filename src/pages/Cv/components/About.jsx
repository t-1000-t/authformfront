import React from 'react'
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import ModalEdit from './ModalEdit'
import useAuthStore from '../../../store/useAuthStore'
import useModalEdit from '../../../utils/hooks/useModalEdit'

const About = () => {
  const { putCvInfo, cv } = useAuthStore()
  const { contacts } = cv.user.newData

  const { onClose, onOpen, onChange, text, isOpen } = useModalEdit(contacts)

  const handleSubmit = () => {
    if (!text.mail || !text.linkedin || !text.location || !text.language) {
      onClose()
      return
    }

    putCvInfo(contacts, cv).then(() => onClose())
  }

  console.log('text About', text)
  console.log('contacts About', contacts)

  return (
    <Flex mb="20px" justifyContent="space-around" alignItems="flex-start">
      {/* Left Column - Text */}
      <Box>
        <Text mb="5px">
          <Text as="span" textDecoration="underline">
            Email
          </Text>
          :&nbsp;{contacts?.mail}
        </Text>
        <Text mb="5px">
          <Text as="span" textDecoration="underline">
            LinkedIn
          </Text>
          :&nbsp;{contacts?.linkedin}
        </Text>
        <Text mb="5px">
          <Text as="span" textDecoration="underline">
            Location
          </Text>
          :&nbsp;{contacts?.location}
        </Text>

        <Heading as="h3" fontWeight="bold" fontSize="18px" my="15px">
          Languages:
        </Heading>
        <Text>{contacts?.language}</Text>
      </Box>

      <Button mt={4} onClick={onOpen}>
        Edit
      </Button>

      <ModalEdit onSubmit={handleSubmit} onChange={onChange} onClose={onClose} text={text} isOpen={isOpen} />

      {/* Right Column - Image */}
      <Box>
        <Image
          src="/images/I_19.jpg"
          alt="Vlad"
          maxWidth="280px"
          height="auto"
          border="1px solid"
          borderColor="gray.200"
        />
      </Box>
    </Flex>
  )
}

export default About
