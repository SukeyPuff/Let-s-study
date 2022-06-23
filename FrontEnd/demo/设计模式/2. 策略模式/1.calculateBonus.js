/**
 * 未使用设计模式
 * @param performancelevel 绩效等级
 * @param salary 原始薪资
*/
// let calculateBonus = function(performancelevel, salary) {
//   if (performancelevel === 'S') {
//     return salary * 4
//   }
//   if (performancelevel === 'A') {
//     return salary * 3
//   }
//  if (performancelevel === 'B') {
//     return salary * 2
//   } 
// }

/**
 * 使用策略模式1.0
 */

// 定义策略类：封装具体的算法并负责具体的计算过程
// var performanceS = function() {}
// performanceS.prototype.calculate = function(salary) { return salary * 4 }

// var performanceA = function() {}
// performanceA.prototype.calculate = function(salary) { return salary * 3 }

// var performanceB = function() {}
// performanceB.prototype.calculate = function(salary) { return salary * 2 }

// // 定义奖金类
// var Bonus = function() {
//   this.salary = null
//   this.strategy = null
// }

// Bonus.prototype.setSalary = function(salary) {
//   this.salary = salary
// }

// Bonus.prototype.setStrategy = function(strategy) {
//   this.strategy = strategy
// }

// Bonus.prototype.getBouns = function() {
//   if (!this.strategy) {
//     throw new Error('未设置 strtegy 属性')
//   }

//   return this.strategy.calculate(this.salary)
// }

// let tom_bouns = new Bonus()
// tom_bouns.setSalary( 10000 )
// tom_bouns.setStrategy( new performanceS() )
// console.log( tom_bouns.getBouns() )

/**
 * 使用策略模式2.0
 */
const strategies = {
  "S": function(salary) {
    return salary * 4
  },
  "A": function(salary) {
    return salary * 3
  },
  "B": function(salary) {
    return salary * 2
  },
}

let calculateBonus = function(level, salary) {
  return strategies[level](salary)
}

console.log(calculateBonus('S', 20000));
