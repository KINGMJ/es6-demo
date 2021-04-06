/**
 * 1. 函数是一等公民（First-Class Functions），可以把函数赋值给一个对象
 */
const hi = name => `Hi ${name}`
console.log(hi)
console.log(hi('jack'))

/**
 * 2. 声明式编程（Declarative Programming），在递归的套路中我们很容易理解
 */

/**
 * 3. 惰性求值(Lazy Evaluation)
 */

/**
 * 4. 无状态和数据不可变（Statelessness and Immutable data）
 *    为了实现该目标，我们的函数应该是纯函数，没有副作用
 *    纯函数：无状态，不可变。即函数的运行结果不依赖全局变量，this指针，IO操作等；函数不修改全局变量，不修改入参
 */
const list = [
  { name: 'jack', age: 12 },
  { name: 'rose', age: 16 },
]

//错误用法，把 map 当成 forEach来用，会产生副作用
// list.map((item) => {
//   item.age++;
// });
// console.log(list);

//正确用法
const newList = list.map(item => ({ ...item, age: item.age + 1 }))
console.log(newList)

/**
 * 5. map reduce filter，函数式编程的三个高阶函数
 */
const ages = [32, 16, 18, 41]
const children = ages.filter(o => o <= 18)
console.log(children)
const sumAges = ages.reduce((total, item) => total + item)
console.log(sumAges)

/**
 * 6. 柯里化（Currying）和函数组合（Compose）
 * 柯里化：f(a,b,c) -> f(a)(b)(c)
 */
const add = function (x) {
  return function (y) {
    return x + y
  }
}
const sum = add(1)(10)
console.log(sum)

//函数组合，目的是让多个函数组合成一个函数。下面这段代码传入f和g两个函数，先执行g(x)，把g(x)的结果作为f函数的参数
const compose = (f, g) => x => f(g(x))
const f = x => x + 1
const g = x => x * 2
const fg = compose(f, g)
console.log(fg(1)) // 1*2+1

//柯里化中要把操作的数据放到最后，推荐使用 Ramda 库

console.group('------------------------------------------------------------------')

const fn = () => {}
console.log(typeof fn)

//高阶函数
const crazy = () => {
  return String
}
console.log(crazy()('Hello'))
console.groupEnd()

console.group('-----------------------------实现foreach函数-------------------------------------')
const forEach = (array, fn) => {
  for (let i = 0; i < array.length; i++) {
    fn(array[i])
  }
}
forEach([1, 2, 3], i => {
  console.log(i)
})
console.groupEnd()

console.group('-----------------------------闭包-------------------------------------')
const fn1 = arg => {
  let outer = 'Visible'
  let innerFn = () => {
    console.log(outer)
    console.log(arg)
  }
  return innerFn
}

const closureFn = fn1(5)
closureFn()
console.groupEnd()

console.group('-----------------------------真实的高阶函数-------------------------------------')
const tap = value => fn => (typeof fn === 'function' && fn(value), console.log(value))
tap('fun')(it => console.log('value is ', it))

const arr = [1, 2, 3].map(a => a * a)
console.log(arr)

const arr2 = [1, 2, 3].map((a, b, c) => {
  console.log(a) //当前处理的元素
  console.log(b) //当前元素的索引值
  console.log(c) //数组本身
})

//unary 函数，最多接受一个参数的函数，忽略多余的参数
const unary = fn => (fn.length == 1 ? fn : arg => fn(arg))
const arr3 = ['1', '2', '3'].map(unary(parseInt))
console.log(arr3)
console.groupEnd()

//箭头函数可以与变量解构结合使用
console.group('------------------------------------------------------------------')
const person = { first: 'jack', last: 'ma' }
const full = ({ first, last } = person) => {
  console.log(person)
  return first + ' ' + last
}
console.log(full(person))
console.groupEnd()

console.group('------------------------------------------------------------------')
//memorized函数，缓存结果

console.groupEnd()
