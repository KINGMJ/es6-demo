//无操作转发
const target = {}
const p = new Proxy(target, {})
p.name = 'jack'
console.log(target) // {name: 'jack'}

//get 操作
console.group('------ get 操作 ------')

const handler = {
  get: (obj, prop) => {
    //不存在的属性返回37
    return prop in obj ? obj[prop] : 37
  },
}

const p1 = new Proxy({}, handler)

p1.a = 1
p1.b = undefined

console.log(p1.a, p1.b) // 1 undefined
console.log(p1.c) // 37
console.groupEnd()

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

console.group('------ set 操作 ------')

const validator = {
  set: (obj, prop, value) => {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer')
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid')
      }
    }
    // The default behavior to store the value
    obj[prop] = value
    // 表示成功
    return true
  },
}

const p2 = new Proxy({}, validator)

p2.age = 100
//p2.age = 'young' //抛出异常

console.groupEnd()

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

console.group('------ this 问题 ------')

const target2 = {
  m: function () {
    console.log(this == p3)
  },
}

//proxy 代理的对象，this指向 proxy
const p3 = new Proxy(target2, {})
target2.m() //false
p3.m() //true

//原生对象的内部属性，只有通过正确的 this 才能拿到
const p4 = new Proxy(new Date(), {})
//p4.getDate() //TypeError: this is not a Date object.

const target3 = new Date('2015-01-01')
const handler3 = {
  get(target, prop) {
    if (prop === 'getDate') {
      //通过bind绑定this为target
      return target.getDate.bind(target)
    }
    return Reflect.get(target, prop)
  },
}
const p5 = new Proxy(target3, handler3)

console.log(p5.getDate()) // 1

console.groupEnd()
