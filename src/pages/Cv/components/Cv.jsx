import React, { useEffect } from 'react'
import Header from './Header'
import About from './About'
import Education from './Education'
import Skills from './Skills'
import PetInProgress from './PetInProgress'
import Experience from './Experience'
import PetsOlds from './PetsOlds'

import A4Container from '../Wrappers/A4Container'
import CardWrap from '../Wrappers/CardWrap'
import SendData from './SendData'
import useAuthStore from '../../../store/useAuthStore'

const Cv = () => {
  const { user, getCvInfo } = useAuthStore() // TODO should add cv

  const { email } = user.userData

  useEffect(() => {
    getCvInfo(email).then()
  }, [])

  return (
    <A4Container>
      <SendData />
      <CardWrap>
        <Header />
        <About />
        <Education />
        <Skills />
        <PetInProgress />
        <Experience />
        <PetsOlds />
      </CardWrap>
    </A4Container>
  )
}

export default Cv
