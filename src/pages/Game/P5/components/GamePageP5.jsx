import React, { useRef, useEffect, useCallback, useState } from 'react'
import Sketch from 'react-p5'
import brickImg from '../../../../assets/bricks.png'
import robotoFont from '../../../../assets/fonts/Roboto_Condensed-Regular.ttf'
import Player from './Player'
import Wall from './Wall'
import Enemy from './Enemy'

const GRID_SIZE = 150

const GAME_MAP = [
  'XXXXXXXXXXXXXXXX XXXXXXXXX',
  'X                 e      X',
  'X               p        X',
  'X       XXXXXXX   X X    X',
  'X       X           X    X',
  'X       X   XX  X   X    X',
  'X       X   Xe  X   X    X X',
  'X           X XXX   X       eXX',
  'X       X           X         X',
  'X       XXXXXXXXXXXXX         X',
  'X    e                        X',
  'X                             X',
  'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
]

const GamePageP5 = () => {
  const wallTexture = useRef(null)
  const walls = useRef([])
  const enemies = useRef([])
  const fontRef = useRef(null)
  // const player = usePlayer()
  const player = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  const setup = (p, canvasParentRef) => {
    p.createCanvas(920, 600, p.WEBGL).parent(canvasParentRef)
    p.cursor(p.CROSS)
    fontRef.current = p.loadFont(robotoFont, () => {
      wallTexture.current = p.loadImage(brickImg, () => {
        // Image loaded callback
        setIsLoading(false) // Set loading to false when the image is loaded
      })
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
      if (fontRef.current) {
        p.textFont(fontRef.current)
      }
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

export default GamePageP5
