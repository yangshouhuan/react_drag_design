import { align, font, fontWeight } from "chart-config/shared"
import { BaseConfigType } from "types/chart"

const configType: BaseConfigType[] = [
    {
        title: '基础属性',
        children: [
            {
                fields: 'color',
                text: '自定义颜色',
                component: 'ColorMulti',
                types: {
                    defaultValue: ['#ccc', '#999']
                }
            },
            {
                fields: 'dur',
                text: '动画时间',
                component: 'InputNumber',
                types: {
                    defaultValue: 1
                }
            }
        ]
    }
]

const configType8: BaseConfigType[] = [
    {
        title: '基础属性',
        children: [
            {
                fields: 'color',
                text: '自定义颜色',
                component: 'ColorMulti',
                types: {
                    defaultValue: ['#ccc', '#999']
                }
            },
            {
                fields: 'dur',
                text: '动画时间',
                component: 'InputNumber',
                types: {
                    defaultValue: 1
                }
            },
            {
                fields: 'reverse',
                text: '翻转',
                component: 'Switch',
                types: {
                    defaultValue: false
                }
            },
        ]
    }
]


const configType12: BaseConfigType[] = [
    {
        title: '基础属性',
        children: [
            {
                fields: 'color',
                text: '自定义颜色',
                component: 'ColorMulti',
                types: {
                    defaultValue: ['#ccc', '#999']
                }
            },
            {
                fields: 'scanDur',
                text: '扫描时长',
                component: 'InputNumber',
                types: {
                    defaultValue: 3
                }
            },
            {
                fields: 'haloDur',
                text: '光晕时长',
                component: 'InputNumber',
                types: {
                    defaultValue: 3
                }
            }
        ]
    }
]


export default [
    {
        id: '0-1',
        configType: configType
    },
    {
        id: '0-2',
        configType: configType
    },
    {
        id: '0-3',
        configType: configType
    },
    {
        id: '0-4',
        configType: configType
    },
    {
        id: '0-5',
        configType: configType
    },
    {
        id: '0-6',
        configType: configType
    },
    {
        id: '0-7',
        configType: configType
    },
    {
        id: '0-8',
        configType: configType8
    },
    {
        id: '0-9',
        configType: configType
    },
    {
        id: '0-10',
        configType: configType
    },
    {
        id: '0-11',
        configType: configType
    },
    {
        id: '0-12',
        configType: configType12
    }
]