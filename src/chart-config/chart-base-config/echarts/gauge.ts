import { BaseConfigType } from "types/chart"

const configType2: BaseConfigType[] = [
    {
        title: '全局配置',
        children: [
            {
                fields: 'series-0-progress-width',
                text: '线条背景宽度',
                component: 'Input',
                types: {
                    defaultValue: 18
                }
            }
        ]
    }
]

export default [
    {
        id: '0-1',
        configType: []
    },
    {
        id: '0-2',
        configType: configType2
    },
    {
        id: '0-3',
        configType: []
    },
    {
        id: '0-4',
        configType: []
    }
]