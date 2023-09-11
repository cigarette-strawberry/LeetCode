/*
 * @FileDescription: ***
 * @Author: wu0304
 * @Date: 2023-09-11 13:53:02
 * @LastEditors: wu0304
 * @LastEditTime: 2023-09-11 14:09:57
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    const element = s[i]
    map.set(element, (map.get(element) || 0) + 1)
  }
  for (let i = 0; i < t.length; i++) {
    const element = t[i]
    if (!map.get(element)) return false
    map.set(element, map.get(element) - 1)
  }
  return true
}

console.log(isAnagram('anagraam', 'nagarame'))
