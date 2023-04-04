import * as T from '../constants'
import { updateState } from './visible'

const data = {
  kId: null, // 看板id

  // 看板数据
  chartData: [],
  activeId: 0,  // 当前激活图层id
  activeChart: null,  // 当前修改图层数据
  openGroupIds: [], // 打开的分组id
  copyChart: null, // 被临时拷贝的图层

  // 画布背景样式
  canvasStyle: {
    adaptive_scale: 1, // 自适应值
    scale: 0.5,  // 当前缩放值
    width: 1920,
    height: 1080,
    x: 0,
    y: 0,
    config: {
      backgroundColor: 'rgb(14, 42, 66)',
      backgroundImage: '',
      fit: 0
    }
  },

  // 历史行为
  historyAction: [],
  actionIndex: 0,  // 当前行为索引
  // 行为组件位置
  actionStyle: {
    x: 0,
    y: 0
  },
  screen: {
    sw: 1920,
    sh: 1080
  }
}

const chart = (state = data, action: any) => {
  switch(action.type) {
    // 设置看板id
    case T.SOCKET_KANBAN_Id:
      return updateState(state, { kId: action.payload })
    // 修改激活项
    case T.CHART_ACTIVE_ID:
    // 修改基本配置
    case T.CHART_SET_BASE_CONFIG:
    // 修改主要配置
    case T.CHART_SET_IMPORTANT_CONFIG:
    // 图层排序移动
    case T.CHART_MOVE_IDX:
    // 数据源字段名称
    case T.CHART_SOURCE_FIELD:
    // 添加图层
    case T.CHART_ADD_CHART:
      return updateState(state, action.payload)
    // 打开分组项id
    case T.CHART_GROUP_IDS:
      return updateState(state, { openGroupIds: [...action.payload] })
    // 画布背景样式
    case T.CHART_CANVAS_STYLE:
      return updateState(state, { canvasStyle: Object.assign({}, action.payload) })
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
    // 行为管理
    case T.ACTION_MANAGE:
      return updateState(state, {
        historyAction: action.payload.action,
        actionIndex: action.payload.index
      })
    case T.CHART_SCREEN:
      return updateState(state, { screen: action.payload })
    default:
      return state
  }
}

export default chart