import { BaseChartType } from "types/chart"

const ChartList: BaseChartType[] = [
    {
        id: 231,
        option_id: '0-23|0-1',
        component: 'dv-scroll-board',
        name: '轮播表',
        config: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            header: [],
            data: [
                ['行1列1', '行1列2', '行1列3', '行1列4'],
                ['行2列1', '行2列2', '行2列3', '行1列4'],
                ['行3列1', '行3列2', '行3列3', '行1列4'],
                ['行4列1', '行4列2', '行4列3', '行1列4'],
                ['行5列1', '行5列2', '行5列3', '行1列4'],
                ['行6列1', '行6列2', '行6列3', '行1列4'],
                ['行7列1', '行7列2', '行7列3', '行1列4'],
                ['行8列1', '行8列2', '行8列3', '行1列4']
            ],
            rowNum: 5,
            headerBGC: '#00BAFF',
            oddRowBGC: '#003B51',
            evenRowBGC: '#0A2732',
            waitTime: 2000,
            headerHeight: 35,
            columnWidth: [],
            align: 'left',
            index: false,
            indexHeader: '#',
            carousel: 'single',
            hoverPause: true
        }
    },
    {
        id: 232,
        option_id: '0-23|0-2',
        component: 'dv-scroll-ranking-board',
        name: '排名轮播表',
        config: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            data: [
                {
                    name: '周口',
                    value: 55123
                },
                {
                    name: '南阳',
                    value: 12022
                },
                {
                    name: '西峡',
                    value: 78932
                },
                {
                    name: '驻马店',
                    value: 63411
                },
                {
                    name: '新乡',
                    value: 44231
                }
            ],
            rowNum: 5,
            waitTime: 2000,
            carousel: 'single',
            unit: '单位',
            sort: true,
            valueFormatter: ''
        }
    }
]

export default ChartList
