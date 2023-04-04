import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'
import { ChartType } from 'types/chart'
import geoJson from 'chart-config/shared/geoJSON.json'
import 'echarts-gl'

const EchartsComponent = ({
    chart,
    chartStyle,
} : {
    chart: ChartType
    chartStyle?: any
}) => {
    const refVal = useRef<echarts.ECharts | null>(null)
    const Id = 'eMain' + chart.id
    
    // 初始化获取图层实例
    useEffect(() => {
        refVal.current = echarts.init(document.getElementById(Id)!)

        if (!chart.is_group) {
            if (chart.component === 'map') {  // 地图
                echarts.registerMap("china", { geoJSON: geoJson as any, specialAreas: {} });
            } else if (chart.component === '3Dmap') {
                console.log(111)
                refVal.current?.setOption(chart.config)
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