import * as T from '../constants'

export const updateState = (state: any, value: any) => {
    return Object.assign({}, state, value)
}

const data = {
    side_visible: true,  // 右侧面板
    // all_layer_visible: false, // 所有图层
    all_layer_visible: true, // 所有图层
    my_layer_visible: true,  // 我的图层
    recycle_visible: false,  // 回收站
    config_side_visible: true,  // 显示配置面板
    action_visibld: false,  // 行为面板
}

const visible = (state = data, action: any) => {
    switch (action.type) {
        case T.SIDE_VISIBLE:
            return updateState(state, { side_visible: !state.side_visible })
        case T.ALL_LAYER_VISIBLE:
            return updateState(state, { all_layer_visible: action.payload })
        case T.MY_LAYER_VISIBLE:
            return updateState(state, { my_layer_visible:action.payload })
        case T.RECYCLE_VISIBLE:
            return updateState(state, { recycle_visible: !state.recycle_visible})
        case T.ACTION_VISIBLE:
            return updateState(state, { action_visibld: action.payload })
        default:
            return state
    }
}

export default visible