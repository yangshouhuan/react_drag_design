import {
    title_config,
    tooltip_config,
    grid_config,
    xAxis_config,
    legend_config
} from './shared/common_config'
import {
    getTitle,
    getTooltip,
    getAxisNameTextStyle,
    getAxisLine,
    getAxisTick,
    getAxisLabel,
    getGrid,
    getAxisPointer,
    getLegend,
    getPolar,
    getAngleAxis,
    getRadiusAxis,
    getSplitLine,
    getVisualMap
} from './shared/common_option'

const result1 = [
    { "x": "00:00", "y": 7, "s": 1 },
    { "x": "00:30", "y": 8, "s": 1 },
    { "x": "01:00", "y": 8, "s": 1 },
    { "x": "01:30", "y": 9, "s": 1 },
    { "x": "02:00", "y": 12, "s": 1 },
    { "x": "02:30", "y": 10, "s": 1 },
    { "x": "03:00", "y": 16, "s": 1 },
    { "x": "03:30", "y": 15, "s": 1 },
    { "x": "04:00", "y": 14, "s": 1 },
    { "x": "04:30", "y": 12, "s": 1 },
    { "x": "05:00", "y": 12, "s": 1 },
    { "x": "05:30", "y": 13, "s": 1 },
    { "x": "06:00", "y": 17, "s": 1 },
    { "x": "06:30", "y": 30, "s": 1 },
    { "x": "07:00", "y": 19, "s": 1 },
    { "x": "07:30", "y": 19, "s": 1 },
    { "x": "08:00", "y": 16, "s": 1 },
    { "x": "08:30", "y": 26, "s": 1 },
    { "x": "09:00", "y": 32, "s": 1 },
    { "x": "09:30", "y": 43, "s": 1 },
    { "x": "10:00", "y": 55, "s": 1 },
    { "x": "10:30", "y": 60, "s": 1 },
    { "x": "11:00", "y": 70, "s": 1 },
    { "x": "11:30", "y": 60, "s": 1 },
    { "x": "12:00", "y": 50, "s": 1 },
    { "x": "12:30", "y": 45, "s": 1 },
    { "x": "13:00", "y": 39, "s": 1 },
    { "x": "13:30", "y": 30, "s": 1 },
    { "x": "14:00", "y": 30, "s": 1 },
    { "x": "14:30", "y": 30, "s": 1 },
    { "x": "15:00", "y": 30, "s": 1 },
    { "x": "15:30", "y": 29, "s": 1 },
    { "x": "16:00", "y": 29, "s": 1 },
    { "x": "16:30", "y": 25, "s": 1 },
    { "x": "17:00", "y": 21, "s": 1 },
    { "x": "17:30", "y": 20, "s": 1 },
    { "x": "18:00", "y": 15, "s": 1 },
    { "x": "18:30", "y": 13, "s": 1 },
    { "x": "19:00", "y": 16, "s": 1 },
    { "x": "19:30", "y": 17, "s": 1 },
    { "x": "20:00", "y": 12, "s": 1 },
    { "x": "20:30", "y": 13, "s": 1 },
    { "x": "21:00", "y": 13, "s": 1 },
    { "x": "21:30", "y": 17, "s": 1 },
    { "x": "22:00", "y": 15, "s": 1 },
    { "x": "22:30", "y": 13, "s": 1 },
    { "x": "23:00", "y": 12, "s": 1 },
    { "x": "23:30", "y": 12, "s": 1 }
]

const result3 = [
    { x: 'Mon', y: 820, s: '销量'},
    { x: 'Tue', y: 932, s: '销量'},
    { x: 'Wed', y: 901, s: '销量'},
    { x: 'Thu', y: 934, s: '销量'},
    { x: 'Fri', y: 1290, s: '销量'},
    { x: 'Sat', y: 1330, s: '销量'},
    { x: 'Sun', y: 1320, s: '销量'},
    
    { x: 'Mon', y: 8200, s: '收益'},
    { x: 'Tue', y: 9320, s: '收益'},
    { x: 'Wed', y: 9010, s: '收益'},
    { x: 'Thu', y: 9340, s: '收益'},
    { x: 'Fri', y: 12900, s: '收益'},
    { x: 'Sat', y: 13300, s: '收益'},
    { x: 'Sun', y: 13200, s: '收益'},
]

const getDateList = (data, fields = 'x') => {
    return [...new Set(data.map(item => ((item[fields]))))]
}
const getValueList = (data) => {
    let seriesList = []
    const legend = new Set(data.map(item => {
        return item.s;
    }))
    legend.forEach(litem => {
        let list = []
        data.forEach(vitem => {
            if (vitem.s === litem) {
                list.push(vitem.y)
            }
        })
    
        seriesList.push({
            name: litem,
            type: 'line',
            data: list
        })
    })
    return seriesList
}

const linechart = [
    {
        chart_id: 701,
        config_id: 701,
        chart_name: '基础折线图',

        chart_img: 'line-simple.webp',
        chart_idx: 1,
        is_group: false,
        is_hide: false,
        is_lock: false,
        is_del: false,
        is_echart: true,
        x: 0,
        y: 0,
        width: 300,
        height: 300,
        rotate: 0,
        bg_color: '',
        opacity: 1,
        chart_status: true,
        create_uid: 1,
        component: 'echart',
        create_time: '2022-12-12 15:33:30',
        map_url: '',

        option: {
            // 标题
            title: getTitle(),
            // 网格
            grid: getGrid(),
            // 提示框
            tooltip: getTooltip(),
            // 图例
            legend: getLegend(),

            xAxis: {
                type: 'category',
                show: true,
                data: getDateList(result1),

                nameTextStyle: getAxisNameTextStyle(),
                axisLine: getAxisLine(),
                axisTick: getAxisTick(),
                axisLabel: getAxisLabel(),
                splitLine: getSplitLine(),
                axisPointer: getAxisPointer()
            },
            yAxis: {
                type: 'value',
                show: true,

                nameTextStyle: getAxisNameTextStyle(),
                axisLine: getAxisLine(),
                axisTick: getAxisTick(),
                axisLabel: getAxisLabel(),
                splitLine: getSplitLine(),
                axisPointer: getAxisPointer()
            },
            series: getValueList(result1)
        },
        config: [],
        source: {
            name: '基础折线图',
            multi_source: true,  // 是否有多个数据源
            data_type: 'array',  // 数据响应类型
            content_type: 'object',  // 数据类型 单一数据时使用

            result_structure: [
				{
                    fields: 'x',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'stringarray',
                    content_type: 'string',
                    name: 'x类目轴',
                    de_weight: true,
                    default: '',
                    update_fields: 'xAxis-data',
                    update_type: 'replace',
                    handle: getDateList
                },
                {
                    fields: 'y',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'numberarray',
                    content_type: 'number',
                    name: '值',
                    default: 0,
                    update_fields: 'series',
                    update_type: 'replace',
                    handle: getValueList
                },
                {
                    fields: 's',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'stringarray',
                    content_type: 'string',
                    name: '图例',
                    de_weight: true,
                    default: '',
                    update_fields: 'series',
                    update_type: 'replace',
                    handle: getValueList
                },
			],

            source_type: 'static', // 数据来源类型
            request_url: '', // 请求地址
            request_method: 'get',  // 请求方式
            
            update_time: 10,  // 更新时间
            auto_update: false, // 是否更新
        
            source_status: true,  // 数据源状态
            fields_status: true,  // 映射字段状态
        
            filter_fun: 'return data',  // 过滤器
            auto_filter: false,  // 使用过滤器

            default: [...result1],
            // handle: (data) => ((data))
        }
    },
    {
        chart_id: 702,
        config_id: 702,
        chart_name: '折线图',

        chart_img: 'multiple-x-axis.webp',
        chart_idx: 1,
        is_group: false,
        is_hide: false,
        is_lock: false,
        is_del: false,
        is_echart: true,
        x: 0,
        y: 0,
        width: 300,
        height: 300,
        rotate: 0,
        bg_color: '',
        opacity: 1,
        chart_status: true,
        create_uid: 1,
        component: 'echart',
        create_time: '2022-12-12 15:33:30',
        map_url: '',

        option: {
            backgroundColor: '',
            // 标题
            title: getTitle(),
            // 网格
            grid: getGrid(),
            // 提示框
            tooltip: getTooltip(),
            // 图例
            legend: getLegend(),

            xAxis: [
                {
                    show: true,
                    type: 'category',
                    nameTextStyle: getAxisNameTextStyle(),
                    axisLine: getAxisLine(),
                    axisTick: getAxisTick(),
                    axisLabel: getAxisLabel(),
                    splitLine: getSplitLine(),

                    axisPointer: getAxisPointer({
                        label: {
                            formatter: function (params) {
                                return (
                                    'Precipitation  ' +
                                    params.value +
                                    (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                                );
                            }
                        }
                    }),
                    // prettier-ignore
                    data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
                },
                {
                    show: true,
                    type: 'category',
                    nameTextStyle: getAxisNameTextStyle(),
                    axisLine: getAxisLine(),
                    axisTick: getAxisTick(),
                    axisLabel: getAxisLabel(),
                    splitLine: getSplitLine(),

                    axisPointer: getAxisPointer({
                        label: {
                            formatter: function (params) {
                                return (
                                    'Precipitation  ' +
                                    params.value +
                                    (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                                );
                            }
                        }
                    }),
                    // prettier-ignore
                    data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
                }
            ],
            yAxis: {
                type: 'value',
                show: true,
                
                nameTextStyle: getAxisNameTextStyle(),
                axisLine: getAxisLine(),
                axisTick: getAxisTick(),
                axisLabel: getAxisLabel(),
                splitLine: getSplitLine(),
                axisPointer: getAxisPointer()
            },
            series: [
                {
                    name: 'Precipitation(2015)',
                    type: 'line',
                    xAxisIndex: 1,
                    smooth: true,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name: 'Precipitation(2016)',
                    type: 'line',
                    smooth: true,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
                }
            ]
        },
        config: [],
        source: null
    },
    {
        chart_id: 703,
        config_id: 703,
        chart_name: '折线图',

        chart_img: 'data-transform-filter.webp',
        chart_idx: 1,
        is_group: false,
        is_hide: false,
        is_lock: false,
        is_del: false,
        is_echart: true,
        x: 0,
        y: 0,
        width: 300,
        height: 300,
        rotate: 0,
        bg_color: '',
        opacity: 1,
        chart_status: true,
        create_uid: 1,
        component: 'echart',
        create_time: '2022-12-12 15:33:30',
        map_url: '',

        option: {
            // 标题
            title: getTitle(),
            // 网格
            grid: getGrid(),
            // 提示框
            tooltip: getTooltip(),
            // 图例
            legend: getLegend(),

            xAxis: {
                show: true,
                type: 'category',
                nameTextStyle: getAxisNameTextStyle(),
                axisLine: getAxisLine(),
                axisTick: getAxisTick(),
                axisLabel: getAxisLabel(),
                splitLine: getSplitLine(),
                axisPointer: getAxisPointer(),

                data: getDateList(result3)
            },
            yAxis: {
                show: true,
                type: 'value',
                nameTextStyle: getAxisNameTextStyle(),
                axisLine: getAxisLine(),
                axisTick: getAxisTick(),
                axisLabel: getAxisLabel(),
                splitLine: getSplitLine(),
                axisPointer: getAxisPointer(),
            },
            series: getValueList(result3)
        },
        config: [],
        source: {
            name: '多条折线图',
            multi_source: true,  // 是否有多个数据源
            data_type: 'array',  // 数据响应类型
            content_type: 'object',  // 数据类型 单一数据时使用

            result_structure: [
				{
                    fields: 'x',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'stringarray',
                    content_type: 'string',
                    name: 'x类目轴',
                    de_weight: true,
                    default: '',
                    update_fields: 'xAxis-data',
                    update_type: 'replace',
                    handle: getDateList
                },
                {
                    fields: 'y',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'numberarray',
                    content_type: 'number',
                    name: '值',
                    default: 0,
                    update_fields: 'series',
                    update_type: 'replace',
                    handle: getValueList
                },
                {
                    fields: 's',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'stringarray',
                    content_type: 'string',
                    name: '图例',
                    de_weight: true,
                    default: '',
                    update_fields: 'series',
                    update_type: 'replace',
                    handle: getValueList
                },
			],

            source_type: 'static', // 数据来源类型
            request_url: '', // 请求地址
            request_method: 'get',  // 请求方式
            
            update_time: 10,  // 更新时间
            auto_update: false, // 是否更新
        
            source_status: true,  // 数据源状态
            fields_status: true,  // 映射字段状态
        
            filter_fun: 'return data',  // 过滤器
            auto_filter: false,  // 使用过滤器

            default: [...result3],
            // handle: (data) => ((data))
        }
    },
]

export default linechart