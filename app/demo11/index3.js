/**
 * 变量提升函数优先：函数会首先被提升，再是变量
 */

console.group('--------demo1---------')

foo() // 1

var foo

function foo() {
  console.log(1)
}

foo = function () {
  console.log(2)
}

console.groupEnd()

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

/**
 * 后面的函数声明会覆盖前面的
 */

console.group('--------demo2---------')

foo1() // 3
function foo1() {
  console.log(1)
}
var foo1 = function () {
  console.log(2)
}
function foo1() {
  console.log(3)
}

console.groupEnd()
