/* var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i
  }
  return nums.length
} */

var searchInsert = function (nums, target) {
  let low = 0,
    high = nums.length,
    mid = null
  while (low <= high) {
    mid = parseInt((low + high) / 2)
    // mid = Math.ceil((low + high) / 2)
    // mid = Math.floor((low + high) / 2)
    if (nums[mid] === target) return mid
    else if (nums[mid] < target) low = mid + 1
    else high = mid - 1
  }
  return high + 1
}

// 第二遍 2023/03/17
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length
  while (left <= right) {
    let mid = parseInt((left + right) / 2)
    if (nums[mid] > target) right = mid - 1
    else if (nums[mid] < target) left = mid + 1
    else return mid
  }
  return left
}

console.log(searchInsert([2, 3], 1))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([-1, 0, 3, 5, 9, 12], 9))
