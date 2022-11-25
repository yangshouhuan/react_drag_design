import { BaseChartType } from "types/chart"

const radarChartList: BaseChartType[] = [
    {
        id: 61,
        option_id: '0-6|0-1',
        name: '雷达图',
        component: 'div',
        is_echarts: true,
        config: {
            backgroundColor: '',
            title: {
                show: true,
                text: '浏览器占比变化',
                subtext: '纯属虚构',
                top: 10,
                left: 10,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 18,
                    fontWeight: 300
                }
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(0,0,250,0.2)'
            },
            legend: {
                show: true,
                type: 'scroll',
                bottom: 10,
                data: (function () {
                    var list = []
                    for (var i = 10; i <= 20; i++) {
                        list.push(i + 2000 + '')
                    }
                    return list
                })(),
                textStyle: {
                    color: '#ffffff',
                    fontSize: 13,
                    fontWeight: 300
                }
            },
            visualMap: {
                show: true,
                top: 'middle',
                right: 10,
                color: ['red', 'yellow'],
                calculable: true
            },
            radar: {
                indicator: [
                    { text: 'IE8-', max: 400 },
                    { text: 'IE9+', max: 400 },
                    { text: 'Safari', max: 400 },
                    { text: 'Firefox', max: 400 },
                    { text: 'Chrome', max: 400 }
                ]
            },
            series: (function () {
                var series = []
                for (var i = 10; i <= 20; i++) {
                    series.push({
                        name: '浏览器（数据纯属虚构）',
                        type: 'radar',
                        symbol: 'none',
                        lineStyle: {
                            width: 1
                        },
                        emphasis: {
                            areaStyle: {
                                color: 'rgba(0,250,0,0.3)'
                            }
                        },
                        data: [{
                            value: [
                                (40 - i) * 10,
                                (38 - i) * 4 + 60,
                                i * 5 + 10,
                                i * 9,
                                i * i / 2
                            ],
                            name: i + 2000 + ''
                        }]
                    })
                }
                return series
            })()
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
                    text: '提示',
                    status: true
                },
                {
                    id: 0,
                    father_ids: [0],
                    old_name: 'emphasis',
                    new_name: '',
                    type: 'Object',
                    text: '线条颜色',
                    status: true
                },
                {
                    id: 0,
                    father_ids: [0],
                    old_name: 'data',
                    new_name: '',
                    type: 'Array',
                    text: '数据',
                    status: true
                },
            ]
        }
    }
]

export default radarChartList
