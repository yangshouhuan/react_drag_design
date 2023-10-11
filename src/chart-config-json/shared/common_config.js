import { align, fontWeight, fontStyle } from './index.ts'

// 边框
const border_config = [
    {
        type: 'color',
        fields: 'borderColor',
        name: '边框颜色',
        default: '#00ffff'
    },
    {
        type: 'number',
        fields: 'borderWidth',
        name: '边框宽',
        default: 1
    },
    {
        type: 'select',
        fields: 'borderType',
        name: '边框类型',
        default: 'solid',
        options: [
            { label: 'solid', value: 'solid' },
            { label: 'dashed', value: 'dashed' },
            { label: 'dotted', value: 'dotted' },
        ]
    },
]
// 阴影
const shadow_config = [
    {
        type: 'color',
        fields: 'shadowColor',
        default: 'rgba(0, 0, 0, 0.5)',
        name: '阴影颜色'
    },
    {
        type: 'number',
        fields: 'shadowBlur',
        default: 10,
        name: '模糊大小'
    },
    {
        type: 'number',
        fields: 'shadowOffsetX',
        default: 0,
        name: '上移距离'
    },
    {
        type: 'number',
        fields: 'shadowOffsetY',
        default: 0,
        name: '下移距离'
    },
]
// 位置
const position_config = [
    {
        type: 'text',
        fields: 'left',
        name: '左',
        default: 'auto'
    },
    {
        type: 'text',
        fields: 'right',
        name: '右',
        default: 'auto'
    },
    {
        type: 'text',
        fields: 'top',
        name: '上',
        default: 'auto'
    },
    {
        type: 'text',
        fields: 'bottom',
        name: '下',
        default: 'auto'
    }
]
// 文字阴影
const text_shadow_config = [
    {
        type: 'number',
        fields: 'textBorderWidth',
        default: 0,
        name: '阴影宽'
    },
    {
        type: 'color',
        fields: 'textBorder',
        default: 'rgba(0, 0, 0, 0.5)',
        name: '阴影颜色'
    },
    {
        type: 'number',
        fields: 'textBorderBlur',
        default: 0,
        name: '模糊大小'
    },
    {
        type: 'number',
        fields: 'textBorderOffsetX',
        default: 0,
        name: '上移距离'
    },
    {
        type: 'number',
        fields: 'textBorderOffsetY',
        default: 0,
        name: '下移距离'
    },
]
// 文本样式
const textStyleConfig = [
    {
        type: 'color',
        fields: 'color',
        name: '颜色',
        default: '#ffffff'
    },
    {
        type: 'number',
        fields: 'fontSize',
        name: '字号',
        default: 18
    },
    {
        type: 'select',
        fields: 'fontWeight',
        name: '字体粗细',
        default: 'normal',
        options: fontWeight
    },
    {
        type: 'select',
        fields: 'fontStyle',
        name: '字体风格',
        default: 'normal',
        options: fontStyle
    }
]
// 标题
const title_config = [
    {
        type: 'text',
        fields: 'text',
        name: '主标题',
        default: ''
    },
    {
        type: 'text',
        fields: 'subtext',
        name: '子标题',
        default: ''
    },
    {
        type: 'select',
        fields: 'align',
        name: '对其方式',
        default: 'left',
        options: align
    },
    {
        type: 'suite',
        fields: 'textStyle',
        name: '标题样式',
        children: textStyleConfig
    },
]
// 提示框
const tooltip_config = [
    {
        type: 'number',
        fields: 'padding',
        name: '内边距',
        default: 5
    },
    {
        type: 'suite',
        fields: 'textStyle',
        name: '字体样式',
        children: textStyleConfig
    },
]
// 坐标轴刻度相关设置。
const axisTick_config = [
    {
        type: 'boolean',
        fields: 'alignWithLabel',
        name: '是否对齐',
        default: true
    },
    {
        type: 'boolean',
        fields: 'inside',
        name: '是否朝内',
        default: false
    },
    {
        type: 'number',
        fields: 'length',
        name: '刻度长度',
        default: 5
    },
    {
        type: 'suite',
        fields: 'lineStyle',
        name: '刻度样式',
        children: [
            {
                type: 'color',
                fields: 'color',
                default: '#EE6666',
                name: '线条颜色'
            },
            {
                type: 'number',
                fields: 'width',
                default: 1,
                name: '线条宽'
            },
            {
                type: 'select',
                fields: 'type',
                default: 'solid',
                name: '线条类型',
                options: [
                    { label: 'solid', value: 'solid' },
                    { label: 'dashed', value: 'dashed' },
                    { label: 'dotted', value: 'dotted' },
                ]
            },
        ]
    },
]
// 坐标轴刻度标签的相关设置
const axisLabel_config = [
    {
        type: 'boolean',
        fields: 'inside',
        name: '是否朝内',
        default: false
    },
    {
        type: 'number',
        fields: 'rotate',
        name: '旋转的角度',
        default: 0
    },
    {
        type: 'number',
        fields: 'margin',
        name: '外边距',
        default: 8
    },
    {
        type: 'number',
        fields: 'padding',
        name: '内边距',
        default: 4
    },
    {
        type: 'suite',
        fields: '',
        name: '标签样式',
        children: [
            ...textStyleConfig,
            {
                type: 'select',
                fields: 'align',
                name: '对齐方式',
                default: 'left',
                options: align
            }
        ]
    }
]
// 坐标轴指示器配置项
const axisPointer_config = [
    {
        type: 'select',
        fields: 'type',
        name: '指示器类型',
        default: 'line',
        options: [
            { label: 'line', value: 'line' },
            { label: 'shadow', value: 'shadow' },
            { label: 'none', value: 'none' }
        ]
    },
    {
        type: 'suite',
        fields: 'lineStyle',
        name: '线条样式',
        children: [
            {
                type: 'color',
                fields: 'color',
                name: '文本颜色',
                default: '#555555'
            },
            {
                type: 'number',
                fields: 'width',
                name: '线宽度',
                default: 1
            },
            {
                type: 'select',
                fields: 'type',
                name: '线条类型',
                default: 'solid',
                options: [
                    { label: 'solid', value: 'solid' },
                    { label: 'dashed', value: 'dashed' },
                    { label: 'dotted', value: 'dotted' }
                ]
            },
        ]
    },
    {
        type: 'group',
        fields: 'label',
        name: '文本标签',
        enabledItem: true,
        children: [
            {
                type: 'number',
                fields: 'margin',
                name: '外边距',
                default: 3
            },{
                type: 'number',
                fields: 'padding',
                name: '内边距',
                default: 5
            },
            {
                type: 'suite',
                fields: '',
                name: '文本样式',
                children: [
                    {
                        type: 'color',
                        fields: 'color',
                        name: '文本颜色',
                        default: '#ffffff'
                    },
                    {
                        type: 'select',
                        fields: 'fontStyle',
                        name: '文本风格',
                        default: 'normal',
                        options: fontStyle
                    },
                    {
                        type: 'select',
                        fields: 'fontWeight',
                        name: '文本粗细',
                        default: 'normal',
                        options: fontWeight
                    },
                    {
                        type: 'number',
                        fields: 'fontSize',
                        name: '文本大小',
                        default: 12
                    },
                    {
                        type: 'number',
                        fields: 'lineHeight',
                        name: '行高',
                        default: 10
                    }
                ]
            }
        ]
    }
]
// 线配置
const axisLine_linestyle_config = [
    {
        type: 'color',
        fields: 'color',
        default: '#EE6666',
        name: '线条颜色'
    },
    {
        type: 'number',
        fields: 'width',
        default: 1,
        name: '线条宽'
    },
    {
        type: 'select',
        fields: 'type',
        default: 'solid',
        name: '线条类型',
        options: [
            { label: 'solid', value: 'solid' },
            { label: 'dashed', value: 'dashed' },
            { label: 'dotted', value: 'dotted' },
        ]
    },
]
// grid分隔区域
const splitLine_config = [
    {
        type: 'number',
        fields: 'interval',
        name: '显示间隔',
        default: 1
    },
    {
        type: 'suite',
        fields: 'lineStyle',
        name: '线样式',
        children: [
            {
                type: 'select',
                fields: 'type',
                name: '线类型',
                default: 'solid',
                options: [
                    { label: 'solid', value: 'solid' },
                    { label: 'dashed', value: 'dashed' },
                    { label: 'dotted', value: 'dotted' },
                ]
            },
            {
                type: 'multicolor',
                fields: 'color',
                name: '线颜色',
                default: ['#aaa', '#ddd']
            },
            {
                type: 'number',
                fields: 'width',
                name: '线宽',
                default: 1
            },
        ]
    }
]
// 轴线配置
const xAxis_config = [
    {
        type: 'boolean',
        fields: 'show',
        default: true,
        name: '是否显示'
    },
    {
        type: 'suite',
        fields: 'axisLine-lineStyle',
        name: '轴线样式',
        children: axisLine_linestyle_config
    },
    {
        type: 'suite',
        fields: 'nameTextStyle',
        name: '轴名称样式',
        children: [
            ...textStyleConfig,
            {
                type: 'select',
                fields: 'align',
                name: '对齐方式',
                default: 'left',
                options: align
            }
        ]
    },
    {
        type: 'group',
        fields: 'axisPointer',
        name: '坐标轴指示器',
        enabledItem: true,
        children: axisPointer_config
    },
    {
        type: 'group',
        fields: 'axisTick',
        name: '刻度设置',
        enabledItem: true,
        children: axisTick_config
    },
    {
        type: 'group',
        fields: 'axisLabel',
        name: '刻度标签',
        enabledItem: true,
        children: axisLabel_config
    },
    {
        type: 'group',
        fields: 'splitLine',
        name: '分隔区域',
        enabledItem: true,
        children: splitLine_config
    },
]
// 网格配置
const grid_config = [
    {
        type: 'color',
        fields: 'borderColor',
        name: '边框颜色',
        default: '#ccc'
    },
    {
        type: 'number',
        fields: 'borderWidth',
        name: '边框宽',
        default: 1,
    },
    {
        type: 'suite',
        name: '提示样式',
        fields: 'tooltip-textStyle',
        children: textStyleConfig
    },
    {
        type: 'suite',
        name: '容器距离',
        fields: '',
        children: position_config
    }
]
// 图例配置
const legend_config = [
    {
        type: 'boolean',
        fields: 'show',
        name: '是否显示',
        default: true
    },
    {
        type: 'select',
        fields: 'type',
        name: '图例类型',
        default: 'plain',
        options: [
            { label: 'plain', value: 'plain' },
            { label: 'scroll', value: 'scroll' }
        ]
    },
    {
        type: 'suite',
        fields: '',
        name: '离容器距离',
        children: position_config
    },
    {
        type: 'number',
        fields: 'padding',
        name: '内边距',
        default: 0
    },
    {
        type: 'select',
        fields: 'orient',
        name: '布局朝向',
        default: 'horizontal',
        options: [
            { label: 'horizontal', value: 'horizontal' },
            { label: 'vertical', value: 'vertical' }
        ]
    },
    {
        type: 'select',
        fields: 'align',
        name: '对其方式',
        default: 'auto',
        options: [
            { label: 'auto', value: 'auto' },
            ...align
        ]
    },
    {
        type: 'number',
        fields: 'itemGap',
        name: '项间隔',
        default: 10
    },
    {
        type: 'group',
        fields: 'itemStyle',
        name: '图形样式',
        children: [
            {
                type: 'color',
                fields: 'color',
                name: '图形颜色',
                default: '#999999'
            },
            {
                type: 'suite',
                fields: '',
                name: '图形边框',
                children: [
                    {
                        type: 'color',
                        fields: 'borderColor',
                        name: '边框颜色',
                        default: '#999999'
                    },
                    {
                        type: 'number',
                        fields: 'borderWidth',
                        name: '边框宽',
                        default: 0
                    },
                    {
                        type: 'color',
                        fields: 'borderType',
                        name: '边框类型',
                        default: 'solid',
                        options: [
                            { label: 'solid', value: 'solid' },
                            { label: 'dashed', value: 'dashed' },
                            { label: 'dotted', value: 'dotted' },
                        ]
                    },
                ]
            },
        ]
    },
    {
        type: 'group',
        fields: 'lineStyle',
        name: '线样式',
        children: [
            {
                type: 'color',
                fields: 'color',
                name: '图形颜色',
                default: ''
            },
            {
                type: 'number',
                fields: 'width',
                name: '线宽',
                default: 0
            },
            {
                type: 'color',
                fields: 'type',
                name: '线类型',
                default: 'solid',
                options: [
                    { label: 'solid', value: 'solid' },
                    { label: 'dashed', value: 'dashed' },
                    { label: 'dotted', value: 'dotted' },
                ]
            }
        ]
    },
    {
        type: 'group',
        fields: 'textStyle',
        name: '文本样式',
        children: [
            {
                type: 'number',
                fields: 'padding',
                name: '内边距',
                default: 4
            },
            {
                type: 'suite',
                fields: '',
                name: '文本样式',
                children: [
                    {
                        type: 'color',
                        fields: 'color',
                        name: '文本颜色',
                        default: '#ffffff'
                    },
                    {
                        type: 'select',
                        fields: 'fontStyle',
                        name: '文本风格',
                        default: 'normal',
                        options: fontStyle
                    },
                    {
                        type: 'select',
                        fields: 'fontWeight',
                        name: '文本粗细',
                        default: 'normal',
                        options: fontWeight
                    },
                    {
                        type: 'number',
                        fields: 'fontSize',
                        name: '文本大小',
                        default: 12
                    },
                    {
                        type: 'number',
                        fields: 'lineHeight',
                        name: '行高',
                        default: 10
                    }
                ]
            },
            {
                type: 'suite',
                fields: '',
                name: '边框样式',
                children: [
                    {
                        type: 'color',
                        fields: 'borderColor',
                        name: '边框颜色',
                        default: ''
                    },
                    {
                        type: 'number',
                        fields: 'borderWidth',
                        name: '边框宽',
                        default: 0
                    },
                    {
                        type: 'select',
                        fields: 'borderType',
                        name: '边框类型',
                        default: 'solid',
                        options: [
                            { label: 'solid', value: 'solid' },
                            { label: 'dashed', value: 'dashed' },
                            { label: 'dotted', value: 'dotted' },
                        ]
                    }
                ]
            }
        ]
    },
]
// 极坐标系
const polar_config = [
    {
        type: 'multitext',
        fields: 'center',
        name: '中心点',
        default: ['50%', '50%']
    },
    {
        type: 'text',
        fields: 'radius',
        name: '半径',
        default: '20%'
    },
    {
        type: 'group',
        fields: 'tooltip',
        name: '提示框',
        children: tooltip_config
    },
]
// 极坐标系的角度轴
const angleAxis_config = [
    {
        type: 'select',
        fields: 'type',
        name: '类型',
        default: 'value',
        options: [
            { label: 'value', value: 'value' },
            { label: 'category', value: 'category' },
            { label: 'time', value: 'time' },
            { label: 'log', value: 'log' },
        ]
    },
    {
        type: 'number',
        fields: 'startAngle',
        name: '起始角度',
        default: 90
    },
    {
        type: 'group',
        fields: 'axisLine',
        name: '轴线设置',
        children: axisLine_linestyle_config
    },
    {
        type: 'group',
        fields: 'axisTick',
        name: '刻度设置',
        enabledItem: true,
        children: axisTick_config
    },
    {
        type: 'group',
        fields: 'axisLabel',
        name: '标签设置',
        enabledItem: true,
        children: axisLabel_config
    },
    {
        type: 'group',
        fields: 'axisPointer',
        name: '指示器配置',
        enabledItem: true,
        children: axisPointer_config
    }
]
// 极坐标系的径向轴。
const radiusAxis_config = [
    {
        type: 'select',
        fields: 'type',
        name: '类型',
        default: 'value',
        options: [
            { label: 'value', value: 'value' },
            { label: 'category', value: 'category' },
            { label: 'time', value: 'time' },
            { label: 'log', value: 'log' },
        ]
    },
    {
        type: 'select',
        fields: 'nameLocation',
        name: '名称位置',
        default: 'end',
        options: [
            { label: 'start', value: 'start' },
            { label: 'center', value: 'center' },
            { label: 'end', value: 'end' }
        ]
    },
    {
        type: 'suite',
        fields: 'nameTextStyle',
        name: '文字样式',
        children: [
            ...textStyleConfig,
            {
                type: 'select',
                fields: 'align',
                name: '对齐方式',
                default: 'left',
                options: align
            }
        ]
    },
    {
        type: 'number',
        fields: 'nameGap',
        name: '轴线距离',
        default: 15
    },
    {
        type: 'number',
        fields: 'nameRotate',
        name: '角度值',
        default: 0
    },
    {
        type: 'boolean',
        fields: 'nameRotate',
        name: '是否反向',
        default: false
    },
    {
        type: 'group',
        fields: 'axisLine',
        name: '轴线设置',
        children: axisLine_linestyle_config
    },
    {
        type: 'group',
        fields: 'axisTick',
        name: '刻度设置',
        enabledItem: true,
        children: axisTick_config
    },
    {
        type: 'group',
        fields: 'axisLabel',
        name: '标签设置',
        enabledItem: true,
        children: axisLabel_config
    },
    {
        type: 'group',
        fields: 'axisPointer',
        name: '指示器配置',
        enabledItem: true,
        children: axisPointer_config
    }
]
// 映射组件
const visualMap_config = [
    {
        type: 'boolean',
        fields: 'show',
        name: '是否显示',
        default: true
    },
    {
        type: 'suite',
        fields: '',
        name: '值范围',
        children: [
            {
                type: 'number',
                fields: 'min',
                name: '最小值',
                default: 0
            },
            {
                type: 'number',
                fields: 'max',
                name: '最大值',
                default: 100
            }
        ]
    },
    {
        type: 'boolean',
        fields: 'inverse',
        name: '是否反转',
        default: true
    },
    {
        type: 'suite',
        fields: '',
        name: '宽高',
        children: [
            {
                type: 'number',
                fields: 'itemWidth',
                name: '宽',
                default: 20
            },
            {
                type: 'number',
                fields: 'itemHeight',
                name: '高',
                default: 40
            }
        ]
    },
    {
        type: 'select',
        fields: 'align',
        name: '文字位置',
        default: 'auto',
        options: [
            { label: 'auto', value: 'auto' },
            { label: 'left', value: 'left' },
            { label: 'right', value: 'right' },
            { label: 'top', value: 'top' },
            { label: 'bottom', value: 'bottom' }
        ]
    },
    {
        type: 'number',
        fields: 'textGap',
        name: '文字主体距离',
        default: 10
    },
    {
        type: 'number',
        fields: 'padding',
        name: '内边距',
        default: 5
    },
    {
        type: 'suite',
        fields: '',
        name: '容器距离',
        children: position_config
    },
    {
        type: 'select',
        fields: 'orient',
        name: '放置类型',
        default: 'vertical',
        options: [
            { label: 'vertical', value: 'vertical' },
            { label: 'horizontal', value: 'horizontal' }
        ]
    },
    {
        type: 'suite',
        fields: '',
        name: '边框样式',
        children: [
            {
                type: 'color',
                fields: 'color',
                name: '边框颜色',
                default: 0
            },
            {
                type: 'number',
                fields: 'borderWidth',
                name: '边框宽',
                default: 0
            }
        ]
    },
    {
        type: 'group',
        fields: 'textStyle',
        name: '文字样式',
        children: [
            ...textStyleConfig,
            {
                type: 'number',
                fields: 'lineHeight',
                name: '行高',
                default: 10
            }
        ]
    }
]
// 雷达图
const radar_config = [
    {
        type: 'multitext',
        fields: 'center',
        name: '圆心',
        default: ['50%', '50%']
    },
    {
        type: 'text',
        fields: 'radius',
        name: '半径',
        default: '75%'
    },
    {
        type: 'number',
        fields: 'startAngle',
        name: '始角度',
        default: 90
    },
    {
        type: 'number',
        fields: 'nameGap',
        name: '名称距离',
        default: 15
    },
    {
        type: 'number',
        fields: 'splitNumber',
        name: '分割段数',
        default: 5
    },
    {
        type: 'select',
        fields: 'shape',
        name: '绘制类型',
        default: 'polygon',
        options: [
            { label: 'polygon', value: 'polygon' },
            { label: 'circle', value: 'circle' }
        ]
    },
    {
        type: 'group',
        fields: 'axisLine',
        name: '轴线设置',
        enabledItem: true,
        children: [
            {
                type: 'suite',
                fields: 'lineStyle',
                name: '轴线样式',
                children: axisLine_linestyle_config
            },
        ]
    },
    {
        type: 'group',
        fields: 'axisTick',
        name: '刻度设置',
        enabledItem: true,
        children: [
            {
                type: 'suite',
                fields: 'lineStyle',
                name: '刻度样式',
                children: axisLine_linestyle_config
            },
        ]
    },
    {
        type: 'group',
        fields: 'splitLine',
        name: '分割线设置',
        enabledItem: true,
        children: [
            {
                type: 'suite',
                fields: 'lineStyle',
                name: '刻度样式',
                children: [
                    {
                        type: 'multicolor',
                        fields: 'color',
                        default: ['#ccc'],
                        name: '线条颜色'
                    },
                    {
                        type: 'number',
                        fields: 'width',
                        default: 1,
                        name: '线条宽'
                    },
                    {
                        type: 'select',
                        fields: 'type',
                        default: 'solid',
                        name: '线条类型',
                        options: [
                            { label: 'solid', value: 'solid' },
                            { label: 'dashed', value: 'dashed' },
                            { label: 'dotted', value: 'dotted' },
                        ]
                    },
                ]
            },
        ]
    },
    {
        type: 'group',
        fields: 'splitArea',
        name: '分隔区域',
        enabledItem: true,
        children: [
            {
                type: 'multicolor',
                fields: 'areaStyle-color',
                default: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)'],
                name: '线条颜色'
            },
            {
                type: 'suite',
                fields: 'areaStyle',
                name: '阴影样式',
                children: shadow_config
            }
        ]
    },
    {
        type: 'group',
        fields: 'axisName',
        name: '指示器名称',
        enabledItem: true,
        children: [
            {
                type: 'number',
                fields: 'padding',
                name: '内边距',
                default: 4
            },
            {
                type: 'suite',
                fields: '',
                name: '文字样式',
                children: [
                    ...textStyleConfig,
                    {
                        type: 'number',
                        fields: 'lineHeight',
                        name: '行高',
                        default: 10
                    }
                ]
            },
            {
                type: 'suite',
                fields: '',
                name: '边框样式',
                children: border_config
            },
        ]
    },
    {
        type: 'group',
        fields: 'axisLabel',
        name: '刻度标签',
        enabledItem: true,
        children: [
            {
                type: 'number',
                fields: 'rotate',
                name: '旋转角度',
                default: 0
            },
            {
                type: 'number',
                fields: 'padding',
                name: '内边距',
                default: 4
            },
            {
                type: 'number',
                fields: 'margin',
                name: '外边距',
                default: 8
            },
            {
                type: 'select',
                fields: 'verticalAlign',
                name: '文字垂直对齐方式',
                default: 'auto',
                options: [
                    { label: 'auto', value: 'auto' },
                    { label: 'top', value: 'top' },
                    { label: 'middle', value: 'middle' },
                    { label: 'bottom', value: 'bottom' },
                ]
            },
            {
                type: 'suite',
                fields: '',
                name: '文字样式',
                children: [
                    ...textStyleConfig,
                    {
                        type: 'number',
                        fields: 'lineHeight',
                        name: '行高',
                        default: 10
                    },
                    {
                        type: 'select',
                        fields: 'align',
                        name: '对齐方式',
                        default: 'left',
                        options: align
                    }
                ]
            },
            {
                type: 'suite',
                fields: '',
                name: '边框样式',
                children: border_config
            },
            {
                type: 'suite',
                fields: '',
                name: '阴影样式',
                children: shadow_config
            }
        ]
    }
]
// 环形图
const series_pie_config = [
    {
        type: 'text',
        fields: 'name',
        name: '名称',
        default: ""
    },
    {
        type: 'boolean',
        fields: 'clockwise',
        name: '顺时针排布',
        default: true
    },
    {
        type: 'number',
        fields: 'startAngle',
        name: '起始角度',
        default: 90
    },
    {
        type: 'number',
        fields: 'minAngle',
        name: '最小扇区角度',
        default: 0
    },
    {
        type: 'number',
        fields: 'minShowLabelAngle',
        name: '显示标签角度',
        default: 0
    },
    {
        type: 'multitext',
        fields: 'center',
        name: '中心点',
        default: ['50%', '50%']
    },
    {
        type: 'multitext',
        fields: 'radius',
        name: '饼图的半径',
        default: ['0', '75%']
    },
    {
        type: 'boolean',
        fields: 'roseType',
        name: '南丁格尔图',
        default: true
    },
    {
        type: 'boolean',
        fields: 'stillShowZeroSum',
        name: '为0仍显示',
        default: true
    },
    {
        type: 'boolean',
        fields: 'avoidLabelOverlap',
        name: '重叠策略',
        default: true
    },
    {
        type: 'number',
        fields: 'percentPrecision',
        name: '保留小数点',
        default: 2
    },
    {
        type: 'suite',
        fields: '',
        name: '位置',
        children: position_config
    },
    {
        type: 'group',
        fields: 'emptyCircleStyle',
        name: '占位圆样式',
        children: [
            {
                type: 'color',
                fields: 'color',
                name: '图形颜色',
                default: ''
            },
            {
                type: 'suite',
                fields: '',
                name: '边框样式',
                children: border_config
            },
            {
                type: 'suite',
                fields: '',
                name: '阴影颜色',
                children: shadow_config
            }
        ]
    },
    {
        type: 'group',
        fields: 'itemStyle',
        name: '图形样式',
        children: [
            {
                type: 'color',
                fields: 'color',
                name: '图形颜色',
                default: '#000'
            },
            {
                type: 'suite',
                fields: '',
                name: '边框样式',
                children: [
                    {
                        type: 'multitext',
                        fields: 'borderRadius',
                        name: '圆内外半径',
                        default: ''
                    },
                    ...border_config
                ]
            },
            {
                type: 'suite',
                fields: '',
                name: '阴影颜色',
                children: shadow_config
            }
        ]
    },
    {
        type: 'group',
        fields: 'label',
        name: '文本标签',
        enabledItem: true,
        children: [
            {
                type: 'select',
                fields: 'position',
                name: '标签位置',
                default: 'outside',
                options: [
                    { labe: 'outside', value: 'outside' },
                    { labe: 'inside', value: 'inside' },
                    { labe: 'center', value: 'center' }
                ]
            },
            {
                type: 'number',
                fields: 'rotate',
                name: '旋转角度',
                default: 0
            },
            {
                type: 'suite',
                fields: '',
                name: '文本样式',
                children: [
                    ...textStyleConfig,
                    {
                        type: 'number',
                        fields: 'lineHeight',
                        name: '行高',
                        default: 10
                    }
                ]
            },
            {
                type: 'suite',
                fields: '',
                name: '边框样式',
                children: border_config
            },
            {
                type: 'suite',
                fields: '',
                name: '阴影颜色',
                children: shadow_config
            }
        ]
    },
    {
        type: 'group',
        fields: 'labelLine',
        name: '引导线配置',
        enabledItem: true,
        children: [
            {
                type: 'boolean',
                fields: 'showAbove',
                name: '显示上方',
                default: true
            },
            {
                type: 'color',
                fields: 'lineStyle-color',
                name: '线颜色',
                default: ''
            },
            {
                type: 'suite',
                fields: 'lineStyle',
                name: '边框样式',
                children: border_config
            },
            {
                type: 'suite',
                fields: 'lineStyle',
                name: '阴影颜色',
                children: shadow_config
            }
        ]
    }
]
// series-label
const series_label_config = [
    {
        type: 'select',
        fields: 'position',
        name: '位置',
        default: 'top',
        options: [
            { label: 'top', value: 'top' },
            { label: 'left', value: 'left' },
            { label: 'right', value: 'right' },
            { label: 'bottom', value: 'bottom' },
            { label: 'inside', value: 'inside' },
            { label: 'insideLeft', value: 'insideLeft' },
            { label: 'insideTop', value: 'insideTop' },
            { label: 'insideBottom', value: 'insideBottom' },
            { label: 'insideTopLeft', value: 'insideTopLeft' },
            { label: 'insideBottomLeft', value: 'insideBottomLeft' },
            { label: 'insideTopRight', value: 'insideTopRight' },
            { label: 'insideBottomRight', value: 'insideBottomRight' },
        ]
    },
    {
        type: 'number',
        fields: 'distance',
        name: '距离',
        default: 5
    },
    {
        type: 'number',
        fields: 'rotate',
        name: '标签旋转',
        default: 0
    },
    {
        type: 'multinumber',
        fields: 'offset',
        name: '文字偏移',
        default: [0, 0]
    },
    {
        type: 'number',
        fields: 'padding',
        name: '内边距',
        default: 0
    },
    {
        type: 'suite',
        fields: '',
        name: '文字样式',
        children: [
            ...textStyleConfig,
            {
                type: 'number',
                fields: 'lineHeight',
                name: '行高',
                default: 10
            },
            {
                type: 'select',
                fields: 'align',
                name: '对齐方式',
                default: 'left',
                options: align
            },
        ]
    },
    {
        type: 'suite',
        fields: '',
        name: '边框样式',
        children: [
            ...border_config,
            {
                type: 'number',
                fields: 'borderRadius',
                name: '圆角',
                default: 0
            },
        ]
    },
    {
        type: 'suite',
        fields: '',
        name: '文字阴影',
        children: text_shadow_config
    },
    {
        type: 'suite',
        fields: '',
        name: '标签阴影',
        children: shadow_config
    }
]
// series-lineStyle
const series_lineStyle_config = [
    {
        type: 'suite',
        fields: '',
        name: '线样式',
        children: [
            {
                type: 'color',
                fields: 'color',
                name: '颜色',
                default: '#000'
            },
            {
                type: 'number',
                fields: 'width',
                name: '宽',
                default: 1
            },
            {
                type: 'select',
                fields: 'type',
                name: '类型',
                default: 'solid',
                options: [
                    { label: 'solid', value: 'solid' },
                    { label: 'dashed', value: 'dashed' },
                    { label: 'dotted', value: 'dotted' }
                ]
            },
            {
                type: 'number',
                fields: 'miterLimit',
                name: '斜接面',
                default: 10
            }
        ]
    },
    {
        type: 'suite',
        fields: '',
        name: '阴影',
        children: shadow_config
    }
]
// geo
const geo_config = [
    {
        type: 'boolean',
        fields: 'roam',
        name: '开启缩放',
        default: true
    },
    {
        type: 'number',
        fields: 'aspectScale',
        name: '长宽比',
        default: 0.75
    },
    {
        type: 'number',
        fields: 'zoom',
        name: '缩放比例',
        default: 1
    },
    {
        type: 'multitext',
        fields: 'layoutCenter',
        name: '地图位置',
        default: ['50%', '50%']
    },
    {
        type: 'text',
        fields: 'layoutSize',
        name: '地图的大小',
        default: 1000
    },
    {
        type: 'suite',
        fields: 'scaleLimit',
        name: '缩放极限',
        children: [
            {
                type: 'number',
                fields: 'min',
                name: '最小值',
                default: 0
            },
            {
                type: 'number',
                fields: 'max',
                name: '最大值',
                default: 1
            },
        ]
    },
    {
        type: 'group',
        fields: 'itemStyle',
        name: '图形样式',
        children: [
            {
                type: 'color',
                fields: 'areaColor',
                name: '地图区域',
                default: '#333'
            },
            {
                type: 'color',
                fields: 'color',
                name: '图形的颜色',
                default: ''
            },
            {
                type: 'suite',
                fields: '',
                name: '边框样式',
                children: [
                    ...border_config,
                    {
                        type: 'number',
                        fields: 'borderRadius',
                        name: '圆角',
                        default: 0
                    },
                ]
            },
            {
                type: 'suite',
                fields: '',
                name: '图形阴影',
                children: shadow_config
            }
        ]
    },
    {
        type: 'group',
        fields: 'tooltip',
        name: '提示框组件',
        enabledItem: true,
        children: [
            {
                type: 'select',
                fields: 'position',
                name: '位置',
                default: 'top',
                options: [
                    { labe: 'inside', value: 'inside' },
                    { labe: 'top', value: 'top' },
                    { labe: 'left', value: 'left' },
                    { labe: 'right', value: 'right' },
                    { labe: 'bottom', value: 'bottom' }
                ]
            },
            {
                type: 'number',
                fields: 'padding',
                name: '内边距',
                default: 5
            },
            {
                type: 'color',
                fields: 'backgroundColor',
                name: '背景颜色',
                default: ''
            },
            {
                type: 'suite',
                fields: '',
                name: '边框样式',
                children: [
                    {
                        type: 'color',
                        fields: 'borderColor',
                        name: '边框颜色',
                        default: '#333'
                    },
                    {
                        type: 'number',
                        fields: 'borderWidth',
                        name: '边框宽',
                        default: 0
                    },
                ]
            },
            {
                type: 'suite',
                fields: 'textStyle',
                name: '文本样式',
                children: [
                    {
                        type: 'number',
                        fields: 'width',
                        name: '宽',
                        default: 100
                    },
                    {
                        type: 'number',
                        fields: 'height',
                        name: '高',
                        default: 20
                    },
                    ...textStyleConfig
                ]
            },
        ]
    },
    {
        type: 'group',
        fields: 'label',
        name: '文本标签',
        enabledItem: true,
        children: [
            {
                type: 'select',
                fields: 'position',
                name: '位置',
                default: 'top',
                options: [
                    { label: 'top', value: 'top' },
                    { label: 'left', value: 'left' },
                    { label: 'right', value: 'right' },
                    { label: 'bottom', value: 'bottom' },
                    { label: 'inside', value: 'inside' },
                    { label: 'insideLeft', value: 'insideLeft' },
                    { label: 'insideTop', value: 'insideTop' },
                    { label: 'insideBottom', value: 'insideBottom' },
                    { label: 'insideTopLeft', value: 'insideTopLeft' },
                    { label: 'insideBottomLeft', value: 'insideBottomLeft' },
                    { label: 'insideTopRight', value: 'insideTopRight' },
                    { label: 'insideBottomRight', value: 'insideBottomRight' },
                ]
            },
            {
                type: 'number',
                fields: 'distance',
                name: '距离',
                default: 5
            },
            {
                type: 'number',
                fields: 'rotate',
                name: '标签旋转',
                default: 0
            },
            {
                type: 'multinumber',
                fields: 'offset',
                name: '文字偏移',
                default: [0, 0]
            },
            {
                type: 'number',
                fields: 'padding',
                name: '内边距',
                default: 0
            },
            {
                type: 'suite',
                fields: '',
                name: '文字样式',
                children: [
                    ...textStyleConfig,
                    {
                        type: 'number',
                        fields: 'lineHeight',
                        name: '行高',
                        default: 10
                    },
                    {
                        type: 'select',
                        fields: 'align',
                        name: '对齐方式',
                        default: 'left',
                        options: align
                    },
                ]
            },
            {
                type: 'suite',
                fields: '',
                name: '边框样式',
                children: [
                    ...border_config,
                    {
                        type: 'number',
                        fields: 'borderRadius',
                        name: '圆角',
                        default: 0
                    },
                ]
            },
            {
                type: 'suite',
                fields: '',
                name: '文字阴影',
                children: text_shadow_config
            },
            {
                type: 'suite',
                fields: '',
                name: '标签阴影',
                children: shadow_config
            }
        ]
    },
    {
        type: 'group',
        fields: 'emphasis',
        name: '高亮状态',
        children: [
            {
                type: 'boolean',
                fields: 'disabled',
                name: '关闭高亮',
                default: false
            },
            {
                type: 'select',
                fields: 'focus',
                name: '聚焦效果',
                default: 'none',
                options: [
                    { label: 'none', value: 'none' },
                    { label: 'self', value: 'self' }
                ]
            },
            {
                type: 'group',
                fields: 'label',
                name: '标签设置',
                enabledItem: true,
                children: series_label_config
            },
            {
                type: 'group',
                fields: 'itemStyle',
                name: '图形样式',
                children: [
                    {
                        type: 'color',
                        fields: 'areaColor',
                        name: '区域颜色',
                        default: '#eee'
                    },
                    {
                        type: 'color',
                        fields: 'color',
                        name: '图形颜色',
                        default: '#eee'
                    },
                    {
                        type: 'suite',
                        fields: '',
                        name: '边框样式',
                        children: border_config
                    },
                    {
                        type: 'suite',
                        fields: '',
                        name: '阴影',
                        children: shadow_config
                    }
                ]
            }
        ]
    }
]
// series effectScatter 点
const series_effectScatter_config = [
    {
        type: 'suite',
        fields: '',
        name: '层级',
        children: [
            {
                type: 'number',
                fields: 'zlevel',
                name: 'zlevel 值',
                default: 0
            },
            {
                type: 'number',
                fields: 'z',
                name: 'z 优先级',
                default: 0
            },
        ]
    },
    {
        type: 'suite',
        fields: '',
        name: '标记',
        children: [
            {
                type: 'select',
                fields: 'symbol',
                name: '标记图形',
                default: 'circle',
                options: [
                    { label: 'none', value: 'none' },
                    { label: 'circle', value: 'circle' },
                    { label: 'rect', value: 'rect' },
                    { label: 'roundRect', value: 'roundRect' },
                    { label: 'triangle', value: 'triangle' },
                    { label: 'diamond', value: 'diamond' },
                    { label: 'pin', value: 'pin' },
                    { label: 'arrow', value: 'arrow' },
                ]
            },
            {
                type: 'number',
                fields: 'symbolSize',
                name: '标记大小',
                default: 10
            },
            {
                type: 'number',
                fields: 'symbolRotate',
                name: '旋转角度',
                default: 0
            },
            {
                type: 'boolean',
                fields: 'symbolKeepAspect',
                name: '缩放长宽比',
                default: true
            },
            {
                type: 'multitext',
                fields: 'symbolOffset',
                name: '位置偏移',
                default: [0, 0]
            },
        ]
    },
    {
        type: 'boolean',
        fields: 'animation',
        name: '开启动画',
        default: true
    },
    {
        type: 'group',
        fields: 'rippleEffect',
        name: '涟漪特效',
        children: [
            {
                type: 'color',
                fields: 'color',
                name: '涟漪颜色',
                default: ''
            },
            {
                type: 'number',
                fields: 'number',
                name: '波纹数量',
                default: 3
            },
            {
                type: 'number',
                fields: 'period',
                name: '动画周期s',
                default: 4
            },
            {
                type: 'number',
                fields: 'scale',
                name: '最大缩放比例',
                default: 2.5
            },
            {
                type: 'select',
                fields: 'brushType',
                name: '绘制方式',
                default: 'fill',
                options: [
                    { label: 'fill', value: 'fill' },
                    { label: 'stroke', value: 'stroke' }
                ]
            }
        ]
    },
    {
        type: 'group',
        fields: 'label',
        name: '标签',
        enabledItem: true,
        children: series_label_config
    },
    {
        type: 'group',
        fields: 'labelLine',
        name: '引导线配置',
        enabledItem: true,
        children: [
            {
                type: 'boolean',
                fields: 'showAbove',
                name: '图形上方',
                default: true
            },
            {
                type: 'number',
                fields: 'length2',
                name: '第二段的长度',
                default: 10
            },
            {
                type: 'boolean',
                fields: 'smooth',
                name: '是否平滑',
                default: false
            },
            {
                type: 'group',
                fields: 'lineStyle',
                name: '线设置',
                children: series_lineStyle_config
            },
        ]
    },
    {
        type: 'group',
        fields: 'itemStyle',
        name: '图形样式',
        children: [
            {
                type: 'color',
                fields: 'color',
                name: '图形颜色',
                default: ''
            },
            {
                type: 'suite',
                fields: '',
                name: '边框样式',
                children: border_config
            },
            {
                type: 'suite',
                fields: '',
                name: '阴影样式',
                children: shadow_config
            }
        ]
    },
    {
        type: 'group',
        fields: 'emphasis',
        name: '高亮样式',
        children: [
            {
                type: 'boolean',
                fields: 'disabled',
                name: '是否高亮',
                default: false
            },
            {
                type: 'number',
                fields: 'scale',
                name: '放大效果',
                default: 1.1
            },
            {
                type: 'select',
                fields: 'focus',
                name: '聚焦效果',
                default: 'none',
                options: [
                    { label: 'none', value: 'none' },
                    { label: 'self', value: 'self' },
                    { label: 'series', value: 'series' }
                ]
            },
            {
                type: 'select',
                fields: 'blurScope',
                name: '淡出范围',
                default: 'coordinateSystem',
                options: [
                    { label: 'coordinateSystem', value: 'coordinateSystem' },
                    { label: 'series', value: 'series' },
                    { label: 'global', value: 'global' }
                ]
            },
            {
                type: 'group',
                fields: 'labelLine-lineStyle',
                name: '导线配置',
                children: series_lineStyle_config
            },
            {
                type: 'group',
                fields: 'itemStyle',
                name: '图配置',
                children: [
                    {
                        type: 'color',
                        fields: 'color',
                        name: '图形颜色',
                        default: ''
                    },
                    {
                        type: 'suite',
                        fields: '',
                        name: '边框样式',
                        children: border_config
                    },
                    {
                        type: 'suite',
                        fields: '',
                        name: '阴影样式',
                        children: shadow_config
                    }
                ]
            }
        ]
    }
]
// series lines 线
const series_lines_config = [
    {
        type: 'suite',
        fields: '',
        name: '层级',
        children: [
            {
                type: 'number',
                fields: 'zlevel',
                name: 'zlevel 值',
                default: 0
            },
            {
                type: 'number',
                fields: 'z',
                name: 'z 优先级',
                default: 0
            },
        ]
    },
    {
        type: 'number',
        fields: 'largeThreshold',
        name: '优化的阈值',
        default: 2000
    },
    {
        type: 'boolean',
        fields: 'animation',
        name: '开启动画',
        default: true
    },
    {
        type: 'group',
        fields: 'effect',
        name: '线特效配置',
        enabledItem: true,
        children: [
            {
                type: 'color',
                fields: 'color',
                name: '线颜色',
                default: ''
            },
            {
                type: 'number',
                fields: 'period',
                name: '动画时间s',
                default: 4
            },
            {
                type: 'number',
                fields: 'delay',
                name: '延时时间ms',
                default: 1000
            },
            {
                type: 'select',
                fields: 'symbol',
                name: '图形标记',
                default: 'circle',
                options: [
                    { label: 'circle', value: 'circle' },
                    { label: 'rect', value: 'rect' },
                    { label: 'roundRect', value: 'roundRect' },
                    { label: 'triangle', value: 'triangle' },
                    { label: 'diamond', value: 'diamond' },
                    { label: 'pin', value: 'pin' },
                    { label: 'arrow', value: 'arrow' },
                    { label: 'none', value: 'none' },
                ]
            },
            {
                type: 'number',
                fields: 'symbolSize',
                name: '标记大小',
                default: 3
            },
            {
                type: 'number',
                fields: 'trailLength',
                name: '尾迹长度',
                default: 0.2
            },
            {
                type: 'boolean',
                fields: 'loop',
                name: '循环特效',
                default: true
            },
            {
                type: 'boolean',
                fields: 'roundTrip',
                name: '特效原路返回',
                default: false
            },
        ]
    },
    {
        type: 'group',
        fields: 'lineStyle',
        name: '线配置',
        children: series_lineStyle_config
    },
    {
        type: 'group',
        fields: 'label',
        enabledItem: true,
        name: '标签配置',
        children: series_label_config
    },
    {
        type: 'group',
        fields: 'emphasis',
        name: '高亮配置',
        children: [
            {
                type: 'boolean',
                fields: 'disabled',
                name: '是否高亮',
                default: false
            },
            {
                type: 'select',
                fields: 'focus',
                name: '聚焦效果',
                default: 'none',
                options: [
                    { label: 'none', value: 'none' },
                    { label: 'self', value: 'self' },
                    { label: 'series', value: 'series' }
                ]
            },
            {
                type: 'select',
                fields: 'blurScope',
                name: '淡出范围',
                default: 'coordinateSystem',
                options: [
                    { label: 'coordinateSystem', value: 'coordinateSystem' },
                    { label: 'series', value: 'series' },
                    { label: 'global', value: 'global' }
                ]
            },
            {
                type: 'group',
                fields: 'lineStyle',
                name: '线配置',
                children: series_lineStyle_config
            },
            {
                type: 'group',
                fields: 'label',
                name: '标签配置',
                children: series_label_config
            }
        ]
    }
]

const series_guage_config = [
    {
        type: 'group',
        name: '仪表盘轴线',
        fields: 'axisLine',
        enabledItem: true,
        children: [
            {
                type: 'boolean',
                fields: 'roundCap',
                name: '两端显示圆形',
                default: false
            },
            {
                type: 'number',
                fields: 'lineStyle-width',
                name: '轴线宽',
                default: 40
            },
        ]
    },
    {
        type: 'group',
        name: '仪表盘详情',
        fields: 'detail',
        enabledItem: true,
        children: [
            {
                type: 'suite',
                fields: '',
                name: '文本样式',
                children: textStyleConfig
            }
        ]
    },
    {
        type: 'group',
        name: '进度',
        fields: 'progress',
        enabledItem: true,
        children: [
            {
                type: 'boolean',
                name: '是否重叠',
                fields: 'overlap',
                default: true
            },
            {
                type: 'boolean',
                name: '显示成圆形',
                fields: 'roundCap',
                default: true
            },
            {
                type: 'boolean',
                name: '裁掉超出部分',
                fields: 'clip',
                default: true
            },
            {
                type: 'suite',
                name: '进度条样式',
                fields: 'itemStyle',
                children: [
                    {
                        type: 'color',
                        name: '颜色',
                        fields: 'borderColor',
                        default: '#464646'
                    },
                    {
                        type: 'number',
                        name: '刻度宽',
                        fields: 'borderWidth',
                        default: 1
                    },
                    {
                        type: 'select',
                        name: '刻度类型',
                        fields: 'type',
                        default: 'solid',
                        options: [
                            { label: 'solid', value: 'solid' },
                            { label: 'dashed', value: 'dashed' },
                            { label: 'dotted', value: 'dotted' },
                        ]
                    },
                ]
            },
        ]
    },
    {
        type: 'group',
        name: '刻度',
        fields: 'axisTick',
        enabledItem: true,
        children: [
            {
                type: 'number',
                name: '刻度长',
                fields: 'length',
                default: 6
            },
            {
                type: 'suite',
                name: '刻度样式',
                fields: 'lineStyle',
                children: [
                    {
                        type: 'color',
                        name: '颜色',
                        fields: 'color',
                        default: '#63677A'
                    },
                    {
                        type: 'number',
                        name: '刻度宽',
                        fields: 'width',
                        default: 1
                    },
                    {
                        type: 'select',
                        name: '刻度类型',
                        fields: 'type',
                        default: 'solid',
                        options: [
                            { label: 'solid', value: 'solid' },
                            { label: 'dashed', value: 'dashed' },
                            { label: 'dotted', value: 'dotted' },
                        ]
                    },
                ]
            },
        ]
    },
    {
        type: 'group',
        name: '刻度标签',
        fields: 'axisLabel',
        enabledItem: true,
        children: [
            {
                type: 'number',
                name: '刻度线距离',
                fields: 'distance',
                default: 50
            },
            {
                type: 'number',
                name: '内边距',
                fields: 'padding',
                default: 4
            },
            {
                type: 'suite',
                name: '字体样式',
                fields: '',
                children: [
                    ...textStyleConfig,
                    {
                        type: 'number',
                        name: '行高',
                        fields: 'lineHeight',
                        default: 10
                    },
                ]
            },
            {
                type: 'suite',
                name: '边框样式',
                fields: '',
                children: [
                    {
                        type: 'color',
                        name: '边框颜色',
                        fields: 'borderColor',
                        default: '#00ffff'
                    },
                    {
                        type: 'number',
                        name: '边框宽',
                        fields: 'borderWidth',
                        default: 1
                    },
                    {
                        type: 'select',
                        name: '边框类型',
                        fields: 'borderType',
                        default: 'solid',
                        options: [
                            { label: 'solid', value: 'solid' },
                            { label: 'dashed', value: 'dashed' },
                            { label: 'dotted', value: 'dotted' },
                        ]
                    }
                ]
            }
        ]
    },
    {
        type: 'group',
        fields: 'pointer',
        name: '仪表盘指针',
        enabledItem: true,
        children: [
            {
                type: 'number',
                name: '指针宽',
                fields: 'width',
                default: 6
            },
            {
                type: 'suite',
                name: '指针样式',
                fields: 'itemStyle',
                children: [
                    {
                        type: 'color',
                        name: '指针颜色',
                        fields: 'color',
                        default: '#00ffff'
                    },
                    {
                        type: 'color',
                        name: '边框颜色',
                        fields: 'borderColor',
                        default: '#000'
                    },
                    {
                        type: 'number',
                        name: '边框宽',
                        fields: 'borderWidth',
                        default: 0
                    },
                    {
                        type: 'select',
                        name: '边框类型',
                        fields: 'borderType',
                        default: 'solid',
                        options: [
                            { label: 'solid', value: 'solid' },
                            { label: 'dashed', value: 'dashed' },
                            { label: 'dotted', value: 'dotted' },
                        ]
                    }
                ]
            }
        ]
    },
    {
        type: 'group',
        fields: 'splitLine',
        name: '分隔线样式',
        enabledItem: true,
        children: [
            {
                type: 'text',
                name: '分隔线线长',
                fields: 'length',
                default: 10
            },
            {
                type: 'number',
                name: '分隔线与轴线的距离',
                fields: 'distance',
                default: 0
            },
            {
                type: 'suite',
                name: '分隔线样式',
                fields: 'lineStyle',
                children: [
                    {
                        type: 'color',
                        name: '分隔线颜色',
                        fields: 'color',
                        default: '#00ffff'
                    },
                    {
                        type: 'number',
                        name: '分隔线宽',
                        fields: 'width',
                        default: 3
                    },
                    {
                        type: 'select',
                        name: '分隔线类型',
                        fields: 'type',
                        default: 'solid',
                        options: [
                            { label: 'solid', value: 'solid' },
                            { label: 'dashed', value: 'dashed' },
                            { label: 'dotted', value: 'dotted' },
                        ]
                    }
                ]
            }
        ]
    }
]

export {
    title_config,
    tooltip_config,
    textStyleConfig,
    xAxis_config,
    grid_config,
    legend_config,
    axisTick_config,
    axisLabel_config,
    axisPointer_config,
    polar_config,
    angleAxis_config,
    radiusAxis_config,
    axisLine_linestyle_config,
    splitLine_config,
    visualMap_config,
    border_config,
    shadow_config,
    radar_config,
    series_pie_config,
    geo_config,
    series_effectScatter_config,
    series_lines_config,
    series_guage_config
}