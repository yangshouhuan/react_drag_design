import { BaseChartType } from "types/chart"

const ChartList: BaseChartType[] = [
    {
        id: 201,
        option_id: '0-20|0-1',
        component: 'div',
        name: '标题',
        config: {
            value: '通用标题',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            fontSize: '18',
            color: '#cccccc',
            fontWeight: 'normal',
            fontFamily: 'SimSun',
            align: 'center',
            ellipsis: 0
        }
    },
    {
        id: 202,
        option_id: '0-20|0-2',
        component: 'img',
        name: '背景图片',
        config: {
            imgUrl: ''
        }
    }
]

export default ChartList
