import { align, fontWeight, position, symbol } from "chart-config/shared"
import { BaseConfigType } from "types/chart"

const configType1: BaseConfigType[] = [
    {
        title: '基础属性',
        children: [
            {
                text: '开启滚轮缩放',
                fields: 'geo-roam',
                component: 'Switch',
                types: {
                    defaultChecked: false
                }
            }
        ]
    },
    {
        title: '标题',
        children: [
            {
                text: '是否显示',
                fields: 'title-show',
                component: 'Switch',
                types: {
                    defaultChecked: true
                }
            },
            {
                text: '主标题',
                fields: 'title-text',
                component: 'Input',
                types: {
                    defaultValue: '主标题'
                }
            },
            {
                text: '子标题',
                fields: 'title-subtext',
                component: 'Input',
                types: {
                    defaultValue: '子标题'
                }
            },
            {
                text: '标题颜色',
                fields: 'title-textStyle-color',
                component: 'ColorPicker',
                types: {
                    defaultValue: '#ffffff'
                }
            },
            {
                text: '字体大小',
                fields: 'title-textStyle-fontSize',
                component: 'InputNumber',
                types: {
                    defaultValue: 16
                }
            },
            {
                text: '字体粗细',
                fields: 'title-textStyle-fontWeight',
                component: 'Select',
                types: {
                    options: fontWeight,
                    defaultValue: '300'
                }
            }
        ]
    },
    {
        title: '标签',
        children: [
            {
                text: '是否显示',
                fields: 'geo-emphasis-label-show',
                component: 'Switch',
                types: {
                    defaultChecked: true
                }
            },
            {
                text: '位置',
                fields: 'geo-emphasis-label-position',
                component: 'Select',
                types: {
                    options: position,
                    defaultValue: 'top'
                }
            },
            {
                text: '字体颜色',
                fields: 'geo-emphasis-label-color',
                component: 'ColorPicker',
                types: {
                    defaultValue: '#fffff'
                }
            },
            {
                text: '字体大小',
                fields: 'geo-emphasis-label-fontSize',
                component: 'InputNumber',
                types: {
                    defaultValue: 12
                }
            },
        ]
    },
    {
        title: '图形',
        children: [
            {
                text: '描边颜色',
                fields: 'geo-emphasis-itemStyle-borderColor',
                component: 'ColorPicker',
                types: {
                    defaultValue: 'rgb(147, 235, 248)'
                }
            },
            {
                text: '描边宽度',
                fields: 'geo-emphasis-itemStyle-borderWidth',
                component: 'InputNumber',
                types: {
                    defaultValue: 1
                }
            },
            {
                text: '阴影颜色',
                fields: 'geo-emphasis-itemStyle-shadowColor',
                component: 'ColorPicker',
                types: {
                    defaultValue: 'rgba(0, 0, 0, 0.5)'
                }
            },
            {
                text: '阴影范围',
                fields: 'geo-emphasis-itemStyle-shadowBlur',
                component: 'InputNumber',
                types: {
                    defaultValue: 10
                }
            }
        ]
    }
]

const configType2: BaseConfigType[] = [
    {
        title: '基本配置',
        children: [
            {
                text: '是否显示名称',
                fields: 'series-label-show',
                component: 'Switch',
                types: {
                    defaultChecked: true
                }
            },
            {
                text: '缩放比例',
                fields: 'series-zoom',
                component: 'InputNumber',
                types: {
                    defaultChecked: 1.2
                }
            },
            {
                text: '顶部距离',
                fields: 'series-top',
                component: 'Input',
                types: {
                    defaultChecked: '10%'
                }
            },
        ]
    },
    {
        title: '标题',
        children: [
            {
                text: '主标题',
                fields: 'title-text',
                component: 'Input',
                types: {
                    defaultChecked: '数据地图'
                }
            },
            {
                text: '对齐方式',
                fields: 'title-left',
                component: 'Select',
                types: {
                    options: align,
                    defaultChecked: 'right'
                }
            },
            {
                text: '文字颜色',
                fields: 'title-textStyle-color',
                component: 'ColorPicker',
                types: {
                    defaultChecked: '#000'
                }
            }
        ]
    },
    {
        title: '视觉映射组件',
        children: [
            {
                text: '对齐方式',
                fields: 'visualMap-left',
                component: 'Select',
                types: {
                    options: align,
                    defaultChecked: 'right'
                }
            },
            {
                text: '最大值',
                fields: 'visualMap-max',
                component: 'InputNumber',
                types: {
                    defaultChecked: 100
                }
            },
            {
                text: '文字颜色',
                fields: 'visualMap-textStyle-color',
                component: 'ColorPicker',
                types: {
                    defaultChecked: '#000'
                }
            },
        ]
    },
    {
        title: '工具导航',
        children: [
            {
                text: '是否显示',
                fields: 'toolbox-show',
                component: 'Switch',
                types: {
                    defaultChecked: true
                }
            },
            {
                text: '左右对其方式',
                fields: 'toolbox-left',
                component: 'Select',
                types: {
                    options: align,
                    defaultChecked: 'left'
                }
            },
            {
                text: '上下对其方式',
                fields: 'toolbox-top',
                component: 'Select',
                types: {
                    options: position,
                    defaultChecked: 'top'
                }
            },
        ]
    }
]

export default [
    {
        id: '0-1',
        configType: configType1
    },
    {
        id: '0-2',
        configType: configType2
    }
]