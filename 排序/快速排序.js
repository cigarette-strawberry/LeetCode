let arr = [1, 5, 8, 9, 4, 6, 7, 2, 3]

function QuickSort(arr, low, high) {
  if (low < high) {
    pivotloc = Partition(arr, low, high) //partition方法对序列进行排序
    //分割两个序列继续进行快排操作
    QuickSort(arr, low, pivotloc - 1)
    QuickSort(arr, pivotloc + 1, high)
  }
  return arr
}

function Partition(arr, low, high) {
  //取每个序列的第一个值作为基准值
  let pivotkey = arr[low]
  while (low < high) {
    //从序列的右边开始往左遍历，直到找到小于基准值的元素
    while (low < high && arr[high] >= pivotkey) --high
    arr[low] = arr[high] //将元素直接赋予给左边第一个，即pivotkey所在的位置
    //从序列的左边边开始往右遍历，直到找到大于基准值的元素
    while (low < high && arr[low] <= pivotkey) ++low
    arr[high] = arr[low] //此时的a[high]<pivotkey,已经被赋予到左边，所以可以将元素赋予给a[high]
  }
  arr[low] = pivotkey //最后的low是基准值所在的位置
  return low
}

console.log(QuickSort(arr, 0, arr.length - 1))
