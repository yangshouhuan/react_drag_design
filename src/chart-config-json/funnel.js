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
    getVisualMap,
    getFunnel
} from './shared/common_option'

const result1 = [
    { t: 'Funnel', value: 60, name: 'Visit' },
    { t: 'Funnel', value: 40, name: 'Inquiry' },
    { t: 'Funnel', value: 20, name: 'Order' },
    { t: 'Funnel', value: 80, name: 'Click' },
    { t: 'Funnel', value: 100, name: 'Show' }
]
const result2 = [
    { t: 'Expected', value: 60, l: 'Expected' },
    { t: 'Expected', value: 40, l: 'Expected' },
    { t: 'Expected', value: 20, l: 'Expected' },
    { t: 'Expected', value: 80, l: 'Expected' },
    { t: 'Expected', value: 100, l: 'Expected' },
    
    { t: 'Actual', value: 30, l: 'Actual' },
    { t: 'Actual', value: 10, l: 'Actual' },
    { t: 'Actual', value: 5, l: 'Actual' },
    { t: 'Actual', value: 50, l: 'Actual' },
    { t: 'Actual', value: 80, l: 'Actual' }
]

const getValueList = (data) => {
    let series = []
    const legend = new Set(data.map(item => {
        return item.l
    }))
    Array.from(legend).forEach((litem, index) => {
        const list = getFunnel({
            name: litem,
            type: 'funnel',
            left: '10%',
            width: '80%',
            label: {
                position: (index + 1) % 2 === 0 ? 'inside' : 'right',
                formatter: '{b}'
            },
            data: [],
            z: index
        })
        data.forEach(ditem => {
            if (litem === ditem.l) {
                list.data.push({ value: ditem.value, name: litem })
            }
        })
        series.push(list)
    })
    return series
}

const funnel = [
    {
        chart_id: 1401,
        config_id: 1401,
        chart_name: '漏斗图',

        chart_img: 'funnel.webp',
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
            legend: getLegend(),

            series: [
                getFunnel({
                    name: 'Funnel',
                    type: 'funnel',
                    left: '10%',
                    top: 60,
                    bottom: 60,
                    width: '80%',
                    min: 0,
                    max: 100,
                    minSize: '0%',
                    maxSize: '100%',
                    sort: 'descending',
                    gap: 2,
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    labelLine: {
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: 'solid'
                        }
                    },
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 1
                    },
                    emphasis: {
                        label: {
                            fontSize: 20
                        }
                    },
                    data: [...result1]
                })
            ]
        },
        config: [],
        source: {
            name: '漏斗图',
            // multi_source: true,  // 是否有多个数据源
            data_type: 'array',  // 数据响应类型
            content_type: 'object',  // 数据类型 单一数据时使用

            result_structure: [
				{
                    fields: 't',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'string',
                    name: '名字',
                    default: "",
                },
				{
                    fields: 'value',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'number',
                    name: '值',
                    default: 0,
                },
                {
                    fields: 'name',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'string',
                    name: '图例',
                    default: "",
                },
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
        chart_id: 1402,
        config_id: 1402,
        chart_name: '对比漏斗图',

        chart_img: 'funnel-customize.webp',
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
            legend: getLegend(),

            series: getValueList(result2)
        },
        config: [],
        source: {
            name: '对比漏斗图',
            // multi_source: true,  // 是否有多个数据源
            data_type: 'array',  // 数据响应类型
            content_type: 'object',  // 数据类型 单一数据时使用

            result_structure: [
				{
                    fields: 't',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'string',
                    name: '名字',
                    default: "",
                },
				{
                    fields: 'value',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'number',
                    name: '值',
                    default: 0,
                },
                {
                    fields: 'name',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'string',
                    name: '图例',
                    default: "",
                },
			],

            source_type: 'static', // 数据来源类型
            request_url: '', // 请求地址
            request_method: 'get',  // 请求方式
            
            update_fields: 'series',
            update_time: 10,  // 更新时间
            auto_update: false, // 是否更新
        
            source_status: true,  // 数据源状态
            fields_status: true,  // 映射字段状态
        
            filter_fun: 'return data',  // 过滤器
            auto_filter: false,  // 使用过滤器

            default: [...result2],
            handle: getValueList
        }
    },
]

export default funnel
