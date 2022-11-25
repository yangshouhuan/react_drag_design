import * as T from '../constants'

import {
  getToken,
  getUserId,
  removeUserInfo,
  setToken,
  setUserId
} from '../../useApi/auth'
import { updateState } from './visible'

const data = {
  token: getToken(),
  user_id: getUserId(),
  isLogin: getToken() ? true : false
}

const user = (state = data, action: any) => {
  switch(action.type) {
    case T.SUCCESS_LOGIN:
      setToken(action.payload.token)
      setUserId(action.payload.user_id)

      return updateState(state, {
        token: action.payload.token,
        user_id: action.payload.user_id,
        isLogin: true
      })
    case T.LOGOUT:
      removeUserInfo()
      
      return updateState(state, {
        token: null,
        user_id: null,
        isLogin: false
      })
    default:
      return state
  }
}

export default user