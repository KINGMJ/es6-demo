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
