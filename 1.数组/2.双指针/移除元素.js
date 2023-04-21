// 冒泡排序
/* var removeElement = function (nums, val) {
  let tempExchangVal = null
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        tempExchangVal = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = tempExchangVal
      }
    }
  }
  return nums
} */

/* var removeElement = function (nums, val) {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) nums[k++] = nums[i]
  }
  return k
} */

/**
 * 双指针法（快慢指针法）： 通过一个快指针和慢指针在一个for循环下完成两个for循环的工作。
 * 快指针：寻找新数组的元素 ，新数组就是不含有目标元素的数组
 * 慢指针：指向更新 新数组下标的位置
 */
/* var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      // 发现需要移除的元素，就将数组集体向前移动一位
      for (let j = i + 1; j < nums.length; j++) nums[j - 1] = nums[j]
      i-- // 因为下标i以后的数值都向前移动了一位，所以i也向前移动一位
      nums.length-- // 此时数组的大小-1
    }
  }
  return nums.length
} */

/**
 * 相向双指针方法，基于元素顺序可以改变的题目描述改变了元素相对位置，确保了移动最少元素
 */
var removeElement = function (nums, val) {
  let leftIndex = 0,
    rightIndex = nums.length - 1
  while (leftIndex <= rightIndex) {
    // 找左边等于val的元素
    while (leftIndex <= rightIndex && nums[leftIndex] != val) {
      ++leftIndex
    }
    // 找右边不等于val的元素
    while (leftIndex <= rightIndex && nums[rightIndex] == val) {
      --rightIndex
    }
    // 将右边不等于val的元素覆盖左边等于val的元素
    if (leftIndex < rightIndex) {
      nums[leftIndex++] = nums[rightIndex--]
    }
  }
  return leftIndex // leftIndex一定指向了最终数组末尾的下一个元素
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
console.log(removeElement([3, 2, 2, 3], 3))
