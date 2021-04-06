/**
 * 函数式编程训练
 */
const sortBy = property => {
  return (a, b) => {
    const result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0
    return result
  }
}

const people = [
  { firstName: 'aaFirst', lastName: 'ccLast' },
  { firstName: 'ccFirst', lastName: 'aaLast' },
  { firstName: 'bbFirst', lastName: 'bbLast' },
]

console.log(people.sort(sortBy('lastName')))

//闭包
let global = 'global'
const outer = () => {
  let outer = 'outer'
  const inner = () => {
    let a = 5
    console.log(global)
    console.log(a)
    console.log(outer)
  }
  inner()
}
outer()

// call、apply、bind
function Parent(name, age) {
  this.name = name
  this.age = age
  console.log(this)
  console.log(this.name, this.age)
}

function Children(name, age, height) {
  // console.log(this, arguments)
  Parent.apply(this, [name, age, height])
  this.height = height
}

let person = new Children('李四', 15, 170)
console.log(person.name, person.age, person.height)

//once 函数，只会执行一次
const once = fn => {
  let done = false
  return () => (done ? undefined : ((done = true), fn.apply(this, arguments)))
}

const doPayment = once(() => {
  console.log('Payment is done')
})

doPayment()
doPayment()

//memoized 函数
const memoized = fn => {
  const lookupTable = {}
  return arg => {
    console.log(lookupTable)
    return lookupTable[arg] || (lookupTable[arg] = fn(arg))
  }
}

const fastFactorial = memoized(n => {
  if (n === 0) {
    return 1
  }
  return n * fastFactorial(n - 1)
})

fastFactorial(5)
fastFactorial(3)

console.group('-----------------------------数组的函数式编程-------------------------------------')

//map 函数
const map = (array, fn) => {
  const results = []
  for (const value of array) {
    results.push(fn(value))
  }
  return results
}

const newArr = map([1, 2, 3], x => x * x)
console.log(newArr)


console.groupEnd()
