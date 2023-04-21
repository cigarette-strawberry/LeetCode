/* var canBeEqual = function (target, arr) {
  /* if (target.join('') == arr.join('')) return true;
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      if (target.join('') == arr.join('')) return true;
    }
  }
  return false; *!/
/* let str = target.join('');
  for (let i = 0; i < arr.length; i++) {
    if (str.indexOf(arr[i]) == -1) return false;
  }
  return true; *!/
  let a = target.sort().join('');
  let b = arr.sort().join('');
  if (a == b) return true;
  else return false;
};

console.log(canBeEqual([7], [7]));
console.log(canBeEqual([3, 7, 9], [3, 7, 11]));
console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
console.log(canBeEqual([1, 2, 2, 3], [1, 1, 2, 3])); */

/* function Foo() {
  getName = function () {
    console.log(1);
  };
  return this;
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(3);
};
var getName = function () {
  console.log(4);
};
function getName() {
  console.log(5);
}
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName(); */

/* console.log('1');
setTimeout(() => {
  console.log('2');
  Promise.resolve().then(() => {
    console.log('3');
  });
}, 0);
new Promise(function (resolve, reject) {
  console.log('4');
  setTimeout(() => {
    console.log('5');
    resolve('6');
  }, 0);
}).then(res => {
  console.log('7');
  setTimeout(() => {
    console.log(res);
  }, 0);
}); */

/* 宅管系统 多合一数组 */
/* 三分屏地图 多合一数组 */

/* var generateParenthesis = function (n, result = []) {
  /**
   * 回溯法(DFS)
   * 把握核心规则：
   *  - 必须是有效组合，则左、右括号一定要小于n, 且右括号的数量要一直小于或等于左括号
   *  - 针对组成的括号字符串的每一个位置字符来说，要么是左括号，要么是右括号, 具体这个位置应该是左还是右，看上面的规则而定
   *  - 所以想到，我可以递归地往每个位置放左和右括号，如果违反了规则，就回溯回去，换一个放，由此想到了回溯算法
   *  - 既然是递归，首先要先想好终止条件，依题可知，如果左右括号的数量都为n的话，即为一个答案了，终止递归，返回即可
   * 解题：left 记录已经放入的左括号的数量; right 记录右括号的数量；str 表示当前组成的字符串
   *!/
  const backtrack = (left, right, str) => {
    if (left === n && right === n) return result.push(str);
    if (left < n) backtrack(left + 1, right, str + '(');
    if (right < left) backtrack(left, right + 1, str + ')');
  };
  backtrack(0, 0, '');
  return result;
};
console.log(generateParenthesis(3)); */

/* var countAndSay = function (n) {
  let str = '1';
  for (let i = 2; i <= n; ++i) {
    const sb = [];
    let start = 0;
    let pos = 0;

    while (pos < str.length) {
      while (pos < str.length && str[pos] === str[start]) {
        pos++;
      }
      sb.push('' + (pos - start) + str[start]);
      start = pos;
    }
    str = sb.join('');
  }

  return str;
};
console.log(countAndSay(3)); */

/* var combinationSum = function (candidates, target) { // 7
  let res = [];
  let path = [];

  // 先排序 nlgn
  candidates.sort();
  backtrace(0, 0);
  return res;

  /*
   * candidates 的索引
   * path 路径之和
   *!/
  function backtrace(inx, sum) {
    // 1.终止条件
    if (sum > target) {
      return;
    }
    if (sum === target) {
      res.push([...path]);
    }

    // 2.迭代
    for (let i = inx; i < candidates.length; i++) {
      let num = candidates[i];
      if (sum + num > target) {
        continue;
      }
      // 3.标记
      path.push(num);
      sum += num;
      // 4.递归
      backtrace(i, sum);
      // 5.撤销标记
      path.pop();
      sum -= num;
    }
  }
};
console.log(combinationSum([2, 3, 6, 7], 7)); */

/* var fractionAddition = function (expression) {
  let denominator = 0,
    numerator = 1; // 分子，分母
  let index = 0,
    n = expression.length;
  while (index < n) {
    // 读取分子
    let denominator1 = 0,
      sign = 1;
    if (expression[index] === '-' || expression[index] === '+') {
      sign = expression[index] === '-' ? -1 : 1;
      index++;
    }
    while (index < n && isDigit(expression[index])) {
      denominator1 = denominator1 * 10 + expression[index].charCodeAt() - '0'.charCodeAt();
      index++;
    }
    denominator1 = sign * denominator1;
    index++;

    // 读取分母
    let numerator1 = 0;
    while (index < n && isDigit(expression[index])) {
      numerator1 = numerator1 * 10 + expression[index].charCodeAt() - '0'.charCodeAt();
      index++;
    }

    denominator = denominator * numerator1 + denominator1 * numerator;
    numerator *= numerator1;
  }
  if (denominator === 0) {
    return '0/1';
  }
  const g = gcd(Math.abs(denominator), numerator); // 获取最大公约数
  return Math.floor(denominator / g) + '/' + Math.floor(numerator / g);
};

const gcd = (a, b) => {
  let remainder = a % b;
  while (remainder !== 0) {
    a = b;
    b = remainder;
    remainder = a % b;
  }
  return b;
};

const isDigit = ch => {
  return parseFloat(ch).toString() === 'NaN' ? false : true;
};
console.log(fractionAddition('-1/2+1/2')); */

/* var validSquare = function (p1, p2, p3, p4) {
  // 两个点组成的边要么是对边要么是斜边
  // 两两组成边 共6条, 最短4条为对边, 另两条为斜边
  let p = [p1, p2, p3, p4];
  const arr = [];
  for (let i = 0; i < 4; i++)
    for (let j = i + 1; j < 4; j++) {
      let len = Math.sqrt((p[i][0] - p[j][0]) * (p[i][0] - p[j][0]) + (p[i][1] - p[j][1]) * (p[i][1] - p[j][1]));
      arr.push(len);
    }
  arr.sort((a, b) => a - b);
  // 点不重叠 且 存在两种边长
  return !!arr[0] && new Set(arr).size == 2;
};
console.log(validSquare([6987, -473], [6985, -473], [6986, -472], [6986, -474])); */

/* var groupThePeople = function (groupSizes) {
  let res = [];
  let filter = [...new Set(groupSizes)]; // [ 1, 3 ]

  for (let j = 0; j < filter.length; j++) {
    let ans = [],
      size = '';
    for (let i = 0; i < groupSizes.length; i++) {
      if (filter[j] == groupSizes[i]) ans.push(i);
    }

    if (ans.length / filter[j] < 1) {
      res.push(ans);
    }

    size = ans.length / filter[j];

    let last = 0,
      index = filter[j];

    for (let c = 0; c < size; c++) {
      res.push(ans.slice(last, index));
      last = index;
      index += filter[j];
    }
  }
  return res;
};
console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3])); */

/* var MyCircularQueue = function (k) {
  this.capacity = k + 1;
  this.elements = new Array(this.capacity).fill(0);
  this.rear = 0;
  this.front = 0;
};

// 入队
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false;
  }
  this.elements[this.rear] = value;
  this.rear = (this.rear + 1) % this.capacity;
  return true;
};

// 出队
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false;
  }
  this.front = (this.front + 1) % this.capacity;
  return true;
};

MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.elements[this.front];
};

MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.elements[(this.rear - 1 + this.capacity) % this.capacity];
};

// 空的
MyCircularQueue.prototype.isEmpty = function () {
  return this.rear == this.front;
};

// 满的
MyCircularQueue.prototype.isFull = function () {
  return (this.rear + 1) % this.capacity === this.front;
};

var obj = new MyCircularQueue(3);
var param_1 = obj.enQueue(1);
var param_2 = obj.deQueue();
var param_3 = obj.Front();
var param_4 = obj.Rear();
var param_5 = obj.isEmpty();
var param_6 = obj.isFull();
console.log(param_1, param_2, param_3, param_4, param_5, param_6); */

/* var MyCircularDeque = function (k) {
  this.capacity = k + 1;
  this.rear = this.front = 0;
  this.elements = new Array(k + 1).fill(0);
};

// 插入开头
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) {
    return false;
  }
  this.front = (this.front - 1 + this.capacity) % this.capacity;
  this.elements[this.front] = value;
  return true;
};

// 插入尾部
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) {
    return false;
  }
  this.elements[this.rear] = value;
  this.rear = (this.rear + 1) % this.capacity;
  return true;
};

// 删除开头
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) {
    return false;
  }
  this.front = (this.front + 1) % this.capacity;
  return true;
};

// 删除尾部
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) {
    return false;
  }
  this.rear = (this.rear - 1 + this.capacity) % this.capacity;
  return true;
};

MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.elements[this.front];
};

MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.elements[(this.rear - 1 + this.capacity) % this.capacity];
};

// 空的
MyCircularDeque.prototype.isEmpty = function () {
  return this.rear == this.front;
};

// 满的
MyCircularDeque.prototype.isFull = function () {
  return (this.rear + 1) % this.capacity == this.front;
};

var obj = new MyCircularDeque(3);
var param_1 = obj.insertFront(1);
var param_2 = obj.insertLast(2);
var param_3 = obj.deleteFront();
var param_4 = obj.deleteLast();
var param_5 = obj.getFront();
var param_6 = obj.getRear();
var param_7 = obj.isEmpty();
var param_8 = obj.isFull();
console.log(param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8); */

/* var combinationSum = function (candidates, target) {
  const ans = [];
  const dfs = (target, combine, idx) => {
    if (idx === candidates.length) {
      return;
    }
    if (target === 0) {
      ans.push(combine);
      return;
    }
    // 直接跳过
    dfs(target, combine, idx + 1);
    // 选择当前数
    if (target - candidates[idx] >= 0) {
      dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
    }
  };

  dfs(target, [], 0);
  return ans;
};

console.log(combinationSum([2, 3, 6, 7], 7)); */

/* var multiply = function (num1, num2) {
  let m = num1.length,
    n = num2.length;
  // 结果最多为m+n位
  let res = new Array(m + n).fill(0); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  // 从个位数开始逐位相乘
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let mul = (num1[i] - 0) * (num2[j] - 0); // 乘积在res对应的索引位置
      let p1 = i + j, // 十位数字
        p2 = i + j + 1; // 个位数字
      // console.log(p1, p2);
      let sum = mul + res[p2]; // 叠加到res上 依次相加
      res[p2] = sum % 10; // 取余个位数放在后一位
      res[p1] += parseInt(sum / 10); // 取十位数放在前一位
    }
  }
  // 结果前缀可能存在0（未使用的位）
  let i = 0;
  while (i < res.length && res[i] == 0) {
    i++;
  }
  let str = res.join('').substring(i);
  /* // 将计算结果转化成字符串
  let str = '';
  for (; i < res.length; i++) {
    str += res[i];
  } *！/
  return str.length == 0 ? '0' : str;
};

console.log(multiply('123456789', '987654321')); */

/* var busyStudent = function (startTime, endTime, queryTime) {
  let z = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
      z++;
    }
  }
  return z;
};

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4)); */

/* var groupAnagrams = function (strs) {
  /* if (strs.length == 1) return [strs];
  let res = [],
    ans = [],
    strsSlice = strs.slice();

  for (let i = 0; i < strsSlice.length; i++) {
    ans.push(strsSlice[i].split('').sort().join('')); // 排序
  }

  let arr = [...new Set(ans)]; // 去重

  // 拿到相同的下标
  for (let i = 0; i < arr.length; i++) {
    let index = [];
    for (let j = 0; j < ans.length; j++) {
      if (arr[i] == ans[j]) index.push(strs[j]);
    }
    res.push(index);
  }

  return res; *!/

  const map = new Map();
  for (let str of strs) {
    let array = Array.from(str);
    array.sort();
    let key = array.toString();
    let list = map.get(key) ? map.get(key) : new Array();
    list.push(str);
    map.set(key, list);
  }
  return Array.from(map.values());
};

// console.log(groupAnagrams(['']));
// console.log(groupAnagrams(['a']));
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); */

var l1 = function (val, next) {
  return 11
}
var l2 = function (val, next) {
  return 22
}
var addTwoNumbers = function (l1, l2) {
  console.log(l1, l2)
}
addTwoNumbers(l1(), l2())
