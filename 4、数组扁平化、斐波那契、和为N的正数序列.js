/* 数组扁平化 */
// let arr = [
//     [1],
//     [2, 2],
//     [3, 3, 3],
//     [4, 4, 4, 4, [5, 6, [7, 8, [9, 9]]]], 10
// ]

/* ES6中提供了 Array.prototype.flat 专门用来处理 数组扁平化 */
// arr = arr.flat(4)

/* 转化为字符串 */
// arr = arr.toString().split(',').map(item => parseFloat(item))
// arr = JSON.stringify(arr).replace(/(\[|\])/g, '').split(',').map(item => parseFloat(item))

/* 循环验证是否为数组 */
// while (arr.some(item => Array.isArray(item))) {
//     arr = [].concat(...arr)
// }

/* 递归 */
// ~function () {
//     function myFlat () {
//         let result = [],
//             _this = this
//         // => 循环arr中的每一项，把不是数组的存储到新数组中
//         let fn = (arr) => {
//             for (let i = 0; i < arr.length; i++) {
//                 let item = arr[i];
//                 if (Array.isArray(item)) {
//                     fn(item)
//                     continue
//                 }
//                 result.push(item)
//             }
//         }
//         fn(_this)
//         return result
//     }
//     Array.prototype.myFlat = myFlat
// }()
// arr = arr.myFlat()

// console.log(arr);

// ------------------------------------------------------------

/* 斐波那契 */
/* 斐波那契数列:[1,1,2,3,5,8,13,21...] */
// 第一种
// function Fibonacci (n) {
//     if (n <= 1) return 1
//     let arr = [1, 1]
//     // => 要创建多少个
//     let i = n + 1 - 2
//     while (i > 0) {
//         let a = arr[arr.length - 1],
//             b = arr[arr.length - 2]
//         arr.push(a + b)
//         i--
//     }
//     return arr[arr.length - 1]
// }

/* 递归 */
// 第二种
// function Fibonacci (count) {
//     function fn (count, curr = 1, next = 1) {
//         if (count === 0) {
//             return curr
//         } else {
//             return fn(count - 1, next, curr + next)
//         }
//     }
//     return fn(count)
// }

// console.log(Fibonacci(0));
// console.log(Fibonacci(1));
// console.log(Fibonacci(2));
// console.log(Fibonacci(3));
// console.log(Fibonacci(4));

// ------------------------------------------------------------

/**
 * 输入一个正数N,输出所有和为N的连续正数序列
 * 例如:输入15
 * 结果:[[1,2,3,4,5],[4,5,6],[7,8]]
 */
function fn (count) {
    let result = []
    // => 求出中间值
    let middle = Math.ceil(count / 2)
    // 从1开始累加
    for (let i = 1; i < middle; i++) {
        // 控制累加多少次
        for (let j = 2; ; j++) {
            // 求出累加多次的和
            let total = (i + (i + j - 1)) * (j / 2)
            if (total > count) {
                break
            } else if (total === count) {
                result.push(createArr(i, j))
                break
            }
        }
    }
    return result
}
function createArr (n, len) {
    let arr = new Array(len).fill(null),
        temp = []
    arr[0] = n
    arr = arr.map((item, index) => {
        if (item === null) {
            item = temp[index - 1] + 1
        }
        temp.push(item)
        return item
    })
    return arr
}
console.log(fn(4));
console.log(fn(5));
console.log(fn(6));
console.log(fn(15));