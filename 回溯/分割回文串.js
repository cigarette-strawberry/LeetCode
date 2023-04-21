var partition = function (s) {
  let res = []
  function backtrack(path, startIndex) {
    if (startIndex >= s.length) return res.push([...path])
    for (let i = startIndex; i < s.length; i++) {
      if (!isPalindrome(s, startIndex, i)) continue
      path.push(s.slice(startIndex, i + 1))
      backtrack(path, i + 1)
      path.pop()
    }
  }
  backtrack([], 0)
  return res
}
// 双指针判断是否是回文子串
const isPalindrome = (s, l, r) => {
  for (let i = l, j = r; i < j; i++, j--) {
    if (s[i] !== s[j]) return false
  }
  return true
}

console.log(partition('level'))
console.log(partition('aab'))
