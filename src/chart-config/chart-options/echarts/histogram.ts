import { BaseChartType } from "types/chart"

const histogramChartList: BaseChartType[] = [
    {
        id: 11,
        option_id: '0-1|0-1',
        name: '基础柱状图',
        component: 'div',
        is_echarts: true,
        config: {
            backgroundColor: '',
            title: {
                show: true,
                text: '主标题',
                subtext: '子标题',
                textStyle: {
                    color: '#ffffff',
                    fontSize: 26,
                    fontWeight: 500
                }
            },
            tooltip: {},
            xAxis: {
                show: true,
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
                axisLabel: {
                    color: '#ffffff',
                    fontSize: 18,
                    fontWeight: 500
                },
                axisLine: {
                    lineStyle: {
                        color: '#666666'
                    }
                }
            },
            yAxis: {
                show: true,
                axisLabel: {
                    color: '#ffffff',
                    fontSize: 18,
                    fontWeight: 500
                },
                axisLine: {
                    lineStyle: {
                        color: '#666666'
                    }
                }
            },
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        },
        source: {
            id: 0,
            father_ids: [0],
            request_match: true,
            text: '全局数据',
            data_fields: 'series-0-data',
            match_type: 'any',
            data_type: 'NumberArray',
            data_manipula: 'replace'
        }
    },
    {
        id: 12,
        option_id: '0-1|0-2',
        name: '对比条形图',
        component: 'div',
        is_echarts: true,
        config: {
            backgroundColor: '',
            title: {
                text: '世界人口总量',
                subtext: '数据来自网络',
                textStyle: {
                    color: '#ffffff',
                    fontSize: 26,
                    fontWeight: 500
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['2011年', '2012年']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                axisLabel: {
                    color: '#ffffff',
                    fontSize: 12,
                    fontWeight: 500
                },
                axisLine: {
                    lineStyle: {
                        color: '#666666'
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
                axisLabel: {
                    color: '#ffffff',
                    fontSize: 14,
                    fontWeight: 500
                },
                axisLine: {
                    lineStyle: {
                        color: '#666666'
                    }
                }
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                    name: '2012年',
                    type: 'bar',
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                }
            ]
        },
        source: {
            id: 0,
            father_ids: [0],
            request_match: true,
            text: '全局数据',
            data_fields: 'series',
            match_type: 'match',
            data_type: 'Array',
            data_manipula: 'replace',
            map_field: [
                {
                    id: 0,
                    father_ids: [0],
                    old_name: 'name',
                    new_name: '',
                    type: 'String',
                    text: '标签名',
                    status: true
                },
                {
                    id: 0,
                    father_ids: [0],
                    old_name: 'data',
                    new_name: '',
                    type: 'NumberArray',
                    text: '值',
                    status: true
                },
                {
                    id: 0,
                    father_ids: [0],
                    old_name: 'type',
                    new_name: '',
                    type: 'String',
                    text: '默认值',
                    status: true
                }
            ]
        }
    }
]

export default histogramChartList
