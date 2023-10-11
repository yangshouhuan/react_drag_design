import { createAction } from 'redux-actions'
import * as T from '../constants'
import { Modal } from 'antd'
import { login } from 'api/user'

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
    return (dispatch: Function) => {
        return new Promise((resolve, reject) => {
            // return (
            //     login(value)
            //     .then((res: any) => {
            //         if (res.status) {
            //             dispatch(createAction(T.SUCCESS_LOGIN)({
            //                 token: res.data.token,
            //                 user_id: res.data.id
            //             }))
            //         }
            //         resolve(res)
            //     }).catch(() => {
            //         reject('error')
            //     })
            // )
            setTimeout(() => {
                const res = {
                    message: 'success',
                    status: true,
                    data: {
                        create_time: "2023-09-06 12:23:15",
                        name: "18888888888",
                        pwd: null,
                        role: "lv1",
                        token: "9d2f1b4c-4a12-470d-99f1-f3531a158f9d",
                        user_id: 1,
                        id: 1
                    }
                }
                dispatch(createAction(T.SUCCESS_LOGIN)({
                    token: res.data.token,
                    user_id: res.data.id
                }))
                resolve(res)
            }, 300)
        })
    }
}



