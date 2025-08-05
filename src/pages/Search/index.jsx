import React from 'react'
import { Box } from '@chakra-ui/react'
import Page from '../../components/Page'
import Search from './components/Search'

const SearchDefault = () => {
  return (
    <Page>
      <Box bg="white">
        <Search />
      </Box>
    </Page>
  )
}

export default SearchDefault
