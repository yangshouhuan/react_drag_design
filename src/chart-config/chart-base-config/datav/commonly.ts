import { align, font, fontWeight } from "chart-config/shared"
import { BaseConfigType } from "types/chart"

const configType1: BaseConfigType[] = [
    {
        title: '基础属性',
        children: [
            {
                fields: 'fontFamily',
                text: '字体选择',
                component: 'Select',
                types: {
                    options: font,
                    defaultValue: 'SimSun'
                }
            },
            {
                fields: 'fontSize',
                text: '字体大小',
                component: 'InputNumber',
                types: {
                    defaultValue: 18
                }
            },
            {
                fields: 'color',
                text: '字体颜色',
                component: 'ColorPicker',
                types: {
                    defaultValue: '#cccccc'
                }
            },
            {
                fields: 'fontWeight',
                text: '字体粗细',
                component: 'Select',
                types: {
                    options: fontWeight,
                    defaultValue: 'normal'
                }
            },
            {
                fields: 'align',
                text: '对齐方式',
                component: 'Select',
                types: {
                    options: align,
                    defaultValue: 'center'
                }
            },
            {
                fields: 'ellipsis',
                text: '溢出省略',
                component: 'InputNumber',
                types: {
                    options: align,
                    defaultValue: 0
                }
            }
        ]
    }
]

const configType2: BaseConfigType[] = [
    {
        title: '基础属性',
        children: [
            {
                fields: 'imgUrl',
                text: '图片地址',
                component: 'SingleUploadImage',
                types: {
                    defaultValue: ''
                }
            }
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