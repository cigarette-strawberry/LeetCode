var subsets = function (nums) {
  let res = [],
    path = []
  function backtrack(startIndex) {
    res.push([...path])
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i])
      backtrack(i + 1)
      path.pop()
    }
  }
  backtrack(0)
  return res
}

console.log(subsets([1, 2, 3]))
