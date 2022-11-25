// user
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'  // 登录
export const LOGOUT = 'LOGOUT'  // 登出

// visible
export const SIDE_VISIBLE = 'SIDE_VISIBLE'
export const ALL_LAYER_VISIBLE = 'ALL_LAYER_VISIBLE'
export const MY_LAYER_VISIBLE = 'MY_LAYER_VISIBLE'
export const RECYCLE_VISIBLE = 'RECYCLE_VISIBLE'
export const ACTION_VISIBLE = 'ACTION_VISIBLE'

// chart
export const SOCKET_KANBAN_Id = 'SOCKET_KANBAN_Id'  // 设置kid
export const CHART_DATA = 'CHART_DATA'  // 所有图层数据
export const CHART_ACTIVE_ID = 'CHART_ACTIVE_ID'  // 激活图层id
export const CHART_SET_BASE_CONFIG = 'CHART_SET_BASE_CONFIG'  // 基本配置
export const CHART_SET_IMPORTANT_CONFIG = 'CHART_SET_IMPORTANT_CONFIG'  // 重要配置
export const CHART_MOVE_IDX = 'CHART_MOVE_IDX'  // 拖拽排序
export const CHART_GROUP_IDS = 'CHART_GROUP_IDS'   // 打开分组项id
export const CHART_ADD_CHART = 'CHART_ADD_CHART'  // 添加图层
export const CHART_SOURCE_FIELD = 'CHART_SOURCE_FIELD'  // 数据源映射字段
export const CHART_CANVAS_STYLE = 'CHART_CANVAS_STYLE'  // 看板样式
export const CHART_RECOVER_CHART = 'CHART_RECOVER_CHART'  // 恢复图层
export const CHART_DELETE_CHART = 'CHART_DELETE_CHART'  // 彻底删除图层
export const CHART_COPY_KEY = 'CHART_COPY_KEY'  // 临时拷贝图层
export const CHART_SCREEN = 'CHART_SCREEN'
export const ACTION_STYLE = 'ACTION_STYLE'  // 行为组件
export const ACTION_MANAGE = 'ACTION_MANAGE'

// 通信
export const SOCKET_CONNECT = 'WEB_SOCKET_CONNECT'  // 创建连接
export const SOCKET_HEARTBEAT = 'SOCKET_HEARTBEAT'  // 心跳
export const SOCKET_CLOSE = 'WEB_SOCKET_CLOSE'  // 关闭连接
export const SOCKET_KANBAN_GET = 'SOCKET_KANBAN_GET'  // 获取
export const SOCKET_CHART_ADD = 'SOCKET_CHART_ADD'  // 添加
export const SOCKET_CHART_DEL = 'SOCKET_CHART_DEL'  // 删除
export const SOCKET_BASE_CONFIG_UPDATE = 'SOCKET_BASE_CONFIG_UPDATE'  // 基本属性
export const SOCKET_CONSIG_UPDATE = 'SOCKET_CONSIG_UPDATE'  // 重要属性
export const SOCKET_SOURCE_UPDATE = 'SOCKET_SOURCE_UPDATE'  // 数据源

// 静态数据
export const STATIC_CHART_DATA = 'STATIC_CHART_DATA'
export const STATIC_GET_JSON = 'STATIC_GET_JSON'
export const STATIC_GET_CHART_LIST_JSON = 'STATIC_GET_CHART_LIST_JSON'
export const STATIC_GET_CHART_CONFIG_LIST_JSON = 'STATIC_GET_CHART_CONFIG_LIST_JSON'