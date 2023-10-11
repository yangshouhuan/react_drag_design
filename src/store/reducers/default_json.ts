import * as T from '../constants'

// import chartConfigList from 'chart-config/chart-base-config'
import { updateState } from './visible'

const data = {
  // chartConfigList: chartConfigList
  chartConfigList: []
}

const defaultJson = (state = data, action: any) => {
  switch(action.type) {
    // 设置看板id
    case T.STATIC_GET_JSON:
      return updateState(state, { getJson: action.payload })
    case T.STATIC_GET_CHART_CONFIG_LIST_JSON:
      // return updateState(state, { chartConfigList: action.payload })
      return updateState(state, { chartConfigList: [] })
    default:
      return state
  }
}

export default defaultJson