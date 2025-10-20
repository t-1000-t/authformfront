import React from 'react'
import Particles from './components/Particles'

const ParticlesDefault = () => {
  return (
    <section style={{ position: 'relative', minHeight: '100svh', background: '#0b0f1a', color: '#fff' }}>
      <Particles
        density={0.14}
        linkDistance={140}
        particleSize={2}
        color="rgba(255,255,255,0.9)"
        lineColor="rgba(255,255,255,0.4)"
        repelStrength={140}
        clearAlpha={0.28}
        fullCover
      />
      <header style={{ position: 'relative', zIndex: 1, padding: '24px' }}>
        <h1 style={{ margin: 0 }}>GooFoo</h1>
      </header>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          placeItems: 'center',
          minHeight: 'calc(100svh - 72px)',
          textAlign: 'center',
          padding: '24px',
        }}
      >
        <h1 style={{ fontSize: 'clamp(28px, 6vw, 64px)', lineHeight: 1.1, margin: 0 }}>
          Full Stack <br /> Developer
        </h1>
      </div>
    </section>
  )
}

export default ParticlesDefault
