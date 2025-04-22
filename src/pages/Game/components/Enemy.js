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

export default Enemy
