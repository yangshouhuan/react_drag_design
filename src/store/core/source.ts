import { message } from "antd"
import { RequestData } from "api"
import map from "chart-config-json/map"
import { ChartType } from "types/chart"
import { ChartSourceMapType, ChartSourceType } from "types/source"
import { hasOwn, isArray, isNumber, isObject, isString, validateType, validateUrl } from 'utils/validate'

// 获取source
export const getSource = (source: any, index = 0) => {
    if (isArray(source)) {
        return source[index]
    } else if (isObject(source)) {
        return source
    }
    return null
}

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
export const setMapField = (source: ChartSourceType, data: any) => {
    const { value: map_fields, fields } = data
    const list = source.result_structure || []
    list.forEach((item: ChartSourceMapType) => {
        if (item.fields === fields) {
            item.map_fields = map_fields
        }
    })
}

// 字段验证
export const fieldsVilidate = (sourceMap: ChartSourceMapType[], data: any): boolean => {
    let resultStatus = true
    // 字段验证
    sourceMap.forEach((item: ChartSourceMapType) => {
        const fields = isString(item.map_fields) && item.map_fields.length > 0 ? item.map_fields : item.fields
        if (validateType(item.data_type, data[fields])) {
            item.status = true
            // 替换值
            if (fields !== item.fields) {
                data[item.fields] = data[fields]
                // delete data[fields]
            }
        } else {
            item.status = resultStatus = false
        }
    })
    return resultStatus
}

// 类型验证
export const dataVilidate = (source: ChartSourceType, data: any): any => {
    source.source_status = false
    const data_type = source.data_type.toLowerCase()
    // 数据验证
    if (validateType(data_type, data)) {
        let status = true
        const result_structure = source.result_structure || []

        if (data_type === 'array') {
            // 字段验证
            data.forEach((val: any) => {
                status = fieldsVilidate(result_structure, val)
            })
        } else if (data_type === 'object') {
            // 字段验证
            status = fieldsVilidate(result_structure, data)
        } else if (data_type === 'numberarray') {
            data.forEach((val: any) => {
                status = isNumber(val)
            })
        } else if (data_type === 'stringarray') {
            data.forEach((val: any) => {
                status = isString(val)
            })
        }
        
        source.source_status = status
    }

    return data
}

// 执行过滤器
export const filterData = (source: ChartSourceType, data: any): any => {
    if (source.auto_filter && source.filter_fun && source.filter_fun.length > 0) {
        const newData = filterFun(source.filter_fun, data)
        return dataVilidate(source, newData)
    } else {
        return dataVilidate(source, data)
    }
}

// 根据字段路径分割，并且获取字段路径后的option
const spliceFieldsGetOption = (option: any, fields_path: string) => {
    const arr = fields_path.split('-') || []
    const lastFields = arr.splice(arr.length - 1, 1)[0]
    arr.forEach((fields: string) => {
        option = option[fields]
    })
    return [option, lastFields]
}

// 字段判断
const fieldsVilidate1 = (data: any, mapItem: ChartSourceMapType) => {
    if(validateType(mapItem.data_type, data)) {
        mapItem.status = validateType(mapItem.data_type, data)
    } else {
        mapItem.status = false
    }
}

const defaultHandler = (data: any, mapItem: ChartSourceMapType) => {
    let {
        fields,
        map_fields,
        require,
        data_type,
        content_type,
        de_weight,
        default: defaultValue,
        update_fields,
        update_type
    } = mapItem
    fields = isString(map_fields) && map_fields.length > 0 ? map_fields : fields
    mapItem.status = true
    
    let newData = data.map((item: any) => {
        if (hasOwn(item, fields)) {
            const value = item[fields]
            if (validateType(content_type || 'any', value)) {
                mapItem.status = mapItem.status && true
            } else {
                mapItem.status = false
            }
            return value
        }
        if (require) {
            mapItem.status = false
        }
        return mapItem.default
    })
    mapItem.status = validateType(mapItem.data_type, newData)

    if (de_weight && isArray(newData)) {
        return new Set(newData)
    }

    return newData
}

// 根据数据源规则设置chart.option值
export const reflectSource = (chart: ChartType, source: ChartSourceType, resultValue?: any) => {
    let {
        default: defaultValue,
        multi_source,
        result_structure,
        handle,
        update_fields
    } = source

    if (multi_source) {
        result_structure?.forEach((item: any) => {
            const ownHandle = item.handle ? item.handle : defaultHandler
            const [option, lastFields] = spliceFieldsGetOption(chart.option, item.update_fields)
            option[lastFields] = ownHandle(defaultValue, item)
        })
    } else {
        handle = handle ? handle : (data: any, item?: ChartSourceMapType) => (data)
        defaultValue = resultValue ? handle(resultValue) : handle(defaultValue)
        const [option, lastFields] = spliceFieldsGetOption(chart.option, update_fields)
        option[lastFields] = defaultValue
    }

    return chart
}