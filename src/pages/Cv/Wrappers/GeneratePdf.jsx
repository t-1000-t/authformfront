import React, { useRef } from 'react'
import html2pdf from 'html2pdf.js'
import { Box, Button, Flex } from '@chakra-ui/react'
import CvPagePdf from '../components/CvPagePdf'

const GeneratePdf = ({ children }) => {
  const cvRef = useRef()

  const generatePdf = () => {
    const element = cvRef.current

    const opt = {
      margin: 0.5,
      filename: 'my_cv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    }

    html2pdf().set(opt).from(element).save()
  }

  return (
    <Box p={4}>
      <Flex justify="space-between">
        <Button colorScheme="teal" onClick={generatePdf}>
          Download PDF
        </Button>
        <CvPagePdf />
      </Flex>
      <Box ref={cvRef} mt={4}>
        {children}
      </Box>
    </Box>
  )
}

export default GeneratePdf
