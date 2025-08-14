import React, { useEffect } from 'react'
import Title from './Title'
import Contacts from './Contacts'
import Education from './Education'
import Skills from './Skills'
import PetInProgress from './PetInProgress'
import PetsOlds from './PetsOlds'

import A4Container from '../Wrappers/A4Container'
import CardWrap from '../Wrappers/CardWrap'
import SendData from './SendData'
import useAuthStore from '../../../store/useAuthStore'
import Competencies from './Competencies'

const Cv = () => {
  const { user, getCvInfo } = useAuthStore()
  const { email } = user.userData

  useEffect(() => {
    getCvInfo(email).then()
  }, [])

  return (
    <A4Container>
      <SendData />
      <Title />
      <CardWrap>
        <Contacts />
        <Education />
        <Competencies />
        <PetInProgress />
        <Skills />
        <PetsOlds />
      </CardWrap>
    </A4Container>
  )
}

export default Cv
