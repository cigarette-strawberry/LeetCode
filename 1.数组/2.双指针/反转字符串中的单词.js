/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // 字符串转数组(浅拷贝)
  const strArr = Array.from(s) // Array.from() 静态方法从可迭代或类数组对象创建一个新的浅拷贝的数组实例。
  // 移除多余空格
  removeExtraSpaces(strArr)
  // 翻转
  reverse(strArr, 0, strArr.length - 1)

  let start = 0 // 反转单词开始的位置

  for (let i = 0; i <= strArr.length; i++) {
    if (strArr[i] === ' ' || i === strArr.length) {
      // 遇到空格或者最后一位时 翻转单词
      reverse(strArr, start, i - 1) // -1 空格前的字母
      start = i + 1 // +1 空格后的字母
    }
  }

  return strArr.join('')
}

// 采用双指针 删除多余空格
function removeExtraSpaces(strArr) {
  let slowIndex = 0
  let fastIndex = 0

  while (fastIndex < strArr.length) {
    // 移除开始位置和重复的空格
    if (strArr[fastIndex] === ' ' && (fastIndex === 0 || strArr[fastIndex - 1] === ' ')) {
      fastIndex++
    } else {
      strArr[slowIndex++] = strArr[fastIndex++] // 不是空格的向前移动
    }
  }

  // 移除末尾空格
  strArr.length = strArr[slowIndex - 1] === ' ' ? slowIndex - 1 : slowIndex
}

// 翻转从 start 到 end 的字符
function reverse(strArr, start, end) {
  let left = start
  let right = end

  while (left < right) {
    // 交换
    ;[strArr[left], strArr[right]] = [strArr[right], strArr[left]]
    left++
    right--
  }
}

console.log(reverseWords('  the  sky  is  blue  '))
