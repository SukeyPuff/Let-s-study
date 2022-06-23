/**
 * - new 操作符是用来做什么事情的？
 * - 使用 new 操作符调用函数后会发生什么事情？
 * 
 * new 操作符是用来创建对象的，
 * 使用 new 操作符调用构造函数，
 * 可以得到一个构造函数的实例。
 * 
 * 1. 创建一个对象。
 * 2, 3. 在这个对象的作用域中执行构造函数中的代码。
 * 4. 返回这个对象。
 */

function _new(fn) {
  let o = Object.create(fn.prototype)

  let k = fn.call(o)

  if (k && k instanceof Object) {
    return k
  } else {
    return o
  }
}