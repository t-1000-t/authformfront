import { useState, useCallback } from 'react'

const PERSONAL_SPACE = 50
const RUN_SPEED = -25
const WALK_SPEED = -10
const MOUSE_SENSITIVITY = 0.0001
const CAM_X = 100
const CAM_Y = -75
const CAM_Z = 50

const createPlayer = (p, initialX = 0, initialZ = 0) => {
  const [position, setPosition] = useState({ x: initialX, z: initialZ })
  const [direction, setDirection] = useState(-1)
  const [isMovingForward, setIsMovingForward] = useState(false)
  const [isRunning, setIsRunning] = useState(false)

  const moveForward = useCallback(
    (walls) => {
      if (!isMovingForward) return
      const speed = isRunning ? RUN_SPEED : WALK_SPEED
      const newX = position.x + Math.sin(direction) * speed
      const newZ = position.z + Math.cos(direction) * speed

      const collision = walls.some((wall) => {
        return (
          newX > wall.x - (wall.w / 2 + PERSONAL_SPACE) &&
          newX < wall.x + (wall.w / 2 + PERSONAL_SPACE) &&
          newZ > wall.z - (wall.d / 2 + PERSONAL_SPACE) &&
          newZ < wall.z + (wall.d / 2 + PERSONAL_SPACE)
        )
      })

      if (!collision) {
        setPosition({ x: newX, z: newZ })
      }
    },
    [isMovingForward, isRunning, position, direction],
  )

  const turnTowardsMouse = useCallback(() => {
    if (p.mouseX < 0 || p.mouseX > p.width || p.mouseY < 0 || p.mouseY > p.height) return
    const noTurnZoneStart = (p.width * 2) / 5
    const noTurnZoneEnd = (p.width * 3) / 5
    if (p.mouseX < noTurnZoneStart || p.mouseX > noTurnZoneEnd) {
      const mouseDelta = p.mouseX - p.width / 2
      setDirection((prev) => prev - mouseDelta * MOUSE_SENSITIVITY)
    }
  }, [p])

  const updateCamera = useCallback(() => {
    const camX = position.x + Math.sin(direction) * CAM_X
    const camZ = position.z + Math.cos(direction) * CAM_Z
    const lookX = position.x - Math.sin(direction)
    const lookZ = position.z - Math.cos(direction)
    p.camera(camX, CAM_Y, camZ, lookX, CAM_Y, lookZ, 0, 1, 0)
  }, [position, direction, p])

  return {
    position,
    direction,
    isMovingForward,
    setIsMovingForward,
    isRunning,
    setIsRunning,
    moveForward,
    turnTowardsMouse,
    updateCamera,
  }
}

export default createPlayer
