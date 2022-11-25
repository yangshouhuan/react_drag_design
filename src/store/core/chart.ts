import chart from "store/reducers/chart"
import { ChartType } from "types/chart"
import { isArray, isObject } from "utils/validate"

interface FindStartEndParentType {
    targetParentChildren: ChartType[] | null
    targetIndex: number
    startParentChildren: ChartType[] | null
    startIndex: number
    direction: string
}

let targetParentChildren: ChartType[] | null = null,
    targetIndex = 0,
    targetIdx = 0,
    startParentChildren: ChartType[] | null = null,
    startIndex = 0,
    startIdx = 0,
    chartIdx = 0,
    direction = 'up';

/**
 * 查找图层父类
 * @param chartData 
 * @param key 
 * @returns 
 */
export const loopGetParent = (chartData: ChartType[], key: number): ChartType[] | null => {
    let parentChildren: ChartType[] | null = null

    const len = chartData.length
    for (let i = 0; i < len; i++) {
        const chart = chartData[i]
        if (chart.id === key) {
            parentChildren = chartData
        }
        if (!parentChildren && chart.is_group) {
            parentChildren = loopGetParent(chart.children || [], key)
        }
        if (parentChildren) break
    }

    return parentChildren
}

const loopGetStartAndEndParent = (chartData: ChartType[], startKey: number, endKey: number) : FindStartEndParentType => {

    for (let i = 0; i < chartData.length; i++) {
        chartIdx++
        const chart = chartData[i]
        if (chart.id === startKey) {
            startIdx = chartIdx
            startIndex = i
            startParentChildren = chartData
        } else if (chart.id === endKey) {
            targetIdx = chartIdx
            targetParentChildren = chartData
            targetIndex = i
        }
        if ((!targetParentChildren || !startParentChildren) && chart.is_group) {
            loopGetStartAndEndParent(chart.children || [], startKey, endKey)
        }
        if (targetParentChildren && startParentChildren) break
    }

    return {
        targetParentChildren,
        targetIndex,
        startParentChildren,
        startIndex,
        direction
    }
}
// 拖拽排序时获取父类
export const getMoveStartEndParent = (chartData: ChartType[], startKey: number, endKey: number) : FindStartEndParentType => {
    targetParentChildren = null
    startParentChildren = null
    direction = 'up'
    targetIndex = targetIdx = startIndex = startIdx = chartIdx = 0

    const data = loopGetStartAndEndParent(chartData, startKey, endKey)
    if (startIdx < targetIdx) {
        data.direction = 'down'
    }

    return data
}

const loopGetUpLayerParent = (chartData: ChartType[], key: number) : FindStartEndParentType => {
    for (let i = 0; i < chartData.length; i++) {
        const chart = chartData[i]
        if (chart.id === key) {
            startParentChildren = chartData
            startIndex = i
        } else {
            targetParentChildren = chartData
            targetIndex = i
        }
        if (!startParentChildren && chart.is_group) {
            loopGetUpLayerParent(chart.children as ChartType[], key)
        }
        if (startParentChildren) break

        targetParentChildren = chartData
        targetIndex = i
    }

    return {
        targetParentChildren,
        targetIndex,
        startParentChildren,
        startIndex,
        direction: 'up'
    }
}
// 获取上一层时父类
export const getUpLayerParent = (chartData: ChartType[], key: number) : FindStartEndParentType => {
    targetParentChildren = null
    startParentChildren= null
    targetIndex = startIndex = 0
    direction = 'up'

    return loopGetUpLayerParent(chartData, key)
}

const loopGetNextLayerParent = (chartData: ChartType[], key: number) : FindStartEndParentType => {
    for (let i = 0; i < chartData.length; i++) {
        const chart = chartData[i]
        if (chart.id === key) {
            startParentChildren = chartData
            startIndex = i
            continue
        }
        if (startParentChildren) {
            targetParentChildren = chartData
            targetIndex = i
        }
        if (!targetParentChildren && chart.is_group) {
            loopGetNextLayerParent(chart.children as ChartType[], key)
        }
        if (targetParentChildren) break
    }

    return {
        targetParentChildren,
        targetIndex,
        startParentChildren,
        startIndex,
        direction: 'down'
    }
}
// 循环获取下一层时父类
export const getNextLayerParent = (chartData: ChartType[], key: number) : FindStartEndParentType => {
    targetParentChildren = null
    startParentChildren = null
    targetIndex = startIndex = 0
    direction = 'down'

    return loopGetNextLayerParent(chartData, key)
}


// 修改基本配置
export const updateBaseConfig = (chart: ChartType, value: Record<string, any>, activeId: number | null, openGroupIds: string[]): Record<string, any> => {

    switch (value.type) {
        case 'name':
            chart.name = value.name
            break
        case 'wh':
            chart.width = parseInt(value.width)
            chart.height = parseInt(value.height)
            break
        case 'xy':
            chart.x = parseInt(value.x)
            chart.y = parseInt(value.y)
            break
        case 'opacity':
            chart.opacity = value.opacity
            break
        case 'rotate':
            chart.transform = parseInt(value.rotate)
            break
        case 'name':
            chart.name = value.name
            break
        case 'show':
            chart.is_hide = value.is_hide
            if (chart.is_hide) {
                const showIndex = openGroupIds.indexOf((activeId as number).toString())
                if (showIndex !== -1) {
                    openGroupIds.splice(showIndex, 1)
                }
                activeId = null
            }
            break
        case 'del':
            chart.is_del = value.is_del
            if (value.is_del) {
                // 删除时间
                chart.del_date = value.del_date
                const delIndex = openGroupIds.indexOf((activeId as number).toString())
                if (delIndex !== -1) {
                    openGroupIds.splice(delIndex, 1)
                }
                activeId = null
            }
            break
        case 'bg_color':
            chart.bg_color = value.bg_color
            break
        case 'up':
        case 'down':
            break
        case 'top':
        case 'bottom':
            break
        case 'lock':
            chart.is_lock = value.is_lock
            break
        default:
            break
    }

    return {
        openGroupIds,
        activeId,
        activeChart: activeId ? Object.assign({}, chart) : null
    }
}

// 修改主要配置
export const updateImportantConfig = (chart: ChartType, data: any) => {
    const { fields, value } = data
    const types = fields.split('-')
    const len = types.length - 1

    // 循环获取父项
    let parent = chart.config
    for (let i = 0; i < len; i++) {
        parent = parent[types[i]]
    }
    if (parent) {
        if (isArray(value)) {
            parent[types[len]] = [...value]
        } else if (isObject(value)) {
            parent[types[len]] = { ...value }
        } else {
            parent[types[len]] = value
        }
    }

    chart.config = Object.assign({}, chart.config)
}

/**
 * 激活时打开当前项的父类
 * @param openIds
 * @param ids 
 * @returns 
 */
export const resetsOpenIds = (openIds: any, ids: number[]) => {
    ids.forEach((v: number, i: number) => {
        if (!openIds.includes(v) && v !== 0) {
            openIds.push(v)
        }
    })
    return openIds
}

/**
 * 
 * @param chartData 循环重置父类id
 * @param id 
 */
export const loopResetFatherIds = (chartData: ChartType[], id: number) => {
    chartData.forEach((chart: ChartType) => {
        const index = chart.father_ids.indexOf(id)
		chart.father_ids.splice(index, 1)
        if (chart.is_group) {
            loopResetFatherIds(chart.children || [], id)
        }
    })
}