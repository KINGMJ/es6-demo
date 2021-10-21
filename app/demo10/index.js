const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
]

/**
 * map((currentValue[, index[, array]])=>{ // Return element for new_array })
 * 1. 用数组每个元素调用 callback 的值创建一个新数组
 * 2. callback 的参数：currentValue 当前正在处理的元素；index 当前元素的索引；array 原数组
 */
const test1 = kvArray.map(item => {
  console.group('test1')
  console.log(item)
  console.groupEnd()
})
const test2 = kvArray.map((item, index) => {
  console.group('test2')
  console.log(item)
  console.log(index)
  console.groupEnd()
})

/**
 *  ## 重要：
 *  map 的作用是对原数组中的每个元素按顺序执行 callback 函数，callback 每次执行的返回值组合起来形成一个新的数组；
 *	map 不修改它的原数组本身(当然可以在 callback 执行时改变原数组，但这种做法是不推荐的，比如：下面的例子）
 */

// const test3 = kvArray.map(item => {
//   item.value = 111
//   return item
// })
// console.group('test3')
// console.log(test3)
// console.log(kvArray)
// console.groupEnd()

/**
 * 上面的例子应该这样来做
 */
const test4 = kvArray.map(item => {
  const newItem = {
    ...item,
    value: 111,
  }
  return newItem
})
console.group('test4')
console.log(test4)
console.log(kvArray)
console.groupEnd()

/**
 * 注意跟 parseInt 的结合使用，parseInt(string, radix) 是有两个参数的
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 */
const test5 = ['1', '2', '3'].map(parseInt)
console.group('test5')
console.log(test5)
console.groupEnd()
// 返回的结果是 [1, NaN, NaN]

// 迭代的步骤如下：
// parseInt(string, radix) -> map(parseInt(value, index))
/*  first iteration (index is 0): */ parseInt('1', 0) // 1
/* second iteration (index is 1): */ parseInt('2', 1) // NaN
/*  third iteration (index is 2): */ parseInt('3', 2) // NaN

// 正确做法：
function returnInt(element) {
  return parseInt(element, 10)
}
const test6 = ['1', '2', '3'].map(returnInt)
console.group('test6')
console.log(test6)
console.groupEnd()
// [1, 2, 3]

/**
 * 当返回 undefined 或没有返回内容
 */
const numbers = [1, 2, 3, 4]
const test7 = numbers.map((num, index) => {
  if (index < 3) {
    return num
  }
})
console.group('test7')
console.log(test7)
console.groupEnd()
// [1, 2, 3, undefined]

// -------------- (ﾉ･ω･)ﾉﾞ(○’ω’○)(´・ω・`) (｡◕ˇ∀ˇ◕）(●'◡'●)ﾉ♥ <(▰˘◡˘▰)> ｡◕‿◕｡ (｡・`ω´･) (♥◠‿◠)ﾉ ------------------

/**
 * filter(callback(element[, index[, array]])
 * 对数组进行过滤，返回过滤后的数组；如果所有的元素都返回false，返回一个空数组
 */

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
const filterTest1 = words.filter(word => word.length > 6)
console.group('filter test1')
console.log(filterTest1)
console.groupEnd()

// filter 不会改变原数组；并且遍历的元素范围在第一次调用 callback
const filterTest2 = words.filter(o => {
  words.push('newItem')
  return o.length > 5
})

console.log(filterTest2)

// -------------- (ﾉ･ω･)ﾉﾞ(○’ω’○)(´・ω・`) (｡◕ˇ∀ˇ◕）(●'◡'●)ﾉ♥ <(▰˘◡˘▰)> ｡◕‿◕｡ (｡・`ω´･) (♥◠‿◠)ﾉ ------------------

/**
 * reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
 * 1. 对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
 * 2. reducer参数：accumulator 累加器；currentValue 当前值；index 当前索引；array 原数组
 * 3. initialValue 作为第一次调用 reducer 函数时第一个参数的值。如果没有提供值，则将使用数组中的第一个元素
 * 4. 在没有初始值的空数组上调用 reduce 将报错
 */
const array1 = [1, 2, 3, 4]

/**
 * Callback function
 * reduce(callbackFn)
 * reduce(callbackFn, initialValue)
 */
console.group('reduce test1')
const reducer = (previousValue, currentValue) => {
  console.log('前一个值，前面累加的值：' + previousValue)
  console.log('当前的值，也就是数据的item：' + currentValue)
  return previousValue + currentValue
}

console.log(array1.reduce(reducer))
console.log(array1.reduce(reducer, 5))
console.groupEnd()

/**
 * 使用 .reduce() 替换 .filter().map()
 */

const numbers2 = [-5, 6, 2, 0]

const doublePositiveNumbers = numbers2.reduce((prev, current) => {
  if (current > 0) {
    const doubled = current * 2
    prev.push(doubled)
  }
  return prev
}, [])

console.group('reduce test2')
console.log(doublePositiveNumbers)
console.groupEnd()
