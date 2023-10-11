import { isArray, isFunction } from "./validate"

export function isObject(value) {
    const valueType = typeof value
    // 值不能为null，并且为对象或者函数类型
    return (value !== null) && (valueType === 'object' || valueType === 'function')
}

// 深拷贝
export function deepClone(originValue, wMap = new WeakMap()) {
    // 1.判断传入的是否是一个函数类型
    if (typeof originValue === 'function') {
        // 将函数直接返回即可
        return originValue
    }

    // 2.判断传入的是否是一个Map类型
    if (originValue instanceof Map) {
        return new Map([...originValue])
    }

    // 3.判断传入的是否是一个Set类型
    if (originValue instanceof Set) {
        return new Set([...originValue])
    }

    // 4.判断传入的值是否是一个Symbol类型
    if (typeof originValue === 'symbol') {
        // 返回一个新的Symbol，并且将其描述传递过去
        return Symbol(originValue.description)
    }

    // 5.判断传入的值是否是一个undefined
    if (typeof originValue === 'undefined') {
        return undefined
    }

    // 6.判断传入的是否是对象类型，如果不是，说明是普通类型的值，直接返回即可
    if (!isObject(originValue)) {
        return originValue
    }

    // 循环引用处理：判断wMap中是否存在原对象，如果存在就取出原对象对应的新对象返回
    if (wMap.has(originValue)) {
        return wMap.get(originValue)
    }

    // 7.定义一个变量，如果传入的是数组就定义为一个数组
    const newValue = Array.isArray(originValue) ? [] : {}

    // 循环引用处理：将原对象作为key，新对象作为value，存入wMap中
    wMap.set(originValue, newValue)

    // 8.循环遍历，如果是对象，就取出key和值存放到空对象中，如果是数组，就去除下标和元素放到空数组中
    // 注意：for...in遍历对象会将其继承的属性也遍历出来，所以需要加hasOwnProperty进行判断是否是自身的属性
    for (const key in originValue) {
        if (originValue.hasOwnProperty(key)) {
            // 递归调用deepClone，如果对象属性值中还包含对象，就会再次进行拷贝处理
            newValue[key] = deepClone(originValue[key], wMap)
        }
    }

    // 9.对key为Symbol类型的情况进行处理
    // 拿到所有为Symbol类型的key
    const symbolKeys = Object.getOwnPropertySymbols(originValue)
    // for...of遍历取出所有的key，存放到新对象中
    for (const sKey of symbolKeys) {
        newValue[sKey] = deepClone(originValue[sKey], wMap)
    }

    // 10.深拷贝完成，将得到新对象返回
    return newValue
}

// 插入元素
export function insert(arr, item, index) {
    return arr.splice(index, 0, item)
}

// 对象深度合并对象
export function objMerge (data, mergedata) {
    if (!isObject(mergedata) && !isArray(mergedata)) {
        return data
    }
    
    for (const key in mergedata) {
        const value = mergedata[key]
        if (
            data.hasOwnProperty(key)
            && isObject(value)
            && isObject(data[key])
            && !isArray(value)
            && !isArray(data[key])
            && !isFunction(value)
            && !isFunction(data[key])
        ) {
            objMerge(data[key], value)
        } else {
            data[key] = value
        }
    }
    return data
}