
import * as reactDataV from "@jiaminghi/data-view-react"
import { useEffect, useMemo, useRef } from "react"
import { ChartType } from "types/chart"

const reactDataVChart: any = {
    'dv-border-Box-1': reactDataV.BorderBox1,
    'dv-border-Box-2': reactDataV.BorderBox2,
    'dv-border-Box-3': reactDataV.BorderBox3,
    'dv-border-Box-4': reactDataV.BorderBox4,
    'dv-border-Box-5': reactDataV.BorderBox5,
    'dv-border-Box-6': reactDataV.BorderBox6,
    'dv-border-Box-7': reactDataV.BorderBox7,
    'dv-border-Box-8': reactDataV.BorderBox8,
    'dv-border-Box-9': reactDataV.BorderBox9,
    'dv-border-Box-10': reactDataV.BorderBox10,
    'dv-border-Box-11': reactDataV.BorderBox11,
    'dv-border-Box-12': reactDataV.BorderBox12,

    'dv-decoration-1': reactDataV.Decoration1,
    'dv-decoration-2': reactDataV.Decoration2,
    'dv-decoration-3': reactDataV.Decoration3,
    'dv-decoration-4': reactDataV.Decoration4,
    'dv-decoration-5': reactDataV.Decoration5,
    'dv-decoration-6': reactDataV.Decoration6,
    'dv-decoration-7': reactDataV.Decoration7,
    'dv-decoration-8': reactDataV.Decoration8,
    'dv-decoration-9': reactDataV.Decoration9,
    'dv-decoration-10': reactDataV.Decoration10,
    'dv-decoration-11': reactDataV.Decoration11,
    'dv-decoration-12': reactDataV.Decoration12,

    'dv-scroll-board': reactDataV.ScrollBoard,
    'dv-scroll-ranking-board': reactDataV.ScrollRankingBoard,
    'div': () => {
        return <div>我是div</div>
    },
    'img': () => {
        return <div>我是img</div>
    }
}

const DataVComponent = ({
    chart,
    chartStyle
} : {
    chart: ChartType
    chartStyle?: any
}) => {
    const Id = 'eMain' + chart.id
    const DataVCmpt = reactDataVChart[chart.component]
    const chartRef = useRef<any>(null)

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.setWH()
        }
    }, [chart])

    return (
        <div
            id={Id}
            className='design-chart-item'
            style={chartStyle}
        >
            <DataVCmpt ref={chartRef} {...chart.config} config={chart.config} />
        </div>
    )
}

export default DataVComponent
