import React, { useEffect, useRef } from 'react'
import Phaser from 'phaser'
import { Box } from '@chakra-ui/react'

class MyScene extends Phaser.Scene {
  preload() {
    // this.load.image('player', 'images/sprite_32x32.jpg')
    this.load.spritesheet('robot', 'images/robot_attack.png', {
      frameWidth: 64,
      frameHeight: 96,
    })
  }

  create() {
    this.cameras.main.setBackgroundColor('#24252A')
    this.add.text(20, 20, 'Use arrow keys or WASD to move!', { fontSize: '28px', fill: '#ffffff' })
    this.anims.create({
      key: 'attack',
      frames: this.anims.generateFrameNumbers('robot', { start: 0, end: 15 }),
      frameRate: 12,
      repeat: -1,
    })

    // add the player sprite to the scene
    this.player = this.add.sprite(400, 300, 'robot')
    this.player.setScale(1.5) // double the size
    this.player.play('attack')

    // Set up keyboard inputs
    this.cursors = this.input.keyboard.createCursorKeys()

    // Add WASD keys
    this.keys = this.input.keyboard.addKeys({
      w: Phaser.Input.Keyboard.KeyCodes.W,
      a: Phaser.Input.Keyboard.KeyCodes.A,
      s: Phaser.Input.Keyboard.KeyCodes.S,
      d: Phaser.Input.Keyboard.KeyCodes.D,
    })
  }

  update() {
    const speed = 4

    if (this.cursors.left.isDown || this.keys.a.isDown) {
      this.player.x -= speed
    } else if (this.cursors.right.isDown || this.keys.d.isDown) {
      this.player.x += speed
    }

    if (this.cursors.up.isDown || this.keys.w.isDown) {
      this.player.y -= speed
    } else if (this.cursors.down.isDown || this.keys.s.isDown) {
      this.player.y += speed
    }

    // keep the player inside the games bounds
    this.player.x = Phaser.Math.Clamp(this.player.x, 0, this.game.config.width)
    this.player.y = Phaser.Math.Clamp(this.player.y, 0, this.game.config.height)

    if (
      this.cursors.left.isDown ||
      this.cursors.right.isDown ||
      this.cursors.up.isDown ||
      this.cursors.down.isDown ||
      this.keys.w.isDown ||
      this.keys.a.isDown ||
      this.keys.s.isDown ||
      this.keys.d.isDown
    ) {
      this.player.play('attack', true)
    } else {
      this.player.stop('attack')
      this.player.setFrame(0) // show idle frame
    }
  }
}

const GamePhaser = () => {
  const gameRef = useRef(null)

  useEffect(() => {
    if (!gameRef.current) return undefined

    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: gameRef.current,
      scene: MyScene,
    }

    const game = new Phaser.Game(config)

    return () => {
      game.destroy(true)
    }
  }, [])

  return <Box ref={gameRef} />
}

export default GamePhaser
