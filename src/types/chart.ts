// 分类图层
export interface AllChartType {
    id: string
    title: string
    children: BaseChartType[]
}

// 图层基本属性
export interface BaseChartType {
    id: number
    option_id: string
    component: string
    name: string
    config: any
    is_echarts?: boolean
    source?: DataSourceType     // 数据源
}

// 图层
export interface ChartType extends BaseChartType {
    father_ids: number[] 	    // 分组父id
    is_hide: boolean       		// 是否显示
    is_del: boolean        		// 是否删除
    is_lock: boolean       		// 是否锁定
    opacity: number             // 透明度
    transform: number           // 旋转度
    idx: number                 // 顺序
    bg_color?: string            // 背景颜色
    x: number   				// 偏移量、宽高
    y: number
    width: number      			
    height: number
    del_date?: string  			// 删除时间
    is_group: boolean            // 是否分组
    children?: ChartType[]      // 分组子元素
}

/**
    id: string    							// id
    timeid: string  						// 唯一id
    is_hide: boolean  						// 子组件是否显示
    father_id: string | null   				// 图层父id
    cmpt_id: string     					// 图层id
 */
export interface DataSourceType {
    [key: string]: any
    id: number
    father_ids: number[]                       // 父类id
    source_type?: string					// 数据源类型 static、api、sql
    request_type?: string  					// 请求类型 get、post
    api_url?: string  						// 接口地址
    sql_sentence?: string  					// sql语句
    auto_update?: boolean         			// 是否自动更新
    update_time?: number         			// 更新时间
    source_status?: boolean   				// 源数据配置状态
    field_status?: boolean 				    // 字段配置状态
    auth_filter?: boolean    				// 是否需要开启过滤器
    filter_fun?: string  					// 过滤器
    text: string   							// 标题
    request_match: boolean  				// 是否需要匹配
    data_fields: string  				    // 数据路径
    match_type: string   					// 数据匹配类型  any任意  match匹配
    data_manipula: string   				// 数据操作类型  replace替换  push往后添加  unshift往前添加
    data_type: string   					// 数据类型
    map_field?: FieldType[]  				// 映射字段列表
}

// 映射字段
export interface FieldType {
    id: number
    father_ids: number[] 
    old_name: string       		// 旧属性名
    new_name: string       		// 新属性名
    type: string          		// 属性类型
    text: string     			// 描述
    status: boolean 			// 字段匹配成功
}

// 行为
export interface ActionType {
    chart_id: number   			  	// 图层id
    f_ids: number[]                 // 所有的祖先id
    type: string   				    // 行为类型
    value: any                      // 数据
}

// 基本配置属性链
export interface BaseConfigType {
    title: string
    children: IsComponentType[]
}
export interface IsComponentType {
    fields: string
    text: string
    component: string
    options?: any[]
    types?: Record<string, any>
}