import { ChartSourceType } from "./source"

export interface MyFormItemCmptType {
    fields: string
    text: string
    component: string
    require?: boolean
    options?: any[]
    types?: Record<string, any>
    style?: Record<string, any>
}

export interface ChartType {
    chart_id: number
    config_id: number | number[]

    chart_name: string
    chart_img: string
    chart_idx: number
    chart_status: boolean
    create_uid: number
    component: string
    create_time: string
    option: any
    config: AttrConfigType[]
    is_group: boolean
    is_hide: boolean
    is_lock: boolean
    is_del: boolean
    is_echart: boolean
    x: number
    y: number
    width: number
    height: number
    rotate: number
    bg_color: string
    opacity: number
    map_url: string
    del_time?: string
    children?: ChartType[]
    source?: ChartSourceType
}
// 行为组件
export interface ActionType {
    [key: string]: any
    type: ActionEnumType
    currentActiveId: number
    activeId: number
    next: ActionType | null
    last: ActionType | null
    oldvalue: any
}

export interface OptionsType {
    label: string
    value: string
}
// 属性配置
export interface AttrConfigType {
    [key: string]: any
    type: string
    name: string,
    fields?: string
    children?: AttrConfigType[]
    options?: OptionsType[]
    min?: number
    max?: number
    default?: any
    height?: number
    width?: number
    enabledItem?: false
}

// 行为类型
export enum ActionEnumType {
    ADD,  // 添加图层
    XY,  // 位置
    CHART_NAME,  // 图层名称
    BG_COLOR,  // 背景颜色
    WH,  // 宽高
    ROTATE,  // 旋转
    UP,  // 上一层
    DOWN,  // 下一层
    TOP,  // 置顶
    BOTTOM,  // 置底
    COPY,  // 复制
    BECOME_GROUP, // 成为分组
    DISBAND_GROUP,  // 解散分组
    DEL,  // 删除
    SHOW,  // 显示
    LOCK,  // 锁定
    OPACITY, // 透明度
    PASTE,  // 粘贴
    DRAG_MOVE_CHART,  // 拖拽移动图层
    REPEAT,   // 全局平铺方式
}
