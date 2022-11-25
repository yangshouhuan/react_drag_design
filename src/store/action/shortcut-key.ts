import * as T from '../constants'
import { createAction } from "redux-actions"
import { doAddChart, doBaseConfig, doChartActionManage } from "./chart_base"

// 拷贝图层
const doCopyChart = () => {
    return (dispatch: Function, getState: Function) => {
        const { activeChart } = getState().chart
        const copyChart = Object.assign(activeChart)
        dispatch(createAction(T.CHART_COPY_KEY)(JSON.parse(JSON.stringify(copyChart))))
    }
}

// 快捷键处理
export const doShortcutKey = (data: any) => {
    return (dispatch: Function, getState: Function) => {
        const { ctrlKey, keyCode } = data
        const { activeChart, activeId, copyChart } = getState().chart

        if (!activeChart || !activeId) return

        const keyCodeManage = () => {
            const { x, y } = activeChart
            switch(keyCode) {
                case 8:  // 删除
                    dispatch(doChartActionManage('del'))
                    break
                case 37: // 左
                    dispatch(doBaseConfig({ x: x - 5, y: y, type: 'xy' }))
                    break
                case 38: // 上
                    dispatch(doBaseConfig({ x: x, y: y - 5, type: 'xy' }))
                    break
                case 39: // 右
                    dispatch(doBaseConfig({ x: x + 5, y: y, type: 'xy' }))
                    break
                case 40: // 下
                    dispatch(doBaseConfig({ x: x, y: y + 5, type: 'xy' }))
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
                    if (copyChart) {
                        copyChart.x = activeChart.x + 40
                        copyChart.y = activeChart.y + 40
                        dispatch(doAddChart(copyChart))
                    }
                    break
                // 恢复
                case 89:
                    break
                // 撤销
                case 90:
                    break
                default:
                    keyCodeManage()
            }
        } else {
            keyCodeManage()
        }

    }
}
