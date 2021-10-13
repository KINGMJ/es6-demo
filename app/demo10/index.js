/**
 * map
 */

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
]

/**
 * callback 函数会被自动传入三个参数：数组元素，元素索引，原数组本身。
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
 * filter
 */

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

// callback 传入参数：element、index、array、thisArg
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
 * reduce
 */
const array1 = [1, 2, 3, 4]

// reduce callback 的参数：previousValue, currentValue, currentIndex, array

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

import _ from 'lodash'
const arr11 = [
  { id: 1, name: 'jack', playlist: [{ id: 1, name: '歌单1' }] },
  { id: 2, name: 'rose', playlist: [{ id: 1, name: '歌单1' }] },
  { id: 3, name: 'mike', playlist: [{ id: 1, name: '歌单1' }] },
]

const arr2 = [
  { id: 1, name: 'jack' },
  { id: 2, name: 'rose' },
  { id: 4, name: 'haah' },
]

for (let item of arr2) {
  const index = _.findIndex(arr11, o => {
    return o.id == item.id
  })
  if (!!~index) {
    arr11[index].playlist.push({ id: 2, name: '歌单2' })
  } else {
    arr11.push({ ...item, playlist: { id: 2, name: '歌单2' } })
  }
}

console.log(arr11)
