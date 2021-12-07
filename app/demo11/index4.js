function foo() {
  var a = 2
  function baz() {
    console.log(a) // 2
  }
  bar(baz)
}

function bar(fn) {
  fn() // 妈妈快看呀，这就是闭包！
}

foo()
