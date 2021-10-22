// 匿名立即执行函数，利用函数作用域防止变量污染
;(function () {
  let a = 4
  console.log(a)
})()

const func = function showFunc() {}
console.log(func.prototype)
// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

/**
 * 闭包
 */
let name = 'xiuyan'

function showName() {
  console.log(name)
}

function changeName() {
  // 这里定义的 name 只在该函数作用域内生效，不会对 showName 产生作用
  let name = 'BigBear'
  showName()
}

changeName() // xiuyan

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

let name1 = 'xiuyan'

function changeName1() {
  let name1 = 'BigBear'
  showName()
  function showName() {
    console.log(name1)
  }
}

changeName1() // BigBear

// 跟上面不一样的是，这里 showName 是定义在 changeName1 这个作用域链里面的。一定要搞清楚 JS 的词法作用域， 是在函数定义时决定的。

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

/**
 * 闭包的使用场景
 */

// 计数器
uniqueInteger.counter = 0
function uniqueInteger() {
  return uniqueInteger.counter++
}

console.log(uniqueInteger())
console.log(uniqueInteger())

// 如果被恶意重置，调用就会出现问题
uniqueInteger.counter = undefined
console.log(uniqueInteger())

// 使用闭包来实现，只有在函数内部才能访问到 counter，所以是安全的
const uniqueInteger2 = (function () {
  let counter = 0
  return function () {
    return counter++
  }
})()

console.log(uniqueInteger2())
console.log(uniqueInteger2())

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

// 互不影响的计数器对象，每次调用 counter 都会创建一个新的作用域链和一个新的私有变量
function counter() {
  let n = 0
  return {
    count: function () {
      return n++
    },
    reset: function () {
      n = 0
    },
  }
}

const c = counter()
const d = counter()

console.group('counter')
c.count()
console.log(c.count())
console.log(d.count())
c.reset()
console.log(c.count())
console.log(d.count())
console.groupEnd()

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

//利用闭包实现的私有属性存取器方法
function addPrivateProperty(o, name, predicate) {
  let value
  o['get' + name] = function () {
    return value
  }
  o['set' + name] = function (v) {
    if (predicate && !predicate(v)) {
      throw new Error(`set ${name}: invalid value ${v}`)
    } else {
      value = v
    }
  }
}

const o = {}
// 给 o 添加一个 Name 属性，set 方法必须传入 string 类型的值
addPrivateProperty(o, 'Name', x => typeof x == 'string')
o.setName('Frank')
console.log(o.getName())
// o.setName(213) // 报错

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

function constfunc(v) {
  return function () {
    return v
  }
}

const funcs = []

for (var i = 0; i < 10; i++) {
  funcs[i] = constfunc(i)
}

console.group('constfunc')
console.log(funcs[5]()) // 5

// 当 constfunc1() 返回时，变量 i 的值是 10，所有的闭包都共享这个值，这不是我们想要的结果。
// 上面的程序才是我们想要的，或者把 for 里的 var i 改成 let i，创造一个块作用域，结果也是正确的。
function constfunc1() {
  const funcs = []
  for (var i = 0; i < 10; i++) {
    funcs[i] = function () {
      return i
    }
  }
  return funcs
}

const funcs1 = constfunc1()
console.log(funcs1[5]()) //10

console.groupEnd()
