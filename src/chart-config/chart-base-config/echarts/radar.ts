import { fontWeight } from "chart-config/shared"
import { BaseConfigType } from "types/chart"

const configType: BaseConfigType[] = [
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
                text: '主标题颜色',
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
                    defaultValue: 18
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
                    defaultChecked: true
                }
            },
            {
                text: '文字颜色',
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
                    defaultValue: 13
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
    },
    {
        title: '视觉映射',
        children: [
            {
                text: '是否显示',
                fields: 'visualMap-show',
                component: 'Switch',
                types: {
                    defaultChecked: true
                }
            },
            {
                text: '图元颜色',
                fields: 'visualMap-color',
                component: 'ColorMulti',
                types: {
                    defaultValue: ['red', 'yellow'],
                }
            }
        ]
    }
]

export default [
    {
        id: '0-1',
        configType
    }
]