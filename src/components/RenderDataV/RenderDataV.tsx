
import * as reactDataV from "@jiaminghi/data-view-react"
import MyBgImg from "components/MyBgImg"
import MyColorLump from "components/MyColorLump"
import MyDateTime from "components/MyDateTime"
import MyDigitalFlop from "components/MyDigitalFlop"
import MyIcon from "components/MyIcon"
import MyProgressBar from "components/MyProgressBar"
import MyTitle from "components/MyTitle"
import { useEffect, useRef } from "react"
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
    // 'dv-digital-flop': reactDataV.DigitalFlop,

    'div': () => {
        return <div>我是div</div>
    },
    
    'my-title': MyTitle,
    'my-img': MyBgImg,
    'my-icon': MyIcon,
    'my-digital-flop': MyDigitalFlop,
    'my-color-lump': MyColorLump,
    'my-date-time': MyDateTime,
    'my-progress-bar': MyProgressBar
}

const RenderDataV = ({
    chart,
    chartStyle,
    chartElId
} : {
    chart: ChartType
    chartStyle?: any
    chartElId: string
}) => {
    const chartRef = useRef<any>(null)
    let DataVCmpt = reactDataVChart[chart.component]

    useEffect(() => {
        if (chartRef.current && chartRef.current.setWH) {
            chartRef.current.setWH()
        }
    }, [chart.width, chart.height])

    return (
        <div
            id={chartElId}
            className='design-chart-item'
            style={chartStyle}
        >
            {DataVCmpt && <DataVCmpt ref={chartRef} {...chart.option} config={chart.option} />}
        </div>
    )
}

export default RenderDataV
