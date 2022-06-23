/**
 * 深拷贝的关键在于使用递归。
 * 深拷贝的循环引用问题如何解决？
 * 
 * 1. 判断传入的参数是不是对象类型，如果不是则直接返回。
 * 2. 使用 for...in 遍历对象属性。
 * 3. 如果该属性存在于实例身上，
 *    则调用 deepClone 自身并将值传入。
 * 
 * 关键点：递归 + 类型判断 + 循环赋值
 * 
 */

const _deepClone = (obj ={}, cache = new WeakMap()) => {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }

  if (cache.get(obj)) {
    return cache.get(obj)
  }

  let result = null

  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  cache.set(obj, result)

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = _deepClone(obj[key], cache)
    }
  }

  return result
}

//#region test
  let foo = {
    name: 'tom',
    books: ['JS', 'CSS', 'HTML']
  }

  foo.cycle = foo

  let bar = _deepClone(foo)

  console.log(bar.books === foo.books)
//#endregion