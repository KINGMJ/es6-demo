
var tmp = 123

if (true) {
  tmp = 'abc' // ReferenceError
  let tmp
}

console.log(tmp)


/**
 * 如果不加 let tmp，结果是 abc；增加了这一句，会新增一个块级作用域，报 ReferenceError
 */