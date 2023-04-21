/* var backspaceCompare = function (s, t) {
  function bool(str) {
    let res = []
    for (let i = 0; i < str.length; i++) {
      if (str[i] != '#') res.push(str[i]) // 进栈
      else res.pop() // 出栈
    }
    return res.join('')
  }
  return bool(s) == bool(t)
} */

// 双指针
/**
 * 1.准备两个指针 i,j 分别指向 s,t 的末位字符，再准备两个变量 skipS,skipT 来分别存放 s,t 字符串中的 # 数量。
 * 2.从后往前遍历 s,t 所遇情况有三，如下所示:
 *  2.1 若当前字符是 #，则 skipS 自增 1;
 *  2.2 若当前字符不是 #，且 skipS 不为 0，则 skipS 自减 1;
 *  2.3 若当前字符不是 #，且 skipS 为 0，则代表当前字符不会被消除，我们可以用来和 t 中的当前字符作比较。
 */
var backspaceCompare = function (s, t) {
  let i = s.length - 1,
    j = t.length - 1,
    skipS = 0,
    skipT = 0
  // 大循环
  while (i >= 0 || j >= 0) {
    // s 循环
    while (i >= 0) {
      if (s[i] === '#') {
        skipS++
        i--
      } else if (skipS > 0) {
        skipS--
        i--
      } else break
    }
    // t 循环
    while (j >= 0) {
      if (t[j] === '#') {
        skipT++
        j--
      } else if (skipT > 0) {
        skipT--
        j--
      } else break
    }
    if (s[i] !== t[j]) return false
    i--
    j--
  }
  return true
}

console.log(backspaceCompare('ab#c', 'ad#c'))
console.log(backspaceCompare('ab##', 'c#d#'))
console.log(backspaceCompare('a#c', 'b'))
