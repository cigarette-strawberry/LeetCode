/* var combinationSum3 = function (k, n) {
  const constant = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let res = []
  function backtrack(index, path, sum) {
    if (sum > n) return
    if (path.length === k && sum === n) return res.push(path.slice())
    for (let i = index; i < constant.length; i++) {
      sum += constant[i]
      path.push(constant[i])
      backtrack(i + 1, path, sum)
      sum -= constant[i]
      path.pop()
    }
  }
  backtrack(0, [], 0)
  return res
} */

var combinationSum3 = function (k, n) {
  let res = []
  function backtrack(index, path, sum) {
    if (sum > n) return
    if (path.length === k && sum === n) return res.push(path.slice())
    for (let i = index; i <= 9; i++) {
      sum += i
      path.push(i)
      backtrack(i + 1, path, sum)
      sum -= i
      path.pop()
    }
  }
  backtrack(1, [], 0)
  return res
}

console.log(combinationSum3(3, 7))
