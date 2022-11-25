import md5 from 'js-md5'
import request from '../utils/request'

export function login(data) {
  data.Pwd = md5(data.Pwd)
  return request({
    url: '/Login/Index',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export function register(user) {
  user.Pwd = md5(user.Pwd)
  user.Pwd2 = md5(user.Pwd2)

  return request({
    url: '/Register/Index',
    method: 'post',
    data: user
  })
}