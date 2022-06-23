const _compose = (...fn) => {
  if (fn.length === 0) return (param) => param

  if (fn.length === 1) return fn[0]

  return fn.reduce((pre, next) => {
    return (param) => {
      return next(pre(param))
    }
  })
}

//#region test
function fn1(x) {
  return x + 1
}

function fn2(x) {
  return x + 2
}

const fn = _compose(fn1, fn2)

console.log(fn(1))
//#endregion