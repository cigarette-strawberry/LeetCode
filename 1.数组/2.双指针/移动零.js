/* var moveZeroes = function (nums) {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) k++
    else if (k > 0) {
      nums[i - k] = nums[i]
      nums[i] = 0
    }
  }
  return nums
} */

/* var moveZeroes = function (nums) {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) nums[k++] = nums[i]
  }
  for (let j = k; j < nums.length; j++) {
    nums[j] = 0
  }
  return nums
} */

// 双指针
/**
 * 1.非0，交换数据，左右指针都往右移
 * 2.0，右指针右移
 */
var moveZeroes = function (nums) {
  let fast = 0,
    slow = 0,
    temp = null
  while (slow < nums.length) {
    if (nums[slow] !== 0) {
      swap(nums, fast, slow)
      fast++
    }
    slow++
  }
  function swap(nums, fast, slow) {
    temp = nums[fast]
    nums[fast] = nums[slow]
    nums[slow] = temp
  }
  return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
