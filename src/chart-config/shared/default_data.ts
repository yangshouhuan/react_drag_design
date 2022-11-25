import { ChartType } from "types/chart"

// id
let chartCount = 0
export const getNewChartId = () => Date.now() + (chartCount++)

// 默认源数据属性值
export const defaultSource = () => {
	return {
		father_id: 0,
		source_type: 'static',
		request_type: 'get',
		api_url: '',
		sql_sentence: '',
		auto_update: false,
		update_time: 10,
		source_status: true,
		field_status: true,
		auth_filter: false,
		filter_fun: 'return data'
	}
}

// 默认分组值
export const defaultGroup = (ids: number[]): ChartType => {
	return {
		component: 'group',
		id: getNewChartId(),   		// 唯一id
		father_ids: ids, 				// 分组父id
		option_id: '0|0',            // 选项设置id
		name: '分组',          		// 图层名字
		is_hide: false,       		// 是否显示
		is_del: false,        		// 是否删除
		is_lock: false,       		// 是否锁定
		opacity: 1,             	// 透明度
		transform: 0,           	// 旋转度
		idx: 0,                 	// 顺序
		x: 0,   					// 偏移量、宽高
		y: 0,
		width: 0,
		height: 0,
		is_group: true,            	// 是否分组
		config: {},                	// 基本配置
		children: []
	}
}