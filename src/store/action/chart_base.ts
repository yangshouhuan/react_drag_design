import * as T from '../constants'
import { createAction } from "redux-actions"
import {
	getActiveChart,
	getCreateChartByCid,
	moveChart,
	loopGetData,
	loopGetLastData,
	loopGetNextData,
	updateBaseConfig,
	loopGetLastAndNextData,
	getChartDataByIds,
	resetChartId
} from "store/core/chart"
import { ActionEnumType, ActionType, ChartType } from 'types/chart'
import { isArray, parseTime } from 'utils/validate'
import { deepClone, isObject } from 'utils/shared'

import { backupsChart, doSaveAction } from './shortcut_key'
import { defaultChart } from 'chart-config-json/shared/default_data'
import { getDesignData } from 'api/design_api'

// 设置看板id
export const setKanBanId = (kid: string) => {
	return (dispatch: Function) => {
		dispatch(getChartDataByKid(kid))
		dispatch(createAction(T.SOCKET_KANBAN_Id)(kid))
	}
}
// 设置可视界面
export const setScreen = createAction(T.CHART_SCREEN)
// 行为组件位置
export const doActionStyle = createAction(T.ACTION_STYLE)
// 设置缩放
export const doCanvasScale = createAction(T.CHART_CANVAS_SCALE)

// 获取当前看板数据
export const getChartDataByKid = (kid: string) =>{
	return (dispatch: Function) => {
		getDesignData(kid)
		.then((res: any) => {
			if (res.status) {
				dispatch(createAction(T.CHART_DATA)(res.data))
			} else {
				console.log('请求错误')
			}
		})
	}
}

// 更新激活项
export const doChangeActiveById = (cid: number) => {
	return (dispatch: Function, getState: Function) => {
		const { chartData, expandedKeys, activeChart, activeId } = getState().chart
		if (cid) {
			if (cid !== activeId) {
				const { chart, cids } = getActiveChart(chartData, cid)
				dispatch(createAction(T.CHART_ACTIVE_ID)({
					activeChart: chart,
					activeId: cid
				}))
				// 设置打开分组
				const keys = Array.from(new Set([...expandedKeys, ...cids]))
				dispatch(createAction(T.CHART_EXPANDED_KEYS)(keys))
			} else if (activeChart.is_group) {
				// 设置打开分组
				const index = expandedKeys.indexOf(cid)
				if (index !== -1) {
					expandedKeys.splice(index, 1)
				} else {
					expandedKeys.push(cid)
				}
				dispatch(createAction(T.CHART_EXPANDED_KEYS)([...expandedKeys]))
			}
		} else {
			dispatch(createAction(T.CHART_DEFAULT_CHART)())
		}
	}
}

// 修改基本属性值
export const doBaseConfig = (value: any) => {
	return (dispatch: Function, getState: Function) => {
		const { activeId, activeChart, expandedKeys } = getState().chart
		const data = updateBaseConfig(activeChart, value, activeId, expandedKeys)
		
		dispatch(createAction(T.CHART_SET_BASE_CONFIG)(data))
		if (!data.activeId) {
			dispatch(createAction(T.CHART_DEFAULT_CHART)())
		}
	}
}

// 修改主要配置值
export const doImportantConfig = ({ fields, value } : { fields: string, value: any }) => {
	return (dispatch: Function, getState: Function) => {
		const { activeChart } = getState().chart
		let data = activeChart.option
        const arr = fields.trim().split('-')
        const lastFields = arr[arr.length - 1]
        arr.slice(0, arr.length - 1).map((item: string) => {
            data = item && item.length > 0 ? data[item] : data
        })
		// 浅拷贝一下
		if (isArray(value)) {
			value = [...value]
		} else if (isObject(value)) {
			value = {...value}
		}
		
		data[lastFields] = value
		activeChart.option = Object.assign({}, activeChart.option)
		dispatch(createAction(T.CHART_SET_IMPORTANT_CONFIG)())
	}
}


// 移动图层
export const doMoveDispose = (value: any) => {
	return (dispatch: Function, getState: Function) => {
		const { chartData } = getState().chart
        const data = moveChart({...value, chartData})
		
		dispatch(createAction(T.CHART_DATA)(data))
	}
}

// 拖拽移动图层
export const doDropMoveAction = (value: any) => {
	return (dispatch: Function) => {
		dispatch(doMoveDispose(value))

		// 保存行为
		const action: ActionType = {
			type: ActionEnumType.DRAG_MOVE_CHART,
			currentActiveId: value.dragKey,
			activeId: 0,
			next: null,
			last: null,
			newvalue: value,
			oldvalue: {}
		}
		doSaveAction(action)
	}
}

// 上一层
export const doUpperLayer = (key: number, isKey?: boolean) => {
	return (dispatch: Function, getState: Function) => {
		const { chartData } = getState().chart

		loopGetLastData(chartData, key)
		.then((chart: ChartType | null, lastChart: ChartType | null, data: ChartType[], index: number) => {
			if (lastChart && chart && chart.chart_id !== lastChart.chart_id) {
				data.splice(index, 0, chart)
				dispatch(createAction(T.CHART_DATA)([...chartData]))

				// 保存行为
				!isKey && doSaveAction({
					type: ActionEnumType.UP,
					currentActiveId: key,
					activeId: 0,
					next: null,
					last: null,
					newvalue: {
						dragKey: key,
						dropKey: lastChart.chart_id
					},
					oldvalue: {}
				})
			}
		})
	}
}

// 下一层
export const doNextLayer = (key: number, isKey?: boolean) => {
	return (dispatch: Function, getState: Function) => {
		const { chartData } = getState().chart

		loopGetNextData(chartData, key)
		.then((chart: ChartType | null, nextChart: ChartType | null, data: ChartType[], index: number) => {
			if (nextChart && chart && chart.chart_id !== nextChart.chart_id) {
				data.splice(index + 1, 0, chart)
				dispatch(createAction(T.CHART_DATA)([...chartData]))

				// 保存行为
				!isKey && doSaveAction({
					type: ActionEnumType.DOWN,
					currentActiveId: key,
					activeId: 0,
					next: null,
					last: null,
					newvalue: {
						dragKey: key,
						dropKey: nextChart.chart_id
					},
					oldvalue: {}
				})
			}
		})
	}
}

// 置顶
export const doToTop = (key: number, isKey?: boolean) => {
	return (dispatch: Function, getState: Function) => {
		const { chartData } = getState().chart
		const firstKey = chartData[0].chart_id
		
		loopGetLastAndNextData(chartData, key)
		.then((chart: ChartType | null, data: ChartType[], index: number, lastChart: ChartType | null, nextChart: ChartType | null) => {
			if (chart && firstKey !== chart.chart_id) {
				const spliceChart = data.splice(index, 1)[0]
				chartData.unshift(spliceChart)
				dispatch(createAction(T.CHART_DATA)([...chartData]))

				!isKey && doSaveAction({
					type: ActionEnumType.TOP,
					currentActiveId: key,
					activeId: 0,
					next: null,
					last: null,
					newvalue: {
						dragKey: key,
						dropKey: lastChart ? lastChart.chart_id : nextChart?.chart_id,
						dropPosition: lastChart ? 1 : -1
					},
					oldvalue: {}
				})
			}
		})
	}
}

// 置底
export const doToBottom = (key: number, isKey?: boolean) => {
	return (dispatch: Function, getState: Function) => {
		const { chartData } = getState().chart
		const lastkey = chartData[chartData.length - 1].chart_id
		
		loopGetLastAndNextData(chartData, key)
		.then((chart: ChartType | null, data: ChartType[], index: number, lastChart: ChartType | null, nextChart: ChartType | null) => {
			if (chart && lastkey !== chart.chart_id) {
				const spliceChart = data.splice(index, 1)[0]
				chartData.push(spliceChart)
				dispatch(createAction(T.CHART_DATA)([...chartData]))

				!isKey && doSaveAction({
					type: ActionEnumType.BOTTOM,
					currentActiveId: key,
					activeId: 0,
					next: null,
					last: null,
					newvalue: {
						dragKey: key,
						dropKey: lastChart ? lastChart.chart_id : nextChart?.chart_id,
						dropPosition: lastChart ? 1 : -1
					},
					oldvalue: {}
				})
			}
		})
	}
}

// 成为分组
export const doBecomeGroup = (cids: number[]) => {
	return (dispatch: Function, getState: Function) => {
		const { activeId } = getState().chart
		const group = defaultChart(true)
		dispatch(doAddGroupNoEdit(group, cids))

		// 保存行为
		const action: ActionType = {
			type: ActionEnumType.BECOME_GROUP,
			currentActiveId: activeId,
			activeId: group.chart_id,
			next: null,
			last: null,
			newvalue: {
				cids
			},
			oldvalue: {}
		}
		doSaveAction(action)
	}
}

// 直接成为分组
export const doAddGroupNoEdit = (group: ChartType, ids: number[]) => {
	return (dispatch: Function, getState: Function) => {
		const { chartData, expandedKeys } = getState().chart
		const id = ids[0]

		loopGetData(chartData, id)
		.then((chart: ChartType | null, data: ChartType[], index: number) => {
			if (chart) {
				const list = getChartDataByIds(data, ids)
				data.splice(index, 0, group)
				group.children = list
				dispatch(createAction(T.CHART_ADD_CHART)())

				// 打开分组
				const keyIndex = expandedKeys.indexOf(group.chart_id)
				if (keyIndex === -1) {
					dispatch(createAction(T.CHART_EXPANDED_KEYS)([...expandedKeys, group.chart_id]))
				}
			}
		})
	}
}

// 直接解散分组
export const doDisbandGroupNoEdit = (gid: number, isKey?: boolean) => {
	return (dispatch: Function, getState: Function) => {
		const { chartData, expandedKeys } = getState().chart

		loopGetData(chartData, gid)
		.then((chart: ChartType | null, data: ChartType[], index: number) => {
			if (chart) {
				// 删除分组
				const parent = data.splice(index, 1)[0]
				data.splice(index, 0, ...(parent.children || []))
				dispatch(createAction(T.CHART_ADD_CHART)())
				const cids = parent.children?.map((item: ChartType) => {
					return item.chart_id
				})

				// 删除打开分组id
				const keyIndex = expandedKeys.indexOf(gid)
				if (keyIndex !== -1) {
					expandedKeys.splice(keyIndex, 1)
				}
				dispatch(createAction(T.CHART_EXPANDED_KEYS)([...expandedKeys]))

				// 备份
				backupsChart.push({...parent, children: []})
				!isKey && doSaveAction({
					type: ActionEnumType.DISBAND_GROUP,
					currentActiveId: gid,
					activeId: gid,
					next: null,
					last: null,
					newvalue: {
						cids
					},
					oldvalue: {}
				})
			}
		})
	}
}

// 直接添加图层
export const doAddChartNoEdit = (chart: ChartType) => {
	return (dispatch: Function, getState: Function) => {
		let { chartData } = getState().chart
		// chartData.unshift(chart)
		chartData.push(chart)
		dispatch(createAction(T.CHART_ADD_CHART)())
	}
}

// 添加图层
export const doAddChart = ({
	cid,
	xy = { x: 0, y: 0}
} : {
	cid: number,
	xy?: any
}) => {
	return (dispatch: Function, getState: Function) => {
		let { chartData, activeId } = getState().chart
		const chart = getCreateChartByCid(cid, xy)

		if (chart) {
			chartData.push(chart)
			dispatch(createAction(T.CHART_ADD_CHART)())
			// 历史行为处理
			const action: ActionType = {
				type: ActionEnumType.ADD,
				currentActiveId: activeId,
				activeId: chart.chart_id,
				next: null,
				last: null,
				newvalue: {},
				oldvalue: {}
			}
			doSaveAction(action)
		}
	}
}

// 根据数据源修改数据
export const doChartOptionBySource = (chart: ChartType) => {
	return (dispatch: Function, getState: Function) => {
		let { chartData, activeId } = getState().chart

		const source = chart.source
		if (source) {
			let {
				default: defaultValue,
				multi_source,
				result_structure,
				handle,
				update_fields
			} = source
			handle = handle ? handle : (data: any) => (data)
			defaultValue = handle(defaultValue)

			if (multi_source) {
				result_structure?.forEach((item: any) => {
					const itemHandle = item.handle ? item.handle : (data: any) => (data)
					const arr = item.update_fields.split('-') || []
					const lastFields = arr.splice(arr.length - 1, 1)[0]
					let option = chart.option
					arr.forEach((fields: string) => {
						option = option[fields]
					})
					option[lastFields] = itemHandle(defaultValue)
				})
			} else {
				const arr = update_fields.split('-') || []
				const lastFields = arr.splice(arr.length - 1, 1)[0]
				let option = chart.option
				arr.forEach((fields: string) => {
					option = option[fields]
				})
				
				option[lastFields] = defaultValue
			}
		}
		chartData.push(chart)
		dispatch(createAction(T.CHART_ADD_CHART)())
	}
}

// 拷贝保存图层
export const doCopyChart = () => {
    return (dispatch: Function, getState: Function) => {
        const { activeChart } = getState().chart
		const chart = deepClone(activeChart)
        dispatch(createAction(T.CHART_COPY_KEY)(chart))
    }
}

// 复制图层
export const doChartCopy = () => {
	return (dispatch: Function, getState: Function) => {
		const { chartData, activeId } = getState().chart

		loopGetData(chartData, activeId)
		.then((chart: ChartType | null, data: ChartType[], index: number) => {
			if (chart) {
				const copychart = resetChartId(deepClone(chart))
				data.splice(index + 1, 0, copychart)
				dispatch(createAction(T.CHART_ADD_CHART)())

				// 历史行为处理
				const action: ActionType = {
					type: ActionEnumType.COPY,
					currentActiveId: activeId,
					activeId: copychart.chart_id,
					next: null,
					last: null,
					newvalue: {
						index: index
					},
					oldvalue: {}
				}
				doSaveAction(action)
			}
		})
	}
}

// 粘贴拷贝的图层
export const doPasteChart = () => {
    return (dispatch: Function, getState: Function) => {
        const { chartData, copyChart, activeId } = getState().chart

		loopGetData(chartData, copyChart.chart_id)
		.then((chart: ChartType | null, data: ChartType[], index: number) => {
			if (chart) {
				const pasteChart = deepClone(chart)
				pasteChart.x = copyChart.x + 40
				pasteChart.y = copyChart.y + 40
				pasteChart.chart_id = Date.now()
				data.splice(index + 1, 0, pasteChart)

				dispatch(createAction(T.CHART_ADD_CHART)())
				// 历史行为处理
				const action: ActionType = {
					type: ActionEnumType.PASTE,
					currentActiveId: activeId,
					activeId: pasteChart.chart_id,
					next: null,
					last: null,
					newvalue: {
						index: index
					},
					oldvalue: {}
				}
				doSaveAction(action)
			}
		})
    }
}

// 恢复删除图层
export const doRecoverChart = (value: any) => {
	return (dispatch: Function) => {
		value.forEach((chart: ChartType) => {
			chart.is_del = false
		})
		dispatch(createAction(T.CHART_RECOVER_CHART)())
	}
}

// 彻底删除图层
export const doDeleteChart = (list: any, iskey?: boolean) => {
	return (dispatch: Function, getState: Function) => {
		const { chartData } = getState().chart
		
		list.forEach((id: number) => {
			loopGetData(chartData, id)
			.then((chart: ChartType | null, data: ChartType[], index: number) => {
				if (chart) {
					iskey && backupsChart.push(data[index])
					data.splice(index, 1)
				}
			})
		})
		
		dispatch(createAction(T.CHART_DELETE_CHART)([...chartData]))
	}
}

// 设置全局看板样式
export const doCanvasStyle = (value: any) => {
	return (dispatch: Function, getState: Function) => {
		const { canvasChart } = getState().chart
		const { type } = value

		// 根据行为类型处理
		switch (type) {
			// 背景颜色
			case ActionEnumType.BG_COLOR:
				canvasChart.bg_color = value.bg_color
				break
			// 宽高
			case ActionEnumType.WH:
				canvasChart.width = value.width
				canvasChart.height = value.height
				break
			case ActionEnumType.XY:
				canvasChart.x = value.x
				canvasChart.y = value.y
				break
			case ActionEnumType.OPACITY:
				canvasChart.opacity = value.opacity
				break
			case ActionEnumType.REPEAT:
				canvasChart.option.repeatType = value.repeatType
				break
			default:
				break
		}
		dispatch(createAction(T.CHART_CANVAS_STYLE)({...canvasChart}))
	}
}

// 行为管理
export const doChartActionManage = (value: any) => {
	return (dispatch: Function, getState: Function) => {
		const { activeChart, activeId } = getState().chart
		const { type } = value
		let oldvalue = {}

		// 根据行为类型处理
		switch (type) {
			// 添加图层
			case ActionEnumType.ADD:
				return dispatch(doAddChart(value))
			// 上一层
			case ActionEnumType.UP:
				return dispatch(doUpperLayer(activeId))
			// 下一层
			case ActionEnumType.DOWN:
				return dispatch(doNextLayer(activeId))
			// 置底、置顶
			case ActionEnumType.TOP:
				return dispatch(doToTop(activeId))
			case ActionEnumType.BOTTOM:
				return dispatch(doToBottom(activeId))
			// 复制
			case ActionEnumType.COPY:
				return dispatch(doChartCopy())
			// 粘贴
			case ActionEnumType.PASTE:
				return dispatch(doPasteChart())
			// 成为分组
			case ActionEnumType.BECOME_GROUP:
				return dispatch(doBecomeGroup([activeId]))
			// 解散分组
			case ActionEnumType.DISBAND_GROUP:
				return dispatch(doDisbandGroupNoEdit(activeId))
			// 位置
			case ActionEnumType.XY:
				oldvalue = {
					x: activeChart.x,
					y: activeChart.y
				}
				dispatch(doBaseConfig(value))
				break
			// 图层名称
			case ActionEnumType.CHART_NAME:
				oldvalue = {
					name: activeChart.chart_name
				}
				dispatch(doBaseConfig(value))
				break
			// 背景颜色
			case ActionEnumType.BG_COLOR:
				oldvalue = {
					bg_color: activeChart.bg_color
				}
				dispatch(doBaseConfig(value))
				break
			// 宽高
			case ActionEnumType.WH:
				oldvalue = {
					width: activeChart.width,
					height: activeChart.height
				}
				dispatch(doBaseConfig(value))
				break
			// 旋转
			case ActionEnumType.ROTATE:
				oldvalue = {
					rotate: activeChart.rotate
				}
				dispatch(doBaseConfig(value))
				break
			// 删除
			case ActionEnumType.DEL:
				value.is_del = !activeChart.is_del
				oldvalue = {
					is_del: activeChart.is_del
				}
				dispatch(doBaseConfig({
					type,
					is_del: !activeChart.is_del,
					del_date: parseTime(new Date())
				}))
				break
			// 显示
			case ActionEnumType.SHOW:
				oldvalue = {
					is_hide: activeChart.is_hide
				}
				dispatch(doBaseConfig({ type, is_hide: !activeChart.is_hide }))
				break
			// 锁定
			case ActionEnumType.LOCK:
				oldvalue = {
					is_lock: activeChart.is_lock
				}
				dispatch(doBaseConfig({ type, is_lock: !activeChart.is_lock }))
				break
			// 透明度
			case ActionEnumType.OPACITY:
				oldvalue = {
					opacity: activeChart.opacity
				}
				dispatch(doBaseConfig(value))
				break
			default:
				break
		}

		// 历史行为处理
		const action: ActionType = {
			type,
			currentActiveId: activeId,
			activeId: getState().chart.activeId,
			next: null,
			last: null,
			newvalue: value,
			oldvalue
		}
		doSaveAction(action)
	}
}

