import { BaseChartType } from "types/chart"

const lineChartList: BaseChartType[] = [
    {
        id: 21,
        option_id: '0-2|0-1',
        name: '折线图',
        component: 'div',
        is_echarts: true,
        config: {
            backgroundColor: '',
            title: {
                show: true,
                text: '折线图堆叠',
                textStyle: {
                    color: '#ffffff',
                    fontSize: 26,
                    fontWeight: 300
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 16,
                    fontWeight: 300
                }
            },
            grid: {
                left: '33',
                top: '50',
                right: '40',
                bottom: '40',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                show: true,
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                axisLabel: {
                    color: '#ffffff',
                    fontSize: 18,
                    fontWeight: 300
                },
                axisLine: {
                    lineStyle: {
                        color: '#666666'
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    color: '#ffffff',
                    fontSize: 18,
                    fontWeight: 300
                },
                axisLine: {
                    lineStyle: {
                        color: '#666666'
                    }
                }
            },
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
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
                    text: '名称1',
                    status: true
                },
                {
                    id: 0,
                    father_ids: [0],
                    old_name: 'type',
                    new_name: '',
                    type: 'String',
                    text: '名称2',
                    status: true
                },
                {
                    id: 0,
                    father_ids: [0],
                    old_name: 'stack',
                    new_name: '',
                    type: 'String',
                    text: '名称3',
                    status: true
                },
                {
                    id: 0,
                    father_ids: [0],
                    old_name: 'data',
                    new_name: '',
                    type: 'Array',
                    text: '名称4',
                    status: true
                }
            ]
        }
    }
]

export default lineChartList
