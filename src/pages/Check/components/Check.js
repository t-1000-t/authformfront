import React, { useState } from 'react'
import { Box, Button, Container, Input, Text, VStack } from '@chakra-ui/react'
import axios from '../../../utils/axios'

export const Check = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [lastSearchTerm, setLastSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState(null)
  const [isSearching, setIsSeraching] = useState(false)

  const handleSearch = () => {
    if (isSearching || searchTerm === lastSearchTerm) return

    setIsSeraching(true)
    setLastSearchTerm(searchTerm)
    axios
      .get(`/api/search?query=${encodeURIComponent(searchTerm)}`)
      .then((response) => {
        setSearchResult(response.data)
      })
      .catch((error) => console.error('Error:', error))
      .finally(() => setIsSeraching(false))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isSearching) {
      handleSearch()
    }
  }

  return (
    <Container maxW="container.md" py={8}>
      {/* Search Input */}
      <VStack spacing={4}>
        <Input
          type="text"
          value={searchTerm}
          onKeyDown={handleKeyDown}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter search term"
          variant="filled"
          focusBorderColor="blue.500"
          ref={() => {}}
        />
        <Button colorScheme="blue" onClick={handleSearch}>
          Search
        </Button>
      </VStack>

      {/* Search Results */}
      <Box mt={8} p={4} borderWidth="1px" borderRadius="md">
        {searchResult && searchResult.length > 0 ? (
          searchResult.map((item, index) => (
            <Box key={index} mb={4} p={3} borderBottomWidth={index < searchResult.length - 1 ? '1px' : '0'}>
              <Text fontWeight="bold" mb={2}>
                {item.title}
              </Text>
              <Text>Price: {item.prices}</Text>
              <Text>Ending Time: {item.endingTime}</Text>
            </Box>
          ))
        ) : (
          <Text>No results yet</Text>
        )}
      </Box>
    </Container>
  )
}
