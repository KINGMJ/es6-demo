const p = {
  x: 1.0,
  y: 1.0,

  get r() {
    return this.x + this.y
  },

  set r(newVal) {
    this.x = this.x + newVal
    this.y = this.y + newVal
  },

  get theta() {
    return this.x - this.y
  },
}

console.log(p)

p.theta = 4

console.log(p)

console.log(Object.getOwnPropertyDescriptors(p))


