import { createAction } from "redux-actions"
import * as T from '../constants'

// visible
export const handleHeaderVisible = (type: string, values = false) => {
	return (dispatch: Function) => dispatch(createAction(type)(values))
}
export const recycleVisible = createAction(T.RECYCLE_VISIBLE)
// 行为组件
export const doActionVisible = createAction(T.ACTION_VISIBLE)
