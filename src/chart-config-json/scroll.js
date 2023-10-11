import { align } from "./shared"

const ChartList = [
    {
        config_id: 601,
        chart_id: 601,
        is_echart: false,
        component: 'dv-scroll-board',
        chart_name: '轮播表',
        chart_img: 'scroller-1.jpg',
        option: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            header: [],
            data: [
                ['行1列1', '行1列2', '行1列3', '行1列4'],
                ['行2列1', '行2列2', '行2列3', '行1列4'],
                ['行3列1', '行3列2', '行3列3', '行1列4'],
                ['行4列1', '行4列2', '行4列3', '行1列4'],
                ['行5列1', '行5列2', '行5列3', '行1列4'],
                ['行6列1', '行6列2', '行6列3', '行1列4'],
                ['行7列1', '行7列2', '行7列3', '行1列4'],
                ['行8列1', '行8列2', '行8列3', '行1列4']
            ],
            rowNum: 4,
            headerBGC: '#00BAFF',
            oddRowBGC: '#003B51',
            evenRowBGC: '#0A2732',
            waitTime: 2000,
            headerHeight: 35,
            columnWidth: [],
            align: 'left',
            index: false,
            indexHeader: '#',
            carousel: 'single',
            hoverPause: true
        },
        config: [],
        source: {
            name: '轮播表',
            // multi_source: true,  // 是否有多个数据源
            data_type: 'array',  // 数据响应类型
            content_type: 'stringarray',  // 数据类型 单一数据时使用

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
                ['行1列1', '行1列2', '行1列3', '行1列4'],
                ['行2列1', '行2列2', '行2列3', '行1列4'],
                ['行3列1', '行3列2', '行3列3', '行1列4'],
                ['行4列1', '行4列2', '行4列3', '行1列4'],
                ['行5列1', '行5列2', '行5列3', '行1列4'],
                ['行6列1', '行6列2', '行6列3', '行1列4'],
                ['行7列1', '行7列2', '行7列3', '行1列4'],
                ['行8列1', '行8列2', '行8列3', '行1列4']
            ],
            // handle: (data) => ((data))
        }
    },
    {
        config_id: 602,
        chart_id: 602,
        is_echart: false,
        component: 'dv-scroll-ranking-board',
        chart_name: '排名轮播表',
        chart_img: 'scroller-1.jpg',
        option: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            data: [
                {
                    name: '周口',
                    value: 55123
                },
                {
                    name: '南阳',
                    value: 12022
                },
                {
                    name: '西峡',
                    value: 78932
                },
                {
                    name: '驻马店',
                    value: 63411
                },
                {
                    name: '新乡',
                    value: 44231
                }
            ],
            rowNum: 5,
            waitTime: 2000,
            carousel: 'single',
            unit: '单位',
            sort: true,
            valueFormatter: ''
        },
        config: [],
        source: {
            name: '排名轮播表',
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
                    name: '周口',
                    value: 55123
                },
                {
                    name: '南阳',
                    value: 12022
                },
                {
                    name: '西峡',
                    value: 78932
                },
                {
                    name: '驻马店',
                    value: 63411
                },
                {
                    name: '新乡',
                    value: 44231
                }
            ],
            // handle: (data) => ((data))
        }
    }
]

export default ChartList
