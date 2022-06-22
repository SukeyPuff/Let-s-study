/**
 * throttle 的作用是什么？
 * 实现 throttle 的核心思路是什么？
 * 
 * 触发高频事件后，每隔 n 秒只执行一次。
 * 
 * throttle 的核心思想是，
 * 在每一次调用 throttle 函数时，
 * 如果已经存在 timer，则直接返回，
 * 如果不存在则设置 timer，
 * 并且在执行完 setTimeout 以后清除 timer。
 */

const _throttle = (fn, delay) => {
  var timer;

  return function() {
    if (timer) {
      return
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments)

      timer = null
    }, delay)
  }
}

//#region test
let trulyEvent = function(e, content) {
  console.log(e)
  console.log(content)
}

let _event = _throttle(trulyEvent, 1000)

let now = performance.now()
while (performance.now() - now < 1000) {
  // trulyEvent('Tom', 'Hello')
  _event('Tom', 'Hello')
}
//#endregion