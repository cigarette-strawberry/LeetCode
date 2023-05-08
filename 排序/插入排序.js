let arr = [1, 5, 8, 9, 4, 6, 7, 2, 3]

function InsertionSort(arr) {
  let i, j
  for (i = 1; i < arr.length; ++i) {
    if (arr[i] < arr[i - 1]) {
      let temp = arr[i]
      for (j = i - 1; temp < arr[j]; --j) arr[j + 1] = arr[j]
      arr[j + 1] = temp
    }
  }
  return arr
}

/* function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // 1. 把本次要操作的数字记录下来
    let tmp = arr[i]

    // 2. 向前循环开始比较
    // 开始: 当前索引 - 1, i - 1
    // 步长: -1
    // 条件: 什么时候停 ? 前一个比我小. 什么时候不停 ? 前一个比我大
    // 如果前一个比我大, 那么直接让前一个替换我现在的位置
    let j = i - 1
    while (arr[j] > tmp) {
      arr[j + 1] = arr[j]
      j--
    }

    // 3. 循环结束, 说明 arr[j] > tmp === false
    // 说明 arr[j] < tmp
    // 说明 j 位置的数据比 tmp 小, 应该把 tmp 赋值给 [j + 1] 位置的数据
    arr[j + 1] = tmp
  }
  return arr
} */

console.log(InsertionSort(arr))
