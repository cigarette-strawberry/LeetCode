var removeDuplicates = function (nums) {
  const n = nums.length
  if (n === 0) return 0
  let fast = 1, // 快指针
    slow = 1 // 慢指针
  // 将快指针 fast 依次遍历从 1 到 n-1 的每个位置，对于每个位置，如果 nums[fast] !== nums[fast - 1]，说明 nums[fast] 和之前的元素都不同，因此将 nums[fast] 的值复制到 nums[slow]，然后将 slow 的值加 1，即指向下一个位置
  while (fast < n) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast]
      ++slow
    }
    ++fast
  }
  return slow
}

console.log(removeDuplicates([1, 1, 1, 2]))
