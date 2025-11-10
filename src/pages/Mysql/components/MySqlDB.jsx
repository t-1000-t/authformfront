import React, { useEffect, useState } from 'react'
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  FormLabel,
  Input,
  FormHelperText,
  FormControl,
  Button,
  useToast,
} from '@chakra-ui/react'
import { TbHttpDelete } from 'react-icons/tb'
import instance from '../../../utils/axios'
import Container from '../../../layouts/Container'
import { promiseBasedToastDelSQL } from '../../../services/promiseBasedToast'

const MySqlDB = () => {
  const [users, setUsers] = useState([])
  const [lastRow, setLastRow] = useState({ id: '', name: '', email: '' })
  const [userInfo, setUserInfo] = useState({ name: '', email: '' })
  const [deletingId, setDeletingId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const toast = useToast({ position: 'top-right' })

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
  }, [lastRow])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await instance.post('/api/rows', userInfo)
      const { statusText, data } = response
      if (statusText !== 'Created') {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      setLastRow(data)
      setUserInfo({ name: '', email: '' })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleDelete = async (id) => {
    try {
      setDeletingId(id)
      // const response = await instance.delete(`/api/rows/${id}`) // req.params
      const promise = instance.delete('/api/rows', { data: { id } })

      promiseBasedToastDelSQL(toast, promise)

      promise.then((response) => {
        if (response.status !== 200 && response.status !== 204) {
          return Promise.reject(new Error(`HTTP error! status: ${response.status}`))
        }
        const { rowId } = response.data
        setUsers((prev) => prev.filter((u) => u.id !== rowId))
        return response
      }) // req.body
    } catch (err) {
      setError(err.message)
    } finally {
      setDeletingId(null)
    }
  }

  if (loading) return <Container>Loading...</Container>
  if (error) return <Container>Error: {error}</Container>

  return (
    <Container>
      <Box mb={4} fontSize="xl" fontWeight="bold">
        Users from MySQL Database
      </Box>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input name="name" value={userInfo.name} onChange={handleChange} />
          <FormLabel>Email address</FormLabel>
          <Input name="email" value={userInfo.email} onChange={handleChange} />
          <FormHelperText>We will never share your email.</FormHelperText>
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Add new row
        </Button>
      </form>

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
            {users.toReversed().map((user) => (
              <Tr key={user.id}>
                <Td>{user.id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{new Date(user.created_at).toLocaleString()}</Td>
                <Td>
                  <Button
                    isLoading={deletingId === user.id}
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDelete(user.id)}
                    title="Delete"
                    backgroundColor="red.300"
                  >
                    <TbHttpDelete size="25" />
                  </Button>
                </Td>
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
