import React, { useState } from 'react'
import { Container, Text } from '@chakra-ui/react'
import axios from '../../../utils/axios'

export const Check = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState(null)

  const handleSearch = () => {
    axios
      .get(`/api/search?query=${encodeURIComponent(searchTerm)}`)
      .then((response) => {
        console.log(response.data)
        setSearchResult(response.data)
      })
      .catch((error) => console.error('Error:', error))
  }

  return (
    <Container>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter search term"
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {searchResult ? <pre>{searchResult.map((item) => {
          return <>
            <Text>{item.title}</Text>
            <Text>{item.prices}</Text>
            <Text>{item.endingTime}</Text>
          </>
        })}</pre> : 'No results yet'}
      </div>
    </Container>
  )
}
