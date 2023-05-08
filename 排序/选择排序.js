let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]

function SelectSort(arr) {
  let i, j, k
  for (i = 0; i < arr.length; i++) {
    k = i
    for (j = i + 1; j < arr.length; j++) if (arr[j] < arr[k]) k = j
    if (k !== i) {
      let x = arr[i]
      arr[i] = arr[k]
      arr[k] = x
    }
  }
  return arr
}

console.log(SelectSort(arr))
