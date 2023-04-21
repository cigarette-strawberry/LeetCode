var removeDuplicates = function (nums) {
  const n = nums.length
  if (n <= 2) return n
  let slow = 2,
    fast = 2
  while (fast < n) {
    // 一直用第一个和第三个进行比对 然后再赋值
    if (nums[slow - 2] != nums[fast]) {
      nums[slow] = nums[fast]
      ++slow
    }
    ++fast
  }
  return slow
}

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]))
