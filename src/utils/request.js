import axios from 'axios'
import Global from '../api/globalConfigApi'
import store from '../store'
import { message } from 'antd'

// create an axios instance
const service = axios.create({
  baseURL: Global.apiUrl, // url = base url + request url
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getState().user.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = store.getState().user.token
    }

    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    // if (!res.Status) {
    //   message.error(res.Message || 'Error', 5);

    //   return new Error(res.message || 'Error')
    // } else {
    //   return res
    // }

    return res
  },
  error => {
    console.log('err' + error) // for debug
    message.error(error.message || 'Error', 5);
    return Promise.reject(error)
  }
)

export default service
