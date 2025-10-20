// Particles.jsx
import React, { useEffect, useRef } from 'react'

const clamp = (n, min, max) => Math.max(min, Math.min(max, n))

const Particles = ({
  density = 0.12,
  linkDistance = 120,
  particleSize = 2,
  color = '#ffffff',
  lineColor,
  repelStrength = 120,
  clearAlpha = 0.25,
  style,
  fullCover = true,
  maxParticles = 300, // safety cap for performance
}) => {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas && canvas.getContext('2d')
    if (!canvas || !ctx) return () => {}

    // Slightly cap DPR for perf on HiDPI screens
    const dpr = Math.min(1.5, window.devicePixelRatio || 1)
    let width = 0
    let height = 0

    const random = (min, max) => min + Math.random() * (max - min)

    const particles = []

    const createParticle = () => {
      const x = random(0, width)
      const y = random(0, height)
      return {
        x,
        y,
        ox: x,
        oy: y,
        vx: random(-0.3, 0.3),
        vy: random(-0.3, 0.3),
        r: random(Math.max(0.6, particleSize * 0.6), particleSize * 1.4),
      }
    }

    const rebuild = () => {
      const area = width * height
      const target = Math.min(maxParticles, Math.floor((area / 1000) * density))
      if (particles.length > target) {
        particles.length = target
      } else {
        while (particles.length < target) particles.push(createParticle())
      }
    }

    const resize = () => {
      const cw = Math.max(1, canvas.clientWidth)
      const ch = Math.max(1, canvas.clientHeight)
      width = cw
      height = ch
      canvas.width = Math.floor(cw * dpr)
      canvas.height = Math.floor(ch * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      rebuild()
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
      mouseRef.current.active = true
    }
    const onLeave = () => {
      mouseRef.current.active = false
    }
    const onTouch = (e) => {
      const t = e.touches[0]
      if (!t) return
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = t.clientX - rect.left
      mouseRef.current.y = t.clientY - rect.top
      mouseRef.current.active = true
    }

    const maxLinkDist2 = linkDistance * linkDistance
    const stroke = lineColor || color
    const cellSize = linkDistance
    let drawLinksToggle = false

    const step = () => {
      // clear
      if (clearAlpha >= 1) {
        ctx.clearRect(0, 0, width, height)
      } else {
        ctx.fillStyle = `rgba(0,0,0,${clearAlpha})`
        ctx.globalCompositeOperation = 'destination-out'
        ctx.fillRect(0, 0, width, height)
        ctx.globalCompositeOperation = 'source-over'
      }

      // update particles
      const m = mouseRef.current
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i]

        // gentle pull to origin
        const toOx = (p.ox - p.x) * 0.002
        const toOy = (p.oy - p.y) * 0.002
        p.vx += toOx
        p.vy += toOy

        // mouse repel
        if (m.active) {
          const dx = p.x - m.x
          const dy = p.y - m.y
          const dist2 = dx * dx + dy * dy
          const minD2 = repelStrength * repelStrength
          if (dist2 < minD2 && dist2 > 0.0001) {
            const f = (minD2 / dist2) * 0.002
            p.vx += dx * f
            p.vy += dy * f
          }
        }

        // integrate + damping
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.985
        p.vy *= 0.985

        // soft respawn if far out of bounds
        const out = p.x < -50 || p.x > width + 50 || p.y < -50 || p.y > height + 50
        if (out) {
          const q = createParticle()
          p.x = q.x
          p.y = q.y
          p.vx = q.vx
          p.vy = q.vy
          p.r = q.r
          p.ox = q.ox
          p.oy = q.oy
        }
      }

      // spatial hashing for links
      drawLinksToggle = !drawLinksToggle // skip every other frame for links
      if (drawLinksToggle) {
        const grid = new Map()
        for (let i = 0; i < particles.length; i += 1) {
          const p = particles[i]
          const cx = Math.floor(p.x / cellSize)
          const cy = Math.floor(p.y / cellSize)
          const key = `${cx},${cy}` // ✅ string key instead of bitwise hash
          if (!grid.has(key)) grid.set(key, [])
          grid.get(key).push(i)
        }

        ctx.lineWidth = 1
        ctx.strokeStyle = stroke

        for (let i = 0; i < particles.length; i += 1) {
          const a = particles[i]
          const cx = Math.floor(a.x / cellSize)
          const cy = Math.floor(a.y / cellSize)

          for (let gx = cx - 1; gx <= cx + 1; gx += 1) {
            for (let gy = cy - 1; gy <= cy + 1; gy += 1) {
              const key = `${gx},${gy}`
              const bucket = grid.get(key)

              // skip if bucket doesn't exist or same particle
              if (bucket && bucket.length > 0) {
                for (let bIdx = 0; bIdx < bucket.length; bIdx += 1) {
                  const j = bucket[bIdx]
                  if (j <= i) {
                    // eslint-disable-next-line no-continue
                    // (Removed; handled with `if` nesting instead)
                  } else {
                    const b = particles[j]
                    const dx = a.x - b.x
                    const dy = a.y - b.y
                    const d2 = dx * dx + dy * dy
                    if (d2 <= maxLinkDist2) {
                      const t = 1 - d2 / maxLinkDist2
                      ctx.globalAlpha = clamp(0.1 + t * 0.5, 0.1, 0.8)
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
        ctx.globalAlpha = 1
      }

      // draw particles
      ctx.fillStyle = color
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i]
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(step)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('touchstart', onTouch, { passive: true })
    window.addEventListener('touchmove', onTouch, { passive: true })
    window.addEventListener('touchend', onLeave)

    resize()
    step()

    const cleanup = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('touchstart', onTouch)
      window.removeEventListener('touchmove', onTouch)
      window.removeEventListener('touchend', onLeave)
      ro.disconnect()
    }

    return cleanup
  }, [density, linkDistance, particleSize, color, lineColor, repelStrength, clearAlpha, maxParticles])

  return (
    <div
      style={{
        position: fullCover ? 'absolute' : 'relative',
        inset: fullCover ? 0 : undefined,
        overflow: 'hidden',
        ...style,
      }}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} aria-hidden />
    </div>
  )
}

export default Particles
