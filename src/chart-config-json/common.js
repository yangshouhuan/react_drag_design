const common = [
    {
        chart_id: 1201,
        config_id: 1201,
        chart_name: '标题',

        chart_img: 'commom-title.jpg',
		chart_idx: 1,
		is_group: false,
		is_hide: false,
		is_lock: false,
		is_del: false,
		is_echart: false,
		x: 0,
		y: 0,
		width: 300,
		height: 140,
		rotate: 0,
		bg_color: '',
		opacity: 1,
		chart_status: true,
		create_uid: 1,
		component: 'my-title',
		create_time: '2022-12-12 15:33:30',
        map_url: '',

        option: {
            title: '标题',
            color: '#fff',
            fontSize: 24,
            fontWeight: '300',
            ellipsis: false,
            letterSpacing: 0,
            vertical: '0',   // 排序方向
            align: 'center'
        },
        config: [],
        source: {
			name: '标题',
            // multi_source: false,  // 是否有多个数据源
            data_type: 'string',  // 数据响应类型
            // content_type: 'string',  // 数据类型 单一数据时使用
        
            update_type: 'replace',  // 更新类型(替换/追加...)  单一数据时使用
            update_fields: 'title', // 更新数据属性路径  单一数据时使用
        
            source_type: 'static', // 数据来源类型
            request_url: '', // 请求地址
            request_method: 'get',  // 请求方式
        
            auto_update: false, // 是否更新
            update_time: 10,  // 更新时间
        
            source_status: true,  // 数据源状态
            fields_status: true,  // 映射字段状态
        
            filter_fun: 'return data',  // 过滤器
            auto_filter: false,  // 使用过滤器

            de_weight: false,  // 去重
            default: "标题",
            // handle: (data) => ((data))
		}
    },
    {
        chart_id: 1202,
        config_id: 1202,
        chart_name: '背景图',

        chart_img: 'commom-default-img.png',
		chart_idx: 1,
		is_group: false,
		is_hide: false,
		is_lock: false,
		is_del: false,
		is_echart: false,
		x: 0,
		y: 0,
		width: 300,
		height: 300,
		rotate: 0,
		bg_color: '',
		opacity: 1,
		chart_status: true,
		create_uid: 1,
		component: 'my-img',
		create_time: '2022-12-12 15:33:30',
        map_url: '',

        option: {
            bgimg: 'http://localhost:8088/default_img.png',
            repeat: 'no-repeat'
        },
        config: [],
        source: null
    },
    {
        chart_id: 1203,
        config_id: 1203,
        chart_name: '图标',

        chart_img: 'commom-icon.jpg',
		chart_idx: 1,
		is_group: false,
		is_hide: false,
		is_lock: false,
		is_del: false,
		is_echart: false,
		x: 0,
		y: 0,
		width: 100,
		height: 100,
		rotate: 0,
		bg_color: '',
		opacity: 1,
		chart_status: true,
		create_uid: 1,
		component: 'my-icon',
		create_time: '2022-12-12 15:33:30',
        map_url: '',

        option: {
            icon: 'FullscreenOutlined',
            fontSize: 36,
            color: '#fff'
        },
        config: [],
        source: null
    },
	{
        chart_id: 1204,
        config_id: 1204,
        chart_name: '数字翻牌器',

        chart_img: 'commom-digital-flop.jpg',
		chart_idx: 1,
		is_group: false,
		is_hide: false,
		is_lock: false,
		is_del: false,
		is_echart: false,
		x: 0,
		y: 0,
		width: 200,
		height: 100,
		rotate: 0,
		bg_color: '',
		opacity: 1,
		chart_status: true,
		create_uid: 1,
		component: 'my-digital-flop',
		create_time: '2022-12-12 15:33:30',
        map_url: '',

        option: {
			value: 1000,
            toFixed: 0,  // 小数点n位数
			prefix: '',  // 前缀
			suffix: '',   // 后缀
			title: '我是标题', // 标题
			layout: 'top', // 布局方式
			animationTime: 1000, // 动画时间
			value_style: {
				color: '#ffffff',
				fontSize: 24,
				fontWeight: 'normal',
				textAlign: 'left',
				letterSpacing: 0, // 间隔
			},
			title_style: {
				color: '#ffffff',
				fontSize: 24,
				fontWeight: 'normal',
				textAlign: 'left',
				letterSpacing: 0, // 间隔
				
				marginLeft: 0,
				marginBottom: 0,
				marginRight: 0,
				marginTop: 0
			},
			prefix_style: {
				color: '#ffffff',
				fontSize: 24,
				fontWeight: 'normal',
				marginRight: 0
			},
			suffix_style: {
				color: '#ffffff',
				fontSize: 24,
				fontWeight: 'normal',
				marginLeft: 0
			},
        },
        config: [],
        source: {
			name: '数字翻牌器',
            // multi_source: false,  // 是否有多个数据源
            data_type: 'number',  // 数据响应类型
            // content_type: 'string',  // 数据类型 单一数据时使用
        
            update_type: 'replace',  // 更新类型(替换/追加...)  单一数据时使用
            update_fields: 'value', // 更新数据属性路径  单一数据时使用
        
            source_type: 'static', // 数据来源类型
            request_url: '', // 请求地址
            request_method: 'get',  // 请求方式
        
            auto_update: false, // 是否更新
            update_time: 10,  // 更新时间
        
            source_status: true,  // 数据源状态
            fields_status: true,  // 映射字段状态
        
            filter_fun: 'return data',  // 过滤器
            auto_filter: false,  // 使用过滤器

            de_weight: false,  // 去重
            default: 1000,
            // handle: (data) => ((data))
		}
    },
	{
        chart_id: 1205,
        config_id: 1205,
        chart_name: '色块',

        chart_img: 'commom-bg-color.jpg',
		chart_idx: 1,
		is_group: false,
		is_hide: false,
		is_lock: false,
		is_del: false,
		is_echart: false,
		x: 0,
		y: 0,
		width: 300,
		height: 300,
		rotate: 0,
		bg_color: '',
		opacity: 1,
		chart_status: true,
		create_uid: 1,
		component: 'my-color-lump',
		create_time: '2022-12-12 15:33:30',
        map_url: '',

        option: {
            backgroundColor: '#319cff',
			borderColor: 'rgba(0, 0, 0, 0)',
			borderRadius: 0,
			borderWidth: 0,
			borderStyle: ''
        },
        config: [],
        source: null
    },
	{
        chart_id: 1206,
        config_id: 1206,
        chart_name: '时间器',

        chart_img: 'commom-time.jpg',
		chart_idx: 1,
		is_group: false,
		is_hide: false,
		is_lock: false,
		is_del: false,
		is_echart: false,
		x: 0,
		y: 0,
		width: 300,
		height: 100,
		rotate: 0,
		bg_color: '',
		opacity: 1,
		chart_status: true,
		create_uid: 1,
		component: 'my-date-time',
		create_time: '2022-12-12 15:33:30',
        map_url: '',

        option: {
			format: '{y}-{m}-{d} {h}:{i}:{s}',
			interval: 1000,
			style: {
				color: '#fff',
				fontSize: 12,
				fontWeight: 'normal',
				textAlign: 'center'
			}
        },
        config: [],
        source: null
    },
	{
        chart_id: 1207,
        config_id: 1207,
        chart_name: '进度条',

        chart_img: 'commom-progress-bar.jpg',
		chart_idx: 1,
		is_group: false,
		is_hide: false,
		is_lock: false,
		is_del: false,
		is_echart: false,
		x: 0,
		y: 0,
		width: 300,
		height: 100,
		rotate: 0,
		bg_color: '',
		opacity: 1,
		chart_status: true,
		create_uid: 1,
		component: 'my-progress-bar',
		create_time: '2022-12-12 15:33:30',
        map_url: '',

        option: {
			bg_color: '#999999',
			progress_color: '#00ffff',
			unit: '',
			value: 80,
			total: 100,
			layout: 'right',
			height: 10,
			value_style: {
				fontSize: 22,
				fontWeight: 'normal',
				marginLeft: 0,
				marginBottom: 0,
				marginRight: 0,
				marginTop: 0,
				color: '#ffffff'
			},
			unit_style: {
				fontSize: 22,
				fontWeight: 'normal',
				marginLeft: 0,
				marginRight: 0,
				color: '#ffffff'
			}
		},
        config: [],
        source: {
			name: '进度条',
            multi_source: true,  // 是否有多个数据源
            data_type: 'object',  // 数据响应类型
            // content_type: 'object',  // 数据类型 单一数据时使用
			result_structure: [
				{
                    fields: 'value',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'number',
                    name: '值',
                    default: 80,
                    update_fields: 'value',
                },
				{
                    fields: 'total',
                    map_fields: '',
                    status: true,
                    require: false,
                    data_type: 'number',
                    name: '总数',
                    default: 100,
                    update_fields: 'total',
                },
			],
            source_type: 'static', // 数据来源类型
            request_url: '', // 请求地址
            request_method: 'get',  // 请求方式
        
            auto_update: false, // 是否更新
            update_time: 10,  // 更新时间
        
            source_status: true,  // 数据源状态
            fields_status: true,  // 映射字段状态
        
            filter_fun: 'return data',  // 过滤器
            auto_filter: false,  // 使用过滤器

            default: {
				value: 80,
				total: 100
			},
            // handle: (data) => ((data))
		}
    },
]

export default common
