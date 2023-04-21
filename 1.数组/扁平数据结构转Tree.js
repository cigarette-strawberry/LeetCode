let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 }
]

// 第一种
/* function queryChilrden(arr) {
  let result = []
  arr.forEach((s) => {
    s.chilrden = []
    arr.forEach((d) => {
      if (s.id == d.pid) {
        s.chilrden.push(d)
      }
    })
  })
  return arr.find((item) => item.pid === 0)
  /* 解析：
    遍历两次原数组，并在第一次遍历的时候给数组的每一项添加一个chilrden属性。在第二次遍历的时候就开始比较，用本身id去比对每一项的pid。如果相等，即说明找到了儿子，那就将其push进自身的chilrden数组里。最后return的时候做个筛选，返回最高等级的也就是pid为0的那一项。
  *!/
}
console.log(queryChilrden(arr)) */

// 第二种
function mapFun(arr) {
  let mapItem = {}
  let result = []
  arr.forEach(d => {
    mapItem[d.id] = { ...d, chilrden: [] }
  })
  console.log(mapItem)
  arr.forEach(s => {
    if (!s.pid) {
      result.push(mapItem[s.id]) // 拿到第一项 pid: 0
    } else {
      if (mapItem[s.pid]) {
        //用s.pid为key去mapItem里找，如果找到了。就说明当前这一项在mapItem里有父亲，然后就用父亲将当前s push进去。
        mapItem[s.pid].chilrden.push(mapItem[s.id])
        /* 
            在mapItem中key是每一项的id。已知，元素的pid等于父亲的id。所以这里用mapItem[s.pid]去找父亲。如果存在，那就说明当前遍历到的这一个元素，有父亲。所以就将当前元素push进去。push的时候注意，不再是用pid去找元素了，而是用id了。因为我们push是要push元素本身，而不是再去找他父亲
        */
      }
    }
  })
  return result
}
console.log(mapFun(arr))

/* function arrayToTree(items) {
  const result = [] // 存放结果集
  const itemMap = {} //

  // 先转成map存储
  for (const item of items) {
    itemMap[item.id] = { ...item, children: [] }
  }

  for (const item of items) {
    const id = item.id
    const pid = item.pid
    const treeItem = itemMap[id]
    if (pid === 0) {
      result.push(treeItem)
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        }
      }
      itemMap[pid].children.push(treeItem)
    }
  }
  return result
} */

/* function arrayToTree(items) {
  const result = [] // 存放结果集
  const itemMap = {} //
  for (const item of items) {
    const id = item.id
    const pid = item.pid

    if (!itemMap[id]) {
      itemMap[id] = {
        children: [],
      }
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id]['children'],
    }

    const treeItem = itemMap[id]

    if (pid === 0) {
      result.push(treeItem)
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        }
      }
      itemMap[pid].children.push(treeItem)
    }
  }
  return result
} */
