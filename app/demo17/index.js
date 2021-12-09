const myCar = new Object()

myCar.make = 'Ford'
myCar.model = 'Mustang'

//对象中未赋值的属性值为 undefined
console.log(myCar.noProperty) // undefined

//对象有时也被称作关联数组，可以通过数组的方式设置值或获取
myCar['year'] = 1969
console.log(myCar.year)
console.log(myCar['year'])

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

const Person = function (name, age) {
  this.name = name
  this.age = age
}
// prototype 是构造函数的一个属性
Person.prototype.foo = 'bar'

const person = new Person('jack', 18)

// defineProperty enumerable 默认为 false
Object.defineProperty(person, 'city', { value: 'New York' })
Object.defineProperty(person, 'sex', { value: 'male', enumerable: true })

/**
 * for...in语句以任意顺序遍历一个对象的除Symbol以外的可枚举属性，包括继承的可枚举属性。
 * @param {*} obj
 * @param {*} objName
 * @returns
 */
function showProps(obj, objName) {
  var result = ''
  for (var i in obj) {
    // hasOwnProperty 会忽略从原型链上继承的属性
    if (obj.hasOwnProperty(i)) {
      result += objName + '.' + i + ' = ' + obj[i] + '\n'
    }
  }
  return result
}

console.log(showProps(person, 'person'))
//person.name = jack
//person.age = 18
//person.sex = male

console.log(Object.keys(person)) // ['name', 'age', 'sex']
console.log(Object.getOwnPropertyNames(person)) // ['name', 'age', 'city', 'sex']

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

/**
 * 创建对象
 */

// 使用对象初始化器
const obj = {
  property1: 'value1',
  2: 'value2',
  // 可计算属性名
  ['property' + 3]: 'value3',
  [4]: 'value4',
  'property n': 'value n',
}

console.log(obj)
//{2: 'value2', 4: 'value4', property1: 'value1', property3: 'value3', property n: 'value n'}

console.log(obj[4]) //value4
console.log(obj.property3) //value3
console.log(obj['property n']) //value n

// 使用构造函数，前面Person的示例

// 使用 Object.create 方法，它允许你为创建的对象选择一个原型对象，而不用定义构造函数
const Animal = {
  type: 'Invertebrates', // 属性默认值
  displayType: function () {
    // 用于显示type属性的方法
    console.log(this.type)
  },
}

// 创建一种新的动物——animal1
const animal1 = Object.create(Animal)

console.log(animal1) // {}
//实际创建到 [[Prototype]] 上了

animal1.displayType() // Output:Invertebrates

// 创建一种新的动物——Fishes
const fish = Object.create(Animal)
fish.type = 'Fishes'
fish.displayType() // Output:Fishes
