import React from 'react'
import { Box, Button, IconButton, Text, VStack } from '@chakra-ui/react'
import { CloseIcon, PhoneIcon } from '@chakra-ui/icons'

const ListUsers = React.memo(({ list, callAccepted, callEnded, callUser, endCall, setName }) => {
  console.log('list', list)
  return (
    <VStack align="stretch">
      {list && list.length > 0 ? (
        list.map((user, index) => {
          setName(user.username)
          return <Box key={index} p={4} borderWidth={1} borderRadius="lg" bg="white" color="black">
            <Text fontWeight="bold">{user.username} {user.surname}</Text>
            <Text>{user.email}</Text>
            <Text>{user.idSocketIO}</Text>
            <VStack spacing={4} mb={8}>
              {callAccepted && !callEnded ? (
                <Button
                  colorScheme="red"
                  leftIcon={<CloseIcon />}
                  onClick={endCall}
                >
                  End Call
                </Button>
              ) : (
                <IconButton
                  colorScheme="blue"
                  aria-label="call"
                  icon={<PhoneIcon />}
                  onClick={() => callUser(user.idSocketIO)}
                />
              )}
            </VStack>
          </Box>
      })
      ) : (
        <Text>No users available</Text>
      )}
    </VStack>
  )
})

export default ListUsers
