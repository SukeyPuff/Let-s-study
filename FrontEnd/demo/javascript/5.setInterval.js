/**
 * setInterval 在极端情况下会存在哪些问题？
 * 用 setTimeout 实现 setInterval 的关键点在哪里？
 * 
 * 简而言之，
 * 使用 setInterval 重复执行某个非常耗时的任务时，
 * 会出现任务无法被推入执行栈的问题。
 * 
 * 关键点在于使用递归调用。
 */

var timer = null

const _setInterval = (fn, delay) => {
  let initFn = function() {
    fn.call(null)

    timer = setTimeout(initFn, delay)
  }

  timer = setTimeout(initFn, delay)
}

//#region test
let handleEvent = function() {
  let now = performance.now()
  while(performance.now() - now < 2000) {
  } 
  console.log(123)
}

let myTimer = _setInterval(handleEvent, 500)
//#endregion