import React, { useState } from 'react'
import { Box, Button, Container, Input, Text, VStack } from '@chakra-ui/react'
import Lottie from 'react-lottie-player'
import loadingb2f5ea from '../../../animations/loadingb2f5ea.json'
import useAuthStore from '../../../store/useAuthStore'

const Check = () => {
  const { getDataViolitySearching } = useAuthStore()
  const [searchTerm, setSearchTerm] = useState('')
  const [lastSearchTerm, setLastSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState(null)
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = () => {
    if (isSearching && searchTerm === lastSearchTerm) return

    setIsSearching(true)
    setLastSearchTerm(searchTerm)
    getDataViolitySearching(searchTerm)
      .then((response) => {
        setSearchResult(response)
      })
      .finally(() => setIsSearching(false))
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
        <Button
          leftIcon={
            isSearching && (
              <Lottie
                loop
                animationData={loadingb2f5ea}
                color="turquoise"
                play={isSearching}
                style={{ width: 50, height: 50 }}
              />
            )
          }
          colorScheme="teal"
          onClick={handleSearch}
        >
          <Text color="teal.100">Search</Text>
        </Button>
      </VStack>

      {/* Search Results */}
      <Box mt={8} p={4} borderWidth="1px" borderRadius="md">
        {searchResult && searchResult.length > 0 ? (
          searchResult.map((item, index) => (
            <Box key={item.id} mb={4} p={3} borderBottomWidth={index < searchResult.length - 1 ? '1px' : '0'}>
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

export default Check
