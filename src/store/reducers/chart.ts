import { defaultChart } from 'chart-config-json/shared/default_data'
import * as T from '../constants'
import { updateState } from './visible'
// const chartData = require('chart-config-json/shared/chart_data.json')
// const chartData = require('chart-config-json/shared/chart_data_copy.json')

const canvasChart = Object.assign({}, defaultChart(), {
    chart_name: '背景图',
    chart_id: 0,
    config_id: 0,
    width: 1920,
    height: 1080,
    bg_color: 'rgb(14, 42, 66)',
    component: 'bg',
    option: {
        repeatType: 1
    }
})

const data = {
    kId: null, // 看板id

    // 看板数据
    canvasChart,
    // chartData: chartData,  // 图层组件列表
    chartData: [],
    activeId: 0,  // 当前激活图层id
    activeChart: canvasChart,  // 当前修改图层数据
    expandedKeys: [],  // 打开的分组id
    
    sourceIndex: 0,  // 数据源索引

    // 缩放
    scale: 1,   // 自适应值
    adaptive_scale: 1,  // 当前缩放值

    // 历史行为
    historyActionChain: null,   // 历史行为链表
    currentAction: null,  // 当前行为
    copyChart: null, // 被临时拷贝的图层
    
    // 行为组件位置
    actionStyle: {
        x: 0,
        y: 0
    },
    // 屏幕
    screen: {
        sw: 1920,
        sh: 1080
    }
}

const chart = (state = data, action: any) => {
    switch (action.type) {
        // 设置图层列表
        case T.CHART_DATA:
            return updateState(state, { chartData: action.payload })
        // 设置看板id
        case T.SOCKET_KANBAN_Id:
            return updateState(state, { kId: action.payload })
        // 修改激活项
        case T.CHART_ACTIVE_ID:
        // 图层排序移动
        case T.CHART_MOVE_IDX:
            return updateState(state, action.payload)
        // 数据源字段名称
        case T.CHART_SOURCE_FIELD:
            return updateState(state, { chartData: action.payload })
        // 修改基本配置
        case T.CHART_SET_BASE_CONFIG:
            return updateState(state, { chartData: [...state.chartData], ...action.payload })
        // 添加图层
        case T.CHART_ADD_CHART:
            return updateState(state, { chartData: [...state.chartData] })
        // 恢复
        case T.CHART_RECOVER_CHART:
            return updateState(state, { chartData: [...state.chartData] })
        // 删除图层
        case T.CHART_DELETE_CHART:
        // 设置默认值
        case T.STATIC_CHART_DATA:
            return updateState(state, { chartData: action.payload })
        // 拷贝图层
        case T.CHART_COPY_KEY:
            return updateState(state, { copyChart: action.payload })
        // 行为组件
        case T.ACTION_STYLE:
            return updateState(state, { actionStyle: action.payload })
        case T.CHART_SCREEN:
            return updateState(state, { screen: action.payload })
        // 缩放
        case T.CHART_CANVAS_SCALE:
            return updateState(state, { canvasChart: Object.assign(state.canvasChart, { x: 0, y: 0}), ...action.payload})
        // 设置默认看板
        case T.CHART_DEFAULT_CHART:
            return updateState(state, { activeChart: state.canvasChart, activeId: 0 })
        case T.CHART_CANVAS_STYLE:
            return updateState(state, { canvasChart: action.payload })
        // 修改主要配置
        case T.CHART_SET_IMPORTANT_CONFIG:
            return updateState(state, { chartData: [...state.chartData] })
        // 设置打开分组
        case T.CHART_EXPANDED_KEYS:
            return updateState(state, { expandedKeys: action.payload})
        default:
            return state
    }
}

export default chart