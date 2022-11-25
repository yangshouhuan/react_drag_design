import { lines, points, regions } from "chart-config/shared"
import { BaseChartType } from "types/chart"

const mapChartList: BaseChartType[] = [
    {
        id: 31,
        option_id: '0-3|0-1',
        name: '中国飞线图',
        component: 'div',
        is_echarts: true,
        config: {
            backgroundColor: '',
            title: {
                show: false,
                text: '标题',
                subtext: '子标题',
                align: 'left',
                textStyle: {
                    color: '#ffffff',
                    fontSize: 16,
                    fontWeight: 300
                }
            },
            tooltip: { //提示框组件。
                trigger: 'item'//数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
            },
            geo: {
                show: true,  // 地理坐标
                map: 'china', // 国家
                roam: false, //是否开启鼠标缩放和平移漫游
                // top: '3%', //组件距离容器的距离
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
                zoom: 1.1,
                regions: regions
            },
            series: [
                {  // 点
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
                    data: points
                },
                { // 线
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
                    data: lines
                }
            ]
        },
        source: {
            id: 0,
            father_ids: [0],
            request_match: true,
            text: '全局数据',
            data_fields: 'geo-regions',
            match_type: 'match',
            data_type: 'Array',
            data_manipula: 'replace',
            map_field: [
                {
                    id: 0,
                    father_ids: [0],
                    old_name: 'name',
                    new_name: '',
                    type: 'String',
                    text: '省名称',
                    status: true
                },
                {
                    id: 0,
                    father_ids: [0],
                    old_name: 'itemStyle',
                    new_name: '',
                    type: 'Object',
                    text: '省背景色',
                    status: true
                },
            ]
        }
    },
    {
        id: 32,
        option_id: '0-3|0-2',
        name: '数据地图',
        component: 'div',
        is_echarts: true,
        config: {
            title: {
                // 标题组件
                text: "数据地图", // 主标题文本
                // subtext: '数据来源于 xx平台', // 副标题文本
                // sublink: 'http://xxx.html', // 副标题文本超链接
                left: "right", // title 组件离容器左侧的距离,如果值为`'left'`, `'center'`, `'right'`，组件会根据相应的位置自动对齐。
                textStyle: {
                    color: "#000" // 主标题文字的颜色
                }
            },
            visualMap: {
                // 视觉映射组件
                type: "continuous", // 连续型
                left: "right", // visualMap 组件离容器左侧的距离,值为`'left'`, `'center'`, `'right'`，组件会根据相应的位置自动对齐。
                min: 0,        // 指定允许的最小值
                max: 100,      // 指定允许的最大值,这里进行动态设置
                inRange: {     // 定义 **在选中范围中** 的视觉元素
                    // 图元的颜色
                    // 这里以这数组所填写的颜色点作为基准，形成一种『渐变』的色带，数据映射到这个色带上
                    color: [ // 橘色效果
                        "#fff",
                        "#fedeb5",
                        "#f96a35",
                        "#c3380e",
                        "#942005"
                    ]
                    // color: [ // 蓝色效果
                    //     '#e5f7ff',
                    //     '#096dd9',
                    // ]
                },
                // text: [`最大值：${100}`, 0],  // 两端的文本,如 `['High', 'Low']`
                textStyle: {
                    color: "#000" // visualMap 文字的颜色。
                }
            },
            toolbox: {
                // 工具导航
                show: true, // 是否显示工具栏组件。
                //orient: 'vertical', // 工具栏 icon 的布局朝向。
                left: "left",         // 工具栏组件离容器左侧的距离
                top: "top",           // 工具栏组件离容器上侧的距离
                feature: {   // 各工具配置项
                    // dataView: { readOnly: false }, // 数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
                    restore: {},     // 配置项还原
                    saveAsImage: {}  // 保存为图片
                }
            },
            tooltip: {
                // 提示框
                trigger: "item", // 触发类型
                showDelay: 0, // 浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。
                transitionDuration: 0.2, // 提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
                formatter: function (params: any) { // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
                    let { data = {} } = params; // 第一个参数 `params` 是 formatter 需要的数据集
                    let { value = 0 } = data;  // 传入的数据值
                    // params.name 数据名，类目名
                    return `${params.name}<br/>个数: ${value}`;
                }
            },
            series: {
                // 地图,可以是数组，多个
                type: "map",
                map: "china", // 使用 registerMap 注册的地图名称
                label: { // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
                    show: true, //显示省市名称
                    position: [1, 100], // 相对的百分比
                    fontSize: 12,
                    offset: [2, 0], // 是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。
                    align: "left" // 文字水平对齐方式，默认自动。
                },
                itemStyle: { // 地图区域的多边形 图形样式
                    areaColor: "#fff" // 地图图形颜色
                },
                roam: false, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 `'scale'` 或者 `'move'`。设置成 `true` 为都开启
                zoom: 1.2, // 当前视角的缩放比例
                scaleLimit: { // 滚轮缩放的极限控制，默认的缩放为`1`
                    max: 2, // 最大的缩放值
                    min: 1  // 最小的缩放值
                },
                top: "10%", // 距离顶部距离
                data: [
                    { name: "内蒙古", value: 1000 },
                    { name: "北京", value: 700 },
                    { name: "河北", value: 30 },
                    { name: "江苏", value: 400 },
                    { name: "西藏", value: 200 }
                ],
                nameMap: {
                    110000: "北京",
                    130000: "河北",
                    150000: "内蒙古"
                },
                nameProperty: 'adcode'
            }
        },
        source: {
            id: 0,
            father_ids: [0],
            request_match: true,
            text: '全局数据',
            data_fields: 'series-data',
            match_type: 'match',
            data_type: 'Array',
            data_manipula: 'replace',
            map_field: [
                {
                    id: 0,
                    father_ids: [0],
                    old_name: 'name',
                    new_name: '',
                    type: 'String',
                    text: '省名称',
                    status: true
                },
                {
                    id: 0,
                    father_ids: [0],
                    old_name: 'value',
                    new_name: '',
                    type: 'Number',
                    text: '值',
                    status: true
                },
            ]
        }
    }
]

export default mapChartList