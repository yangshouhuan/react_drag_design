import {
    title_config,
    tooltip_config,
    legend_config,
    visualMap_config,
    radar_config
} from './shared/common_config'
import {
    getTitle,
    getTooltip,
    getLegend,
    getVisualMap,
    getRadar
} from './shared/common_option'

const dataBJ = [
    [55, 9, 56, 0.46, 18, 6, 1],
    [25, 11, 21, 0.65, 34, 9, 2],
    [56, 7, 63, 0.3, 14, 5, 3],
    [33, 7, 29, 0.33, 16, 6, 4],
    [42, 24, 44, 0.76, 40, 16, 5],
    [82, 58, 90, 1.77, 68, 33, 6],
    [74, 49, 77, 1.46, 48, 27, 7],
    [78, 55, 80, 1.29, 59, 29, 8],
    [267, 216, 280, 4.8, 108, 64, 9],
    [185, 127, 216, 2.52, 61, 27, 10],
    [39, 19, 38, 0.57, 31, 15, 11],
    [41, 11, 40, 0.43, 21, 7, 12],
    [64, 38, 74, 1.04, 46, 22, 13],
    [108, 79, 120, 1.7, 75, 41, 14],
    [108, 63, 116, 1.48, 44, 26, 15],
    [33, 6, 29, 0.34, 13, 5, 16],
    [94, 66, 110, 1.54, 62, 31, 17],
    [186, 142, 192, 3.88, 93, 79, 18],
    [57, 31, 54, 0.96, 32, 14, 19],
    [22, 8, 17, 0.48, 23, 10, 20],
    [39, 15, 36, 0.61, 29, 13, 21],
    [94, 69, 114, 2.08, 73, 39, 22],
    [99, 73, 110, 2.43, 76, 48, 23],
    [31, 12, 30, 0.5, 32, 16, 24],
    [42, 27, 43, 1, 53, 22, 25],
    [154, 117, 157, 3.05, 92, 58, 26],
    [234, 185, 230, 4.09, 123, 69, 27],
    [160, 120, 186, 2.77, 91, 50, 28],
    [134, 96, 165, 2.76, 83, 41, 29],
    [52, 24, 60, 1.03, 50, 21, 30],
    [46, 5, 49, 0.28, 10, 6, 31]
];
const dataGZ = [
    [26, 37, 27, 1.163, 27, 13, 1],
    [85, 62, 71, 1.195, 60, 8, 2],
    [78, 38, 74, 1.363, 37, 7, 3],
    [21, 21, 36, 0.634, 40, 9, 4],
    [41, 42, 46, 0.915, 81, 13, 5],
    [56, 52, 69, 1.067, 92, 16, 6],
    [64, 30, 28, 0.924, 51, 2, 7],
    [55, 48, 74, 1.236, 75, 26, 8],
    [76, 85, 113, 1.237, 114, 27, 9],
    [91, 81, 104, 1.041, 56, 40, 10],
    [84, 39, 60, 0.964, 25, 11, 11],
    [64, 51, 101, 0.862, 58, 23, 12],
    [70, 69, 120, 1.198, 65, 36, 13],
    [77, 105, 178, 2.549, 64, 16, 14],
    [109, 68, 87, 0.996, 74, 29, 15],
    [73, 68, 97, 0.905, 51, 34, 16],
    [54, 27, 47, 0.592, 53, 12, 17],
    [51, 61, 97, 0.811, 65, 19, 18],
    [91, 71, 121, 1.374, 43, 18, 19],
    [73, 102, 182, 2.787, 44, 19, 20],
    [73, 50, 76, 0.717, 31, 20, 21],
    [84, 94, 140, 2.238, 68, 18, 22],
    [93, 77, 104, 1.165, 53, 7, 23],
    [99, 130, 227, 3.97, 55, 15, 24],
    [146, 84, 139, 1.094, 40, 17, 25],
    [113, 108, 137, 1.481, 48, 15, 26],
    [81, 48, 62, 1.619, 26, 3, 27],
    [56, 48, 68, 1.336, 37, 9, 28],
    [82, 92, 174, 3.29, 0, 13, 29],
    [106, 116, 188, 3.628, 101, 16, 30],
    [118, 50, 0, 1.383, 76, 11, 31]
];
const dataSH = [
    [91, 45, 125, 0.82, 34, 23, 1],
    [65, 27, 78, 0.86, 45, 29, 2],
    [83, 60, 84, 1.09, 73, 27, 3],
    [109, 81, 121, 1.28, 68, 51, 4],
    [106, 77, 114, 1.07, 55, 51, 5],
    [109, 81, 121, 1.28, 68, 51, 6],
    [106, 77, 114, 1.07, 55, 51, 7],
    [89, 65, 78, 0.86, 51, 26, 8],
    [53, 33, 47, 0.64, 50, 17, 9],
    [80, 55, 80, 1.01, 75, 24, 10],
    [117, 81, 124, 1.03, 45, 24, 11],
    [99, 71, 142, 1.1, 62, 42, 12],
    [95, 69, 130, 1.28, 74, 50, 13],
    [116, 87, 131, 1.47, 84, 40, 14],
    [108, 80, 121, 1.3, 85, 37, 15],
    [134, 83, 167, 1.16, 57, 43, 16],
    [79, 43, 107, 1.05, 59, 37, 17],
    [71, 46, 89, 0.86, 64, 25, 18],
    [97, 71, 113, 1.17, 88, 31, 19],
    [84, 57, 91, 0.85, 55, 31, 20],
    [87, 63, 101, 0.9, 56, 41, 21],
    [104, 77, 119, 1.09, 73, 48, 22],
    [87, 62, 100, 1, 72, 28, 23],
    [168, 128, 172, 1.49, 97, 56, 24],
    [65, 45, 51, 0.74, 39, 17, 25],
    [39, 24, 38, 0.61, 47, 17, 26],
    [39, 24, 39, 0.59, 50, 19, 27],
    [93, 68, 96, 1.05, 79, 29, 28],
    [188, 143, 197, 1.66, 99, 51, 29],
    [174, 131, 174, 1.55, 108, 50, 30],
    [187, 143, 201, 1.39, 89, 53, 31]
];
const lineStyle = {
    width: 1,
    opacity: 0.5
};
const result1 = [
    { t: 'Sales', r: 4200, colorField: 'Allocated Budget' },
    { t: 'Administration', r: 3000, colorField: 'Allocated Budget' },
    { t: 'Information Technology', r: 20000, colorField: 'Allocated Budget' },
    { t: 'Customer Support', r: 35000, colorField: 'Allocated Budget' },
    { t: 'Development', r: 50000, colorField: 'Allocated Budget' },
    { t: 'Marketing', r: 18000, colorField: 'Allocated Budget' },

    { t: 'Sales', r: 5000, colorField: 'Actual Spending' },
    { t: 'Administration', r: 14000, colorField: 'Actual Spending' },
    { t: 'Information Technology', r: 28000, colorField: 'Actual Spending' },
    { t: 'Customer Support', r: 26000, colorField: 'Actual Spending' },
    { t: 'Development', r: 42000, colorField: 'Actual Spending' },
    { t: 'Marketing', r: 21000, colorField: 'Actual Spending' },
]
const result3 = (function() {
    let result = []
    for (let i = 0; i < 28; i++) {
        const list = [
            { t: 'IE8-', r: (40 - i) * 10, colorField: i + 2000 + '' },
            { t: 'IE9+', r: (38 - i) * 4 + 60, colorField: i + 2000 + '' },
            { t: 'Safari', r: i * 5 + 10, colorField: i + 2000 + '' },
            { t: 'Firefox', r: i * 9, colorField: i + 2000 + '' },
            { t: 'Chrome', r: (i * i) / 2, colorField: i + 2000 + '' },
        ]
        result = [...result, ...list]
    }
    return result
})();
const getDataList = (data) => {
    const myset = new Set(data.map(item => (item.t)))
    let list = []
    myset.forEach(item => {
        list.push({
            name: item
        })
    })
    return list
}
const getValueList = (data) => {
    let dataList = []
    const legend = new Set(data.map(item => {
        return item.colorField;
    }))
    legend.forEach(litem => {
        let list = []
        data.forEach(vitem => {
            if (vitem.colorField === litem) {
                list.push(vitem.r)
            }
        })
    
        dataList.push({
            name: litem,
            value: list
        })
    })
    return dataList
}

const radar = [
    {
        chart_id: 1501,
        config_id: 1501,
        chart_name: '基础雷达图',

        chart_img: 'radar.webp',
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

            radar: getRadar({
                indicator: getDataList(result1)
            }),

            series: [
                {
                    name: 'Budget vs spending',
                    type: 'radar',
                    data: getValueList(result1)
                }
            ]
        },
        config: [],
        source: {
            name: '基础雷达图',
            multi_source: true,  // 是否有多个数据源
            data_type: 'array',  // 数据响应类型
            content_type: 'object',  // 数据类型 单一数据时使用

            result_structure: [
				{
                    fields: 't',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'stringarray',
                    content_type: 'string',
                    name: '名称',
                    de_weight: true,
                    default: '',
                    update_type: 'replace',
                    update_fields: 'radar-indicator',
                    handle: getDataList
                },
                {
                    fields: 'r',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'numberarray',
                    content_type: 'number',
                    name: '值',
                    default: 0,
                    update_type: 'replace',
                    update_fields: 'series-0-data',
                    handle: getValueList
                },
                {
                    fields: 'colorField',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'stringarray',
                    content_type: 'string',
                    name: '图例',
                    de_weight: true,
                    default: '',
                    update_type: 'replace',
                    update_fields: 'series-0-data',
                    handle: getValueList
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

            default: [...result1]
        }
    },
    {
        chart_id: 1502,
        config_id: 1502,
        chart_name: '浏览器占比变化',

        chart_img: 'radar2.webp',
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
            legend: getLegend({
                type: 'scroll',
                bottom: 10,
                data: (function () {
                    var list = [];
                    for (var i = 1; i <= 28; i++) {
                        list.push(i + 2000 + '');
                    }
                    return list;
                })()
            }),

            visualMap: getVisualMap({
                top: 'middle',
                right: 10,
                color: ['red', 'yellow'],
                calculable: true
            }),
            radar: getRadar({
                indicator: getDataList(result3)
            }),
            series: [
                {
                    type: 'radar',
                    symbol: 'none',
                    lineStyle: {
                        width: 1
                    },
                    emphasis: {
                        areaStyle: {
                            color: 'rgba(0,250,0,0.3)'
                        }
                    },
                    data: getValueList(result3)
                }
            ]
        },
        config: [],
        source: {
            name: '浏览器占比变化',
            multi_source: true,  // 是否有多个数据源
            data_type: 'array',  // 数据响应类型
            content_type: 'object',  // 数据类型 单一数据时使用

            result_structure: [
				{
                    fields: 't',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'stringarray',
                    content_type: 'string',
                    name: '名称',
                    de_weight: true,
                    default: '',
                    update_type: 'replace',
                    update_fields: 'radar-indicator',
                    handle: getDataList
                },
                {
                    fields: 'r',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'numberarray',
                    content_type: 'number',
                    name: '值',
                    default: 0,
                    update_type: 'replace',
                    update_fields: 'series-0-data',
                    handle: getValueList
                },
                {
                    fields: 'colorField',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'stringarray',
                    content_type: 'string',
                    name: '图例',
                    de_weight: true,
                    default: '',
                    update_type: 'replace',
                    update_fields: 'series-0-data',
                    handle: getValueList
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

            default: [...result3]
        }
    },
]

export default radar
