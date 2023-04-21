var letterCombinations = function (digits) {
  if (digits.length === 0) return []
  let myMap = new Map()
  myMap.set('2', 'abc')
  myMap.set('3', 'def')
  myMap.set('4', 'ghi')
  myMap.set('5', 'jkl')
  myMap.set('6', 'mno')
  myMap.set('7', 'pqrs')
  myMap.set('8', 'tuv')
  myMap.set('9', 'wxyz')
  if (digits.length === 1) return myMap.get(digits).split('')
  let res = [],
    path = []
  function backtrack(i) {
    if (path.length === digits.length) return res.push(path.join(''))

    for (const item of myMap.get(digits[i])) {
      path.push(item)
      backtrack(i + 1)
      path.pop()
    }
  }
  backtrack(0)
  return res
}

console.log(letterCombinations('23'))
