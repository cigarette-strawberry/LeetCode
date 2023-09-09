/*
 * @FileDescription: ***
 * @Author: wu0304
 * @Date: 2023-09-09 15:56:28
 * @LastEditors: wu0304
 * @LastEditTime: 2023-09-09 16:29:52
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// matrix[row][col] 旋转后 matrix_new​[col][n−row−1]
var rotate = function (matrix) {
  const n = matrix.length
  let newMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      newMatrix[j][n - i - 1] = matrix[i][j]
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = newMatrix[i][j]
    }
  }
  return matrix
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
)

console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
  ])
)
