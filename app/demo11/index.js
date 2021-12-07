/**
 * var 变量提升
 */
console.group('--------demo1---------')

console.log(x === undefined) // true
var x = 3
console.log(x)

console.groupEnd()

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

console.group('--------demo2---------')
myName = 'Chris'

function logName() {
  console.log(myName)
}

logName() // Chris

var myName

console.groupEnd()

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

/**
 * let 跟 var 不一样，在变量声明之前就引用会抛出引用错误。这个变量在一开始的时候就处于一个暂时性死区
 */
console.group('--------demo3---------')

if (true) {
  let y = 5
}
console.log(y)
// Uncaught ReferenceError: y is not defined
console.groupEnd()

