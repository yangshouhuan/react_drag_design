import { align, font, fontWeight } from "chart-config/shared"
import { BaseConfigType } from "types/chart"

const configType1: BaseConfigType[] = [
    {
        title: '基础属性',
        children: [
            {
                text: '表行数',
                fields: 'rowNum',
                component: 'InputNumber',
                types: {
                    min: 1,
                    defaultValue: 5
                }
            },
            {
                text: '表头背景色',
                fields: 'headerBGC',
                component: 'ColorPicker',
                types: {
                    defaultValue: '#00BAFF'
                }
            },
            {
                text: '奇数行背景色',
                fields: 'oddRowBGC',
                component: 'ColorPicker',
                types: {
                    defaultValue: '#003B51'
                }
            },
            {
                text: '偶数行背景色',
                fields: 'evenRowBGC',
                component: 'ColorPicker',
                types: {
                    defaultValue: '#0A2732'
                }
            },
            {
                text: '轮播时间间隔(ms)',
                fields: 'waitTime',
                component: 'InputNumber',
                types: {
                    defaultValue: 2000
                }
            },
            {
                text: '表头高度',
                fields: 'headerHeight',
                component: 'InputNumber',
                types: {
                    defaultValue: 35
                }
            },
            {
                text: '列宽度',
                fields: 'columnWidth',
                component: 'MultiNumber',
                types: {
                    defaultValue: []
                }
            },
            {
                text: '列对齐方式',
                fields: 'align',
                component: 'Select',
                types: {
                    options: align,
                    defaultValue: 'left',
                }
            },
            {
                text: '显示行号',
                fields: 'index',
                component: 'Switch',
                types: {
                    defaultValue: false
                }
            },
            {
                text: '行号表头',
                fields: 'indexHeader',
                component: 'Input',
                types: {
                    defaultValue: '#'
                }
            },
            {
                text: '轮播方式',
                fields: 'carousel',
                component: 'Select',
                types: {
                    options: [
                        {
                            label: 'single',
                            value: 'single'
                        },
                        {
                            label: 'page',
                            value: 'page'
                        }
                    ],
                    defaultValue: 'single'
                }
            },
            {
                text: '悬浮暂停轮播',
                fields: 'hoverPause',
                component: 'Switch',
                types: {
                    defaultValue: true
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
                text: '表行数',
                fields: 'rowNum',
                component: 'InputNumber',
                types: {
                    defaultValue: 5
                }
            },
            {
                text: '轮播时间间隔(ms) ',
                fields: 'waitTime',
                component: 'InputNumber',
                types: {
                    defaultValue: 2000
                }
            },
            {
                text: '轮播方式',
                fields: 'carousel',
                component: 'Select',
                types: {
                    options: [
                        {
                            label: 'single',
                            value: 'single'
                        },
                        {
                            label: 'page',
                            value: 'page'
                        }
                    ],
                    defaultValue: 'single'
                }
            },
            {
                text: '数值单位',
                fields: 'unit',
                component: 'Input',
                types: {
                    defaultValue: '单位'
                }
            },
            {
                text: '自动排序',
                fields: 'sort',
                component: 'Switch',
                types: {
                    defaultValue: true
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