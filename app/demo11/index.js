'use strict'

/**
 * var 变量提升
 */
myName = 'Chris'

function logName() {
  console.log(myName)
}

logName() // Chris

var myName

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

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

var a = []
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  }
}
a[6]() // 10

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

// if (true) {
//   let y = 5
// }
// console.log(y)

// index.js:56 Uncaught ReferenceError: y is not defined

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

// console.log(x === undefined) // true
// var x = 3
// console.log(x)

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

// var name = 'xiuyan' // 全局作用域内的变量

// // 函数作用域
// function showName() {
//   console.log(name)
// }

// // 块作用域
// {
//   name = 'BigBear'
//   let age = 40
// }

// showName() // 输出 'BigBear'

// console.log(age) // 报错

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, 1000)
// }

// console.log(i) // 5 5 5 5 5

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

var name = 'xiuyan'

function showName() {
  console.log(name)
}

function changeName() {
  // 这里定义的 name 只在该函数作用域内生效，不会对 showName 产生作用
  var name = 'BigBear'
  showName()
}

changeName() // xiuyan
