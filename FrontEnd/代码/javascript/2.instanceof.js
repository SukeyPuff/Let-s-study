/**
 * 语法：object instanceof constructor
 * 
 * instanceof 的作用是什么？
 * 
 * 用来判断 constructor 构造函数的原型 prototype 属性是否在 object 实例对象的原型链上。
 */

const _instanceof = (obj, constr) => {
  const _prototype = constr.prototype
  let _proto = obj.__proto__

  while (_proto) {
    if (_proto === _prototype) {
      return true
    }

    _proto = _proto.__proto__
  }

  return false
}

let arr = new Array(5)

console.log(_instanceof(arr, Array));
console.log(_instanceof(arr, Object));