import React from 'react'
import { Box, Text, VStack } from '@chakra-ui/react'

const ListUsers = React.memo(({ list }) => {
  console.log('list', list)
  return (
    <VStack align="stretch">
      {list && list.length > 0 ? (
        list.map((user, index) => (
          <Box key={index} p={4} borderWidth={1} borderRadius="lg" bg="white" color="black">
            <Text fontWeight="bold">{user.username} {user.surname}</Text>
            <Text>{user.email}</Text>
            <Text>{user.idSocketIO}</Text>
          </Box>
        ))
      ) : (
        <Text>No users available</Text>
      )}
    </VStack>
  )
})

export default ListUsers
