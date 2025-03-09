import React, { useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'
import p5 from 'p5'
import Container from '../../../layouts/Container'

export default function GamePage() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return undefined // Fix "consistent-return"

    const sketch = (p) => {
      Object.assign(p, {
        setup: () => {
          p.createCanvas(400, 400)
          p.background(220)
        },
        draw: () => {
          p.fill(255, 0, 0)
          p.ellipse(p.mouseX, p.mouseY, 50, 50)
        },
      })
    }

    // eslint-disable-next-line new-cap
    const myP5 = new p5(sketch, canvasRef.current)

    return () => myP5.remove()
  }, [])

  return (
    <Container>
      <Box>Game</Box>
      <Box ref={canvasRef} width="100%" height="100vh" /> {/* Fixed self-closing component */}
    </Container>
  )
}
