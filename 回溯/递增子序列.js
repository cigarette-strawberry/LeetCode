/* var findSubsequences = function (nums) {
  let res = [],
    used = []
  function backtrack(path, startIndex) {
    if (path.length > 1) res.push(path.slice())
    for (let i = startIndex; i < nums.length; i++) {
      if (nums[i - 1] > nums[i]) return
      if (nums[i - 1] === nums[i] && !used[i - 1]) continue
      path.push(nums[i])
      used[i] = true
      backtrack(path, i + 1)
      path.pop()
      used[i] = false
    }
  }
  backtrack([], 0)
  return res
} */

var findSubsequences = function (nums) {
  let result = []
  function backtracing(startIndex, path) {
    if (path.length > 1) result.push(path.slice())
    let uset = []
    for (let i = startIndex; i < nums.length; i++) {
      // nums[i] < path[path.length - 1] 循环当前的 小于 刚加进来的这一个数字
      if ((path.length > 0 && nums[i] < path[path.length - 1]) || uset[nums[i]]) continue
      uset[nums[i]] = true
      path.push(nums[i])
      backtracing(i + 1, path)
      path.pop()
    }
  }
  backtracing(0, [])
  return result
}

console.log(findSubsequences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1]))
// console.log(findSubsequences([4, 6, 7, 7]))
// console.log(findSubsequences([4, 6, 7, 7]))
