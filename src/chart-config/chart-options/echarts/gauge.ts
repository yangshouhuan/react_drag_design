import { BaseChartType } from "types/chart"

const gaugeChartList: BaseChartType[] = [
    {
        id: 41,
        option_id: '0-4|0-1',
        name: '基础仪表盘',
        component: 'div',
        is_echarts: true,
        config: {
            backgroundColor: '',
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%'
            },
            series: [{
                name: 'Pressure',
                type: 'gauge',
                detail: {
                    formatter: '{value}'
                },
                data: [{
                    value: 50,
                    name: 'SCORE'
                }]
            }]
        },
        source: {
            id: 0,
            father_ids: [0],
            request_match: true,
            text: '全局数据',
            data_fields: 'series-0-data-0',
            match_type: 'match',
            data_type: 'Object',
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
                    old_name: 'value',
                    new_name: '',
                    type: 'Number',
                    text: '值',
                    status: true
                }
            ]
        }
    },
    {
        id: 42,
        option_id: '0-4|0-2',
        component: 'div',
        name: '速度仪表盘',
        is_echarts: true,
        config: {
            backgroundColor: '',
            series: [{
                type: 'gauge',
                progress: {
                    show: true,
                    width: 18
                },
                axisLine: {
                    lineStyle: {
                        width: 18
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    length: 15,
                    lineStyle: {
                        width: 2,
                        color: '#999'
                    }
                },
                axisLabel: {
                    distance: 25,
                    color: '#999',
                    fontSize: 20
                },
                anchor: {
                    show: true,
                    showAbove: true,
                    size: 25,
                    itemStyle: {
                        borderWidth: 10
                    }
                },
                title: {
                    show: false
                },
                detail: {
                    valueAnimation: true,
                    fontSize: 80,
                    offsetCenter: [0, '70%']
                },
                data: [{
                    value: 70
                }]
            }]
        },
        source: {
            id: 0,
            father_ids: [0],
            request_match: true,
            text: '全局数据',
            data_fields: 'series-0-data-0',
            match_type: 'match',
            data_type: 'Object',
            data_manipula: 'replace',
            map_field: [
                {
                    id: 0,
                    father_ids: [0],
                    old_name: 'value',
                    new_name: '',
                    type: 'Number',
                    text: '值',
                    status: true
                }
            ]
        }
    },
    {
        id: 43,
        option_id: '0-4|0-3',
        name: '阶段性仪表盘',
        component: 'div',
        is_echarts: true,
        config: {
            backgroundColor: '',
            series: [{
                type: 'gauge',
                axisLine: {
                    lineStyle: {
                        width: 30,
                        color: [
                            [0.3, '#67e0e3'],
                            [0.7, '#37a2da'],
                            [1, '#fd666d']
                        ]
                    }
                },
                pointer: {
                    itemStyle: {
                        color: 'inherit'
                    }
                },
                axisTick: {
                    distance: -30,
                    length: 8,
                    lineStyle: {
                        color: '#fff',
                        width: 2
                    }
                },
                splitLine: {
                    distance: -30,
                    length: 30,
                    lineStyle: {
                        color: '#fff',
                        width: 4
                    }
                },
                axisLabel: {
                    color: 'inherit',
                    distance: 40,
                    fontSize: 20
                },
                detail: {
                    valueAnimation: true,
                    formatter: '{value} km/h',
                    color: 'inherit'
                },
                data: [{
                    value: 70
                }]
            }]
        },
        source: {
            id: 0,
            father_ids: [0],
            request_match: true,
            text: '全局数据',
            data_fields: 'series-0-data-0',
            match_type: 'match',
            data_type: 'Object',
            data_manipula: 'replace',
            map_field: [
                {
                    id: 0,
                    father_ids: [0],
                    old_name: 'value',
                    new_name: '',
                    type: 'Number',
                    text: '值',
                    status: true
                }
            ]
        }
    },
    {
        id: 44,
        option_id: '0-4|0-4',
        name: '多标题仪表盘',
        component: 'div',
        is_echarts: true,
        config: {
            backgroundColor: '',
            series: [{
                type: 'gauge',
                anchor: {
                    show: true,
                    showAbove: true,
                    size: 18,
                    itemStyle: {
                        color: '#FAC858'
                    }
                },
                pointer: {
                    icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                    width: 8,
                    length: '80%',
                    offsetCenter: [0, '8%']
                },

                progress: {
                    show: true,
                    overlap: true,
                    roundCap: true
                },
                axisLine: {
                    roundCap: true
                },
                data: [{
                    value: 20,
                    name: '完成率',
                    title: {
                        offsetCenter: ['-40%', '80%']
                    },
                    detail: {
                        offsetCenter: ['-40%', '95%']
                    }
                },
                {
                    value: 40,
                    name: '达标率',
                    title: {
                        offsetCenter: ['0%', '80%']
                    },
                    detail: {
                        offsetCenter: ['0%', '95%']
                    }
                },
                {
                    value: 60,
                    name: '优秀率',
                    title: {
                        offsetCenter: ['40%', '80%']
                    },
                    detail: {
                        offsetCenter: ['40%', '95%']
                    }
                }
                ],
                title: {
                    fontSize: 14
                },
                detail: {
                    width: 40,
                    height: 14,
                    fontSize: 14,
                    color: '#fff',
                    backgroundColor: 'inherit',
                    borderRadius: 3,
                    formatter: '{value}%'
                }
            }]
        },
        source: {
            id: 0,
            father_ids: [0],
            request_match: true,
            text: '全局数据',
            data_fields: 'series-0-data',
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
                    old_name: 'value',
                    new_name: '',
                    type: 'Number',
                    text: '值',
                    status: true
                },
                {
                    id: 0,
                    father_ids: [0],
                    old_name: 'title',
                    new_name: '',
                    type: 'Object',
                    text: '范围1',
                    status: true
                },
                {
                    id: 0,
                    father_ids: [0],
                    old_name: 'detail',
                    new_name: '',
                    type: 'Object',
                    text: '范围2',
                    status: true
                }
            ]
        }
    }
]

export default gaugeChartList
