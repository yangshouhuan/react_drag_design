import * as T from '../constants'
import { createAction } from "redux-actions"
import { getActiveChart } from 'store/core/getters'
import { ChartType } from 'types/chart'
import { DataSourceType, FieldType } from 'types/chart'
import { RequestData } from 'api'
import { message } from 'antd'
import { isArray, isNumber, isObject, isString, validateType, validateUrl } from 'utils/validate'
import { doImportantConfig } from './chart_base'
import { filterFun } from 'store/core/source'

// https://localhost:44398/ChartDataSource/getHistogramData2

// 设置映射字段
const setMapField = (chart: ChartType, data: any) => {
    const { value, name } = data
    const mapFields = chart.source?.map_field || []
    mapFields.forEach((item: any) => {
        if (item.old_name === name) {
            item.new_name = value
        }
    })
}

// 字段验证
const fieldsVilidate = (fields: FieldType[], data: any): boolean => {
    let status = true
    // 字段验证
    fields.forEach((item: FieldType) => {
        const name = item.new_name.length > 0 ? item.new_name : item.old_name
        if (validateType(item.type, data[name])) {
            // 替换值
            if (name !== item.old_name) {
                data[item.old_name] = data[name]
                delete data[name]
            }
        } else {
            item.status = false
            status = false
        }
    })
    return status
}

// 类型验证
const dataVilidate = (source: DataSourceType, data: any): any => {
    source.source_status = false
    const data_type = source.data_type.toLowerCase()
    // 数据验证
    if (validateType(data_type, data)) {
        let status = true
        const map_field = source.map_field || []

        // 初始化字段验证状态
        map_field.forEach((item: FieldType) => {
            item.status = true
        })

        if (data_type === 'array') {
            // 字段验证
            data.forEach((val: any) => {
                if (!fieldsVilidate(map_field, val)) {
                    status = false
                }
            })
        } else if (data_type === 'object') {
            // 字段验证
            if (!fieldsVilidate(map_field, data)) {
                status = false
            }
        } else if (data_type === 'numberarray') {
            data.forEach((val: any) => {
                if (!isNumber(val)) {
                    status = false
                }
            })
        } else if (data_type === 'stringarray') {
            data.forEach((val: any) => {
                if (!isString(val)) {
                    status = false
                }
            })
        }
        
        source.source_status = status
    }

    return data
}

// 执行过滤器
const filterData = (source: DataSourceType, data: any): any => {
    if (source.auth_filter && source.filter_fun && source.filter_fun.length > 0) {
        const newData = filterFun(source.filter_fun, data)
        return dataVilidate(source, newData)
    } else {
        return dataVilidate(source, data)
    }
}

// 根据api获取数据
const getDataSource = (source: DataSourceType) => {
    return new Promise((resolve, reject) => {
        if (source.source_type !== 'static' && source.api_url && source.api_url.length > 0) {
            if (validateUrl(source.api_url || '')) {
                RequestData({ url: source.api_url, method: source.request_type })
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
            } else {
                message.error('接口验证失败')
                reject('接口验证失败')
            }
        }
    })
}

// 根据数据类型做逻辑
export const doSourceType = (value: any) => {
    return (dispatch: Function, getState: Function) => {
        const { data, type } = value
        const { chartData, activeId } = getState().chart
        const chart = getActiveChart(chartData, activeId) as ChartType
        const source = chart.source as DataSourceType

        switch (type) {
            case 'source_type':  // 数据类型
            case 'auth_filter':   // 使用过滤器
            case 'filter_fun':   // 过滤器逻辑
            case 'api_url':      // 请求地址
            case 'request_type':    // 请求类型
            case 'sql_sentence':   // sql语句
                source[type] = data
                // 请求数据
                getDataSource(source)
                    .then((data: any) => {
                        // 数据请求成功，修改数据
                        doImportantConfig({
                            fields: source.data_fields,
                            value: data
                        })(dispatch, getState)
                    })
                break
            // 设置字段
            case 'map_field':
                setMapField(chart, data)
                // 请求数据
                getDataSource(source)
                    .then((data: any) => {
                        // 数据请求成功，修改数据
                        doImportantConfig({
                            fields: source.data_fields,
                            value: data
                        })(dispatch, getState)
                    })
                break
            case 'auto_update':  // 自动更新
            case 'update_time':  // 更新时间
                source[type] = data
                break
        }
        
        chart.source = Object.assign({}, chart.source)
        dispatch(createAction(T.CHART_SOURCE_FIELD)({
            chartData: [...chartData],
            activeChart: Object.assign({}, chart)
        }))
    }
}