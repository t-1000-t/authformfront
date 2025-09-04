'use strict'
;(self.webpackChunkauthform = self.webpackChunkauthform || []).push([
  [457],
  {
    3457: (s, e, t) => {
      ;(t.r(e), t.d(e, { default: () => u }))
      var r = t(5043),
        i = t(1289),
        a = t.n(i),
        o = t(2107),
        h = t(6221),
        n = t(579)
      class y extends a().Scene {
        preload() {
          this.load.spritesheet('robot', 'images/robot_attack.png', { frameWidth: 64, frameHeight: 96 })
        }
        create() {
          ;(this.cameras.main.setBackgroundColor('#24252A'),
            this.add.text(20, 20, 'Use arrow keys or WASD to move!', { fontSize: '28px', fill: '#ffffff' }),
            this.anims.create({
              key: 'attack',
              frames: this.anims.generateFrameNumbers('robot', { start: 0, end: 15 }),
              frameRate: 12,
              repeat: -1,
            }),
            (this.player = this.add.sprite(200, 150, 'robot')),
            this.player.setScale(1.5),
            this.player.play('attack'),
            (this.cursors = this.input.keyboard.createCursorKeys()),
            (this.keys = this.input.keyboard.addKeys({
              w: a().Input.Keyboard.KeyCodes.W,
              a: a().Input.Keyboard.KeyCodes.A,
              s: a().Input.Keyboard.KeyCodes.S,
              d: a().Input.Keyboard.KeyCodes.D,
            })))
        }
        update() {
          ;(this.cursors.left.isDown || this.keys.a.isDown
            ? (this.player.x -= 4)
            : (this.cursors.right.isDown || this.keys.d.isDown) && (this.player.x += 4),
            this.cursors.up.isDown || this.keys.w.isDown
              ? (this.player.y -= 4)
              : (this.cursors.down.isDown || this.keys.s.isDown) && (this.player.y += 4),
            (this.player.x = a().Math.Clamp(this.player.x, 0, this.game.config.width)),
            (this.player.y = a().Math.Clamp(this.player.y, 0, this.game.config.height)),
            this.cursors.left.isDown ||
            this.cursors.right.isDown ||
            this.cursors.up.isDown ||
            this.cursors.down.isDown ||
            this.keys.w.isDown ||
            this.keys.a.isDown ||
            this.keys.s.isDown ||
            this.keys.d.isDown
              ? this.player.play('attack', !0)
              : (this.player.stop('attack'), this.player.setFrame(0)))
        }
      }
      const p = () => {
          const s = (0, r.useRef)(null)
          return (
            (0, r.useEffect)(() => {
              if (!s.current) return () => {}
              const e = { type: a().AUTO, width: 600, height: 450, parent: s.current, scene: y },
                t = new (a().Game)(e)
              return () => {
                t.destroy(!0)
              }
            }, []),
            (0, n.jsx)(h.A, { children: (0, n.jsx)(o.a, { ref: s }) })
          )
        },
        u = () => (0, n.jsx)(p, {})
    },
  },
])
//# sourceMappingURL=457.da0cb7fb.chunk.js.map
