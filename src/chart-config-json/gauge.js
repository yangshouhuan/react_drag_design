import {
    title_config,
    tooltip_config,
    textStyleConfig
} from './shared/common_config'
import {
    getTitle,
    getTooltip,
    getAxisLine,
    getAxisTick,
    getAxisLabel,
} from './shared/common_option'

const getDetail = () => ({
    show: true,
    color: '#464646',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,

    width: 50,
    height: 14,

    borderColor: 'inherit',
    borderType: 'solid',
    borderRadius: 20,
    borderWidth: 1
})
const getProgress = () => ({
    show: true,
    overlap: false,
    roundCap: true,
    clip: false,
    itemStyle: {
        borderWidth: 1,
        borderColor: '#464646',
        borderType: 'solid'
    }
})
const getPointer = () => ({
    show: true,
    width: 6,
    itemStyle: {
        color: '',
        borderColor: '#000',
        borderWidth: 0,
        borderType: 'solid',

    }
})
const getSplitLine = () => ({
    show: true,
    length: 10,
    distance: 0,
    lineStyle: {
        color: '#63677A',
        width: 3,
        type: 'solid'
    }
})

const guage = [
    {
        chart_id: 801,
        config_id: 801,
        chart_name: '基础仪表盘',

        chart_img: 'gauge-simple.webp',
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
            tooltip: getTooltip(),

            series: [
                {
                    name: 'Pressure',
                    type: 'gauge',
                    axisLine: {
                        show: true,
                        roundCap: false,
                        lineStyle: {
                            width: 10
                        }
                    },
                    detail: getDetail(),
                    progress: getProgress(),
                    axisTick: getAxisTick(),
                    axisLabel: getAxisLabel({borderWidth: 0, fontSize: 16}),
                    pointer: getPointer(),
                    splitLine: getSplitLine(),
                    data: [
                        {
                            value: 50,
                            name: 'SCORE'
                        }
                    ]
                }
            ]
        },
        config: [],
        source: {
            name: '基础仪表盘',
            // multi_source: true,  // 是否有多个数据源
            data_type: 'array',  // 数据响应类型
            content_type: 'object',  // 数据类型 单一数据时使用

            result_structure: [
				{
                    fields: 'name',
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
			],

            source_type: 'static', // 数据来源类型
            request_url: '', // 请求地址
            request_method: 'get',  // 请求方式
            
            update_fields: 'data',
            update_time: 10,  // 更新时间
            auto_update: false, // 是否更新
        
            source_status: true,  // 数据源状态
            fields_status: true,  // 映射字段状态
        
            filter_fun: 'return data',  // 过滤器
            auto_filter: false,  // 使用过滤器

            default: [
                {
                    value: 50,
                    name: 'SCORE'
                },
            ],
            // handle: (data) => ((data))
        }
    },
    {
        chart_id: 802,
        config_id: 802,
        chart_name: '气压表',

        chart_img: 'gauge-barometer.webp',
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

            series: [
                {
                    type: 'gauge',
                    min: 0,
                    max: 100,
                    splitNumber: 10,
                    radius: '80%',
                    
                    axisLine: getAxisLine({
                        lineStyle: {
                            color: [[1, '#f00']],
                            width: 3
                        }
                    }),
                    detail: getDetail({precision: 1}),
                    progress: getProgress(),
                    axisLabel: getAxisLabel({
                        distance: -50,
                        color: '#f00',
                        fontSize: 25,
                        borderWidth: 0
                    }),

                    splitLine: {
                        show: true,
                        distance: -18,
                        length: 18,
                        lineStyle: {
                            color: '#f00',
                            width: 3,
                            type: 'solid'
                        }
                    },
                    axisTick: {
                        show: true,
                        distance: -12,
                        length: 10,
                        lineStyle: {
                            color: '#f00',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    anchor: {
                        show: true,
                        size: 20,
                        itemStyle: {
                            borderColor: '#000',
                            borderWidth: 2
                        }
                    },
                    pointer: {
                        show: true,
                        offsetCenter: [0, '10%'],
                        icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                        length: '115%',
                        itemStyle: {
                            color: '#000',
                            borderColor: '#000',
                            borderWidth: 0,
                            borderType: 'solid',
                        }
                    },
                    title: {
                        offsetCenter: [0, '-50%']
                    },
                    data: [
                        {
                            value: 58.46,
                            name: 'PLP'
                        }
                    ]
                },
                {
                    type: 'gauge',
                    min: 0,
                    max: 60,
                    splitNumber: 6,
                    axisLine: {
                        lineStyle: {
                            color: [[1, '#000']],
                            width: 3
                        }
                    },
                    splitLine: {
                        distance: -3,
                        length: 18,
                        lineStyle: {
                            color: '#000'
                        }
                    },
                    axisTick: {
                        distance: 0,
                        length: 10,
                        lineStyle: {
                            color: '#000'
                        }
                    },
                    axisLabel: {
                        distance: 10,
                        fontSize: 25,
                        color: '#000'
                    },
                    pointer: {
                        show: false
                    },
                    title: {
                        show: false
                    },
                    anchor: {
                        show: true,
                        size: 14,
                        itemStyle: {
                            color: '#000'
                        }
                    }
                }
            ]
        },
        config: [],
        source: {
            name: '气压表',
            // multi_source: true,  // 是否有多个数据源
            data_type: 'array',  // 数据响应类型
            content_type: 'object',  // 数据类型 单一数据时使用

            result_structure: [
				{
                    fields: 'name',
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

            default: [
                {
                    value: 58.46,
                    name: 'PLP'
                }
            ],
            // handle: (data) => ((data))
        }
    },
    {
        chart_id: 803,
        config_id: 803,
        chart_name: '得分环',

        chart_img: 'gauge-ring.webp',
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

            series: [
                {
                    type: 'gauge',
                    startAngle: 90,
                    endAngle: -270,
                    axisLine: getAxisLine({
                        roundCap: false,
                        lineStyle: {
                            ...getAxisLine().lineStyle,
                            width: 40,
                            color: [[1, '#E6EBF8']]
                        }
                    }),
                    detail: getDetail(),
                    progress: getProgress(),
                    axisTick: getAxisTick({show: false}),
                    axisLabel: getAxisLabel({
                        show: false,
                        distance: 50,
                        lineHeight: 10,
                        borderColor: '#00ffff',
                        borderWidth: 1,
                        borderType: 'solid',
                    }),
                    pointer: getPointer({show: false}),
                    splitLine: getSplitLine({show: false}),
                    data: [
                        {
                            value: 20,
                            name: 'Perfect',
                        },
                        {
                            value: 40,
                            name: 'Good',
                        },
                        {
                            value: 60,
                            name: 'Commonly',
                        }
                    ],
                }
            ]
        },
        config: [],
        source: {
            name: '得分环',
            // multi_source: true,  // 是否有多个数据源
            data_type: 'array',  // 数据响应类型
            content_type: 'object',  // 数据类型 单一数据时使用

            result_structure: [
				{
                    fields: 'name',
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

            default: [
                {
                    value: 20,
                    name: 'Perfect',
                },
                {
                    value: 40,
                    name: 'Good',
                },
                {
                    value: 60,
                    name: 'Commonly',
                }
            ],
            // handle: (data) => ((data))
        }
    }
]

export default guage