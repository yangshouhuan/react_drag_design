import { fontWeight } from "chart-config/shared"
import { BaseConfigType } from "types/chart"

const configType: BaseConfigType[] = [
    {
        title: '标题',
        children: [
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
        title: 'X轴',
        children: [
            {
                text: '文字颜色',
                fields: 'xAxis-axisLabel-color',
                component: 'ColorPicker',
                types: {
                    defaultValue: '#ffffff'
                }
            },
            {
                text: '字体大小',
                fields: 'xAxis-axisLabel-fontSize',
                component: 'InputNumber',
                types: {
                    defaultValue: 14
                }
            },
            {
                text: '字体粗细',
                fields: 'xAxis-axisLabel-fontWeight',
                component: 'Select',
                types: {
                    options: fontWeight,
                    defaultValue: '300'
                }
            },
            {
                text: '线条颜色',
                fields: 'xAxis-axisLine-lineStyle-color',
                component: 'ColorPicker',
                types: {
                    defaultValue: '#666666'
                }
            }
        ]
    },
    {
        title: 'Y轴',
        children: [
            {
                text: '文字颜色',
                fields: 'yAxis-axisLabel-color',
                component: 'ColorPicker',
                types: {
                    defaultValue: '#ffffff'
                }
            },
            {
                text: '字体大小',
                fields: 'yAxis-axisLabel-fontSize',
                component: 'InputNumber',
                types: {
                    defaultValue: 14
                }
            },
            {
                text: '字体粗细',
                fields: 'yAxis-axisLabel-fontWeight',
                component: 'Select',
                types: {
                    options: fontWeight,
                    defaultValue: '300'
                }
            },
            {
                text: '线条颜色',
                fields: 'yAxis-axisLine-lineStyle-color',
                component: 'ColorPicker',
                types: {
                    defaultValue: '#666666'
                }
            }
        ]
    },
]

export default [
    {
        id: '0-1',
        configType
    }
]