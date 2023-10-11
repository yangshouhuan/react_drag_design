/**
 * 
    desc: string   							// 描述
    source_type?: string					// 数据源类型 static、api、sql
    request_method?: string  				// 请求类型 get、post
    request_url?: string  					// 接口地址
    auto_update?: boolean         			// 是否自动更新
    update_time?: number         			// 更新时间
    source_status?: boolean   				// 源数据配置状态
    fields_status?: boolean 				// 字段配置状态
    auto_filter?: boolean    				// 是否需要开启过滤器
    filter_fun?: string  					// 过滤器
    update_fields: string  				    // 数据路径
    update_type: string   				    // 数据操作类型  replace替换  push往后添加  unshift往前添加
    data_type: string   					// 数据类型
    result_structure?: ChartSourceMapType[]  		// 映射字段列表
*/

// 数据源格式
export interface ChartSourceType {
    [key: string]: any
    name: string                            // 描述
    multi_source?: boolean                          // 是否只更新一个数据源
    content_type?: string                   // 数据内容类型
    de_weight?: boolean                      // 去重
    default?: any                            // 默认值
    
    hide?: boolean
    update_type: string                     // 更新类型 replace替换  push往后添加  unshift往前添加
    source_type?: string					// 数据源类型 static、api、sql
    request_method?: string  				// 请求类型 get、post
    request_url?: string  				    // 接口地址
    auto_update?: boolean         			// 是否自动更新
    update_time?: number         			// 更新时间
    source_status?: boolean   				// 源数据配置状态
    fields_status?: boolean 				// 字段配置状态
    auto_filter?: boolean    				// 是否需要开启过滤器
    filter_fun?: string  					// 过滤器
    update_fields: string  				    // 数据路径
    data_type: string   					// 数据类型
    result_structure?: ChartSourceMapType[]  		// 映射字段列表
    handle?: (data: any, item?: any) => any
}

// 数据源映射字段
export interface ChartSourceMapType {
    name: string
    fields: string
    map_fields: string
    status: boolean
    data_type: string           // 数据类型
    update_fields?: string      // 更新字段路径
    content_type?: string       // array内容类型
    require?: boolean           // 必须字段 false
    de_weight?: boolean         // 去重 false
    default?: any               // 默认值 根据类型判断
    update_type?: string        // 更新类型 replace、push、unshift
    handle?: (data: any, item?: ChartSourceMapType) => any
}

export enum UpdateType {
    REPLACE,  // 替换
    PUSH,  // 后面添加
    UNSHIFT  // 前面添加
}
    