import { ActionEnumType, ChartType } from "types/chart"
import { deepClone } from "utils/shared"
import config_group from 'chart-config-json'
import { defaultChart } from "chart-config-json/shared/default_data"
import { isString } from "utils/validate"

// 根据fields获取option
export const getOptionByFidles = (data: any, fields: any) => {
    if (!isString(fields) || fields.length === 0) {
        return data
    }
    const arr = fields.trim().split('-')
    arr.map((item: any) => {
        data = (isString(item) && item.length > 0) ? data[item] : data
    })
    return data
}

// 计算缩放
export const calculateScale = (sw: number, sh: number, width: number, height: number): number => {
	let scale = 1

	// 用宽高比小的一方计算, 保证面板全部显示
	if (sw - 605 > (sh * (width / height)) - 200) {
		scale = Number(((sh - 200) / height).toFixed(6))
	} else {
		scale = Number(((sw - 605) / width).toFixed(6))
	}

	return scale < 0.2 ? 0.2 : scale
}

export const resetChartId = (chart: ChartType, index = 1) : ChartType => {

    chart.x = chart.x + 40
    chart.y = chart.y + 40
    chart.chart_id = Date.now() + index

    chart.children?.map((item: ChartType) => {
        index++
        return resetChartId(item, index)
    })

    return chart
}

/**
 * 获取激活项图层
 * @param data 
 * @param cid 
 * @returns 
 */
export const getActiveChart = (data: ChartType[], cid: number) : any => {
    let chart: ChartType | null = null
    let cids: number[] = []

    const loop = (data: ChartType[], cid: number, ids: number[]) => {
        for (let i = 0; i < data.length; i++) {
            const item = data[i]
            if (item.chart_id === cid) {
                chart = item
                cids = ids
                break
            }
            loop(item.children || [], cid, [...ids, item.chart_id])
            if (chart) break
        }
    }
    loop(data, cid, [])

    return { chart, cids }
}

/**
 * 获取当前 chart和parent
 * @param data 
 * @param key 
 * @returns 
 */
export const loopGetData = (data: ChartType[], key: number) => {
    let chart: any = null  // 当前 chart
    let currentdata: any = []  
    let index = 0

    const loop = (data: ChartType[], key: number) => {
        for (let i = 0; i < data.length; i++) {
            const item = data[i]
            if (item.chart_id === key) {
                chart = item
                currentdata = data
                index = i
                break
            }

            !chart && loop(item.children || [], key)

            if (chart) break
        }
    }
    loop(data, key)

    return {
        then: (cb: Function) => cb(chart, currentdata, index)
    }
}

/**
 * 获取上一个 chart 和parent
 * @param data 
 * @param key 
 * @returns 
 */
export const loopGetLastData = (data: ChartType[], key: number) => {
    let chart: any = null  // 当前 chart
    let lastChart: any = null  // 上一个chart
    let lastdata: any = []  
    let index = 0

    const loop = (data: ChartType[], key: number) => {
        for (let i = 0; i < data.length; i++) {
            const item = data[i]
            if (item.chart_id === key) {
                chart = data.splice(i, 1)[0]
                i--
                break
            }
            if (!chart) {
                lastdata = data
                index = i
                lastChart = item
            }

            !chart && loop(item.children || [], key)

            if (chart) break
        }
    }
    loop(data, key)

    return {
        then: (cb: Function) => cb(chart, lastChart, lastdata, index)
    }
}


/**
 * 获取下一个 chart 和parent
 * @param data 
 * @param key 
 * @returns 
 */
export const loopGetNextData = (data: ChartType[], key: number) => {
    let chart: any = null  // 当前 chart
    let nextChart: any = null  // 下一个chart
    let nextdata: any = []  
    let index = 0

    const loop = (data: ChartType[], key: number) => {
        for (let i = 0; i < data.length; i++) {
            const item = data[i]
            if (item.chart_id === key) {
                chart = data.splice(i, 1)[0]
                i--
                continue
            }
            if (chart) {
                nextChart = item
                nextdata = data
                index = i
                break
            }

            !nextChart && loop(item.children || [], key)

            if (nextChart) break
        }
    }
    loop(data, key)

    return {
        then: (cb: Function) => cb(chart, nextChart, nextdata, index)
    }
}

/**
 * 上一层和下一层的chart
 * @param data 
 * @param key 
 * @returns 
 */
export const loopGetLastAndNextData = (data: ChartType[], key: number) => {
    let currentdata: ChartType[] = data
    let index = 0
    let chart: any = null  // 当前 chart
    let lastChart: any = null  // 上一个chart
    let nextChart: any = null  // 下一个chart

    const loop = (data: ChartType[], key: number) => {
        for (let i = 0; i < data.length; i++) {
            const item = data[i]
            if (item.chart_id === key) {
                chart = item
                currentdata = data
                index = i
                continue
            }
            if (chart) {
                nextChart = item
            } else if (!chart) {
                lastChart = item
            }
            if (!chart || !nextChart) {
                // 再加一个group是否打开判断
                loop(item.children || [], key)
            } else {
                break
            }
        }
    }
    loop(data, key)

    return {
        then: (cb: Function) => cb(chart, currentdata, index, lastChart, nextChart)
    }
}

/**
 * 获取所有匹配id的chart，并且从原对象中删除
 * @param data 
 * @param ids 
 * @returns 
 */
export const getChartDataByIds = (data: ChartType[], ids: number[]) => {
    let list: ChartType[] = []

    const loop = (data: ChartType[], ids: number[]) => {
        for (let i = 0; i < data.length; i++) {
            const chart = data[i]
            if (ids.includes(chart.chart_id)) {
                list.push(data.splice(i, 1)[0])
                i--
            }
            loop(chart.children || [], ids)

            if (list.length === ids.length) break
        }
    }
    loop(data, ids)

    return list
}

/**
 * 修改基本配置
 * @param chart 
 * @param value 
 * @param activeId 
 * @param selectKeys 
 * @returns 
 */
export const updateBaseConfig = (chart: ChartType, value: Record<string, any>, activeId: number | null, selectKeys: string[]): Record<string, any> => {

    switch (value.type) {
        case ActionEnumType.CHART_NAME:
            chart.chart_name = value.name
            break
        case ActionEnumType.WH:
            chart.width = parseInt(value.width)
            chart.height = parseInt(value.height)
            break
        case ActionEnumType.XY:
            chart.x = parseInt(value.x)
            chart.y = parseInt(value.y)
            break
        case ActionEnumType.OPACITY:
            chart.opacity = value.opacity
            break
        case ActionEnumType.ROTATE:
            chart.rotate = parseInt(value.rotate)
            break
        case ActionEnumType.SHOW:
            chart.is_hide = value.is_hide
            if (chart.is_hide) {
                const showIndex = selectKeys.indexOf((activeId as number).toString())
                if (showIndex !== -1) {
                    selectKeys.splice(showIndex, 1)
                }
                activeId = 0
            }
            break
        case ActionEnumType.DEL:
            chart.is_del = value.is_del
            if (value.is_del) {
                // 删除时间
                chart.del_time = value.del_date
                const delIndex = selectKeys.indexOf((activeId as number).toString())
                if (delIndex !== -1) {
                    selectKeys.splice(delIndex, 1)
                }
                activeId = 0
            }
            break
        case ActionEnumType.BG_COLOR:
            chart.bg_color = value.bg_color
            break
        case ActionEnumType.UP:
        case ActionEnumType.DOWN:
            break
        case ActionEnumType.TOP:
        case ActionEnumType.BOTTOM:
            break
        case ActionEnumType.LOCK:
            chart.is_lock = value.is_lock
            break
        default:
            break
    }

    return {
        selectKeys,
        activeId,
        activeChart: chart
    }
}

/**
 * 创建一个图层
 * @param param0 
 * @returns 
 */
export const getCreateChartByCid = (cid: number, xy = { x: 0, y: 0}) => {
	let chart: ChartType | null = null
	for (let i = 0; i < config_group.length; i++) {
		const list = config_group[i].list || []
		for (let j = 0; j < list.length; j++) {
			const item = list[j] as ChartType
			if (item.chart_id === cid) {
				chart = deepClone(Object.assign(defaultChart(), item)) as ChartType
                chart.x = xy.x
                chart.y = xy.y
                chart.chart_id = new Date().getTime()
				break
			}
		}
		if (chart) break
	}

	return chart
}

/**
 * 拖拽移动图层
 * @param param
 * @returns 
 */
export const moveChart = ({
	dropKey,
	dragKey,
	dropPosition = 1,  // 1 向下添加, -1向上添加
    dropToGap = true,
    children = [],
    expanded = true,
	chartData
} : {
	dropKey: number | string
	dragKey: number | string
	dropPosition?: number
    dropToGap?: boolean
    children?: any
    expanded?: any
	chartData: ChartType[]
}) : ChartType[] => {

	const loop = (
		data: any,
		key: React.Key,
		callback: (node: any, i: number, data: any) => void,
	) => {
		for (let i = 0; i < data.length; i++) {
			if (data[i].chart_id === key) {
				return callback(data[i], i, data);
			}
			if (data[i].children) {
				loop(data[i].children!, key, callback);
			}
		}
	};

	let dragObj: any;
	loop(chartData, dragKey, (item, index, arr) => {
		arr.splice(index, 1);
		dragObj = item;
	});

	if (!dropToGap) {
		loop(chartData, dropKey, (item) => {
			item.children = item.children || [];
			item.children.unshift(dragObj);
		});
	} else if (children.length > 0 && expanded && dropPosition === 1) {
		loop(chartData, dropKey, (item) => {
			item.children = item.children || [];
			item.children.unshift(dragObj);
		});
	} else {
		let ar: any = [];
		let i: number;
		loop(chartData, dropKey, (_item, index, arr) => {
			ar = arr;
			i = index;
		});
		if (dropPosition === -1) {
			ar.splice(i!, 0, dragObj!);
		} else {
			ar.splice(i! + 1, 0, dragObj!);
		}
	}

	return [...chartData]
}