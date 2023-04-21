/* var sortedSquares = function (nums) {
  return nums.map(item => item * item).sort((a, b) => a - b)
} */

// 双指针法 一
/* var sortedSquares = function (nums) {
  let k = nums.length - 1,
    result = []
  for (let i = 0, j = nums.length - 1; i <= j; ) {
    // 注意这里要i <= j，因为最后要处理两个元素
    if (nums[i] * nums[i] < nums[j] * nums[j]) {
      result[k--] = nums[j] * nums[j]
      j--
    } else {
      result[k--] = nums[i] * nums[i]
      i++
    }
  }
  return result
} */

// 双指针法 二
var sortedSquares = function (nums) {
  let result = [],
    k = nums.length - 1,
    i = 0,
    j = nums.length - 1
  while (i <= j) {
    if (nums[i] * nums[i] < nums[j] * nums[j]) {
      result[k--] = nums[j] * nums[j]
      j--
    } else {
      result[k--] = nums[i] * nums[i]
      i++
    }
  }
  return result
}

console.log(sortedSquares([-4, -1, 0, 3, 10]))
