import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import useAuthStore from '../../../store/useAuthStore'
import { logError } from '../../../utils/services'

const CvPagePdf = () => {
  const { cvPdfUp } = useAuthStore()

  const handlerUrl = async () => {
    try {
      const blob = await cvPdfUp({ url: `${process.env.REACT_APP_API}/cv` }) // just the payload
      const pdfUrl = window.URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }))

      // Automatically download the PDF
      const a = document.createElement('a')
      a.href = pdfUrl
      a.download = 'cv.pdf'
      a.click()
      a.remove()
    } catch (error) {
      logError('PDF response error:', error)
    }
  }

  return (
    <Box>
      <Button onClick={handlerUrl}>PDF</Button>
    </Box>
  )
}

export default CvPagePdf
