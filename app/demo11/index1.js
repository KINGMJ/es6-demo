/**
 * 函数提升，只会提升函数声明，而不会提升函数表达式
 */

f() // 0
// fn() // 报错 Uncaught TypeError: fn is not a function

/**
 * 函数表达式
 */
var fn = function () {
  console.log(1)
}

/**
 * 函数声明
 */
function f() {
  console.log(0)
}

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

/**
 * var 全局变量，这里输出的是 10 而不是 6；如果用 let 就是 6
 */
console.group('--------demo2---------')

var a = []
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  }
}
a[6]() // 10

console.groupEnd()

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

console.group('--------demo3---------')

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i) // 5 5 5 5 5
  }, 1000)
}

console.log(i) // 5 

console.groupEnd()
