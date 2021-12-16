// const timeoutId = setTimeout(() => {
//   console.log(123)
// }, 3000)

// console.log(timeoutId)

// function log(msg) {
//   console.log(`log: ${msg}`)
// }

// setTimeout(log, 3000, '打印日志')

// // ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

// import Tpl from './index.hbs'
// let nIntervalId

// window.onload = function () {
//   const body = document.getElementsByTagName('body')
//   body[0].innerHTML = Tpl()

//   const stopBtn = document.getElementById('stop_btn')
//   stopBtn.onclick = stopTextColor

//   changeColor()
// }

// function changeColor() {
//   nIntervalId = setInterval(flashText, 1000)
// }

// function flashText() {
//   const oElem = document.getElementById('my_box')
//   oElem.style.color = oElem.style.color == 'red' ? 'blue' : 'red'
// }

// function stopTextColor() {
//   clearInterval(nIntervalId)
// }

// ----------- (●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●)(●'◡'●) ------------

let i = 1

setTimeout(function run() {
  console.log(i)
  i++
  if (i == 10) {
    return
  }
  setTimeout(run, 1000)
}, 1000)
