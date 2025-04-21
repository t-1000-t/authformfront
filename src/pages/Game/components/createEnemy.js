import { useCallback } from 'react'

const createEnemy = (p, x, z) => {
  const r = 50

  const display = useCallback(() => {
    p.push()
    p.noStroke()
    p.translate(x, -r, z)
    p.fill('red')
    p.sphere(r)
    p.pop()
  }, [p, x, z])

  return { x, z, r, display }
}

export default createEnemy
