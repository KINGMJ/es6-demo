function fun() {
  console.log('foobar')
}

const foo = fun

fun()
foo()

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

function sayHello() {
  return 'Hello, '
}

function greeting(helloMessage, name) {
  console.log(helloMessage() + name)
}

greeting(sayHello,'JavaScript!')

/**
 * 头等函数：
 * 1. 函数可以被当做变量使用；
 * 2. 函数可以被当做参数传递给其他函数；
 * 3. 可以作为另一个函数的返回值
 * 4. 可以赋值给一个变量
 */
