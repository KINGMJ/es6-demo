const str = 'hello'
console.log(str.__proto__)
//String {'', constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
console.log(str.__proto__ === String.prototype)

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

function Foo() {
  // ...
}
Foo.prototype.foo = 'bar'

console.log(Foo.prototype) // {foo: 'bar', constructor: ƒ Foo()}
console.log(Foo.prototype.constructor === Foo) // true

const a = new Foo()
console.log(a)
console.log(a.constructor === Foo) // true，a 实际上并没有 constructor
console.log(Object.getPrototypeOf(a) === Foo.prototype)

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

//创建一个Dog构造函数
function Dog(name, age) {
  this.name = name
  this.age = age
}
Dog.prototype.eat = function () {
  console.log('肉骨头真好吃')
}
// 使用Dog构造函数创建dog实例
const dog = new Dog('旺财', 3)

console.log(dog)
console.log(dog.__proto__.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // null

// 实例化对象的过程其实是把 dog 对象的[[Prototype]] 关联到 Dog.prototype
// 所以 dog 与 dog2 之间是否关系的
dog.__proto__.eat = function(){
	console.log('骨头不好吃')
}
const dog2 = new Dog('雪莉', 4)
dog2.eat() // 骨头不好吃
