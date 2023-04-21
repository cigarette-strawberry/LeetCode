var restoreIpAddresses = function (s) {
  let res = []
  function backtrack(path, startIndex) {
    if (path.length > 4) return // 大于四段不合法
    if (path.length === 4 && startIndex === s.length) return res.push(path.join('.'))
    for (let i = startIndex; i < s.length; i++) {
      let str = s.slice(startIndex, i + 1)
      if (str.length > 3 || +str > 255) break // 大于255不合法
      if (str.length > 1 && str[0] === '0') break // 段位以0开始不合法
      path.push(str)
      backtrack(path, i + 1)
      path.pop()
    }
  }
  backtrack([], 0)
  return res
}

console.log(restoreIpAddresses('0000'))
console.log(restoreIpAddresses('25525511135'))
