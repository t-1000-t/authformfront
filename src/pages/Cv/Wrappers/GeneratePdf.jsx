import React, { useRef } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import CvPagePdf from '../components/CvPagePdf'

const GeneratePdf = ({ children }) => {
  const cvRef = useRef(null)

  const generatePdf = async () => {
    const element = cvRef.current
    if (!element) return

    // ---- Page settings: A4 @ 150 DPI (portrait) ----
    const DPI = 150
    const PAGE_W = 1240 // px
    const PAGE_H = 1754 // px
    const MARGIN = 60 // px on all sides inside the PDF page
    const GUTTER = 24 // px gap between consecutive slices (prevents cutting a line)

    // Render DOM -> canvas (approx. match dpi)
    const canvas = await html2canvas(element, {
      scale: DPI / 96, // ≈1.5625
      useCORS: true,
      backgroundColor: '#ffffff',
    })

    const imgWsrc = canvas.width
    const imgHsrc = canvas.height

    // eslint-disable-next-line new-cap
    const pdf = new jsPDF({
      orientation: 'p',
      unit: 'px',
      format: [PAGE_W, PAGE_H],
      compress: true,
    })

    // We will draw each page at full inner width (page width minus margins)
    const drawW = PAGE_W - 2 * MARGIN
    const scale = drawW / imgWsrc // canvas px -> PDF inner px scale
    const drawhPerSrc = (val) => val * scale

    // How many source pixels tall can we show per page (after margins)?
    const innerPageH = PAGE_H - 2 * MARGIN
    const srcSliceH = Math.floor(innerPageH / scale) - GUTTER // convert back to source px

    // Offscreen canvas used to crop each slice
    const slice = document.createElement('canvas')
    const sctx = slice.getContext('2d', { willReadFrequently: true })

    let srcY = 0
    let first = true

    while (srcY < imgHsrc) {
      const h = Math.min(srcSliceH, imgHsrc - srcY)

      slice.width = imgWsrc
      slice.height = h
      sctx.clearRect(0, 0, slice.width, slice.height)
      sctx.drawImage(canvas, 0, srcY, imgWsrc, h, 0, 0, imgWsrc, h)

      const dataUrl = slice.toDataURL('image/jpeg', 0.95)

      if (!first) pdf.addPage([PAGE_W, PAGE_H], 'p')
      first = false

      // Draw with margins on the PDF page
      pdf.addImage(
        dataUrl,
        'JPEG',
        MARGIN, // x
        MARGIN, // y
        drawW, // width inside margins
        drawhPerSrc(h), // height scaled to fit
      )

      // Advance by the slice height plus a small gutter to avoid cutting the same baseline
      srcY += h + GUTTER
    }

    pdf.save('my_cv.pdf')
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
