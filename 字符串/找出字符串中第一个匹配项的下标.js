let a = 'https://www.jianshu.com/p/8b89ac5c4f2e' // 简书BF
let b = 'https://www.jianshu.com/p/86e61233834c' // 简书KMP

/* ------ BF算法 ------ */
/* var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0
  let i = 0,
    j = 0
  while (i < haystack.length && j < needle.length) {
    if (haystack[i] === needle[j]) ++i, ++j
    else (i = i - j + 1), (j = 0)
  }
  if (j === needle.length) return i - j
  else return -1
} */

/* ------ KMP算法 ------ */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0

  const next = getNext(needle)
  // const next = getNextVal(needle)

  let i = 0,
    j = 0

  while (i < haystack.length && j < needle.length) {
    if (j === -1 || haystack[i] === needle[j]) i++, j++
    else j = next[j]
  }
  if (j === needle.length) return i - j
  else return -1
}

function getNext(str) {
  const next = [-1, 0]

  let k = 0,
    j = 1

  while (j < str.length - 1) {
    if (k === -1 || str[k] === str[j]) k++, j++, (next[j] = k)
    else k = next[k]
  }

  return next
}

function getNextVal(str) {
  const nextVal = [-1, 0]

  let k = 0,
    j = 1

  while (j < str.length - 1) {
    if (k === -1 || str[k] === str[j]) {
      k++, j++
      if (str[k] !== str[j]) nextVal[j] = k
      else nextVal[j] = nextVal[k]
    } else k = nextVal[k]
  }

  return nextVal
}

console.log(strStr('a', 'a'))
console.log(strStr('sadbutsad', 'sad'))
console.log(strStr('leetcode', 'leeto'))
