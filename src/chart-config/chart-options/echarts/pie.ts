import { BaseChartType } from "types/chart"

const pieChartList: BaseChartType[] = [
    {
        id: 51,
        option_id: '0-5|0-1',
        name: '环形图',
        component: 'div',
        is_echarts: true,
        config: {
            backgroundColor: '',
            title: {
                show: false,
                text: '主标题',
                subtext: '',
                left: 'center',
                textStyle: {
                    color: '#ffffff',
                    fontSize: 16,
                    fontWeight: 300
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                show: true,
                orient: 'vertical',
                left: 10,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 16,
                    fontWeight: 300
                }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1548, name: '搜索引擎' }
                    ]
                }
            ]
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
            ],
        }
    },
    {
        id: 52,
        option_id: '0-5|0-2',
        name: '用户访问来源',
        component: 'div',
        is_echarts: true,
        config: {
            backgroundColor: '',
            title: {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                left: 'center',
                textStyle: {
                    color: '#ffffff',
                    fontSize: 16,
                    fontWeight: 300
                }
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                show: true,
                orient: 'vertical',
                left: 10,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 16,
                    fontWeight: 300
                }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: '搜索引擎' },
                        { value: 735, name: '直接访问' },
                        { value: 580, name: '邮件营销' },
                        { value: 484, name: '联盟广告' },
                        { value: 300, name: '视频广告' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
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
            ]
        }
    },
    {
        id: 53,
        option_id: '0-5|0-3',
        name: '饼图自定义样式',
        component: 'div',
        is_echarts: true,
        config: {
            backgroundColor: '',
            title: {
                text: 'Customized Pie',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#cccccc',
                    fontSize: 16,
                    fontWeight: 300
                }
            },
            tooltip: {
                trigger: 'item'
            },

            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 274, name: '联盟广告' },
                        { value: 235, name: '视频广告' },
                        { value: 400, name: '搜索引擎' }
                    ].sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    label: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    labelLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    },
                    itemStyle: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function () {
                        return Math.random() * 200;
                    }
                }
            ]
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
                }
            ]
        }
    }
]

export default pieChartList