var permute = function (nums) {
  let res = [],
    used = []
  function backtrack(path) {
    if (path.length === nums.length) {
      res.push(path.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue // 使用过的跳过当前循环
      path.push(nums[i]) // 选择当前的数
      used[i] = true // 记录下使用过的
      backtrack(path) // 回溯
      path.pop() // 移除最后一个
      used[i] = false // 移除使用记录
    }
  }
  backtrack([])
  return res
}

console.log(permute([1, 2, 3]))
