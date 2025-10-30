import React, { useRef, useEffect } from 'react'
import { Box } from '@chakra-ui/react'

const HomeParticlesField = ({ count = 600, linkRadius = 100, color = '#9fd', bgColor = '#05070a', ...boxProps }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    // always return a function (may be a no-op)
    let cleanup = () => {}

    const canvas = canvasRef.current
    if (!canvas) return cleanup

    const ctx = canvas.getContext('2d')
    if (!ctx) return cleanup

    const dpr = Math.max(1, window.devicePixelRatio || 1)

    const resize = () => {
      const { clientWidth, clientHeight } = canvas
      canvas.width = Math.floor(clientWidth * dpr)
      canvas.height = Math.floor(clientHeight * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.clientWidth,
      y: Math.random() * canvas.clientHeight,
      vx: (Math.random() - 0.5) * 40,
      vy: (Math.random() - 0.5) * 40,
      r: 2,
    }))

    const cellSize = linkRadius
    let cols = 0
    let rows = 0
    let grid = []

    const makeGrid = () => {
      cols = Math.ceil(canvas.clientWidth / cellSize)
      rows = Math.ceil(canvas.clientHeight / cellSize)
      grid = Array.from({ length: cols * rows }, () => [])
    }

    const insert = (p) => {
      const cx = Math.floor(p.x / cellSize)
      const cy = Math.floor(p.y / cellSize)
      const idx = cy * cols + cx
      if (grid[idx]) grid[idx].push(p)
    }

    const mouse = { x: 0, y: 0 }
    const move = (e) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    window.addEventListener('mousemove', move)

    let last = performance.now()
    let raf

    const frame = (now) => {
      const dt = Math.min(0.033, (now - last) / 1000)
      last = now

      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)

      makeGrid()
      const W = canvas.clientWidth
      const H = canvas.clientHeight

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i]
        p.x += p.vx * dt
        p.y += p.vy * dt
        if (p.x < 0) p.x += W
        else if (p.x > W) p.x -= W
        if (p.y < 0) p.y += H
        else if (p.y > H) p.y -= H
        insert(p)
      }

      ctx.lineWidth = 1
      for (let cy = 0; cy < rows; cy += 1) {
        for (let cx = 0; cx < cols; cx += 1) {
          const cell = grid[cy * cols + cx]
          if (cell && cell.length) {
            for (let ny = -1; ny <= 1; ny += 1) {
              for (let nx = -1; nx <= 1; nx += 1) {
                const ncell = grid[(cy + ny) * cols + (cx + nx)]
                if (ncell && ncell.length) {
                  for (let ia = 0; ia < cell.length; ia += 1) {
                    const a = cell[ia]
                    for (let ib = 0; ib < ncell.length; ib += 1) {
                      const b = ncell[ib]
                      if (a !== b) {
                        const dx = a.x - b.x
                        const dy = a.y - b.y
                        const d2 = dx * dx + dy * dy
                        if (d2 < linkRadius * linkRadius) {
                          const d = Math.sqrt(d2)
                          const alpha = 1 - d / linkRadius
                          ctx.strokeStyle = `rgba(160,200,255,${alpha * 0.3})`
                          ctx.beginPath()
                          ctx.moveTo(a.x, a.y)
                          ctx.lineTo(b.x, b.y)
                          ctx.stroke()
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i]
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
      }

      ctx.beginPath()
      ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2)
      ctx.fillStyle = '#fff'
      ctx.fill()

      raf = requestAnimationFrame(frame)
    }

    resize()
    raf = requestAnimationFrame(frame)

    // real cleanup assigned so we *always* return a function
    cleanup = () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      ro.disconnect()
    }

    return cleanup
  }, [count, linkRadius, color, bgColor])

  return (
    <Box position="relative" w="full" h="full" bg={bgColor} overflow="hidden" {...boxProps}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
    </Box>
  )
}

export default HomeParticlesField
