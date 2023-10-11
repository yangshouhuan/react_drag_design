import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'
import { ChartType } from 'types/chart'
import 'echarts-gl'
// import "echarts-liquidfill"
import 'echarts/extension/bmap/bmap'
import { validateUrl } from 'utils/validate'

import geoJSON from 'assetss/echarts_json/geoJSON.json'
import suzhouJSON from 'assetss/echarts_json/xuzhou.json'

// 获取地图json
const requestJson = (refVal: any, map_name: string, map_url: string, chartElId: string, option: any) => {
    if (validateUrl(map_url)) {
        // json数据从服务器获取
        // fetch(map_url)
        // .then(response => response.json())
        // .then(data => {
        //     echarts.registerMap(map_name, data)
        //     refVal.current = echarts.init(document.getElementById(chartElId)!)
        //     refVal.current.setOption(option)
        // })
        // .catch(() => {
        //     console.log('请求错误')
        // })
        
        // 为了方便这里从静态文件中获取，事实上json数据应该从服务器获取
        if (map_url === 'http://www.yshcz.com.cn/assetss/json/geoJSON.json') {
            echarts.registerMap(map_name, geoJSON as any)
            refVal.current = echarts.init(document.getElementById(chartElId)!)
            refVal.current.setOption(option)
        } else if (map_url === 'http://www.yshcz.com.cn/assetss/json/xuzhou.json') {
            echarts.registerMap(map_name, suzhouJSON as any)
            refVal.current = echarts.init(document.getElementById(chartElId)!)
            refVal.current.setOption(option)
        } else {
            console.log('请求错误')
        }
    } else {
        console.log('地址错误');
    }
}

const RenderEcharts = ({
    chart,
    chartStyle,
    chartElId
} : {
    chart: ChartType
    chartStyle?: any
    chartElId: string
}) => {
    const refVal = useRef<echarts.ECharts | null>(null)

    // 初始化获取图层实例
    useEffect(() => {
        // var chart = echarts.init(containerDom, null, {renderer: 'svg'}); 
        // if (!chart.is_group) {
        //     
        //     if (chart.component === 'my_map') {  // 地图
        //         const map_name = chart.option.geo.map || ''
        //         const map_url = chart.map_url
        //         requestJson(refVal, map_name, map_url, chartElId, chart.option)
        //     } else if (chart.component === 'my_map3D') {  // 3D地图
        //         const map_name = chart.option.geo3D.map || ''
        //         const map_url = chart.map_url
        //         requestJson(refVal, map_name, map_url, chartElId, chart.option)
        //     } else {
        //         refVal.current = echarts.init(document.getElementById(chartElId)!)
        //         refVal.current?.setOption(Object.assign(chart.option, { animation: false }))
        //     }
        // }
        
        if (!chart.is_group) {
            if (chart.component === 'my_map') {  // 地图
                const map_name = chart.option.geo.map || ''
                const map_url = chart.map_url
                requestJson(refVal, map_name, map_url, chartElId, chart.option)
            } else if (chart.component === 'my_map3D') {  // 3D地图
                const map_name = chart.option.geo3D.map || ''
                const map_url = chart.map_url
                requestJson(refVal, map_name, map_url, chartElId, chart.option)
            } else {
                refVal.current = echarts.init(document.getElementById(chartElId)!)
                refVal.current?.setOption(Object.assign(chart.option, { animation: false }))
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
            refVal.current.setOption(Object.assign(chart.option, { animation: false }))
        }
    }, [chart.width, chart.height, chart.option])
    
    return (
        <div
            id={chartElId}
            className='design-chart-item'
            style={chartStyle}
        ></div>
    )
}

export default RenderEcharts