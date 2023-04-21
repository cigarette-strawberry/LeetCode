var mySqrt = function (x) {
  if (x === 1 || x === 0) return x // 1和0 的平方根是它本身
  let left = 1,
    right = x
  while (left <= right) {
    let mid = parseInt((left + right) / 2)
    // 中间数的平方小于等于x
    if (mid * mid <= x) {
      if ((mid + 1) * (mid + 1) > x) return mid // 中间数后一个的平方大于x
      left = mid + 1
    } else right = mid - 1
  }
}

console.log(mySqrt(1))
console.log(mySqrt(4))
console.log(mySqrt(8))
console.log(mySqrt(9))
