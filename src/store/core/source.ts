import { message } from "antd"
import { RequestData } from "api"
import { ChartType, DataSourceType, FieldType } from "types/chart"
import { isArray, isNumber, isObject, isString, validateType, validateUrl } from 'utils/validate'

/**
 * 
 * @param filterString 过滤器逻辑
 * @param data 过滤器数据参数
 */
// 执行过滤器
export function filterFun (filterString: string, data: any) : any {
    
    // 替换敏感字段
    const sensitive = ['eval', 'script', 'document', 'window', 'setInterval', 'setTimeout', 'dataFilter', 'this', 'Promise']
    sensitive.forEach((val: string) => filterString.replaceAll(val, val + 'replace'))
    // 添加过滤器
    filterString = 'function dataFilter (data) {' + filterString + '}'

    // 创建script标签, 添加到页面最顶端
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.text = filterString
    document.getElementsByTagName('head')[0].appendChild(script);

    let newData = null
    try {
        // 改变this指向, 执行过滤器
        newData = (window as any).dataFilter.call({}, data)
    } catch {
        throw new Error('过滤器执行错误')
    }

    // 执行完成, 删除script标签
    if (document.head.lastChild) {
        document.head.removeChild(document.head.lastChild)
    }

    return newData
}

// 设置映射字段
export const setMapField = (chart: ChartType, data: any) => {
    const { value, name } = data
    const mapFields = chart.source?.map_field || []
    mapFields.forEach((item: any) => {
        if (item.old_name === name) {
            item.new_name = value
        }
    })
}

// 字段验证
export const fieldsVilidate = (fields: FieldType[], data: any): boolean => {
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
export const dataVilidate = (source: DataSourceType, data: any): any => {
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
export const filterData = (source: DataSourceType, data: any): any => {
    if (source.auth_filter && source.filter_fun && source.filter_fun.length > 0) {
        const newData = filterFun(source.filter_fun, data)
        return dataVilidate(source, newData)
    } else {
        return dataVilidate(source, data)
    }
}

// 根据api获取数据
export const getDataSource = (source: DataSourceType) => {
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
