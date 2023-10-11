import {
    title_config,
    tooltip_config,
    xAxis_config,
    grid_config,
    legend_config,
    visualMap_config
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
    { x: 'F类型', y: 50.1, s: 'score'},
    { x: 'E类型', y: 89.7, s: 'score'},
    { x: 'D类型', y: 68.1, s: 'score'},
    { x: 'C类型', y: 19.6, s: 'score'},
    { x: 'B类型', y: 10.6, s: 'score'},
    { x: 'A类型', y: 32.7, s: 'score'},
    
    { x: 'F类型', y: 12755, s: 'amount'},
    { x: 'E类型', y: 20145, s: 'amount'},
    { x: 'D类型', y: 79146, s: 'amount'},
    { x: 'C类型', y: 91852, s: 'amount'},
    { x: 'B类型', y: 101852, s: 'amount'},
    { x: 'A类型', y: 20112, s: 'amount'},
]
const result2 = [
    { x: 'ten', y: -0.07, s: '2014'},
    { x: 'eight', y: 0.2, s: '2014'},
    { x: 'six', y: -0.23, s: '2014'},
    { x: 'four', y: -0.17, s: '2014'},
    { x: 'two', y: -0.36, s: '2014'},

    { x: 'ten', y: -0.10, s: '2015'},
    { x: 'eight', y: 0.24, s: '2015'},
    { x: 'six', y: -0.45, s: '2015'},
    { x: 'four', y: -0.08, s: '2015'},
    { x: 'two', y: -0.24, s: '2015'},
]
const result3 = [
    { x: 'Brazil', y: 18203, s: '2011'},
    { x: 'Indonesia', y: 23489, s: '2011'},
    { x: 'USA', y: 29034, s: '2011'},
    { x: 'India', y: 104970, s: '2011'},
    { x: 'China', y: 131744, s: '2011'},
    { x: 'World', y: 630230, s: '2011'},
    
    { x: 'Brazil', y: 19325, s: '2012'},
    { x: 'Indonesia', y: 23438, s: '2012'},
    { x: 'USA', y: 31000, s: '2012'},
    { x: 'India', y: 121594, s: '2012'},
    { x: 'China', y: 134141, s: '2012'},
    { x: 'World', y: 681807, s: '2012'},
]

const getDateList = (data, fields = 'x') => {
    return [...new Set(data.map(item => ((item[fields]))))]
}
const getValueList = (data, merge = {}) => {
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
            ...merge,
            name: litem,
            type: 'bar',
            data: list
        })
    })
    return seriesList
}


const barChart = [
    {
        chart_id: 1301,
        config_id: 1301,
        chart_name: '横向柱状图',

        chart_img: 'dataset-encode0.webp',
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
            grid: getGrid({containLabel: true}),
            visualMap: getVisualMap({
                orient: 'horizontal',
                left: 'center',
                min: 10,
                max: 100,
                text: ['High Score', 'Low Score'],
                inRange: {
                    color: ['#65B581', '#FFCE34', '#FD665F']
                }
            }),

            xAxis: {
                show: true,
                name: 'amount',

                nameTextStyle: getAxisNameTextStyle(),
                axisLine: getAxisLine(),
                axisTick: getAxisTick(),
                axisLabel: getAxisLabel(),
                splitLine: getSplitLine(),
                axisPointer: getAxisPointer(),
            },
            yAxis: {
                show: true,
                type: 'category',
                
                nameTextStyle: getAxisNameTextStyle(),
                axisLine: getAxisLine(),
                axisTick: getAxisTick(),
                axisLabel: getAxisLabel(),
                splitLine: getSplitLine(),
                axisPointer: getAxisPointer(),

                data: getDateList(result1)
            },
            series: getValueList(result1)
        },
        config: [],
        source: {
            name: '横向柱状图',
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
                    update_fields: 'yAxis-data',
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
                    handle: (data) => getValueList(data, {
                        type: 'bar',
                        stack: 'Total',
                        label: {
                            show: true,
                            formatter: '{b}'
                        }
                    })
                },
                {
                    fields: 's',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'stringarray',
                    name: '图例',
                    de_weight: true,
                    default: '',
                    update_fields: 'series',
                    update_type: 'replace',
                    handle: (data) => getValueList(data, {
                        type: 'bar',
                        stack: 'Total',
                        label: {
                            show: true,
                            formatter: '{b}'
                        }
                    })
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
        chart_id: 1302,
        config_id: 1302,
        chart_name: '交错正负轴标签',

        chart_img: 'bar-negative2.webp',
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
            tooltip: getTooltip({
                axisPointer: {
                    type: 'shadow'
                }
            }),
            grid: getGrid({ top: 80, bottom: 30 }),
            legend: getLegend(),
            
            xAxis: {
                show: true,
                type: 'value',
                position: 'top',

                nameTextStyle: getAxisNameTextStyle(),
                axisLine: getAxisLine(),
                axisTick: getAxisTick(),
                axisLabel: getAxisLabel(),
                splitLine: getSplitLine(),
                axisPointer: getAxisPointer(),

                splitLine: getSplitLine({
                    type: 'dashed'
                })
            },
            yAxis: {
                show: true,
                type: 'category',

                axisLine: getAxisLine({show: false}),
                axisTick: getAxisTick({show: false}),
                axisLabel: getAxisLabel({show: false}),
                nameTextStyle: getAxisNameTextStyle(),
                splitLine: getSplitLine(),
                axisPointer: getAxisPointer(),

                data: getDateList(result2)
            },
            series: getValueList(result2, {
                type: 'bar',
                stack: 'Total',
                label: {
                    show: true,
                    formatter: '{b}'
                },
            })
        },
        config: [],
        source: {
            name: '交错正负轴标签',
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
                    handle: (data) => getValueList(data, {
                        type: 'bar',
                        stack: 'Total',
                        label: {
                            show: true,
                            formatter: '{b}'
                        }
                    })
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
                    handle: (data) => getValueList(data, {
                        type: 'bar',
                        stack: 'Total',
                        label: {
                            show: true,
                            formatter: '{b}'
                        }
                    })
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
        chart_id: 1303,
        config_id: 1303,
        chart_name: '世界人口总量',

        chart_img: 'bar-y-category.webp',
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
            tooltip: getTooltip({
                axisPointer: {
                    type: 'shadow'
                }
            }),
            grid: getGrid({
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            }),
            legend: getLegend({ data: ['2011', '2012'] }),


            xAxis: {
                show: true,
                type: 'value',
                boundaryGap: [0, 0.01],

                nameTextStyle: getAxisNameTextStyle(),
                axisLine: getAxisLine(),
                axisTick: getAxisTick(),
                axisLabel: getAxisLabel(),
                splitLine: getSplitLine(),
                axisPointer: getAxisPointer(),
            },
            yAxis: {
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
            series: getValueList(result3)
        },
        config: [],
        source: {
            name: '世界人口总量',
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
    }
]

export default barChart
