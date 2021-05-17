// 函子
const Container = function (val) {
  this.value = val
}

Container.of = function (value) {
  return new Container(value)
}

Container.prototype.map = function (fn) {
  return Container.of(fn(this.value))
}

const test = Container.of(3)
console.log(test)

const double = x => x * x
console.log(Container.of(3).map(double))



