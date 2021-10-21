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
// {x: 1, y: 1}
p.theta = 4
// theta 没有 set，这句话不起作用
console.log(p)
// {x: 1, y: 1}
// 打印属性
console.log(Object.getOwnPropertyDescriptors(p))
//{ r: {enumerable: true, configurable: true, get: ƒ, set: ƒ}
// theta: {set: undefined, enumerable: true, configurable: true, get: ƒ}
// x: {value: 1, writable: true, enumerable: true, configurable: true}
// y: {value: 1, writable: true, enumerable: true, configurable: true} }

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

/**
 * Object.defineProperty
 */

const o = {}

Object.defineProperty(o, 'x', {
  value: 1,
  writable: true,
  enumerable: false, // 不可枚举，用for...in遍历不到
  configurable: true,
})

console.group('defineProperty')

//属性存在，但不可枚举
console.log(o.x) // 1
console.log(Object.keys(o)) // []

// 改为只读
Object.defineProperty(o, 'x', { writable: false })
// 操作失败但不报错，严格模式会抛出异常
o.x = 2
console.log(o.x) // 1

// 通过配置的方式修改值
Object.defineProperty(o, 'x', { value: 2 })
console.log(o.x) // 2

// 将 x 修改为存取器属性
Object.defineProperty(o, 'x', { get: () => 0 })
console.log(o)

// 同时修改多个属性，使用 Object.defineProperties

// 创建一个封闭的对象，包括一个冻结的原型和一个不可枚举的属性
const newObj = Object.create(Object.freeze({ x: 1 }), { y: { value: 2, writable: true } }) |> Object.seal

newObj.x = 2 // 操作失败
newObj.y = 4 // 可以操作

console.log(newObj)

console.groupEnd()

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

/**
 * 对象序列化
 */

const obj = {
  x: 1,
  y: {
    arr: [false, null, ''],
    z: function (x) {
      return x
    },
  },
}

// 浅拷贝
const obj2 = obj
// 使用序列化和反序列化可以实现深拷贝，注意如果obj中有function会丢失掉
const obj3 = obj |> JSON.stringify |> JSON.parse

console.group('对象序列化')
// function 会丢失掉
console.log(obj3)

obj.y.z = function (x) {
  return x * x
}
obj.y.arr[0] = true

console.log(obj2.y.z(2)) // 4
console.log(obj2.y.arr) // [true, null, '']
console.log(obj3.y.arr) // [false, null, '']
console.groupEnd()
