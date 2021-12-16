// // callback 的方式进行异步编程
// function f1(callback) {
//   console.log('f1 begin')
//   setTimeout(function () {
//     callback()
//   }, 1000)
//   console.log('f1 end')
// }

// function f2() {
//   console.log('f2')
// }
// f1(f2)

// // ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

// //创建一个Promise，如果 resolve 了，reject就不起作用
// const myFirstPromise = new Promise((resolve, reject) => {
//   resolve(123)
//   reject(456)
//   console.log('会执行这句代码吗？')
//   resolve('会覆盖吗')
// })

// //myFirstPromise是一个fulfilled状态的Promise对象，PromiseResult 为 123
// console.log(myFirstPromise)

// // secondPromise 是一个pending 状态的Promise对象
// const secondPromise = myFirstPromise
//   .then(res => {
//     console.log('then:' + res)
//     return 'hahaha'
//   })
//   .then(res => {
//     console.log(res) //hahaha
//     return 'success'
//   })
//   .catch(err => {
//     console.log('err:' + err)
//     return err
//   })
//   .finally(() => {
//     console.log('finally表示一个最终的状态，无论成功或失败都会执行，没有参数')
//   })

// console.log(secondPromise)

// // ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

// // 一个返回失败的Promise
// const rejectPromise = new Promise((resolve, reject) => {
//   reject('失败了')
// })

// const secondRejectPromise = rejectPromise
//   .then(res => {
//     console.log('会执行吗？' + res)
//   })
//   .catch(err => {
//     console.log(err)
//     return '错误结果'
//   })

// console.log(secondRejectPromise)

// const thirdRejectPromise = secondRejectPromise.then(res => {
//   console.log(res)
// })

// // ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

// // executor 运行时抛出异常，Promise 的状态为 reject
// const errorPromise = new Promise((resolve, reject) => {
//   throw new Error('运行中抛出了一个异常')
//   console.log('下面的代码会执行吗')
//   return '返回值'
// })

// console.log(errorPromise)

// const errorPromise1 = errorPromise
//   .then(res => {
//     console.log(res)
//   })
//   .catch(error => {
//     console.log(error)
//   })

// // ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------
// // then 方法
// const rejectPromise2 = new Promise((resolve, reject) => {
//   reject('失败了，统一由then处理')
// })

// rejectPromise2
//   .then(
//     res => {
//       console.log(res)
//     },
//     error => {
//       console.log(error)
//     }
//   )
//   .catch(error => {
//     console.log('会调用这个吗' + error)
//   })

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

// Promise 链式嗲用
const promise1 = function () {
  return new Promise((resolve, reject) => {
    resolve('promise1的值')
  })
}

const promise2 = function (res) {
  return new Promise((resolve, reject) => {
    reject('传递给promise2：' + res)
  })
}

const promise3 = function (res) {
  return new Promise((resolve, reject) => {
    resolve('promise3：' + res)
  })
}

const promise4 = function (res) {
  return new Promise((resolve, reject) => {
    resolve('promise4：' + res)
  })
}

promise1()
  .then(res => {
    console.log('promise1:' + res)
    return promise2(res)
  })
  .then(res => {
    console.log('promise2:' + res)
    return promise3(res)
  })
  .then(res => {
    console.log('promise3:' + res)
  })
  .catch(err => {
    console.log('出错了：' + err)
  })
  .finally(() => {
    console.log('处理完毕')
  })

promise1()
  .then(res => promise3(res))
  .then(res => promise4(res))
  .then(finallyRes => {
    console.log('finallyResult：' + finallyRes)
  })
  .catch(err => {
    console.log('error:' + err)
  })
