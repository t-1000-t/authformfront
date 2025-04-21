import React, { useRef, useEffect, useCallback, useState } from 'react'
import Sketch from 'react-p5'
import brickImg from '../../../assets/bricks.png'

const GRID_SIZE = 150
const RUN_SPEED = -25
const WALK_SPEED = -10
const MOUSE_SENSITIVITY = 0.0001
const CAM_X = 100
const CAM_Y = -75
const CAM_Z = 50

const GAME_MAP = [
  'XXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXX',
  'X                         e      X',
  'X                       p        X',
  'X       XXXXXXX   XXX            X',
  'X       X           X            X',
  'X       X   XX  X   X     XXXX   X',
  'X       X   Xe  X   X        X   X',
  'X       X   XXXXX   X       eX   X',
  'X       X           X     XXXX   X',
  'X       XXXXXXXXXXXXX            X',
  'X  e                             X',
  'X                                X',
  'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
]

class Wall {
  constructor(x, z, w, h, d) {
    this.x = x
    this.z = z
    this.w = w
    this.h = h
    this.d = d
  }

  display(p, texture) {
    p.push()
    p.translate(this.x, -this.h / 2, this.z)
    p.texture(texture)
    p.box(this.w, this.h, this.d)
    p.pop()
  }
}

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

class Enemy {
  constructor(x, z) {
    this.x = x
    this.z = z
    this.r = 50
  }

  display(p) {
    p.push()
    p.noStroke()
    p.translate(this.x, -this.r, this.z)
    p.fill('red')
    p.sphere(this.r)
    p.pop()
  }
}

const GamePage = () => {
  const wallTexture = useRef(null)
  const walls = useRef([])
  const enemies = useRef([])
  const player = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  const setup = (p, canvasParentRef) => {
    p.createCanvas(920, 600, p.WEBGL).parent(canvasParentRef)
    p.cursor(p.CROSS)
    wallTexture.current = p.loadImage(brickImg, () => {
      // Image loaded callback
      setIsLoading(false) // Set loading to false when the image is loaded
    })

    // Build game map
    for (let z = 0; z < GAME_MAP.length; z += 1) {
      for (let x = 0; x < GAME_MAP[z].length; x += 1) {
        const tile = GAME_MAP[z][x]
        const worldX = (x - GAME_MAP[z].length / 2) * GRID_SIZE
        const worldZ = (z - GAME_MAP.length / 2) * GRID_SIZE

        switch (tile) {
          case 'p':
            player.current = new Player(worldX, worldZ)
            break
          case 'e':
            enemies.current.push(new Enemy(worldX, worldZ, p))
            break
          case 'X':
            walls.current.push(new Wall(worldX, worldZ, GRID_SIZE, 200, GRID_SIZE, p))
            break
          default:
            break
        }
      }
    }
  }

  const drawFloor = useCallback((p) => {
    p.push()
    p.noStroke()
    p.fill('mediumseagreen')
    p.translate(0, 0, 0)
    p.rotateX(p.HALF_PI)
    p.plane(p.width * 10, p.height * 10)
    p.pop()
  }, [])

  const draw = (p) => {
    if (isLoading) {
      p.background('lightgrey')
      p.textSize(32)
      p.textAlign(p.CENTER, p.CENTER)
      p.fill('black')
      p.text('Loading...', p.width / 2, p.height / 2)
      return
    }

    p.background('deepskyblue')
    p.ambientLight(150)
    p.directionalLight(180, 180, 180, 0, 0, -1)

    drawFloor(p)

    walls.current.forEach((wall) => wall.display(p, wallTexture.current))

    if (player.current) {
      player.current.turnTowardsMouse(p)
      player.current.moveForward(walls.current)
      player.current.updateCamera(p)
    }

    enemies.current.forEach((enemy) => enemy.display(p))
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!player.current) return
      if (e.key === 'w') player.current.isMovingForward = true
      if (e.key === 'Shift') player.current.isRunning = true
      if (e.key === 'd') player.current.isStrafingLeft = true
      if (e.key === 'a') player.current.isStrafingRight = true
    }

    const handleKeyUp = (e) => {
      if (!player.current) return
      if (e.key === 'w') player.current.isMovingForward = false
      if (e.key === 'Shift') player.current.isRunning = false
      if (e.key === 'd') player.current.isStrafingLeft = false
      if (e.key === 'a') player.current.isStrafingRight = false
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return <Sketch setup={setup} draw={draw} />
}

export default GamePage
