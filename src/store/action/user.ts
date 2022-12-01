import { createAction } from 'redux-actions'
import * as T from '../constants'
import { Modal } from 'antd'

const { confirm } = Modal

// 退出登录确认
const logoutConfirm = (onOK: Function) => {
    confirm({
        title: '退出登录提示',
        content: '您确定要退出登录吗？',
        onOk: () => onOK(),
        okText: '确定',
        cancelText: '取消'
    })
}

// 登录
export const successLogin = createAction(T.SUCCESS_LOGIN)
// 退出登录
export const doLogout = () => {
    return (dispatch: Function) => {
        logoutConfirm(() => {
            dispatch(createAction(T.LOGOUT)())
            window.location.reload()
        })
    }
}

// 登录
export const doLogin = (value: any) => {
    return (dispatch: Function, getState: Function) => {
        if (getState().user.isLogin) return
        
        return new Promise((resolve, reject) => {
            // 模仿登录请求
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        status: 1,
                        data: {
                            token: 'test_token',
                            id: 1
                        }
                    })
                }, 1000)
            })
            .then((res: any) => {
                if (res.status) {
                    dispatch(createAction(T.SUCCESS_LOGIN)({
                        token: res.data.token,
                        user_id: res.data.id
                    }))
                }
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    }
}



