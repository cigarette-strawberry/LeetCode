/* 防抖函数原理：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。 */

let run = false
function debounce(params) {
  if (run) return
  run = true
  console.log(1)
  setTimeout(() => {
    run = false
    console.log(2)
  }, 1000)
}

setInterval(() => {
  debounce()
}, 500)

function debounce1(func, wait = 300) {
  let timer
  return function proxy(params) {
    console.log(3)
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func()
    }, wait)
  }
}

setTimeout(() => {
  debounce1(function aaa() {
    console.log(1)
  }, 500)
}, 500)
