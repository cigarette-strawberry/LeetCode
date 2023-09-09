let ary = [1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7, 8, 9]

/* 相邻项的处理方案 */
ary.sort((a, b) => a - b)
ary = ary.join('@') + '@'
let reg = /(\d+@)\1*/g,
    arr = []
ary.replace(reg, (val, group) => {
    console.log(val, group);
    // arr.push(Number(group.slice(0, group.length - 1)))
    arr.push(parseFloat(group))
})
console.log(arr);

/* 拿数组中的每项向新容器内存储，如果已经存储过了，就把当前项干掉 */
/* let arr = []
for (let i = 0; i < ary.length; i++) {
    if (arr.indexOf(ary[i]) === -1) {
        arr.push(ary[i])
    }
}
console.log(arr); */

/* let obj = {}
for (let i = 0; i < ary.length; i++) {
    let item = ary[i];
    if (typeof obj[item] !== 'undefined') {
        ary[i] = ary[ary.length - 1]
        ary.length--
        i--
        continue
    }
    obj[item] = item
}
obj = null
console.log(ary); */

/* set */
// let arr = Array.from(new Set(ary))
// console.log(arr);

/* 拿出当前项和后面的内容进行比较 */

/* let arr = []
for (let i = 0; i < ary.length - 1; i++) {
    let item = ary[i],
        args = ary.slice(i + 1)
    console.log(item)
    console.log(args)
    if (args.indexOf(item) > -1) {
        // 包含:删除当前项
        // splice删除
        // 1、原数组改变，这样如果i继续++，则会产生数组塌陷
        // 2、性能不好:当前项一旦删除，后面项索引就会改变
        // ary.splice(i, 1)
        // i--

        // 重复的赋值未null，再用filter过滤掉null
        // ary[i] = null

        // 用最后一项替换
        ary[i] = ary[ary.length - 1]
        ary.length--
        i--
    } else {
        // arr.push(item)
    }
} */

// ary = ary.filter(item => item !== null)
// console.log(ary);
// console.log(arr);   // ary.length 在循环中 不能减一