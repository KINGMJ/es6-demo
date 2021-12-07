
console.group('--------demo1---------')

var name = 'xiuyan' // 全局作用域内的变量
 
// 函数作用域
function showName() {
	var name = 'jack'
	console.log(name)
}

// 块作用域，只有 age 在该快作用域下
{
	name = 'BigBear'
	let age = 40
}

showName() // 输出 'BigBear'，最终是按调用时的作用域而不是定义时的作用域进行输出

// console.log(age) // 报错

console.groupEnd()

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

console.group('--------demo2---------')

 var name = 'xiuyan'
 
 function showName() {
	 console.log(name)
 }
 
 function changeName() {
	 // 这里定义的 name 只在该函数作用域内生效，不会对 showName 产生作用
	 var name = 'BigBear'
	 showName()
 }
 
 changeName() // xiuyan
 
 console.groupEnd()