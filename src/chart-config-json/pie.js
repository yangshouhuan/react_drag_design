import { align } from "./shared"
import {
    title_config,
    tooltip_config,
    xAxis_config,
    grid_config,
    legend_config,
    polar_config,
    angleAxis_config,
    radiusAxis_config,
    series_pie_config
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
    getVisualMap,
    getPieSeries
} from './shared/common_option'

const result1 = [
    { value: 335, name: '直接访问' },
    { value: 310, name: '邮件营销' },
    { value: 234, name: '联盟广告' },
    { value: 135, name: '视频广告' },
    { value: 1548, name: '搜索引擎' }
]
const result2 = [
    { value: 40, name: 'rose 1' },
    { value: 38, name: 'rose 2' },
    { value: 32, name: 'rose 3' },
    { value: 30, name: 'rose 4' },
    { value: 28, name: 'rose 5' },
    { value: 26, name: 'rose 6' },
    { value: 22, name: 'rose 7' },
    { value: 18, name: 'rose 8' }
]
const result3 = [
    { value: 1048, name: 'Search Engine' },
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' },
    { value: 484, name: 'Union Ads' },
    { value: 300, name: 'Video Ads' },
]
const getValueList = (data) => {

    let list = [...data]
    const hideItem = {
        // make an record to fill the bottom 50%
        value: 0,
        itemStyle: {
            // stop the chart from rendering this piece
            color: 'none',
            decal: { symbol: 'none'}
        },
        label: { show: false }
    }
    data.map(item => {
        hideItem.value += (item.value ? item.value : 0)
    })
    list.push(hideItem)
    return list
}

const pie = [
    {
        chart_id: 201,
        config_id: 201,
        chart_name: '环形图',

        chart_img: 'pie-borderRadius.webp',
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
            legend: getLegend({orient: 'vertical'}),

            series: [
                getPieSeries({
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    data: [...result1]
                })
            ]
        },
        config: [],
        source: {
            name: '环形图',
            multi_source: true,  // 是否有多个数据源
            data_type: 'array',  // 数据响应类型
            content_type: 'object',  // 数据类型 单一数据时使用

            result_structure: [
				{
                    fields: 'name',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'stringarray',
                    content_type: 'string',
                    name: '名称',
                    de_weight: true,
                    default: '',
                    update_type: 'replace'
                },
                {
                    fields: 'value',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'numberarray',
                    content_type: 'number',
                    name: '值',
                    default: 0,
                    update_type: 'replace'
                }
			],

            source_type: 'static', // 数据来源类型
            request_url: '', // 请求地址
            request_method: 'get',  // 请求方式
            
            update_fields: 'series-0-data',
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
        chart_id: 202,
        config_id: 202,
        chart_name: '南丁格尔玫瑰图',

        chart_img: 'pie-roseType-simple.webp',
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
            legend: getLegend({top: 'bottom', show: false}),

            series: [
                getPieSeries({
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [50, 100],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 12
                    },
                    label: {
                        show: true
                    },
                    data: [...result2]
                })
            ]
        },
        config: [],
        source: {
            name: '南丁格尔玫瑰图',
            multi_source: true,  // 是否有多个数据源
            data_type: 'array',  // 数据响应类型
            content_type: 'object',  // 数据类型 单一数据时使用

            result_structure: [
				{
                    fields: 'name',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'stringarray',
                    content_type: 'string',
                    name: '名称',
                    de_weight: true,
                    default: '',
                    update_type: 'replace'
                },
                {
                    fields: 'value',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'numberarray',
                    content_type: 'number',
                    name: '值',
                    default: 0,
                    update_type: 'replace'
                }
			],

            source_type: 'static', // 数据来源类型
            request_url: '', // 请求地址
            request_method: 'get',  // 请求方式
            
            update_fields: 'series-0-data',
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
        chart_id: 203,
        config_id: 203,
        chart_name: '半环形图',

        chart_img: 'pie-half-donut.webp',
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
            legend: getLegend({top: '5%', left: 'center', selectedMode: false}),

            series: [
                getPieSeries({
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['50%', '70%'],
                    // adjust the start angle
                    startAngle: 180,
                    label: {
                        show: true,
                        formatter(param) {
                            // correct the percentage
                            return param.name + ' (' + param.percent * 2 + '%)';
                        }
                    },
                    data: getValueList(result3)
                })
            ]
        },
        config: [],
        source: {
            name: '半环形图',
            multi_source: true,  // 是否有多个数据源
            data_type: 'array',  // 数据响应类型
            content_type: 'object',  // 数据类型 单一数据时使用

            result_structure: [
				{
                    fields: 'name',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'stringarray',
                    content_type: 'string',
                    name: '名称',
                    de_weight: true,
                    default: '',
                    update_type: 'replace'
                },
                {
                    fields: 'value',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'numberarray',
                    content_type: 'number',
                    name: '值',
                    default: 0,
                    update_type: 'replace'
                }
			],

            source_type: 'static', // 数据来源类型
            request_url: '', // 请求地址
            request_method: 'get',  // 请求方式
            
            update_fields: 'series-0-data',
            update_time: 10,  // 更新时间
            auto_update: false, // 是否更新
        
            source_status: true,  // 数据源状态
            fields_status: true,  // 映射字段状态
        
            filter_fun: 'return data',  // 过滤器
            auto_filter: false,  // 使用过滤器

            default: [...result3],
            handle: getValueList
        }
    }
]

export default pie