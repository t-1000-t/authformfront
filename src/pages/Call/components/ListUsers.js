import React, { useEffect, useState } from 'react'
import { Box, Button, IconButton, Text, VStack } from '@chakra-ui/react'
import { CloseIcon, PhoneIcon } from '@chakra-ui/icons'
import { useSocket } from '../../../context/socket-context'

const ListUsers = React.memo(({ list, callAccepted, callEnded, callUser, endCall }) => {
  const { socket, socketId } = useSocket()
  const [usersList, setUsersList] = useState(list)

  useEffect(() => {
    setUsersList(list)
  }, [list])

  useEffect(() => {
    if (socket) {
      socket.on('updateUserSocket', (updatedUser) => {
        setUsersList((prevList) =>
          prevList.map((user) =>
            user.id === updatedUser.userId ? { ...user, idSocketIO: updatedUser.idSocketIO } : user,
          ),
        )
      })
    }

    return () => {
      if (socket) {
        socket.off('updateUserSocket')
      }
    }
  }, [socket])

  return (
    <VStack align="stretch">
      {usersList && usersList.length > 0 ? (
        usersList.map((user, index) => (
          <Box key={index} p={4} borderWidth={1} borderRadius="lg" bg="white" color="black">
            <Text fontWeight="bold">
              {user.username} {user.surname}
            </Text>
            <Text>{user.email}</Text>
            <Text>{user.idSocketIO}</Text>
            <VStack spacing={4} mb={8}>
              {callAccepted && !callEnded && user.idSocketIO === socketId ? (
                <Button colorScheme="red" leftIcon={<CloseIcon />} onClick={endCall}>
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
        ))
      ) : (
        <Text>No users available</Text>
      )}
    </VStack>
  )
})

export default ListUsers
