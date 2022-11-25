const lineList = [
    {
      value: 'easeInSine',
      label: 'easeInSine'
    },
    {
      value: 'linear',
      label: 'linear'
    },
    {
      value: 'easeOutSine',
      label: 'easeOutSine'
    },
    {
      value: 'easeInOutSine',
      label: 'easeInOutSine'
    },
    {
      value: 'easeInQuad',
      label: 'easeInQuad'
    },
    {
      value: 'easeOutQuad',
      label: 'easeOutQuad'
    },
    {
      value: 'easeInOutQuad',
      label: 'easeInOutQuad'
    },
    {
      value: 'easeInCubic',
      label: 'easeInCubic'
    },
    {
      value: 'easeOutCubic',
      label: 'easeOutCubic'
    },
    {
      value: 'easeInOutCubic',
      label: 'easeInOutCubic'
    },
    {
      value: 'easeInQuart',
      label: 'easeInQuart'
    }
  ]
  
  const align = [
    {
      label: 'left',
      value: 'left'
    },
    {
      label: 'center',
      value: 'center'
    },
    {
      label: 'right',
      value: 'right'
    }
  ]
  
  const font = [
    {
      label: '宋体',
      value: 'SimSun'
    },
    {
      label: '黑体',
      value: 'SimHei'
    },
    {
      label: '微软雅黑',
      value: 'Microsoft Yahei'
    },
    {
      label: '微软正黑体',
      value: 'Microsoft JhengHei'
    },
    {
      label: '楷体',
      value: 'KaiTi'
    },
    {
      label: '新宋体',
      value: 'NSimSun'
    },
    {
      label: '仿宋',
      value: 'FangSong'
    },
    {
      label: '苹方',
      value: 'PingFang SC'
    },
    {
      label: '华文黑体',
      value: 'STHeiti'
    },
    {
      label: '华文楷体',
      value: 'STKaiti'
    },
    {
      label: '华文宋体',
      value: 'STSong'
    },
    {
      label: '华文仿宋',
      value: 'STFangsong'
    },
    {
      label: '华文中宋',
      value: 'STZhongsong'
    },
    {
      label: '华文琥珀',
      value: 'STHupo'
    },
    {
      label: '华文新魏',
      value: 'STXinwei'
    },
    {
      label: '华文隶书',
      value: 'STLiti'
    },
    {
      label: '华文行楷',
      value: 'STXingkai'
    },
    {
      label: '冬青黑体简',
      value: 'Hiragino Sans GB'
    },
    {
      label: '兰亭黑-简',
      value: 'Lantinghei SC'
    },
    {
      label: '翩翩体-简',
      value: 'Hanzipen SC'
    },
    {
      label: '手札体-简',
      value: 'Hannotate SC'
    },
    {
      label: '宋体-简',
      value: 'Songti SC'
    },
    {
      label: '娃娃体-简',
      value: 'Wawati SC'
    },
    {
      label: '魏碑-简',
      value: 'Weibei SC'
    },
    {
      label: '行楷-简',
      value: 'Xingkai SC'
    },
    {
      label: '雅痞-简',
      value: 'Yapi SC'
    },
    {
      label: '圆体-简',
      value: 'Yuanti SC'
    }
  ]
  
  const fontWeight = [
    {
      value: '100',
      label: 100
    },
    {
      value: '200',
      label: 200
    },
    {
      value: '300',
      label: 300
    },
    {
      value: 'normal',
      label: 'normal'
    },
    {
      value: '500',
      label: 500
    },
    {
      value: '600',
      label: 600
    },
    {
      value: 'bold',
      label: 'bold'
    },
    {
      value: '800',
      label: 800
    },
    {
      value: '900',
      label: 900
    },
    {
      value: 'inherit',
      label: 'inherit'
    }
  ]

  const position = [
    {
        label: 'top',
        value: 'top'
    },
    {
        label: 'left',
        value: 'left'
    },
    {
        label: 'right',
        value: 'right'
    },
    {
        label: 'bottom',
        value: 'bottom'
    },
    {
        label: 'inside',
        value: 'inside'
    },
    {
        label: 'insideLeft',
        value: 'insideLeft'
    },{
        label: 'insideRight',
        value: 'insideRight'
    },
    {
        label: 'insideTop',
        value: 'insideTop'
    },
    {
        label: 'insideBottom',
        value: 'insideBottom'
    },
    {
        label: 'insideTopLeft',
        value: 'insideTopLeft'
    },
    {
        label: 'insideBottomLeft',
        value: 'insideBottomLeft'
    },
    {
        label: 'insideTopRight',
        value: 'insideTopRight'
    },
    {
        label: 'insideBottomRight',
        value: 'insideBottomRight'
    }
]

const symbol = [
  {
    label: 'none',
    value: 'none'
  },
  {
    label: 'circle',
    value: 'circle'
  },
  {
    label: 'rect',
    value: 'rect'
  },
  {
    label: 'roundRect',
    value: 'roundRect'
  },
  {
    label: 'triangle',
    value: 'triangle'
  },
  {
    label: 'diamond',
    value: 'diamond'
  },
  {
    label: 'pin',
    value: 'pin'
  },
  {
    label: 'arrow',
    value: 'arrow'
  }
]

// 点坐标
const points = [
  { value: [118.8062, 31.9208] },  // 江苏
  { value: [127.9688, 45.368] },  // 黑龙江
  { value: [110.3467, 41.4899] },   //  内蒙古
  { value: [125.8154, 44.2584] },   // 吉林
  { value: [116.4551, 40.2539] },   // 北京
  { value: [123.1238, 42.1216] },   // 辽宁
  { value: [114.4995, 38.1006] },   // 河北
  { value: [117.4219, 39.4189] },   // 天津
  { value: [112.3352, 37.9413] },   // 山西
  { value: [109.1162, 34.2004] },   // 陕西
  { value: [103.5901, 36.3043] },   // 甘肃
  { value: [106.3586, 38.1775] },   // 宁夏
  { value: [101.4038, 36.8207] },   // 青海
  { value: [103.9526, 30.7617] },   // 四川
  { value: [108.384366, 30.439702] },   // 重庆
  { value: [113.0823, 28.2568] },   // 湖南
  { value: [102.9199, 25.46639] },   // 云南
  { value: [108.389255,22.855277] },   // 广西
  { value: [119.4543, 25.9222] },   // 福建
  { value: [87.637104, 43.832495] },   // 新疆
  { value: [106.623114, 26.676062] },   // 贵州
  { value: [110.339368, 20.030761] },   // 海南
  { value: [121.570918, 25.053183] },   // 台湾
  { value: [91.077399, 29.723489] },   // 西藏
  { value: [114.313184, 30.626645] },   // 湖北
  { value: [113.614087, 34.79355] },   // 河南
  { value: [117.164766, 36.675962] },   // 山东
  { value: [120.181922, 30.331843] },   // 浙江
  { value: [115.84016, 28.690444] },   // 江西
  { value: [121.474332, 31.249103] },   // 上海
  { value: [117.201102, 31.905996] },   // 安徽
  { value: [114.208666, 22.282641] }, // 香港
  { value: [113.550963, 22.175583] }, // 澳门
  { value: [113.282936, 23.127816]}  // 广东
]
// 线坐标
const lines = [
  { coords: [[113.282936,23.127816], [118.8062, 31.9208]] },
  { coords: [[113.282936,23.127816], [127.9688, 45.368]] }, 
  { coords: [[113.282936,23.127816], [110.3467, 41.4899]] }, 
  { coords: [[113.282936,23.127816], [125.8154, 44.2584]] }, 
  { coords: [[113.282936,23.127816], [116.4551, 40.2539]] }, 
  { coords: [[113.282936,23.127816], [123.1238, 42.1216]] }, 
  { coords: [[113.282936,23.127816], [114.4995, 38.1006]] }, 
  { coords: [[113.282936,23.127816], [117.4219, 39.4189]] }, 
  { coords: [[113.282936,23.127816], [112.3352, 37.9413]] }, 
  { coords: [[113.282936,23.127816], [109.1162, 34.2004]] }, 
  { coords: [[113.282936,23.127816], [103.5901, 36.3043]] }, 
  { coords: [[113.282936,23.127816], [106.3586, 38.1775]] }, 
  { coords: [[113.282936,23.127816], [101.4038, 36.8207]] }, 
  { coords: [[113.282936,23.127816], [103.9526, 30.7617]] }, 
  { coords: [[113.282936,23.127816], [108.384366, 30.439702]] }, 
  { coords: [[113.282936,23.127816], [113.0823, 28.2568]] }, 
  { coords: [[113.282936,23.127816], [102.9199, 25.46639]] },

  { coords: [[113.282936,23.127816], [108.389255, 22.855277]] }, 
  { coords: [[113.282936,23.127816], [119.4543, 25.9222]] }, 
  { coords: [[113.282936,23.127816], [87.637104, 43.832495]] }, 
  { coords: [[113.282936,23.127816], [106.623114, 26.676062]] }, 
  { coords: [[113.282936,23.127816], [110.339368, 20.030761]] }, 
  { coords: [[113.282936,23.127816], [121.570918, 25.053183]] }, 
  { coords: [[113.282936,23.127816], [91.077399,29.723489]] }, 
  { coords: [[113.282936,23.127816], [114.313184,30.626645]] }, 
  { coords: [[113.282936,23.127816], [113.614087,34.79355]] }, 
  { coords: [[113.282936,23.127816], [117.164766,36.675962]] }, 
  { coords: [[113.282936,23.127816], [120.181922,30.331843]] }, 
  { coords: [[113.282936,23.127816], [115.84016,28.690444]] }, 
  { coords: [[113.282936,23.127816], [121.474332,31.249103]] }, 
  { coords: [[113.282936,23.127816], [117.201102,31.905996]] }, 
  { coords: [[113.282936,23.127816], [114.208666, 22.282641]] }, 
  { coords: [[113.282936,23.127816], [113.550963, 22.175583]] }, 
]

// 省份
const regions = [
  { name: '北京', itemStyle: { areaColor: '#405F93' } },
  { name: '天津', itemStyle: { areaColor: '#405F93' } },
  { name: '上海', itemStyle: { areaColor: '#405F93' } },
  { name: '重庆', itemStyle: { areaColor: '#405F93' } },
  { name: '河北', itemStyle: { areaColor: '#405F93' } },
  { name: '河南', itemStyle: { areaColor: '#405F93' } },
  { name: '云南', itemStyle: { areaColor: '#4B9EE8' } },
  { name: '辽宁', itemStyle: { areaColor: '#006EDD' } },
  { name: '黑龙江', itemStyle: { areaColor: '#006EDD' } },
  { name: '湖南', itemStyle: { areaColor: '#4B9EE8' } },
  { name: '安徽', itemStyle: { areaColor: '#4B9EE8' } },
  { name: '山东', itemStyle: { areaColor: '#4B9EE8' } },
  { name: '新疆', itemStyle: { areaColor: '#006EDD' } },
  { name: '江苏', itemStyle: { areaColor: '#006EDD' } },
  { name: '浙江', itemStyle: { areaColor: '#006EDD' } },
  { name: '江西', itemStyle: { areaColor: '#006EDD' } },
  { name: '湖北', itemStyle: { areaColor: '#006EDD' } },
  { name: '广西', itemStyle: { areaColor: '#4B9EE8' } },
  { name: '甘肃', itemStyle: { areaColor: '#4B9EE8' } },
  { name: '山西', itemStyle: { areaColor: '#4B9EE8' } },
  { name: '内蒙古', itemStyle: { areaColor: '#4B9EE8' } },
  { name: '陕西', itemStyle: { areaColor: '#405F93' } },
  { name: '吉林', itemStyle: { areaColor: '#405F93' } },
  { name: '福建', itemStyle: { areaColor: '#405F93' } },
  { name: '贵州', itemStyle: { areaColor: '#405F93' } },
  { name: '广东', itemStyle: { areaColor: '#405F93' } },
  { name: '青海', itemStyle: { areaColor: '#405F93' } },
  { name: '西藏', itemStyle: { areaColor: '#4B9EE8' } },
  { name: '宁夏', itemStyle: { areaColor: '#006EDD' } },
  { name: '四川', itemStyle: { areaColor: '#006EDD' } },
  { name: '海南', itemStyle: { areaColor: '#4B9EE8' } },
  { name: '台湾', itemStyle: { areaColor: '#4B9EE8' } },
  { name: '香港', itemStyle: { areaColor: '#4B9EE8' } },
  { name: '澳门', itemStyle: { areaColor: '#4B9EE8' } },
  { name: '南海诸岛', itemStyle: { areaColor: '#4B9EE8' } },
]
  
  export {
    lineList,
    align,
    font,
    fontWeight,
    position,
    symbol,
    lines,
    regions,
    points
  }
  