/**
 * 闭包真题
 */
function test() {
  var num = []
  var i

  for (i = 0; i < 10; i++) {
    num[i] = function () {
      console.log(i)
    }
  }

  return num[9]
}

test()() // 10

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

var test1 = (function () {
  var num = 0
  return () => {
    return num++
  }
})()

for (var i = 0; i < 10; i++) {
  test1()
}

console.log(test1())
