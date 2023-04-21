var minWindow = function (s, t) {
  let left = 0,
    right = 0,
    res = ''
  const map = new Map() // 记录 t 中的所有字符
  for (let i = 0; i < t.length; i++) map.set(t[i], (map.get(t[i]) || 0) + 1)

  let needType = map.size
  // 右指针匹配完结束循环
  while (right < s.length) {
    if (map.has(s[right])) {
      map.set(s[right], map.get(s[right]) - 1)
      if (map.get(s[right]) === 0) needType--
    }

    // map的大小为零 匹配成功
    while (needType === 0) {
      let subRes = s.substring(left, right + 1) // 截取符合条件的字符串
      if (!res || subRes.length < res.length) res = subRes

      if (map.has(s[left])) {
        map.set(s[left], map.get(s[left]) + 1)
        if (map.get(s[left]) === 1) needType++
      }

      left++
    }
    right++
  }
  return res
}

console.log(minWindow('ADOBECODEBANC', 'ABBC'))
console.log(minWindow('a', 'a'))
console.log(minWindow('a', 'aa'))
