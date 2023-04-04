import { BaseConfigType } from "types/chart"

const configType: BaseConfigType[] = [
    {
        title: '全局配置',
        children: [
            {
                fields: 'backgroundColor',
                text: '背景颜色',
                component: 'ColorPicker',
                types: {
                    defaultValue: '#000'
                }
            }
        ]
    }
]

export default [
    {
        id: '0-1',
        configType: configType
    }
]