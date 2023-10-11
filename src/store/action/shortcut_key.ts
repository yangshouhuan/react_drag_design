import { ActionEnumType, ActionType, ChartType } from "types/chart"
import {
	doAddChartNoEdit,
	doAddGroupNoEdit,
	doChartActionManage,
	doCopyChart,
	doDeleteChart,
	doDisbandGroupNoEdit,
	doMoveDispose,
	doNextLayer,
	doToBottom,
	doToTop,
	doUpperLayer
} from "./chart_base"
import { getActiveChart, updateBaseConfig } from "store/core/chart"
import { createAction } from "redux-actions"
import * as T from '../constants'

// 历史行为
export let historyActionChain: ActionType | null = null
export let currentAction: ActionType | null = null
export let backupsChart: ChartType[] = []
let isRecover = true

export const doSaveAction = (action: ActionType) => {
    // 使用链式的方式保存历史行为
    if (!historyActionChain || !currentAction) {
        historyActionChain = action
        currentAction = historyActionChain
    } else {
        currentAction.next = action
        action.last = currentAction
        currentAction = action
    }
}

// 直接添加图层
const handleAddChart = (action: ActionType) => {
	return (dispatch: Function) => {
		for (let i = 0; i < backupsChart.length; i++) {
			if (backupsChart[i].chart_id === action.activeId) {
				const data = backupsChart.splice(i, 1)[0]
				dispatch(doAddChartNoEdit(data))
				break
			}
		}
	}
}

// 直接成为分组
const handleAddGroup = (action: ActionType) => {
	return (dispatch: Function) => {
		for (let i = 0; i < backupsChart.length; i++) {
			if (backupsChart[i].chart_id === action.activeId) {
				const data = backupsChart.splice(i, 1)[0]
				dispatch(doAddGroupNoEdit(data, action.newvalue.cids))
				break
			}
		}
	}
}

// 恢复 ctrl + y
const doRecover = () => {
	return (dispatch: Function) => {
		const action: ActionType | null = isRecover ? currentAction!.next : currentAction
		if (!action) return

		// 根据行为类型处理
		switch (action.type) {
			// 位置
			case ActionEnumType.XY:
			// 图层名称
			case ActionEnumType.CHART_NAME:
			// 背景颜色
			case ActionEnumType.BG_COLOR:
			// 宽高
			case ActionEnumType.WH:
			// 旋转
			case ActionEnumType.ROTATE:
			// 显示
			case ActionEnumType.SHOW:
			// 锁定
			case ActionEnumType.LOCK:
			// 透明度
			case ActionEnumType.OPACITY:
				dispatch(doBaseAction(action, action.newvalue))
				break
			// 删除
			case ActionEnumType.DEL:
				dispatch(doBaseAction(action, action.newvalue))
				break
			// 添加图层
			case ActionEnumType.ADD:
				dispatch(handleAddChart(action))
				break
			// 粘贴
			case ActionEnumType.PASTE:
				dispatch(handleAddChart(action))
				break
			// 复制
			case ActionEnumType.COPY:
				dispatch(handleAddChart(action))
				break
			// 成为分组
			case ActionEnumType.BECOME_GROUP:
				dispatch(handleAddGroup(action))
				break
			// 解散分组
			case ActionEnumType.DISBAND_GROUP:
				dispatch(doDisbandGroupNoEdit(action.activeId, true))
				break
			// 上一层、下一层
			case ActionEnumType.UP:
				dispatch(doUpperLayer(action.newvalue.dragKey, true))
				break
			case ActionEnumType.DOWN:
				dispatch(doNextLayer(action.newvalue.dragKey, true))
				break
			// 置底、置顶
			case ActionEnumType.TOP:
				dispatch(doToTop(action.currentActiveId, true))
				break
			case ActionEnumType.BOTTOM:
				dispatch(doToBottom(action.currentActiveId, true))
				break
			// 拖拽移动图层
			case ActionEnumType.DRAG_MOVE_CHART:
				dispatch(doMoveDispose(action.newvalue))
				break
			default:
				break
		}

		if (isRecover) {
			currentAction = currentAction!.next
		}
		isRecover = true
	}
}

// 撤销 ctrl + z
const doUndo = () => {
	return (dispatch: Function) => {
		const action: ActionType | null = isRecover ? currentAction : currentAction!.last
		if (!action) return

		// 根据行为类型处理
		switch (action.type) {
			// 位置
			case ActionEnumType.XY:
			// 图层名称
			case ActionEnumType.CHART_NAME:
			// 背景颜色
			case ActionEnumType.BG_COLOR:
			// 宽高
			case ActionEnumType.WH:
			// 旋转
			case ActionEnumType.ROTATE:
			// 删除
			case ActionEnumType.DEL:
			// 显示
			case ActionEnumType.SHOW:
			// 锁定
			case ActionEnumType.LOCK:
			// 透明度
			case ActionEnumType.OPACITY:
				dispatch(doBaseAction(action, action.oldvalue))
				break
			// 添加图层 -> 删除图层
			case ActionEnumType.ADD:
				dispatch(doDeleteChart([action.activeId], true))
				break
			// 粘贴  -> 删除图层
			case ActionEnumType.PASTE:
				dispatch(doDeleteChart([action.activeId], true))
				break
			// 复制  -- 删除图层
			case ActionEnumType.COPY:
				dispatch(doDeleteChart([action.activeId], true))
				break
			// 成为分组 -> 解散分组
			case ActionEnumType.BECOME_GROUP:
				dispatch(doDisbandGroupNoEdit(action.activeId, true))
				break
			// 解散分组 -> 成为分组
			case ActionEnumType.DISBAND_GROUP:
				dispatch(handleAddGroup(action))
				break
			// 上一层  -> 下一层
			case ActionEnumType.UP:
				dispatch(doNextLayer(action.newvalue.dragKey, true))
				break
			// 下一层  -> 上一层
			case ActionEnumType.DOWN:
				dispatch(doUpperLayer(action.newvalue.dragKey, true))
				break
			// 置底 -> 返回原来位置
			case ActionEnumType.TOP:
				dispatch(doMoveDispose({
					dropKey: action.newvalue.dropKey,
					dragKey: action.newvalue.dragKey,
					dropPosition: action.newvalue.dropPosition
				}))
				break
			// 置顶  -> 返回原来位置
			case ActionEnumType.BOTTOM:
				dispatch(doMoveDispose({
					dropKey: action.newvalue.dropKey,
					dragKey: action.newvalue.dragKey,
					dropPosition: action.newvalue.dropPosition
				}))
				break
			// 拖拽移动图层
			case ActionEnumType.DRAG_MOVE_CHART:
				dispatch(doMoveDispose({
					...action.newvalue,
					dropPosition: action.newvalue.dropPosition === -1 ? 1 : -1	
				}))
				break
			default:
				break
		}

		if (!isRecover) {
			currentAction = currentAction!.last
		}
		isRecover = false
	}
}	

// 快捷键撤销/恢复操作
const doBaseAction = (action: ActionType, value: any) => {
	return (dispatch: Function, getState: Function) => {
		const { chartData } = getState().chart
		const { type, currentActiveId } = action
		const { chart, cids } = getActiveChart(chartData, currentActiveId)
		if (chart) {
			const data = updateBaseConfig(chart, {type, ...value}, currentActiveId, [])
			
			dispatch(createAction(T.CHART_SET_BASE_CONFIG)(data))
		}
	}
}

// 快捷键处理
export const doShortcutKey = (data: any) => {
    return (dispatch: Function, getState: Function) => {
        const { ctrlKey, keyCode } = data
        const { activeChart } = getState().chart
		
        const keyCodeManage = () => {
            const { x, y } = activeChart
            switch(keyCode) {
                case 8:  // 删除
                    dispatch(doChartActionManage({ type: ActionEnumType.DEL }))
                    break
                case 37: // 左
                    dispatch(doChartActionManage({ x: x - 5, y: y, type: ActionEnumType.XY }))
                    break
                case 38: // 上
                    dispatch(doChartActionManage({ x: x, y: y - 5, type: ActionEnumType.XY }))
                    break
                case 39: // 右
                    dispatch(doChartActionManage({ x: x + 5, y: y, type: ActionEnumType.XY }))
                    break
                case 40: // 下
                    dispatch(doChartActionManage({ x: x, y: y + 5, type: ActionEnumType.XY }))
                    break
                default:
                    break
            }
        }

        if (ctrlKey) {
            switch(keyCode) {
                // 复制
                case 67:
                    dispatch(doCopyChart())
                    break
                // 粘贴
                case 86:
					dispatch(doChartActionManage({ type: ActionEnumType.PASTE }))
                    break
                // 恢复
                case 89:
					dispatch(doRecover())
                    break
                // 撤销
                case 90:
					dispatch(doUndo())
                    break
                default:
                    keyCodeManage()
            }
        } else {
            keyCodeManage()
        }

    }
}

