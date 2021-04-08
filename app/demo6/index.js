/**
 *  柯里化与偏应用
 */

//实现curry函数
const curry = binaryFn => {
  return firstArg => {
    return secondArg => {
      return binaryFn(firstArg, secondArg)
    }
  }
}
const add = (x, y) => x + y
const multiply = (x, y) => x * y

const curriedAdd = curry(add)
const curriedMultiply = curry(multiply)
const result = 2 |> curriedMultiply(2) |> curriedAdd(6)
console.log(result)

const curry1 = fn => {
  if (typeof fn !== 'function') {
    throw Error('No function provided')
  }
  //...args是一个数组
  return function curriedFn(...args) {
    //如果args的长度，即curriedMultiply1的参数个数小于 fn 的参数长度，即 multiply1 的参数长度，需要对它进行curry操作
    if (args.length < fn.length) {
      return function () {
        //arguments 不是一个数组，需要转化为数组
        return curriedFn.apply(null, args.concat([].slice.call(arguments)))
      }
    }
    return fn.apply(null, args)
  }
}

const multiply1 = (x, y, z) => x * y * z
const curriedMultiply1 = curry1(multiply1)

console.log(curriedMultiply1(1)(2)(3))

//偏函数
const partial = function (fn, ...partialArgs) {
  let args = partialArgs
  return function (...fullArguments) {
    let arg = 0
    for (let i = 0; i < args.length && arg < fullArguments.length; i++) {
      if (args[i] === undefined) {
        args[i] = fullArguments[arg++]
      }
    }
    return fn.apply(null, args)
  }
}

const delayTenMs = partial(setTimeout, undefined, 10)

delayTenMs(() => {
  console.log('Do Y task')
})
