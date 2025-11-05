import React, { useEffect, useState } from 'react'
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
import instance from '../../../utils/axios'
import Container from '../../../layouts/Container'

const MySqlDB = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await instance.get('/api/rows')
        const { statusText, data } = response
        if (statusText !== 'OK') {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        setUsers(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers().then()
  }, [])

  if (loading) return <Container>Loading...</Container>
  if (error) return <Container>Error: {error}</Container>

  return (
    <Container>
      <Box mb={4} fontSize="xl" fontWeight="bold">
        Users from MySQL Database
      </Box>

      {users.length > 0 ? (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Created At</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{new Date(user.created_at).toLocaleString()}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <Box>No users found in the database</Box>
      )}
    </Container>
  )
}

export default MySqlDB
