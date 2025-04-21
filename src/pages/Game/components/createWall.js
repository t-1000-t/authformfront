import { useCallback } from 'react'

const createWall = (p, x, z, w, h, d) => {
  const display = useCallback(
    (texture) => {
      p.push()
      p.translate(x, -h / 2, z)
      p.texture(texture)
      p.box(w, h, d)
      p.pop()
    },
    [p, x, z, w, h, d],
  )

  return { x, z, w, h, d, display }
}

export default createWall
