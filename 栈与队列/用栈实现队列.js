/*
 * @FileDescription: ***
 * @Author: wu0304
 * @Date: 2023-09-12 19:33:54
 * @LastEditors: wu0304
 * @LastEditTime: 2023-09-12 19:39:25
 */
// 队列是先进先出，栈是先进后出。
// 使用两个数组的栈方法（push, pop） 实现队列
/**
 * 在此处初始化数据结构。
 */
var MyQueue = function () {
  this.stackIn = []
  this.stackOut = []
}

/**
 * 将元素 x 推到队列的后面。
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stackIn.push(x)
}

/**
 * 从队列前面删除该元素并返回该元素。
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const size = this.stackOut.length
  if (size) {
    return this.stackOut.pop()
  }
  while (this.stackIn.length) {
    this.stackOut.push(this.stackIn.pop())
  }
  return this.stackOut.pop()
}

/**
 * 获取前端元素。
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  const x = this.pop()
  this.stackOut.push(x)
  return x
}

/**
 * 返回队列是否为空。
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stackIn.length && !this.stackOut.length
}
