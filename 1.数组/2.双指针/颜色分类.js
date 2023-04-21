var sortColors = function (nums) {
  let left = 0
  let right = nums.length - 1
  for (let i = 0; i <= right; i++) {
    if (nums[i] === 0) {
      // 确定头部 为0
      swap(nums, i, left)
      left++
    } else if (nums[i] === 2) {
      // 确定尾部为2
      swap(nums, i, right)
      right-- // 每次减1
      i-- // 从第一个开始
    }
  }
  function swap(nums, i, j) {
    // 交换
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
  return nums
}

console.log(sortColors([2, 0, 2, 1, 1, 0]))
