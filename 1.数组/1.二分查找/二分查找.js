/* var search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) if (nums[i] === target) return i
  return -1
} */

/* var search = function (nums, target) {
  nums.unshift(target)
  let i = nums.length
  for (i; nums[i] != target; --i);
  return i - 1
} */

var search = function (nums, target) {
  let low = 0,
    high = nums.length
  while (low <= high) {
    let mid = parseInt((low + high) / 2)
    if (nums[mid] === target) return mid
    else if (target < nums[mid]) high = mid - 1
    else low = mid + 1
  }
  return -1
}

// 第二遍 2023/03/17
var search = function (nums, target) {
  let left = 0,
    right = nums.length
  while (left <= right) {
    let mid = parseInt((left + right) / 2)
    if (nums[mid] > target) right = mid - 1
    else if (nums[mid] < target) left = mid + 1
    else return mid
  }
}

console.log(search([2], 2))
console.log(search([-1, 0, 3, 5, 9, 12], 9))
// console.log(search([-1, 0, 3, 5, 9, 12], 9))
