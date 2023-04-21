// js 内置的方法
/* let arr = [1, 2],
  initialValue = 0
let total = arr.reduce((previousValue, currentValue, currentIndex, array) => {
  console.log(previousValue, currentValue, currentIndex, array)
  return previousValue + currentValue
})
console.log(total) */

// 自己还原的reduce
Array.prototype.reduce = function (callback, initialValue) {
  let self = this, // self代表调用reduce函数的数组
    len = self.length,
    index = 0,
    previousValue = initialValue,
    isInitial = typeof initialValue === 'undefined' ? false : true // typeof检测undefined为undefined 代表未传initialValue初始值
  if (typeof callback !== 'function') return Error('不是函数') // 不是函数
  if (len === index && !isInitial) return Error('数组为空且未指定初始值initialValue') // 数组为空且未指定初始值initialValue
  if (len === 1 && !isInitial) return self[index] // 数组仅有一个元素并且没有提供初始值 initialValue，那么此唯一值将被返回且 callback 不会被执行
  if (len === index && isInitial) return previousValue // 数组为空 但有提供 initialValue，那么此唯一值将被返回且 callback 不会被执行
  if (!isInitial) (previousValue = self[index]), (index = 1) // 若指定了初始值 initialValue，则 currentValue 则将使用数组第一个元素；否则 previousValue 将使用数组第一个元素，而 currentValue 将使用数组第二个元素。
  for (; index < self.length; index++) previousValue = callback(previousValue, self[index], index, self)
  return previousValue
}

let test = [1, 2, 3, 4],
  initialValue = 0
let testTotal = test.reduce((previousValue, currentValue, currentIndex, array) => {
  console.log(previousValue, currentValue, currentIndex, array)
  return previousValue + currentValue
}, initialValue)
console.log(testTotal)
