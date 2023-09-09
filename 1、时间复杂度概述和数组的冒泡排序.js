/* console.time('AAA')
for (let i = 0; i < 999; i++) { }
console.timeEnd('AAA') */


/* 冒泡排序 */
/* 实现数组中两项(索引i/j)的交换 */
function swap (arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr
}
Array.prototype.bubble = function bubble () {
    // _this->arr
    let _this = this,
        flag = false
    // 控制循环多少轮
    for (let i = 0; i < _this.length - 1; i++) {
        // 控制每一轮多少次
        for (let j = 0; j < _this.length - 1 - i; j++) {
            if (_this[j] > _this[j + 1]) {
                swap(_this, j, j + 1)
                flag = true
            }
        }
        if (!flag) break
        flag = false
    }
    return _this
}
let arr = [4, 2, 6, 8, 1, 3, 0, 7, 5, 9]
arr.bubble()
console.log(arr)