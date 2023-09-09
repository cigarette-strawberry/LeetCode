/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const rowIndex = twoPoints1(matrix, target)
  console.log(rowIndex)
  if (rowIndex < 0) return false
  return twoPoints2(matrix[rowIndex], target)
}

function twoPoints1(matrix, target) {
  let left = -1
  let right = matrix.length - 1
  while (left < right) {
    const mid = Math.floor((right - left + 1) / 2) + left
    if (matrix[mid][0] <= target) left = mid
    else right = mid - 1
  }
  return left
}

function twoPoints2(row, target) {
  console.log(row, target)
  let left = 0
  let right = row.length - 1
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left
    if (row[mid] > target) right = mid - 1
    else if (row[mid] < target) left = mid + 1
    else return true
  }
  return false
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60]
    ],
    13
  )
)
