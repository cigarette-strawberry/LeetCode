/* var combinationSum4 = function (nums, target) {
  let res = []
  function backtrack(index, path, sum) {
    if (sum > target) return
    if (sum === target) return res.push(path.slice())
    for (let i = index; i < nums.length; i++) {
      sum += nums[i]
      path.push(nums[i])
      backtrack(0, path, sum)
      sum -= nums[i]
      path.pop()
    }
  }
  backtrack(0, [], 0)
  return res
}
console.log(combinationSum4([1, 2, 3], 4)) */

var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= target; i++) {
    for (const num of nums) {
      if (num <= i) {
        dp[i] += dp[i - num]
      }
    }
  }
  return dp[target]
}
console.log(combinationSum4([4, 2, 1], 32))
