let layertrees = [
    {
      layertreeid: 1,
      layertreename: '全部',
      layertreeinfo: '点线面',
      ulayertreeid: 0
    },
    {
      layertreeid: 2,
      layertreename: '点',
      layertreeinfo: '点',
      ulayertreeid: 1
    },
    {
      layertreeid: 3,
      layertreename: '线',
      layertreeinfo: '线',
      ulayertreeid: 1
    },
    {
      layertreeid: 4,
      layertreename: '面',
      layertreeinfo: '面',
      ulayertreeid: 1
    },
    {
      layertreeid: 5,
      layertreename: '业务图层',
      layertreeinfo: '业务图层',
      ulayertreeid: 0
    },
    {
      layertreeid: 6,
      layertreename: '业务图层1',
      layertreeinfo: '业务图层1',
      ulayertreeid: 5
    },
    {
      layertreeid: 7,
      layertreename: '影像图',
      layertreeinfo: '影像图',
      ulayertreeid: 6
    }
  ],
  layers = [
    {
      layerid: 1,
      url: 'http://192.168.1.123:6080/arcgis/rest/services/cs/dian/FeatureServer',
      id: 'dian',
      title: 'dian',
      opacity: 1,
      type: 'FeatureLayer',
      layertreeid: 2
    },
    {
      layerid: 2,
      url: 'http://192.168.1.123:6080/arcgis/rest/services/cs/xian/FeatureServer',
      id: 'xian',
      title: 'xian',
      opacity: 1,
      type: 'FeatureLayer',
      layertreeid: 3
    },
    {
      layerid: 3,
      url: 'http://192.168.1.123:6080/arcgis/rest/services/cs/mian/FeatureServer',
      id: 'mian',
      title: 'mian',
      opacity: 1,
      type: 'FeatureLayer',
      layertreeid: 4
    },
    {
      layerid: 4,
      url: 'http://192.168.1.123:6080/arcgis/rest/services/zongtu/YX001/MapServer',
      id: 'mapimagelayer',
      title: 'mapimagelayer',
      opacity: 0.5,
      type: 'MapServer',
      layertreeid: 7
    },
    {
      layerid: 5,
      url: 'http://192.168.1.123:6080/arcgis/rest/services/cs/xqd/MapServer',
      id: 'xqd',
      title: 'xqd',
      opacity: 0.5,
      type: 'MapServer',
      layertreeid: 6
    },
    {
      layerid: 6,
      url: 'http://192.168.1.123:6080/arcgis/rest/services/cs/zddw/MapServer',
      id: 'zddw',
      title: 'zddw',
      opacity: 0.5,
      type: 'MapServer',
      layertreeid: 6
    }
  ]

function mergeObject() {
  layertrees.forEach(item => {
    item.expand = true
    item.title = item.layertreename
    item.children = []
    layers.forEach(element => {
      element.contextmenu = true
      if (item.layertreeid === element.layertreeid) {
        // Object.assign(item, element);
        item.children.push(element)
      }
    })
  })
  mergeArray()
}
function mergeArray() {
  console.log(layertrees)
  mergeData = layertrees.filter(item => {
    /* item.children = this.layertrees.filter((e) => {
          return item.layertreeid === e.ulayertreeid;
        }); */
    item.children = item.children.concat(
      layertrees.filter(e => {
        return item.layertreeid === e.ulayertreeid
      })
    )
    return !item.ulayertreeid
  })
}

mergeObject()
