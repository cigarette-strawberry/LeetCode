/*
 * @FileDescription: ***
 * @Author: wu0304
 * @Date: 2023-09-12 19:35:39
 * @LastEditors: wu0304
 * @LastEditTime: 2023-09-12 19:38:54
 */
/**
 * 在此处初始化数据结构。
 */
var MyStack = function () {
  this.queue = []
}

/**
 * 将元素 x 推到堆栈上。
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x)
}

/**
 * 删除堆栈顶部的元素并返回该元素。
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let size = this.queue.length
  while (size-- > 1) {
    this.queue.push(this.queue.shift())
  }
  return this.queue.shift()
}

/**
 * 获取顶部元素。
 * @return {number}
 */
MyStack.prototype.top = function () {
  const x = this.pop()
  this.queue.push(x)
  return x
}

/**
 * 返回堆栈是否为空。
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.queue.length
}
