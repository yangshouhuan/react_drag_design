export const isObject = (value: any) : boolean => {
    return typeof value === 'object' && value !== null
}

export const isFunction = (value: any) => {
    return typeof value === 'function'
}

export const isString = (value: any) => {
    return typeof value === 'string'
}

export const isNumber = (value: any) => {
    return typeof value === 'number'
}

export const isArray = Array.isArray

const hasOwnProperty = Object.prototype.hasOwnProperty
export const hasOwn = (value: object, key: string) => hasOwnProperty.call(value, key)

export const invokeArrayFns = (fns: Function[]) => {
    for (let i = 0; i < fns.length; i++) {
        fns[i]()
    }
}

// 深拷贝
export function deepclone (obj: any) {
    function copyList(arr: any) : any {
        let result = []
        for (let item of arr) {
          result.push(deepclone(item))
        }
        return result
      }

      if (typeof obj === "object") {
        if (Array.isArray(obj)) {
          return copyList(obj)
        } else {
          let result: any = {}
          for (let key in obj) {
            result[key] = deepclone(obj[key])
          }
          return result
        }
      } else {
        return obj
      }
}

// 日期格式化
export function parseTime(time: any, cFormat?: string) : string {
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        time = parseInt(time)
      } else {
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj: any = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * 属性类型验证
 * @param type 
 * @param data 
 * @returns 
 */
export function validateType (type: string, data: any) : boolean {
    type = type.toLowerCase()
    
    switch (type) {
        case 'array':
            return isArray(data)
        case 'object':
            return isObject(data)
        case 'string':
            return isString(data)
        case 'number':
            return isNumber(data)
        case 'stringarray':
            return validateType('array', data) && !data.some((v: any) => !validateType('string', v))
        case 'numberarray':
            return validateType('array', data) && !data.some((v: any) => !validateType('number', v))
        default:
            return false
    }
}

export function validateUrl (url: string) : boolean {
    // const regExp = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/)
    // return regExp.test(url)
    return true;
}
