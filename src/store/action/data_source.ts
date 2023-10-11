import * as T from '../constants'
import { createAction } from "redux-actions"
import { RequestData } from 'api'
import { message } from 'antd'
import { isArray, validateUrl } from 'utils/validate'
import { doImportantConfig } from './chart_base'
import { dataVilidate, filterData, filterFun, getSource, setMapField } from 'store/core/source'
import { ChartSourceType } from 'types/source'

// 根据api获取数据
const getDataSource = (source: any) => {
    return new Promise((resolve, reject) => {
        if (source.source_type === 'static') return

        if (!validateUrl(source.request_url || '')) {
            return reject('接口验证失败')
        }

        RequestData({ url: source.request_url, method: source.request_method })
        .then((res: any) => {
            if (res.status) {
                const data = res.data
                // 执行过滤器
                resolve(filterData(source, data))
            } else {
                message.error(res.message || '数据请求失败')
            }
        }).catch((error) => {
            message.error('数据请求失败')
            reject(error)
        })
    })
}

// 根据数据类型做逻辑
export const doSourceType = (value: any) => {
    return (dispatch: Function, getState: Function) => {
        const { data, type } = value
        const { chartData, activeChart, sourceIndex } = getState().chart
        const source = getSource(activeChart.source, sourceIndex)

        if (source) {
            switch (type) {
                case 'source_type':  // 数据类型
                case 'auto_filter':   // 使用过滤器
                case 'filter_fun':   // 过滤器逻辑
                case 'request_url':      // 请求地址
                case 'request_method':    // 请求类型
                    source[type] = data
                    // 请求数据
                    getDataSource(source)
                        .then((data: any) => {
                            // 数据请求成功，修改数据
                            doImportantConfig({
                                fields: source.update_fields,
                                value: data
                            })(dispatch, getState)
                        })
                    break
                // 设置字段
                case 'update_fields':
                    setMapField(source, data)
                    // 请求数据
                    getDataSource(source)
                        .then((data: any) => {
                            // 数据请求成功，修改数据
                            doImportantConfig({
                                fields: source.update_fields,
                                value: data
                            })(dispatch, getState)
                        })
                    break
                case 'auto_update':  // 自动更新
                case 'update_time':  // 更新时间
                    source[type] = data
                    break
            }
            
            if (isArray(activeChart.source)) {
                activeChart.source[sourceIndex] = Object.assign({}, source)
                activeChart.source = Array.from(activeChart.source)
            } else {
                activeChart.source = Object.assign({}, source)
            }
            dispatch(createAction(T.CHART_SOURCE_FIELD)([...chartData]))
        }
    }
}