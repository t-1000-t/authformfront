const RUN_SPEED = -25
const WALK_SPEED = -10
const MOUSE_SENSITIVITY = 0.0001
const CAM_X = 100
const CAM_Y = -75
const CAM_Z = 50

class Player {
  constructor(x, z) {
    this.x = x
    this.z = z
    this.direction = -1
    this.isMovingForward = false
    this.isRunning = false
    this.isStrafingLeft = false
    this.isStrafingRight = false
  }

  moveForward(walls) {
    let dx = 0
    let dz = 0
    const speed = this.isRunning ? RUN_SPEED : WALK_SPEED

    if (this.isMovingForward) {
      dx += Math.sin(this.direction) * speed
      dz += Math.cos(this.direction) * speed
    }
    if (this.isStrafingLeft) {
      dx += Math.sin(this.direction - Math.PI / 2) * WALK_SPEED
      dz += Math.cos(this.direction - Math.PI / 2) * WALK_SPEED
    }
    if (this.isStrafingRight) {
      dx += Math.sin(this.direction + Math.PI / 2) * WALK_SPEED
      dz += Math.cos(this.direction + Math.PI / 2) * WALK_SPEED
    }

    const newX = this.x + dx
    const newZ = this.z + dz

    if (!Player.checkCollision(newX, newZ, walls)) {
      this.x = newX
      this.z = newZ
    }
  }

  static checkCollision(x, z, walls) {
    return walls.some((wall) => {
      const inX = x > wall.x - wall.w / 2 && x < wall.x + wall.w / 2
      const inZ = z > wall.z - wall.d / 2 && z < wall.z + wall.d / 2
      return inX && inZ
    })
  }

  turnTowardsMouse(p) {
    const noTurnZoneStart = (p.width * 2) / 5
    const noTurnZoneEnd = (p.width * 3) / 5
    if (p.mouseX < 0 || p.mouseX > p.width || p.mouseY < 0 || p.mouseY > p.height) return
    if (p.mouseX < noTurnZoneStart || p.mouseX > noTurnZoneEnd) {
      const mouseDelta = p.mouseX - p.width / 2
      this.direction -= mouseDelta * MOUSE_SENSITIVITY
    }
  }

  updateCamera(p) {
    const camX = this.x + Math.sin(this.direction) * CAM_X
    const camZ = this.z + Math.cos(this.direction) * CAM_Z
    const lookX = this.x - Math.sin(this.direction)
    const lookZ = this.z - Math.cos(this.direction)
    p.camera(camX, CAM_Y, camZ, lookX, CAM_Y, lookZ, 0, 1, 0)
  }
}

export default Player
