import _ from 'lodash'

// 1. pipeline 管道操作
const capitalize = (input) => input[0].toUpperCase() + input.substring(1)
const removeSpaces = (input) => input.trim()
const repeat = (input, times) => input.repeat(times)

//不使用管道操作符
const withoutPipe = repeat(capitalize(removeSpaces('  i am gods  ')), 2)
console.group("不使用管道操作符：")
console.log(withoutPipe)
console.groupEnd()

//使用管道操作符
const withPipe = '  i am gods  '
  |> removeSpaces
  |> capitalize
  |> (str => repeat(str, 2))

console.group("使用管道操作符")
console.log(withPipe)
console.groupEnd()


// 另一种写法
const repeat2 = times => input => input.repeat(times)
//等效于
// const repeat2 = function repeat2(times) {
//   return function (input) {
//     return input.repeat(times);
//   };
// };

const withPipe2 = '  i am gods  '
  |> removeSpaces
  |> capitalize
  |> repeat2(4)

console.group("使用科里化");
console.log(withPipe2);
console.groupEnd();

//使用lodash来组合函数
const lodashFlow = _.flow([removeSpaces,capitalize,repeat2(4)])

console.group("使用lodash的flow来组合函数");
console.log(lodashFlow("  i am gods  "));
console.groupEnd();

// 3. String.trimStart() & String.trimEnd()
const greeting = '  Hello World!  '
console.group('trimStart和trimEnd')
console.log(greeting.trimEnd())
console.log(greeting.trimStart())
console.groupEnd()