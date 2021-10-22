# call、apply 与 bind

# apply

`func.apply(thisArg, [argsArray])`

apply() 方法调用一个具有给定 this 值的函数，以及以一个数组（或类数组对象）的形式提供的参数。

thisArg 在 func 函数运行时使用的 this 值。非严格模式，指定为 null 或 undefined 时会自动替换为指向全局对象

argsArray 一个数组或者类数组对象，其中的 **数组元素将作为单独的参数** 传给 func 函数。
如果该参数的值为 null 或 undefined，则表示不需要传入任何参数。从 ECMAScript 5 开始可以使用类数组对象。

# call

call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

**它与 apply 的唯一区别就是它接受的是一个参数列表，而 apply 方法接受的是一个包含多个参数的数组**

# bind

该方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

所以该方法的返回值是一个原函数的拷贝
