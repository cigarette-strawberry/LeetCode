let arr = [1, 5, 8, 9, 4, 6, 7, 2, 3]

function BubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let x = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = x
      }
    }
  }
  return arr
}

// 优化
/* function BubbleSort(arr) {
  let flag = 1
  for (let i = 0; i < arr.length - 1 && flag === 1; i++) {
    flag = 0
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = 1
        let x = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = x
      }
    }
  }
  return arr
} */

console.log(BubbleSort(arr))
