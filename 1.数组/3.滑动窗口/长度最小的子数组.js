// 超时
/* var minSubArrayLen = function (target, nums) {
  let res = [],
    i = 0,
    j = nums.length
  while (i < j) {
    let sum = 0,
      path = []
    for (let index = i; index < j; index++) {
      sum += nums[index]
      path.push(nums[index])
      if (sum >= target) res.push(path.length)
    }
    i++
  }
  return res.length > 0 ? Math.min(...res) : 0
} */

// 滑动窗口的精妙之处在于根据当前子序列和大小的情况，不断调节子序列的起始位置。
var minSubArrayLen = function (target, nums) {
  let start, end
  start = end = 0
  let sum = 0
  let len = nums.length
  let ans = Infinity

  while (end < len) {
    sum += nums[end]
    while (sum >= target) {
      ans = Math.min(ans, end - start + 1) // 取子序列的长度
      sum -= nums[start] // 这里体现出滑动窗口的精髓之处，不断变更i（子序列的起始位置）
      start++
    }
    end++
  }
  return ans === Infinity ? 0 : ans
}

console.log(minSubArrayLen(4, [1, 4, 4]))
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))
