import * as T from '../constants'
import { createAction } from "redux-actions"
import {
	getMoveStartEndParent,
	getNextLayerParent,
	getUpLayerParent,
	loopGetParent,
	loopResetFatherIds,
	resetsOpenIds,
	updateBaseConfig,
	updateImportantConfig
} from "store/core/chart"
import { getActiveChart } from "store/core/getters"
import { ChartType } from 'types/chart'
import { parseTime } from 'utils/validate'
import { defaultGroup, defaultSource, getNewChartId } from '../../chart-config/shared/default_data'
import { doActionVisible } from './visible'

// 设置看板id
export const setKanBanId = createAction(T.SOCKET_KANBAN_Id)
// 设置打开分组
export const setGroupIds = createAction(T.CHART_GROUP_IDS)
// 设置可视界面
export const setScreen = createAction(T.CHART_SCREEN)
// 更新激活项
export const doChartActiveId = (id: any) => {
	return (dispatch: Function, getState: Function) => {
		if (id) {
			const state = getState()
			const { chartData, activeId, openGroupIds } = state.chart
			if (id !== activeId) {
				const chart = getActiveChart(chartData, id)
				const openIds = resetsOpenIds(openGroupIds, chart?.father_ids || [])
				dispatch(setGroupIds(openIds))
				dispatch(createAction(T.CHART_ACTIVE_ID)({
					activeChart: chart,
					activeId: id
				}))
			}
		} else {
			dispatch(createAction(T.CHART_ACTIVE_ID)({
				activeChart: null,
				activeId: null
			}))
		}
	}
}

// 修改基本属性值
export const doBaseConfig = (value: any) => {
	return (dispatch: Function, getState: Function) => {
		const { chartData, activeId, openGroupIds } = getState().chart
		const chart = getActiveChart(chartData, activeId)
		const newData = updateBaseConfig(chart as ChartType, value, activeId, openGroupIds)

		dispatch(createAction(T.CHART_SET_BASE_CONFIG)({
			chartData: [...chartData],
			...newData
		}))
	}
}

// 修改主要配置值
export const doImportantConfig = (value: any) => {
	return (dispatch: Function, getState: Function) => {
		const state = getState()
		const { chartData, activeId } = state.chart
		const chart = getActiveChart(chartData, activeId)
		chart && updateImportantConfig(chart, value)

		dispatch(createAction(T.CHART_SET_IMPORTANT_CONFIG)({
			chartData: [...chartData],
			activeChart: Object.assign({}, chart)
		}))
	}
}

// 图层拖拽排序
export const doMoveDispose = (value: any) => {
	return (dispatch: Function, getState: Function) => {
		const { startKey, endKey } = value
		const { chartData } = getState().chart
		let { targetParentChildren, targetIndex, startParentChildren, startIndex, direction } = getMoveStartEndParent(chartData, startKey, endKey);

		if (targetParentChildren) {
			dispatch(doMoveChartLayer({
				targetParentChildren,
				targetIndex,
				startParentChildren,
				startIndex,
				direction
			}))
		}
	}
}

// 上一层
export const doUpperLayer = () => {
	return (dispatch: Function, getState: Function) => {
		const { chartData, activeId } = getState().chart
		let { targetParentChildren, targetIndex, startParentChildren, startIndex, direction } = getUpLayerParent(chartData, activeId);

		if (targetParentChildren) {
			dispatch(doMoveChartLayer({
				targetParentChildren,
				targetIndex,
				startParentChildren,
				startIndex,
				direction
			}))
		}
	}
}

// 下一层
export const doNextLayer = () => {
	return (dispatch: Function, getState: Function) => {
		const { chartData, activeId } = getState().chart
		let { targetParentChildren, targetIndex, startParentChildren, startIndex, direction } = getNextLayerParent(chartData, activeId);

		if (targetParentChildren) {
			dispatch(doMoveChartLayer({
				targetParentChildren,
				targetIndex,
				startParentChildren,
				startIndex,
				direction
			}))
		}
	}
}

// 移动图层层级
export const doMoveChartLayer = (data: any) => {

	return (dispatch: Function, getState: Function) => {
		const { chartData, openGroupIds } = getState().chart
		let { targetParentChildren, targetIndex, startParentChildren, startIndex, direction } = data
		let targetChart = targetParentChildren[targetIndex] as ChartType
		let startChart = startParentChildren.splice(startIndex, 1)[0] as ChartType

		if (direction === 'down') {
			if (targetParentChildren !== startParentChildren) {
				targetIndex += 1
			}
		}

		// 分组
		if (targetChart.is_group && openGroupIds.includes(targetChart.id)) {
			// 不为分组子对象时添加
			if (!startChart.father_ids.includes(targetChart.id)) {
				targetParentChildren = targetChart.children
				targetIndex = 0
				startChart.father_ids = [...targetChart.father_ids, targetChart.id]
			} else {
				startChart.father_ids = [...targetChart.father_ids]
			}
		} else {
			startChart.father_ids = [...targetChart.father_ids]
		}

		// 根据引用类型修改位置
		targetParentChildren.splice(targetIndex, 0, startChart)
		dispatch(createAction(T.CHART_MOVE_IDX)({ chartData: [...chartData] }))
	}
}

// 置顶或置底
export const doTopOrBottom = (type: string) => {
	return (dispatch: Function, getState: Function) => {
		const { chartData, activeId } = getState().chart
		const parentChildren = loopGetParent(chartData, activeId) as ChartType[];

		let moveChart: ChartType | null = null
		for (let i = 0; i < parentChildren.length; i++) {
			const chart = parentChildren[i]
			if (chart.id === activeId) {
				moveChart = parentChildren.splice(i, 1)[0]
				break
			}
		}
		;(moveChart as ChartType).father_ids = [0]
		type === 'top' ? chartData.unshift(moveChart) : chartData.push(moveChart);
		dispatch(createAction(T.CHART_MOVE_IDX)({ chartData: [...chartData] }))
	}
}

// 复制图层
export const doChartCopy = () => {
	return (dispatch: Function, getState: Function) => {
		const { chartData, activeChart, activeId } = getState().chart
		const parentChildren = loopGetParent(chartData, activeId) as ChartType[];

		for (let i = 0; i < parentChildren.length; i++) {
			const chart = parentChildren[i]
			if (chart.id === activeId) {
				const copyChart = JSON.parse(JSON.stringify(activeChart))
				copyChart.x = copyChart.x + 40
				copyChart.y = copyChart.y + 40
				copyChart.id = getNewChartId()
				parentChildren.splice(i + 1, 0, copyChart)
				break
			}
		}

		dispatch(createAction(T.CHART_ADD_CHART)({ chartData: [...chartData] }))
	}
}

// 添加分组
export const doAddGroup = () => {
	return (dispatch: Function, getState: Function) => {
		const { chartData, activeChart, activeId } = getState().chart
		const parentChildren = loopGetParent(chartData, activeId) as ChartType[];
		
		for (let i = 0; i < parentChildren.length; i++) {
			const chart = parentChildren[i]
			if (chart.id === activeId) {
				const group = defaultGroup(activeChart.father_ids)
				parentChildren.splice(i, 0, group)
				break
			}
		}

		dispatch(createAction(T.CHART_ADD_CHART)({ chartData: [...chartData] }))
	}
}

// 成为/取消分组
export const doBecomeGroup = () => {
	return (dispatch: Function, getState: Function) => {
		const { chartData, activeChart, activeId, openGroupIds } = getState().chart
		const parentChildren = loopGetParent(chartData, activeId) as ChartType[];
		
		for (let i = 0; i < parentChildren.length; i++) {
			const chart = parentChildren[i]
			if (chart.id === activeId) {
				if (chart.is_group) { // 分组 -> 取消分组
					const parent = parentChildren.splice(i, 1)[0]
					// 重新设置父id
					loopResetFatherIds(parent.children || [], parent.id)
					parentChildren.splice(i, 0, ...(parent.children || []))
				} else {  // 不是分组 -> 分组
					const group = defaultGroup(activeChart.father_ids)
					activeChart.father_ids = [...group.father_ids, group.id]
					group.children?.push(parentChildren.splice(i, 1)[0])
					parentChildren.splice(i, 0, group)
					// 打开分组
					openGroupIds.push(group.id)
					dispatch(setGroupIds(openGroupIds))
				}
				break
			}
		}

		dispatch(createAction(T.CHART_ADD_CHART)({chartData: [...chartData]}))
	}
}

// 添加图层
export const doAddChart = (chart: any) => {
	return (dispatch: Function, getState: Function) => {
		let { chartData } = getState().chart

		// 拷贝一份图层
		const newChart = JSON.parse(JSON.stringify(chart))
		newChart.id = getNewChartId()
		if (newChart.source) {
			newChart.source = Object.assign({}, defaultSource(), newChart.source)
			newChart.source.father_id = newChart.id
		}
		chartData.push(newChart)

		dispatch(createAction(T.CHART_ADD_CHART)({ chartData: [...chartData] }))
		// dispatch(doAddHistoryAction({type: 'add', chart_id: newChart.id }))
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
export const doDeleteChart = (value: any) => {
	return (dispatch: Function, getState: Function) => {
		const { chartData } = getState().chart
		value.forEach((chart: ChartType) => {
			const parentChildren = loopGetParent(chartData, chart.id) as ChartType[]
			for (let i = 0; i < parentChildren.length; i++) {
				if (parentChildren[i].id === chart.id) {
					parentChildren.splice(i, 1)
					break
				}
			}
		})
		dispatch(createAction(T.CHART_DELETE_CHART)([...chartData]))
	}
}

// 行为管理
export const doChartActionManage = (type: any) => {
	return (dispatch: Function, getState: Function) => {
		const { activeChart, activeId } = getState().chart

		if (!activeChart || !activeId) return

		// 根据行为类型处理
		switch (type) {
			// 上一层
			case 'up':
				dispatch(doUpperLayer())
				break
			// 下一层
			case 'down':
				dispatch(doNextLayer())
				break
			// 置底、置顶
			case 'top':
			case 'bottom':
				dispatch(doTopOrBottom(type))
				dispatch(doTopOrBottom(type))
				break
			// 复制
			case 'copy':
				dispatch(doChartCopy())
				break
			// 添加分组
			case 'add_group':
				dispatch(doAddGroup())
				break
			// 形成/取消分组
			case 'into_group':
				dispatch(doBecomeGroup())
				break
			// 删除
			case 'del':
				dispatch(doBaseConfig({ type, is_del: !activeChart.is_del, del_date: parseTime(new Date()) }))
				// 隐藏行为管理
				dispatch(doActionVisible(false))
				break
			// 显示
			case 'show':
				dispatch(doBaseConfig({ type, is_hide: !activeChart.is_hide }))
				break
			// 锁定
			case 'lock':
				dispatch(doBaseConfig({ type, is_lock: !activeChart.is_lock }))
				break
		}
	}
}

// 添加历史行为
export const doAddHistoryAction = (data: any) => {
	return (dispatch: Function, getState: Function) => {
		const { historyAction } = getState().chart
		const { type, value, chart_id } = data

		// 添加行为
		historyAction.push({ type, chart_id, value})
		dispatch(createAction(T.ACTION_MANAGE)({
			historyAction,
			actionIndex: historyAction.length - 1
		}))
	}
}

// 设置背景图层样式
export const doCanvasStyle = (data: any) => {
	return (dispatch: Function, getState: Function) => {
		let { chart: { canvasStyle } } = getState()
		
		switch (data.type) {
			case 'scale':
				canvasStyle.scale = data.value
				// canvasStyle.adaptive_scale = data.value
				canvasStyle.x = 0
				canvasStyle.y = 0
				break
			default:
				canvasStyle = data.value
				break
		}

		dispatch(createAction(T.CHART_CANVAS_STYLE)(canvasStyle))
	}
}
// 行为组件位置
export const doActionStyle = createAction(T.ACTION_STYLE)


