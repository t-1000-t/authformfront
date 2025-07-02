import React from 'react'
import Cv from './components/Cv'
import GeneratePdf from './Wrappers/GeneratePdf'

const CvDefault = () => {
  return (
    <GeneratePdf>
      <Cv />
    </GeneratePdf>
  )
}

export default CvDefault
