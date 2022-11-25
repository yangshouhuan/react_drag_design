import { BaseChartType } from "types/chart"

const scatterChartList: BaseChartType[] = [
    {
        id: 71,
        option_id: '0-7|0-1',
        name: '散点图',
        component: 'div',
        is_echarts: true,
        config: {
            backgroundColor: '',
            title: {
                text: 'ECharts 入门示例1',
                textStyle: {
                    color: '#ffffff',
                    fontSize: 16,
                    fontWeight: 300
                }
            },
            xAxis: {
                axisLabel: {
                    color: '#ffffff',
                    fontSize: 14,
                    fontWeight: 300
                },
                axisLine: {
                    lineStyle: {
                        color: '#666666'
                    }
                }
            },
            yAxis: {
                axisLabel: {
                    color: '#ffffff',
                    fontSize: 14,
                    fontWeight: 300
                },
                axisLine: {
                    lineStyle: {
                        color: '#666666'
                    }
                }
            },
            series: [{
                symbolSize: 20,
                data: [
                    [10.0, 8.04],
                    [8.0, 6.95],
                    [13.0, 7.58],
                    [9.0, 8.81],
                    [11.0, 8.33],
                    [14.0, 9.96],
                    [6.0, 7.24],
                    [4.0, 4.26],
                    [12.0, 10.84],
                    [7.0, 4.82],
                    [5.0, 5.68]
                ],
                type: 'scatter'
            }]
        },
        source: {
            id: 0,
            father_ids: [0],
            request_match: true,
            text: '全局数据',
            data_fields: 'series-0-data',
            match_type: 'any',
            data_type: 'Array',
            data_manipula: 'replace'
        }
    }
]

export default scatterChartList
