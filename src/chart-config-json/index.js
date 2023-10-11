
import histogram from "./histogram"
import map from "./map"
import pie from "./pie"
import border from './border'
import decorate from './decorate'
import scroll from './scroll'
import linechart from "./linechart"
import guage from './gauge'
import common from './common'
import barChart from './barChart'
import funnel from './funnel'
import radar from './radar'

const config_json = [
    {
        group_id: 12,
        group_name: '其他',
        list: common
    },
    {
        group_id: 4,
        group_name: '边框',
        list: border
    },
    {
        group_id: 5,
        group_name: '装饰',
        list: decorate
    },
    {
        group_id: 6,
        group_name: '轮播',
        list: scroll
    },
    {
        group_id: 7,
        group_name: '折线图',
        list: linechart
    },
    {
        group_id: 8,
        group_name: '仪表盘',
        list: guage
    },
    {
        group_id: 1,
        group_name: '柱状图',
        list: histogram
    },
    {
        group_id: 13,
        group_name: '条形图',
        list: barChart
    },
    {
        group_id: 14,
        group_name: '漏斗图',
        list: funnel
    },
    {
        group_id: 15,
        group_name: '雷达图',
        list: radar
    },
    {
        group_id: 2,
        group_name: '环形图',
        list: pie
    },
    {
        group_id: 3,
        group_name: '地域图',
        list: map
    }
]

export default config_json