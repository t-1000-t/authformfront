import React from 'react'
import { Container } from '@chakra-ui/react'
import Header from './Header'
import About from './About'
import Education from './Education'
import Skills from './Skills'
import PetInProgress from './PetInProgress'
import Experience from './Experience'
import PetsOlds from './PetsOlds'

const Cv = () => {
  return (
    <Container>
      <Header />
      <About />
      <Education />
      <Skills />
      <PetInProgress />
      <Experience />
      <PetsOlds />
    </Container>
  )
}

export default Cv
