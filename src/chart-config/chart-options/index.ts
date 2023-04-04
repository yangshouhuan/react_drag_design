import { AllChartType } from 'types/chart'
import gaugeChartList from './echarts/gauge'
import histogramChartList from './echarts/histogram'
import lineChartList from './echarts/line'
import mapChartList from './echarts/map'
import pieChartList from './echarts/pie'
import radarChartList from './echarts/radar'
import scatterChartList from './echarts/scatter'
import earthChartList from './echarts/earth'
import earthPathChartList from './echarts/earthpath'

import commonlyChartList from './datav/commonly'
import borderChartList from './datav/border'
import decorateChartList from './datav/decorate'
import scrollChartList from './datav/scroll'

const AllChart: AllChartType[] = [
    // {
    //     title: '常用',
    //     id: '0-20',
    //     children: commonlyChartList
    // },
    {
        title: '边框',
        id: '0-21',
        children: borderChartList
    },
    {
        title: '装饰',
        id: '0-22',
        children: decorateChartList
    },
    {
        title: '轮播',
        id: '0-23',
        children: scrollChartList
    },
    {
        title: '柱状图',
        id: '0-1',
        children: histogramChartList
    },
    {
        title: '折线图',
        id: '0-2',
        children: lineChartList
    },
    {
        title: '区域图',
        id: '0-3',
        children: mapChartList
    },
    {
        title: '仪表盘',
        id: '0-4',
        children: gaugeChartList
    },
    {
        title: '环形图',
        id: '0-5',
        children: pieChartList
    },
    {
        title: '雷达图',
        id: '0-6',
        children: radarChartList
    },
    {
        title: '散点图',
        id: '0-7',
        children: scatterChartList
    },
    {
        title: '3D 地球',
        id: '0-8',
        children: earthChartList
    },
    {
        title: '3D 路径图',
        id: '0-9',
        children: earthPathChartList
    }
]

export default AllChart
