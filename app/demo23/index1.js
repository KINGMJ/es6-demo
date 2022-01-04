/**
 * 使用Reflect 处理 this 绑定的问题
 */
const target = {
  fun: function () {
    console.log(this == target)
  },
}

const handler = {
  get(target, prop, receiver) {
    if (typeof target[prop] === 'function') {
      return target[prop].bind(target)
    }
    return Reflect.get(...arguments)
  },
}

const p1 = new Proxy(target, handler)

p1.name = 'jack'

console.log(p1.fun())
