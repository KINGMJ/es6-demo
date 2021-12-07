
var tmp = 123

if (true) {
  tmp = 'abc' // ReferenceError

  let tmp
  console.log(tmp)
}

console.log(tmp)