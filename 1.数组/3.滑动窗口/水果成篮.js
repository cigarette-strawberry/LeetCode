var totalFruit = function (fruits) {
  let start, end // start 区间的起始位置   end 区间的结束位置
  start = end = 0
  let cnt = new Map(),
    ans = 0
  for (; end < fruits.length; end++) {
    cnt.set(fruits[end], (cnt.get(fruits[end]) || 0) + 1) // 查找到相同的即加 1
    // 窗口区间
    while (cnt.size > 2) {
      cnt.set(fruits[start], cnt.get(fruits[start]) - 1) // 在区间内查找到相同的减去
      if (cnt.get(fruits[start]) === 0) cnt.delete(fruits[start]) // 删除为 0 区间
      start++
    }
    ans = Math.max(ans, end - start + 1) // 取子序列的长度
  }
  return ans
}

console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]))

// 简单选择排序
/* var totalFruit = function (fruits) {
  for (let i = 0; i < fruits.length; i++) {
    let k = i
    for (let j = i + 1; j < fruits.length; j++) if (fruits[k] > fruits[j]) k = j // 记录最小位置
    // 交换
    if (k !== i) {
      let temp = fruits[k]
      fruits[k] = fruits[i]
      fruits[i] = temp
    }
  }
  return fruits
}

console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])) */
