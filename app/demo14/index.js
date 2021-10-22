/**
 * 文档的描述比较晦涩，这个例子就很好说明了call的作用
 * 它的第一个参数是要调用函数的母对象，它是调用上下文，在函数体内通过 this 获取对它的引用。
 * 所以打印的 this 是一个 String 对象
 */
function a() {
  console.log(this)
}

a.call('123')

/**
 * 利用 apply 完成 rest 参数类似的作用
 */
const numbers = [5, 6, 2, 3]

const max = Math.max(...numbers)
const max2 = Math.max.apply(null, numbers)

console.log(max)
console.log(max2)

/**
 * call 方法的运用
 */
function Product(name, price) {
  this.name = name
  this.price = price
}

function Food(name, price) {
  Product.call(this, name, price)
  this.category = 'food'
}

console.log(new Food('cheese', 5).name)

/**
 * 在非严格模式下，未传入参数或者第一个参数传入null、undefined都会被全局对象替代
 * 对 call 来说，第一个参数之后的所有实参就是要传入待调用函数的值
 */
window.sData = 'Wisen'
function display(x, y) {
  console.log(this) // Window 对象
  console.log('sData value is %s ', this.sData) // sData value is Wisen
  console.log(x + y) // 3
}

display.call(null, 1, 2) // sData value is Wisen

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

/**
 * bind 函数
 */
const module = {
  x: 42,
  getX: function () {
    console.log(this)
    return this.x
  },
}

console.group('bind')

// 直接调用，this 为 moudle 本身，输出的是 42
console.log(module.getX())

// 将 module.getX 赋值给一个对象，作用域变成全局作用域。所以这里 this 是一个 Window 对象，结果是 undefined
const unboundGetX = module.getX
console.log(unboundGetX())

const boundGetX = unboundGetX.bind(module)
// 这里新函数 boundGetX 的 this 被指定为 bind 的第一个参数，也就是 module
console.log(boundGetX())
// expected output: 42
console.groupEnd()

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

/**
 * bind 应用：偏函数（固定一些参数，产生更少参数的函数）
 */

const sum = (a, b) => a + b
const addOne = sum.bind(null, 1)
console.log(addOne(2))
