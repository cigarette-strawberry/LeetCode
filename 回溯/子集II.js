var subsetsWithDup = function (nums) {
  let res = [],
    path = []
  nums.sort((a, b) => a - b)
  function backtrack(index) {
    res.push([...path])
    for (let i = index; i < nums.length; i++) {
      if (i - 1 >= index && nums[i - 1] == nums[i]) continue
      path.push(nums[i])
      backtrack(i + 1)
      path.pop()
    }
  }
  backtrack(0)
  return res
}

// 去重需要先对集合排序
console.log(subsetsWithDup([4, 4, 4, 1, 4]))
