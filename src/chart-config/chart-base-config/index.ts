import gaugeTypeList from './echarts/gauge'
import histogramTypeList from './echarts/histogram'
import lineTypeList from './echarts/line'
import mapTypeList from './echarts/map'
import pieTypeList from './echarts/pie'
import radarTypeList from './echarts/radar'
import scatterTypeList from './echarts/scatter'
import earthTypeList from './echarts/earth'
import earthPathTypeList from './echarts/earthPath'

import commonlyTypeList from './datav/commonly'
import borderTypeList from './datav/border'
import decorateTypeList from './datav/decorate'
import scrollTypeList from './datav/scroll'

const AllChartType = [
    {
        title: '常用',
        id: '0-20',
        children: commonlyTypeList
    },
    {
        title: '边框',
        id: '0-21',
        children: borderTypeList
    },
    {
        title: '装饰',
        id: '0-22',
        children: decorateTypeList
    },
    {
        title: '轮播',
        id: '0-23',
        children: scrollTypeList
    },
    {
        title: '柱状图',
        id: '0-1',
        children: histogramTypeList
    },
    {
        title: '折线图',
        id: '0-2',
        children: lineTypeList
    },
    {
        title: '区域图',
        id: '0-3',
        children: mapTypeList
    },
    {
        title: '仪表盘',
        id: '0-4',
        children: gaugeTypeList
    },
    {
        title: '环形图',
        id: '0-5',
        children: pieTypeList
    },
    {
        title: '雷达图',
        id: '0-6',
        children: radarTypeList
    },
    {
        title: '散点图',
        id: '0-7',
        children: scatterTypeList
    },
    {
        title: '3D 地球',
        id: '0-8',
        children: earthTypeList
    },
    {
        title: '3D 路径图',
        id: '0-9',
        children: earthPathTypeList
    },
]

export default AllChartType