import { align, fontWeight } from "chart-config/shared"
import { BaseConfigType } from "types/chart"

const configType1: BaseConfigType[] = [
    {
        title: '基础设置',
        children: [
            {
                text: '提示名称',
                fields: 'series-0-name',
                component: 'Input',
                types: {
                    defaultValue: '访问来源'
                }
            },
            {
                text: '圆线宽',
                fields: 'series-0-radius',
                component: 'MultiInput',
                types: {
                    defaultValue: ['50%', '70%']
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
                    defaultChecked: false
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
                    defaultValue: ''
                }
            },
            {
                text: '对齐方式',
                fields: 'title-left',
                component: 'Select',
                types: {
                    options: align,
                    defaultValue: 'center'
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
        title: '说明',
        children: [
            {
                text: '是否显示',
                fields: 'legend-show',
                component: 'Switch',
                types: {
                    defaultChecked: false
                }
            },
            {
                text: '排序方式',
                fields: 'legend-orient',
                component: 'Select',
                types: {
                    options: [
                        { value: 'vertical', label: 'vertical' },
                        { value: 'horizontal', label: 'horizontal' }
                    ],
                    defaultValue: 'vertical'
                }
            },
            {
                text: '字体颜色',
                fields: 'legend-textStyle-color',
                component: 'ColorPicker',
                types: {
                    defaultValue: '#ffffff'
                }
            },
            {
                text: '字体大小',
                fields: 'legend-textStyle-fontSize',
                component: 'InputNumber',
                types: {
                    defaultValue: 16
                }
            },
            {
                text: '字体粗细',
                fields: 'legend-textStyle-fontWeight',
                component: 'Select',
                types: {
                    options: fontWeight,
                    defaultValue: '300'
                }
            }
        ]
    }
]

const configType2: BaseConfigType[] = [
    {
        title: '标题',
        children: [
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
        title: '说明',
        children: [
            {
                text: '字体颜色',
                fields: 'legend-textStyle-color',
                component: 'ColorPicker',
                types: {
                    defaultValue: '#ffffff'
                }
            },
            {
                text: '字体大小',
                fields: 'legend-textStyle-fontSize',
                component: 'InputNumber',
                types: {
                    defaultValue: 16
                }
            },
            {
                text: '字体粗细',
                fields: 'legend-textStyle-fontWeight',
                component: 'Select',
                types: {
                    options: fontWeight,
                    defaultValue: '300'
                }
            }
        ]
    }
]

const configType3: BaseConfigType[] = [
    {
        title: '标题',
        children: [
            {
                text: '标题颜色',
                fields: 'title-textStyle-color',
                component: 'ColorPicker',
                types: {
                    defaultValue: '#cccccc'
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
]

export default [
    {
        id: '0-1',
        configType: configType1
    },
    {
        id: '0-2',
        configType: configType2
    },
    {
        id: '0-3',
        configType: configType3
    },
]