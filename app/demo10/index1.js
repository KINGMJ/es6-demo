const arr = [1, 2, 3]

// forEach不会改变元素组，但 callback函数在调用的时候，可能改变原数组
arr.forEach((item, index, _arr) => {
  _arr[1] = 4
  console.log(item)
})

console.log(arr) //[1,4,3]

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

const arr1 = [1, 2, 3, 4]

arr1.every((item, index, _arr) => {
  _arr[1] = 4
})

console.log(arr1) //[1,4,3,4]

