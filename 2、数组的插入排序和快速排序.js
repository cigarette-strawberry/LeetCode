/* 插入排序 */
Array.prototype.insert = function insert () {
    // 先取出一张牌放手里面
    let _this = this,
        handle = []
    handle.push(_this[0])
    // 开始抓牌
    for (let i = 1; i < _this.length; i++) {
        // A 每一次新抓的牌
        let A = _this[i]
        // 和手里的牌进行比较(倒着比较)
        for (let j = handle.length - 1; j >= 0; j--) {
            // 要比较的手里这张牌
            let B = handle[j]
            // 新抓的牌A比B要大，则放在B的后面
            if (A > B) {
                handle.splice(j + 1, 0, A)   // 添加
                break   // => 没必要和手里的牌继续比较了
            }
            // 都比到最开始了，A都没有比任何的牌大，则A是最小的，插入到开始
            if (j === 0) {
                handle.unshift(A)
            }
        }
    }
    return handle
}
let arr = [4, 2, 6, 8, 1, 3, 0, 7, 5, 9]
arr = arr.insert()
console.log(arr)

/* 快速排序 */
Array.prototype.quick = function quick () {
    let _this = this

    // 如果处理的数组只有一项或者是空的，则无需处理了
    if (_this.length <= 0) {
        return _this
    }

    // 获取中间项，并且把中间项在数组中删除
    let middleIndex = Math.floor(_this.length / 2),
        middleValue = _this.splice(middleIndex, 1)[0]

    let arrLeft = [],
        arrRight = []
    for (let i = 0; i < _this.length; i++) {
        let item = _this[i]
        item < middleValue ? arrLeft.push(item) : arrRight.push(item)
    }

    return quick.call(arrLeft).concat(middleValue, quick.call(arrRight))
}
let ary = [4, 2, 6, 8, 1, 3, 0, 7, 5, 9]
ary = ary.quick()
console.log(ary)