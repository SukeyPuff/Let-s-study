/**
 * debounce 的作用是什么？
 * 实现 debounce 的核心思路是什么？
 * 
 * 高频事件在被触发开始的 n 秒后执行，
 * 如果在 n 秒内再次触发事件，
 * 则重新计时。
 * 
 * debounce 的核心思想是，
 * 在每一次调用 debounce 函数的时候，
 * 先清除 timerId，再设置新的 timerId。
 * 这个执行流程和 React 的 useEffect 很像。
 */

const _debounce = (fn, delay) => {
  var timer;

  return function () {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

//#region test
function trulyEvent(e, content) {
  console.log(e, content);
}

let _event = _debounce(trulyEvent, 1000)

let now = performance.now()
while (performance.now() - now < 1000) {
  // _event("Tom", 'Hello')
  trulyEvent('Tom', 'Hello')
}
//#endregion