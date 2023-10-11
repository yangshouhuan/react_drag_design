import {
    title_config,
    tooltip_config,
    geo_config,
    series_effectScatter_config,
    series_lines_config,
    visualMap_config
} from './shared/common_config'
import {
    getTitle,
    getTooltip,
    getVisualMap,
    getGeo,
    getEffectScatter,
    getLines
} from './shared/common_option'

const getResultPoint = (data) => {
    return data.map(item => ({
        name: item.name,
        value: [item.log, item.lat, item.v]
    }))
}
const getResultLines = (data) => {
    return data.map(item => ({
        fromName: item.from,
        toName: item.to,
        coords: [item.f_log_lat, item.t_log_lat], value: item.v
    }))
}
const result1_point = [
    { name: '广州', lat: 23.157371, log: 113.324159, v: 100 },
    { name: '杭州', lat: 30.255799, log: 120.167953, v: 100 },
    { name: '成都', lat: 30.638372, log: 104.088716, v: 100 },
    { name: '长沙', lat: 28.190172, log: 112.956213, v: 100 },
    { name: '北京', lat: 39.914023, log: 116.403039, v: 100 },
    { name: '郑州', lat: 34.77438, log: 113.65531, v: 100 },
    { name: '济南', lat: 36.679476, log: 117.150797, v: 100 },
    { name: '福州', lat: 26.133246, log: 119.266486, v: 100 }
]
const result1_lines = [
    { from: '广州', to: '北京', f_log_lat: [113.324159, 23.157371], t_log_lat: [116.403039, 39.914023], v: 100 },
    { from: '广州', to: '济南', f_log_lat: [113.324159, 23.157371], t_log_lat: [117.150797, 36.679476], v: 100 },
    { from: '广州', to: '杭州', f_log_lat: [113.324159, 23.157371], t_log_lat: [120.167953, 30.255799], v: 100 },
    { from: '广州', to: '杭州', f_log_lat: [113.324159, 23.157371], t_log_lat: [119.266486, 26.133246], v: 100 },
    { from: '成都', to: '济南', f_log_lat: [104.088716, 30.638372], t_log_lat: [117.150797, 36.679476], v: 100 },
    { from: '成都', to: '福州', f_log_lat: [104.088716, 30.638372], t_log_lat: [119.266486, 26.133246], v: 100 },
    { from: '北京', to: '杭州', f_log_lat: [116.403039, 39.914023], t_log_lat: [120.167953, 30.255799], v: 100 },
    { from: '北京', to: '成都', f_log_lat: [116.403039, 39.914023], t_log_lat: [104.088716, 30.638372], v: 100 },
    { from: '北京', to: '福州', f_log_lat: [116.403039, 39.914023], t_log_lat: [119.266486, 26.133246], v: 100 },
]
const result2_point = [
    { name: '鼓楼区', log: 117.18, lat: 34.28, v:90 },
    { name: '铜山区', log: 117.19, lat: 34.18, v:80 },
    { name: '云龙区', log: 117.22, lat: 34.25, v:70 },
    { name: '九里区', log: 117.13, lat: 34.3, v:60 },
    { name: '贾汪区', log: 117.45, lat: 34.45, v:50 },
    { name: '泉山区', log: 117.18, lat: 34.25, v:60 },
    { name: '丰县', log: 116.6, lat: 34.7, v:70 },
    { name: '沛县', log: 116.93, lat: 34.73, v:80 },
    { name: '睢宁县', log: 117.95, lat: 33.9, v:90 },
    { name: '新沂市', log: 118.35, lat: 34.38, v:100 },
    { name: '邳州市', log: 117.95, lat: 34.32, v:90 },
]
const result2_lines = [
    { from: '', to: '', f_log_lat: [117.227621, 34.25803], t_log_lat: [117.18, 34.27], v: 0 },
    { from: '', to: '', f_log_lat: [117.227621, 34.25803], t_log_lat: [117.18, 34.28], v: 0 },
    { from: '', to: '', f_log_lat: [117.227621, 34.25803], t_log_lat: [117.192533, 34.187534], v: 0 },
    { from: '', to: '', f_log_lat: [117.227621, 34.25803], t_log_lat: [117.22, 34.25], v: 0 },
    { from: '', to: '', f_log_lat: [117.227621, 34.25803], t_log_lat: [117.13, 34.3], v: 0 },
    { from: '', to: '', f_log_lat: [117.227621, 34.25803], t_log_lat: [117.45, 34.45], v: 0 },
    { from: '', to: '', f_log_lat: [117.227621, 34.25803], t_log_lat: [117.18, 34.25], v: 0 },
    { from: '', to: '', f_log_lat: [117.227621, 34.25803], t_log_lat: [116.6, 34.7], v: 0 },
    { from: '', to: '', f_log_lat: [117.227621, 34.25803], t_log_lat: [116.93, 34.73], v: 0 },
    { from: '', to: '', f_log_lat: [117.227621, 34.25803], t_log_lat: [117.95, 33.9], v: 0 },
    { from: '', to: '', f_log_lat: [117.227621, 34.25803], t_log_lat: [118.35, 34.38], v: 0 },
    { from: '', to: '', f_log_lat: [117.227621, 34.25803], t_log_lat: [117.95, 34.32], v: 0 },
]
const result3_point = [
    { name: '广州', lat: 23.157371, log: 113.324159, v: 100 },
    { name: '杭州', lat: 30.255799, log: 120.167953, v: 100 },
    { name: '成都', lat: 30.638372, log: 104.088716, v: 100 },
    { name: '长沙', lat: 28.190172, log: 112.956213, v: 100 },
    { name: '北京', lat: 39.914023, log: 116.403039, v: 100 },
    { name: '郑州', lat: 34.77438, log: 113.65531, v: 100 },
    { name: '济南', lat: 36.679476, log: 117.150797, v: 100 },
    { name: '福州', lat: 26.133246, log: 119.266486, v: 100 }
]
const result3_lines = [
    { from: '广州', to: '北京', f_log_lat: [113.324159, 23.157371], t_log_lat: [116.403039, 39.914023], v: 100 },
    { from: '广州', to: '济南', f_log_lat: [113.324159, 23.157371], t_log_lat: [117.150797, 36.679476], v: 100 },
    { from: '广州', to: '杭州', f_log_lat: [113.324159, 23.157371], t_log_lat: [120.167953, 30.255799], v: 100 },
    { from: '广州', to: '杭州', f_log_lat: [113.324159, 23.157371], t_log_lat: [119.266486, 26.133246], v: 100 },
    { from: '成都', to: '济南', f_log_lat: [104.088716, 30.638372], t_log_lat: [117.150797, 36.679476], v: 100 },
    { from: '成都', to: '福州', f_log_lat: [104.088716, 30.638372], t_log_lat: [119.266486, 26.133246], v: 100 },
    { from: '北京', to: '杭州', f_log_lat: [116.403039, 39.914023], t_log_lat: [120.167953, 30.255799], v: 100 },
    { from: '北京', to: '成都', f_log_lat: [116.403039, 39.914023], t_log_lat: [104.088716, 30.638372], v: 100 },
    { from: '北京', to: '福州', f_log_lat: [116.403039, 39.914023], t_log_lat: [119.266486, 26.133246], v: 100 },
]

const map = [
    {
        chart_id: 301,
        config_id: 301,
        chart_name: '中国飞线图',

        chart_img: 'china.png',
        chart_idx: 1,
        is_group: false,
        is_hide: false,
        is_lock: false,
        is_del: false,
        is_echart: true,
        x: 0,
        y: 0,
        width: 1920,
        height: 1080,
        rotate: 0,
        bg_color: '',
        opacity: 1,
        chart_status: true,
        create_uid: 1,
        component: 'my_map',
        create_time: '2022-12-12 15:33:30',
        map_url: 'http://www.yshcz.com.cn/assetss/json/geoJSON.json',

        option: {
            backgroundColor: '',
            title: getTitle(),
            tooltip: getTooltip({trigger: 'item'}),

            geo: getGeo({
                show: true,  // 是否显示地理坐标系组件
                map: 'china_map', // 地图d
                roam: false, //是否开启鼠标缩放和平移漫游
                zoom: 1.1,  // 缩放比例
                // top: '3%', //组件距离容器的距离

                // 自定义地图投影，至少需要提供project, unproject两个方法分别用来计算投影后的坐标以及计算投影前的坐标。
                // projection: {
                //     project: (point) => [point[0] / 180 * Math.PI, -Math.log(Math.tan((Math.PI / 2 + point[1] / 180 * Math.PI) / 2))],
                //     unproject: (point) => [point[0] * 180 / Math.PI, 2 * 180 / Math.PI * Math.atan(Math.exp(point[1])) - 90]
                // },
                aspectScale: 0.75,  // 这个参数用于 scale 地图的长宽比
                // itemStyle: {
                //     areaColor: '#00196D',
                //     color: 'green',
                //     borderColor: 'rgb(147, 235, 248)',
                //     borderWidth: 1,
                //     borderType: 'solid',
                //     shadowBlur: 10,
                //     shadowColor: 'rgba(0, 0, 0, 0.5)',
                //     shadowOffsetX: 10,
                //     shadowOffsetY: 10,
                //     opacity: 0.8
                // },
                emphasis: {   // 移入时的
                    areaColor: 'rgb(46,229,206)',
                    borderWidth: 0.1,
                    label: {
                        show: false, // 显示标签
                        position: 'top',
                        color: '#ffffff',
                        fontSize: 12,
                    },
                    itemStyle: {
                        borderColor: 'rgb(147, 235, 248)',
                        borderWidth: 1,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#00196D' // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#00196D'  // 100% 处的颜色
                                }
                            ],
                            globalCoord: true // 缺省为 false
                        }
                    }
                },
            }),
            series: [
                // 点
                getEffectScatter({
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    showEffectOn: 'render',
                    zlevel: 1,
                    rippleEffect: {
                        period: 15,
                        scale: 4,
                        brushType: 'fill'
                    },
                    label: {
                        formatter: '{b}',
                        position: 'right',
                        offset: [15, 0],
                        color: '#1DE9B6',
                        show: true
                    },
                    itemStyle: {
                        color: '#54CAFF',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    },
                    symbolSize: 6,  // 点大小
                    data: getResultPoint(result1_point)
                }),
                getLines({
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 4, //箭头指向速度，值越小速度越快
                        trailLength: 0.2, //特效尾迹长度[0,1]值越大，尾迹越长重
                        symbol: 'arrow', //箭头图标
                        symbolSize: 4, //图标大小
                        color: '#54CAFF'
                    },
                    lineStyle: {
                        color: '#54CAFF',
                        width: 1, //线条宽度
                        opacity: 0.1, //尾迹线条透明度
                        curveness: 0.3 //尾迹线条曲直度
                    },
                    data: getResultLines(result1_lines)
                })
            ]
        },
        config: [],
        source: [
            {
                name: '点',
                // multi_source: true,  // 是否有多个数据源
                data_type: 'array',  // 数据响应类型
                content_type: 'object',  // 数据类型 单一数据时使用

                result_structure: [
                    {
                        fields: 'name',
                        map_fields: '',
                        status: true,
                        require: false,
                        data_type: 'string',
                        name: '省名称',
                        de_weight: true,
                        default: '',
                        update_type: 'replace'
                    },
                    {
                        fields: 'lat',
                        map_fields: '',
                        status: true,
                        require: true,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '纬度',
                        default: 0,
                        update_type: 'replace'
                    },
                    {
                        fields: 'log',
                        map_fields: '',
                        status: true,
                        require: true,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '经度',
                        default: 0,
                        update_type: 'replace'
                    },
                    {
                        fields: 'v',
                        map_fields: '',
                        status: true,
                        require: false,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '值',
                        default: 0,
                        update_type: 'replace'
                    },
                ],

                source_type: 'static', // 数据来源类型
                request_url: '', // 请求地址
                request_method: 'get',  // 请求方式
                
                update_fields: 'series-0-data',
                update_time: 10,  // 更新时间
                auto_update: false, // 是否更新
            
                source_status: true,  // 数据源状态
                fields_status: true,  // 映射字段状态
            
                filter_fun: 'return data',  // 过滤器
                auto_filter: false,  // 使用过滤器

                default: [...result1_point],
                handle: getResultPoint
            },
            {
                name: '飞线',
                // multi_source: true,  // 是否有多个数据源
                data_type: 'array',  // 数据响应类型
                content_type: 'object',  // 数据类型 单一数据时使用

                result_structure: [
                    {
                        fields: 'from',
                        map_fields: '',
                        status: true,
                        require: false,
                        data_type: 'string',
                        name: '出发点名称',
                        default: '',
                        update_type: 'replace'
                    },
                    {
                        fields: 'to',
                        map_fields: '',
                        status: true,
                        require: false,
                        data_type: 'string',
                        name: '终点名称',
                        default: '',
                        update_type: 'replace'
                    },
                    {
                        fields: 'f_log_lat',
                        map_fields: '',
                        status: true,
                        require: true,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '出发点经纬度',
                        default: [],
                        update_type: 'replace'
                    },
                    {
                        fields: 't_log_lat',
                        map_fields: '',
                        status: true,
                        require: true,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '终点经纬度',
                        default: [],
                        update_type: 'replace'
                    },
                    {
                        fields: 'log',
                        map_fields: '',
                        status: true,
                        require: true,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '经度',
                        default: 0,
                        update_type: 'replace'
                    },
                    {
                        fields: 'v',
                        map_fields: '',
                        status: true,
                        require: false,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '值',
                        default: 0,
                        update_type: 'replace'
                    },
                ],

                source_type: 'static', // 数据来源类型
                request_url: '', // 请求地址
                request_method: 'get',  // 请求方式
                
                update_fields: 'series-0-data',
                update_time: 10,  // 更新时间
                auto_update: false, // 是否更新
            
                source_status: true,  // 数据源状态
                fields_status: true,  // 映射字段状态
            
                filter_fun: 'return data',  // 过滤器
                auto_filter: false,  // 使用过滤器

                default: [...result1_lines],
                handle: getResultLines
            }
        ]
    },
    {
        chart_id: 302,
        config_id: 302,
        chart_name: '省区3D飞线图',

        chart_img: 'suzhou.png',
        chart_idx: 1,
        is_group: false,
        is_hide: false,
        is_lock: false,
        is_del: false,
        is_echart: true,
        x: 0,
        y: 0,
        width: 1920,
        height: 1080,
        rotate: 0,
        bg_color: '',
        opacity: 1,
        chart_status: true,
        create_uid: 1,
        component: 'my_map3D',
        create_time: '2022-12-12 15:33:30',
        map_url: 'http://www.yshcz.com.cn/assetss/json/xuzhou.json',
        
        option: {
            visualMap: getVisualMap({
                min: 0,
                max: 100,
                inRange: {
                    color: ['#66a6fa', '#0E1E40'],
                },
            }),
            tooltip: getTooltip({
                borderWidth: '1',
                borderColor: 'rgba(255,255,255,0.3)',
                formatter: '{b0}: {c0}', //地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）
                textStyle: {
                    fontSize: '16px',
                    color: '#4d89f8',
                    fontFamily: 'Arial'
                },
            }),
            title: getTitle({
                show: true,
                x: 'center',
                y: 'top',
                text: '苏州省行政区域图',
                textStyle: {
                    color: '#2980b9',
                    fontSize: 18,
                },
            }),

            geo3D: {
                map: 'xuzhou_map',
                show: false,
                zlevel: -10,
                // boxWidth: 200,
                // boxHeight: 30, //4:没有bar. 30:有bar,bar最高度30，按比例分配高度
                // regionHeight: 5,
                // shading: "lambert",
                viewControl: {
                    projection: "perspective",
                    autoRotate: false,
                    damping: 0,
                    rotateSensitivity: 0, //旋转操作的灵敏度
                    rotateMouseButton: "left", //旋转操作使用的鼠标按键
                    zoomSensitivity: 0, //缩放操作的灵敏度
                    panSensitivity: 0, //平移操作的灵敏度
                    panMouseButton: "right", //平移操作使用的鼠标按键

                    distance: 100, //默认视角距离主体的距离
                    center: [0, 0, 0],

                    animation: true,
                    animationDurationUpdate: 1000,
                    animationEasingUpdate: "cubicInOut",
                }
            },
            series: [
                {
                    type: "map3D",
                    map: 'xuzhou_map',
                    name: 'xuzhou_map',
                    show: true,
                    selectedMode: "single", //地图高亮单选
                    zlevel: 1,
                    // boxWidth: 200,
                    // regionHeight: 5,
                    // shading: "lambert",
                    // boxDepth: 60, //地图倾斜度

                    label: {
                        show: false, //是否显示市
                        color: '#faf4f4',
                        fontSize: 16, //文字大小
                        fontFamily: '微软雅黑',
                        backgroundColor: "rgba(0,0,0,0)", //透明度0清空文字背景
                    },
                    itemStyle: {
                        color: "#4575b4", //地图颜色
                        borderWidth: 1.5, //分界线宽度
                        borderColor: "#459bca", //分界线颜色
                        areaColor: "#025894",
                    },
                    light: {
                        main: {
                            shadow: true,
                            shadowQuality: "ultra",
                        },
                    },
                    // realisticMaterial: {
                    //     detailTexture: 'imgs/19.jpeg',
                    //     textureTiling: 1,
                    //     roughness: 1,
                    //     metalness: 0,
                    //     roughnessAdjust: 0,
                    // },
                    // emphasis: {
                    //     label: {
                    //         show: true,

                    //         textStyle: {
                    //             color: "#fff",
                    //             fontSize: 14,
                    //             backgroundColor: "transparent", // 字体背景色
                    //         },
                    //     },
                    //     shading: "lambert",

                    //     borderColor: "#333",
                    //     borderWidth: 5,
                    //     itemStyle: {
                    //         color: "#025894",
                    //         areaColor: "#025894",
                    //     },
                    // },
                    viewControl: {
                        projection: "perspective",
                        autoRotate: false,
                        damping: 0,
                        rotateSensitivity: 0, //旋转操作的灵敏度
                        rotateMouseButton: "left", //旋转操作使用的鼠标按键
                        zoomSensitivity: 0, //缩放操作的灵敏度
                        panSensitivity: 0, //平移操作的灵敏度
                        panMouseButton: "right", //平移操作使用的鼠标按键

                        distance: 100, //默认视角距离主体的距离
                        center: [0, 0, 0],

                        animation: true,
                        animationDurationUpdate: 1000,
                        animationEasingUpdate: "cubicInOut",
                    },
                },
                {  // 点
                    type: 'bar3D',
                    name: 'xuzhou_map',
                    coordinateSystem: 'geo3D',
                    shading: 'lambert',
                    barSize: 0.1,
                    bevelSize: 0.5,
                    bevelSmoothness: 10,
                    minHeight: 3,
                    emphasis: {},
                    zlevel: 2,
                    itemStyle: {
                        color: '#54CAFF',
                        opacity: 1,
                    },
                    label: {
                        show: true,
                        formatter: '{b}',
                        position: 'right',
                        offset: [15, 0],
                        color: '#ffffff',
                        textStyle: {
                            fontSize: 16
                        }
                    },
                    data: getResultPoint(result2_point)
                },
                { // 线
                    type: 'lines3D',
                    name: 'xuzhou_map',
                    coordinateSystem: 'geo3D',
                    // polyline: true,
                    blendMode: 'lighter',
                    zlevel: 1,
                    ployline: false,
                    // 飞线的尾迹特效。
                    effect: {
                        show: true,
                        period: 1, // 尾迹特效的周期
                        // constantSpeed: 5, // 轨迹特效的移动动画是否是固定速度，单位按三维空间的尺寸，设置为非 null 的值后会忽略 period 配置项。
                        trailWidth: 3,
                        trailLength: 0.1,
                        trailColor: '#ffffff',
                        trailOpacity: 1
                    },
                    // 飞线的线条样式。
                    lineStyle: {
                        color: '#F72C5B',
                        width: 1, //线条宽度
                        opacity: 0.5, //尾迹线条透明度
                        curveness: 0.3
                    },
                    data: getResultLines(result2_lines)
                }
            ],
        },
        config: [],
        source: [
            {
                name: '点',
                // multi_source: true,  // 是否有多个数据源
                data_type: 'array',  // 数据响应类型
                content_type: 'object',  // 数据类型 单一数据时使用

                result_structure: [
                    {
                        fields: 'name',
                        map_fields: '',
                        status: true,
                        require: false,
                        data_type: 'string',
                        name: '省名称',
                        de_weight: true,
                        default: '',
                        update_type: 'replace'
                    },
                    {
                        fields: 'lat',
                        map_fields: '',
                        status: true,
                        require: true,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '纬度',
                        default: 0,
                        update_type: 'replace'
                    },
                    {
                        fields: 'log',
                        map_fields: '',
                        status: true,
                        require: true,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '经度',
                        default: 0,
                        update_type: 'replace'
                    },
                    {
                        fields: 'v',
                        map_fields: '',
                        status: true,
                        require: false,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '值',
                        default: 0,
                        update_type: 'replace'
                    },
                ],

                source_type: 'static', // 数据来源类型
                request_url: '', // 请求地址
                request_method: 'get',  // 请求方式
                
                update_fields: 'series-1-data',
                update_time: 10,  // 更新时间
                auto_update: false, // 是否更新
            
                source_status: true,  // 数据源状态
                fields_status: true,  // 映射字段状态
            
                filter_fun: 'return data',  // 过滤器
                auto_filter: false,  // 使用过滤器

                default: [...result2_point],
                handle: getResultPoint
            },
            {
                name: '飞线',
                // multi_source: true,  // 是否有多个数据源
                data_type: 'array',  // 数据响应类型
                content_type: 'object',  // 数据类型 单一数据时使用

                result_structure: [
                    {
                        fields: 'from',
                        map_fields: '',
                        status: true,
                        require: false,
                        data_type: 'string',
                        name: '出发点名称',
                        default: '',
                        update_type: 'replace'
                    },
                    {
                        fields: 'to',
                        map_fields: '',
                        status: true,
                        require: false,
                        data_type: 'string',
                        name: '终点名称',
                        default: '',
                        update_type: 'replace'
                    },
                    {
                        fields: 'f_log_lat',
                        map_fields: '',
                        status: true,
                        require: true,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '出发点经纬度',
                        default: [],
                        update_type: 'replace'
                    },
                    {
                        fields: 't_log_lat',
                        map_fields: '',
                        status: true,
                        require: true,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '终点经纬度',
                        default: [],
                        update_type: 'replace'
                    },
                    {
                        fields: 'log',
                        map_fields: '',
                        status: true,
                        require: true,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '经度',
                        default: 0,
                        update_type: 'replace'
                    },
                    {
                        fields: 'v',
                        map_fields: '',
                        status: true,
                        require: false,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '值',
                        default: 0,
                        update_type: 'replace'
                    },
                ],

                source_type: 'static', // 数据来源类型
                request_url: '', // 请求地址
                request_method: 'get',  // 请求方式
                
                update_fields: 'series-2-data',
                update_time: 10,  // 更新时间
                auto_update: false, // 是否更新
            
                source_status: true,  // 数据源状态
                fields_status: true,  // 映射字段状态
            
                filter_fun: 'return data',  // 过滤器
                auto_filter: false,  // 使用过滤器

                default: [...result2_lines],
                handle: getResultLines
            }
        ]
    },
    {
        chart_id: 303,
        config_id: 303,
        chart_name: '中国3D飞线图',

        chart_img: 'china_3d.png',
        chart_idx: 1,
        is_group: false,
        is_hide: false,
        is_lock: false,
        is_del: false,
        is_echart: true,
        x: 0,
        y: 0,
        width: 1920,
        height: 1080,
        rotate: 0,
        bg_color: '',
        opacity: 1,
        chart_status: true,
        create_uid: 1,
        component: 'my_map3D',
        create_time: '2022-12-12 15:33:30',
        map_url: 'http://www.yshcz.com.cn/assetss/json/geoJSON.json',

        option: {
            visualMap: getVisualMap(),
            tooltip: getTooltip(),
            title: getTitle(),

            geo3D: {
                map: 'china_map',
                show: false,
                zlevel: -10,
                viewControl: {
                    projection: "perspective",
                    autoRotate: false,
                    damping: 0,
                    rotateSensitivity: 0, //旋转操作的灵敏度
                    rotateMouseButton: "left", //旋转操作使用的鼠标按键
                    zoomSensitivity: 0, //缩放操作的灵敏度
                    panSensitivity: 0, //平移操作的灵敏度
                    panMouseButton: "right", //平移操作使用的鼠标按键
                    alpha: 80,  // 仰望弧度

                    distance: 100, //默认视角距离主体的距离
                    center: [0, 0, 0],

                    animation: true,
                    animationDurationUpdate: 1000,
                    animationEasingUpdate: "cubicInOut",
                }
            },
            series: [
                {
                    type: "map3D",
                    map: 'china_map',
                    name: 'china_map',
                    show: true,
                    selectedMode: "single", //地图高亮单选
                    zlevel: 1,

                    label: {
                        show: false, //是否显示市
                        color: '#faf4f4',
                        fontSize: 16, //文字大小
                        fontFamily: '微软雅黑',
                        backgroundColor: "rgba(0,0,0,0)", //透明度0清空文字背景
                    },
                    itemStyle: {
                        color: "#4575b4", //地图颜色
                        borderWidth: 1.5, //分界线宽度
                        borderColor: "#459bca", //分界线颜色
                        areaColor: "#025894",
                    },
                    light: {
                        main: {
                            shadow: true,
                            shadowQuality: "ultra",
                        },
                    },
                    viewControl: {
                        projection: "perspective",
                        autoRotate: false,
                        damping: 0,
                        rotateSensitivity: 0, //旋转操作的灵敏度
                        rotateMouseButton: "left", //旋转操作使用的鼠标按键
                        zoomSensitivity: 0, //缩放操作的灵敏度
                        panSensitivity: 0, //平移操作的灵敏度
                        panMouseButton: "right", //平移操作使用的鼠标按键
                        alpha: 60,

                        distance: 100, //默认视角距离主体的距离
                        center: [0, 0, 0],

                        animation: true,
                        animationDurationUpdate: 1000,
                        animationEasingUpdate: "cubicInOut",
                    },
                },
                {  // 点
                    type: 'bar3D',
                    name: 'china_map',
                    coordinateSystem: 'geo3D',
                    shading: 'lambert',
                    // barSize: 0.1,
                    barSize: 0,
                    bevelSize: 0.5,
                    bevelSmoothness: 10,
                    minHeight: 3,
                    emphasis: {},
                    zlevel: 2,
                    itemStyle: {
                        color: '#54CAFF',
                        opacity: 1,
                    },
                    label: {
                        show: true,
                        formatter: '{b}',
                        position: 'center',
                        offset: [10, 0],
                        color: '#ffffff',
                        textStyle: {
                            fontSize: 16
                        }
                    },
                    data: getResultPoint(result3_point)
                },
                { // 线
                    type: 'lines3D',
                    name: 'china_map',
                    coordinateSystem: 'geo3D',
                    // polyline: true,
                    blendMode: 'lighter',
                    zlevel: 1,
                    ployline: false,
                    // 飞线的尾迹特效。
                    effect: {
                        show: true,
                        period: 1, // 尾迹特效的周期
                        // constantSpeed: 5, // 轨迹特效的移动动画是否是固定速度，单位按三维空间的尺寸，设置为非 null 的值后会忽略 period 配置项。
                        trailWidth: 3,
                        trailLength: 0.6,
                        trailColor: '#ffffff',
                        trailOpacity: 1
                    },
                    // 飞线的线条样式。
                    lineStyle: {
                        // color: '#F72C5B',
                        width: 1, //线条宽度
                        opacity: 0, //尾迹线条透明度
                        curveness: 0.3
                    },
                    data: getResultLines(result3_lines)
                }
            ],
        },
        config: [],
        source: [
            {
                name: '点',
                // multi_source: true,  // 是否有多个数据源
                data_type: 'array',  // 数据响应类型
                content_type: 'object',  // 数据类型 单一数据时使用

                result_structure: [
                    {
                        fields: 'name',
                        map_fields: '',
                        status: true,
                        require: false,
                        data_type: 'string',
                        name: '省名称',
                        de_weight: true,
                        default: '',
                        update_type: 'replace'
                    },
                    {
                        fields: 'lat',
                        map_fields: '',
                        status: true,
                        require: true,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '纬度',
                        default: 0,
                        update_type: 'replace'
                    },
                    {
                        fields: 'log',
                        map_fields: '',
                        status: true,
                        require: true,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '经度',
                        default: 0,
                        update_type: 'replace'
                    },
                    {
                        fields: 'v',
                        map_fields: '',
                        status: true,
                        require: false,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '值',
                        default: 0,
                        update_type: 'replace'
                    },
                ],

                source_type: 'static', // 数据来源类型
                request_url: '', // 请求地址
                request_method: 'get',  // 请求方式
                
                update_fields: 'series-1-data',
                update_time: 10,  // 更新时间
                auto_update: false, // 是否更新
            
                source_status: true,  // 数据源状态
                fields_status: true,  // 映射字段状态
            
                filter_fun: 'return data',  // 过滤器
                auto_filter: false,  // 使用过滤器

                default: [...result3_point],
                handle: getResultPoint
            },
            {
                name: '飞线',
                // multi_source: true,  // 是否有多个数据源
                data_type: 'array',  // 数据响应类型
                content_type: 'object',  // 数据类型 单一数据时使用

                result_structure: [
                    {
                        fields: 'from',
                        map_fields: '',
                        status: true,
                        require: false,
                        data_type: 'string',
                        name: '出发点名称',
                        default: '',
                        update_type: 'replace'
                    },
                    {
                        fields: 'to',
                        map_fields: '',
                        status: true,
                        require: false,
                        data_type: 'string',
                        name: '终点名称',
                        default: '',
                        update_type: 'replace'
                    },
                    {
                        fields: 'f_log_lat',
                        map_fields: '',
                        status: true,
                        require: true,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '出发点经纬度',
                        default: [],
                        update_type: 'replace'
                    },
                    {
                        fields: 't_log_lat',
                        map_fields: '',
                        status: true,
                        require: true,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '终点经纬度',
                        default: [],
                        update_type: 'replace'
                    },
                    {
                        fields: 'log',
                        map_fields: '',
                        status: true,
                        require: true,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '经度',
                        default: 0,
                        update_type: 'replace'
                    },
                    {
                        fields: 'v',
                        map_fields: '',
                        status: true,
                        require: false,
                        data_type: 'numberarray',
                        content_type: 'number',
                        name: '值',
                        default: 0,
                        update_type: 'replace'
                    },
                ],

                source_type: 'static', // 数据来源类型
                request_url: '', // 请求地址
                request_method: 'get',  // 请求方式
                
                update_fields: 'series-2-data',
                update_time: 10,  // 更新时间
                auto_update: false, // 是否更新
            
                source_status: true,  // 数据源状态
                fields_status: true,  // 映射字段状态
            
                filter_fun: 'return data',  // 过滤器
                auto_filter: false,  // 使用过滤器

                default: [...result3_lines],
                handle: getResultLines
            }
        ]
    }
]

export default map