import request from '../utils/request'

export function RequestGet(url, params = {}) {
  // return request({
  //   url: url,
  //   method: 'get',
  //   params
  // })
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve({
        code: 0,
        message: '暂无权限'
      })
    }, 300)
  })
}

export function RequestPost(url, data) {
  // return request({
  //   url: url,
  //   method: 'post',
  //   data: data
  // })
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve({
        code: 0,
        message: '暂无权限'
      })
    }, 300)
  })
}

// del数据
export function RequestDel (url, data) {
  // return request({
  //   url: url,
  //   method: 'delete',
  //   params: data
  // })
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve({
        code: 0,
        message: '暂无权限'
      })
    }, 300)
  })
}

export function RequestData (options) {
  // if (options.method === 'get') {
  //   return RequestGet(options.url, options.data || {})
  // }
  // return RequestPost(options.url, options.data || null)
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve({
        code: 0,
        message: '暂无权限'
      })
    }, 300)
  })
}