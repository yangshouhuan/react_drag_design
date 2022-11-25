import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'
import { ChartType } from 'types/chart'

const EchartsComponent = ({
    chart,
    chartStyle,
    getJson
} : {
    chart: ChartType
    chartStyle?: any
    getJson: any
}) => {
    const refVal = useRef<echarts.ECharts | null>(null)
    const Id = 'eMain' + chart.id
    
    // 初始化获取图层实例
    useEffect(() => {
        refVal.current = echarts.init(document.getElementById(Id)!)

        if (!chart.is_group) {
            if (chart.option_id.includes('0-3|')) {  // 地图
                echarts.registerMap("china", { geoJSON: getJson, specialAreas: {} });
            } else {
                refVal.current?.setOption(chart.config)
            }
        }
    }, [])

    // 重新设置图层宽高
    useEffect(() => {
        if (refVal.current) {
            refVal.current.resize({
                width: chart.width,
                height: chart.height
            })
            refVal.current.setOption(chart.config)
        }
    }, [chart])
    
    return (
        <div
            id={Id}
            className='design-chart-item'
            style={chartStyle}
        ></div>
    )
}

export default EchartsComponent