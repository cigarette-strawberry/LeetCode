var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b)
  let res = [],
    used = []
  function backtrack(path, index) {
    if (path.length === nums.length) return res.push(path.slice())
    for (let i = 0; i < nums.length; i++) {
      /**
       * (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) 去重
       * for循环保证了从数组中从前往后一个一个取值，再用if判断条件。所以nums[i - 1]一定比nums[i]先被取值和判断。如果nums[i - 1]被取值了，那used[i - 1]会被置true，只有当递归再回退到这一层时再将它置false。每递归一层都是在寻找数组对应于递归深度位置的值，每一层里用for循环来寻找。所以当used[i - 1] == true时，说明nums[i - 1]和nums[i]分别属于两层递归中，也就是我们要用这两个数分别放在数组的两个位置，这时不需要去重。但是当used[i - 1] == false时，说明nums[i - 1]和nums[i]属于同一层递归中（只是for循环进入下一层循环），也就是我们要用这两个数放在数组中的同一个位置上，这就是我们要去重的情况。
       */
      if (used[i] || (i > 0 && nums[i - 1] === nums[i] && !used[i - 1])) continue
      path.push(nums[i])
      used[i] = true
      backtrack(path, index + 1)
      path.pop()
      used[i] = false
    }
  }
  backtrack([], 0)
  return res
}

console.log(permuteUnique([1, 1, 2]))
console.log(permuteUnique([1, 2, 3]))
