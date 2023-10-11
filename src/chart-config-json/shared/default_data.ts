import { ChartType } from "types/chart"

// 默认分组值
export const defaultChart = (is_group = false): ChartType => {
	return {
		config_id: 0,
        chart_id: Date.now(),
        chart_name: is_group ? '分组名称' : '',
        chart_idx: 1,
        chart_img: '',
        chart_status: true,
        component: is_group ? 'group' : '',
        create_time: '2022-12-12 15:33:30',
        is_group: is_group,
        is_hide: false,
        is_lock: false,
        is_del: false,
        is_echart: true,
        create_uid: 0,
        x: 0,
        y: 0,
        width: 300,
        height: 300,
        rotate: 0,
        bg_color: '',
        opacity: 1,
		children: [],
        config: [],
        option: {},
        map_url: ''
	}
}