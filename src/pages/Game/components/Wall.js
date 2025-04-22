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

export default Wall
