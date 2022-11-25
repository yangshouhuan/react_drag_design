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
                    defaultValue: ['#fff', '#999']
                }
            }
        ]
    }
]

const configType4: BaseConfigType[] = [
    {
        title: '基础属性',
        children: [
            {
                fields: 'color',
                text: '自定义颜色',
                component: 'ColorMulti',
                types: {
                    defaultValue: ['#fff', '#999']
                }
            },
            {
                fields: 'reverse',
                text: '翻转',
                component: 'Switch',
                types: {
                    defaultValue: false
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
                    defaultValue: ['#fff', '#999']
                }
            },
            {
                fields: 'dur',
                text: '动画时长',
                component: 'InputNumber',
                types: {
                    defaultValue: 3
                }
            },
        ]
    }
]

const configType11: BaseConfigType[] = [
    {
        title: '基础属性',
        children: [
            {
                fields: 'color',
                text: '自定义颜色',
                component: 'ColorMulti',
                types: {
                    defaultValue: ['#fff', '#999']
                }
            },
            {
                fields: 'title',
                text: '边框标题',
                component: 'Input',
                types: {
                    defaultValue: '边框标题'
                }
            },
            {
                fields: 'titleWidth',
                text: '标题宽度',
                component: 'InputNumber',
                types: {
                    defaultValue: 200
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
        configType: configType4
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
        configType: configType11
    },
    {
        id: '0-12',
        configType: configType
    }
]