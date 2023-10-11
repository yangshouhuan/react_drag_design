import {
    title_config,
    tooltip_config,
    xAxis_config,
    grid_config,
    legend_config,
    polar_config,
    angleAxis_config,
    radiusAxis_config,
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

const result = [
    { x: '衬衫', y: 5, s: '销量'},
    { x: '羊毛衫', y: 20, s: '销量'},
    { x: '雪纺衫', y: 36, s: '销量'},
    { x: '裤子', y: 10, s: '销量'},
    { x: '高跟鞋', y: 10, s: '销量'},
    { x: '袜子', y: 20, s: '销量'},
]
const result2 = [
    { x: 'Matcha Latte', y: 43.3, s: '2015'},
    { x: 'Milk Tea', y: 83.1, s: '2015'},
    { x: 'Cheese Cocoa', y: 86.4, s: '2015'},
    { x: 'Walnut Brownie', y: 72.4, s: '2015'},

    { x: 'Matcha Latte', y: 85.8, s: '2016'},
    { x: 'Milk Tea', y: 73.4, s: '2016'},
    { x: 'Cheese Cocoa', y: 65.2, s: '2016'},
    { x: 'Walnut Brownie', y: 53.9, s: '2016'},
    
    { x: 'Matcha Latte', y: 93.7, s: '2017'},
    { x: 'Milk Tea', y: 55.1, s: '2017'},
    { x: 'Cheese Cocoa', y: 82.5, s: '2017'},
    { x: 'Walnut Brownie', y: 39.1, s: '2017'},
]
const result3 = [
    { x: '00:00', y: 2.0, s: 'Rainfall'},
    { x: '06:00', y: 4.9, s: 'Rainfall'},
    { x: '12:00', y: 7.0, s: 'Rainfall'},
    { x: '18:00', y: 23.2, s: 'Rainfall'},
    { x: '24:00', y: 25.6, s: 'Rainfall'},

    { x: '00:00', y: 2.6, s: 'Evaporation'},
    { x: '06:00', y: 5.9, s: 'Evaporation'},
    { x: '12:00', y: 9.0, s: 'Evaporation'},
    { x: '18:00', y: 26.4, s: 'Evaporation'},
    { x: '24:00', y: 28.7, s: 'Evaporation'},
]
const result4 = [
    { x: 'a', y: 2},
    { x: 'b', y: 1.2},
    { x: 'c', y: 2.4},
    { x: 'd', y: 3.6},
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
            type: 'bar',
            data: list
        })
    })
    return seriesList
}

const histogram = [
    {
        chart_id: 101,
        config_id: 101,
        chart_name: '基础柱状图',

        chart_img: 'bar-background.webp',
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
            title: getTitle(),
            tooltip: getTooltip(),
            grid: getGrid(),
            legend: getLegend({data: ['销量']}),

            xAxis: {
                show: true,
                axisLabel: getAxisLabel({
                    color: '#ffffff',
                    fontSize: 18,
                    fontWeight: 500
                }),
                axisLine: {
                    show: true,
                    onZero: false,
                    lineStyle: {
                        color: '#666666',
                        width: 1,
                        type: 'solid'
                    }
                },

                nameTextStyle: getAxisNameTextStyle(),
                axisTick: getAxisTick(),
                splitLine: getSplitLine(),
                axisPointer: getAxisPointer(),
                
                data: getDateList(result)
            },
            yAxis: {
                show: true,
                axisLabel: {
                    ...getAxisLabel(),
                    color: '#ffffff',
                    fontSize: 18,
                    fontWeight: 500
                },
                axisLine: {
                    show: true,
                    onZero: false,
                    lineStyle: {
                        color: '#666666',
                        width: 1,
                        type: 'solid'
                    }
                },

                nameTextStyle: getAxisNameTextStyle(),
                axisTick: getAxisTick(),
                splitLine: getSplitLine(),
                axisPointer: getAxisPointer(),
            },
            series: getValueList(result)
        },
        config: [],
        source: {
            name: '基础柱状图',
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

            default: [...result],
            // handle: (data) => ((data))
        }
    },
    {
        chart_id: 102,
        config_id: 102,
        chart_name: '柱状图',

        chart_img: 'dataset-simple0.webp',
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
            title: getTitle(),
            tooltip: getTooltip(),
            grid: getGrid(),
            legend: getLegend(),
            
            xAxis: {
                type: 'category',
                show: true,
                
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
                axisPointer: getAxisPointer(),

                data: getDateList(result2)
            },
            // dataset: {
            //     source: [
            //         ['product', '2015', '2016', '2017'],
            //         ['Matcha Latte', 43.3, 85.8, 93.7],
            //         ['Milk Tea', 83.1, 73.4, 55.1],
            //         ['Cheese Cocoa', 86.4, 65.2, 82.5],
            //         ['Walnut Brownie', 72.4, 53.9, 39.1]
            //     ]
            // },
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: getValueList(result2)
        },
        config: [],
        source: {
            name: '多柱状图',
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

            default: [...result2],
            // handle: (data) => ((data))
        }
    },
    {
        chart_id: 103,
        config_id: 103,
        chart_name: '某地区蒸发量和降雨量',

        chart_img: 'bar1.webp',
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
            title: getTitle(),
            tooltip: getTooltip(),
            grid: getGrid(),
            legend: getLegend({
                // show: false,
                // data: ['Rainfall', 'Evaporation']
            }),

            calculable: true,
            xAxis: {
                type: 'category',
                show: true,

                nameTextStyle: getAxisNameTextStyle(),
                axisLine: getAxisLine(),
                axisTick: getAxisTick(),
                axisLabel: getAxisLabel(),
                splitLine: getSplitLine(),
                axisPointer: getAxisPointer(),

                // prettier-ignore
                data: getDateList(result3)
            },
            yAxis: {
                type: 'value',
                show: true,

                nameTextStyle: getAxisNameTextStyle(),
                axisLine: getAxisLine(),
                axisTick: getAxisTick(),
                axisLabel: getAxisLabel(),
                splitLine: getSplitLine(),
                axisPointer: getAxisPointer(),
            },
            // series: [
            //     {
            //         name: 'Rainfall',
            //         type: 'bar',
            //         data: [2.0, 4.9, 7.0, 23.2, 25.6],
            //         markPoint: {
            //             data: [
            //                 { type: 'max', name: 'Max' },
            //                 { type: 'min', name: 'Min' }
            //             ]
            //         },
            //         markLine: {
            //             data: [{ type: 'average', name: 'Avg' }]
            //         }
            //     },
            //     {
            //         name: 'Evaporation',
            //         type: 'bar',
            //         data: [2.6, 5.9, 9.0, 26.4, 28.7],
            //         markPoint: {
            //             data: [
            //                 { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
            //                 { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
            //             ]
            //         },
            //         markLine: {
            //             data: [{ type: 'average', name: 'Avg' }]
            //         }
            //     }
            // ]
            series: getValueList(result3)
        },
        config: [],
        source: {
            name: '基础柱状图',
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
    {
        chart_id: 104,
        config_id: 104,
        chart_name: '极坐标柱状图标签',

        chart_img: 'bar-polar-label-tangential.webp',
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
            title: getTitle(),
            tooltip: getTooltip(),
            grid: getGrid(),
            
            polar: getPolar({
                radius: [30, '80%']
            }),
            angleAxis: getAngleAxis({
                max: 4,
                startAngle: 75
            }),
            radiusAxis: getRadiusAxis({
                type: 'category',
                data: getDateList(result4)
            }),
            series: {
              type: 'bar',
              data: getDateList(result4, 'y'),
              coordinateSystem: 'polar',
              label: {
                show: true,
                position: 'middle',
                formatter: '{b}: {c}'
              }
            }
          },
        config: [],
        source: {
            name: '基础柱状图',
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
                    name: '值',
                    default: 0,
                    update_fields: 'series-data',
                    update_type: 'replace',
                    handle: getDateList
                }
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

            default: [...result4],
            // handle: (data) => ((data))
        }
    },
]

export default histogram
