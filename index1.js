function sortArr(arr, str) {
  var _arr = [],
    _t = [],
    // 临时的变量
    _tmp

  // 按照特定的参数将数组排序将具有相同值得排在一起
  arr = arr.sort(function (a, b) {
    var s = a[str],
      t = b[str]

    return s < t ? -1 : 1
  })

  if (arr.length) {
    _tmp = arr[0][str]
  }
  // 将相同类别的对象添加到统一个数组
  for (var i in arr) {
    if (arr[i][str] === _tmp) {
      _t.push(arr[i])
    } else {
      _tmp = arr[i][str]
      _arr.push(_t)
      _t = [arr[i]]
    }
  }
  // 将最后的内容推出新数组
  _arr.push(_t) //获取到所有整合数据
  // console.log(_arr); //可以得到图三
  // 终极整合
  var integration = []
  _arr.forEach(item => {
    var eee = { name: '', data: [] }
    item.forEach(self => {
      if (eee.name != self.lcid) {
        eee.name = self.lcname
        eee.data.push({ sfxx: self.sfxx, scyj: self.scyj })
      } else {
        eee.data.push({ sfxx: self.sfxx, scyj: self.scyj })
      }
    })
    integration.push(eee)
  })
  // console.log(integration); //图二
  return integration
}

let arr = [
  { lcid: '2', lcname: '规划选址', sfxx: '自然资源部门', sczdname: '自然资源部门审査意见', scyj: '同意' },
  { lcid: '2', lcname: '规划选址', sfxx: '农业农村部门', sczdname: '农业农村部门审査意见', scyj: '同意' },
  { lcid: '6', lcname: '竣工验收', sfxx: '农业农村部门', sczdname: '农业农村部门验收意见', scyj: 'OK' },
  { lcid: '6', lcname: '竣工验收', sfxx: '自然资源部门', sczdname: '自然资源部门验收意见', scyj: '拒绝申请' },
  { lcid: '3', lcname: '行政审批', sfxx: '乡镇政府', sczdname: '乡镇政府审核批准意见', scyj: '同意' },
  { lcid: '6', lcname: '竣工验收', sfxx: '乡镇政府', sczdname: '乡镇政府验收意见', scyj: 'OK' }
  //   { lcid: '', lcname: '', sfxx: '其他部门', sczdname: '其他部门审查意见', scyj: '同意' },
]

console.log(sortArr(arr, 'lcid'))
