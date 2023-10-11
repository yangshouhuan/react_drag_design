import RenderDataV from "components/RenderDataV"
import RenderEcharts from "components/RenderEcharts"
import { Fragment, useEffect, useState } from "react"
import { ChartType } from "types/chart"
import { getPreviewData } from "useApi/auth"
import './index.less'
import { useParams } from "react-router-dom"

const kanbanStyle = (canvasChart: ChartType, scale: number) => {
	
	return {
		transform: `scale(${scale}) translate(0px, 0px)`,
		width: canvasChart.width,
		height: canvasChart.height,
		backgroundColor: canvasChart.bg_color,
		opacity: canvasChart.opacity
	}
}
const getMoveStyle = (chart: ChartType) => {
	return {
		width: chart.width,
		height: chart.height,
		left: chart.x,
		top: chart.y
	}
}
const getChartStyle = (chart: ChartType) => {
	return {
        position: 'absolute',
        width: chart.width,
        height: chart.height,
        backgroundColor: chart.bg_color,
		opacity: chart.opacity
    }
}

const RenderChart = ({ chart }: { chart: ChartType }) => {

	if (chart.is_hide || chart.is_del)
		<></>

	if (chart.is_group) {
		return (
			<Fragment>
				{chart.children?.map((chart: ChartType) => <RenderChart key={chart.chart_id} chart={chart} />)}
			</Fragment>
		)
	}
	
	return (
		<div className="chart-item" style={getMoveStyle(chart)}>
			{ chart.is_echart ? <RenderEcharts
					chartElId={'eMain' + chart.chart_id}
					chart={chart}
					chartStyle={getChartStyle(chart)}
				/>
				: <RenderDataV
					chartElId={'eMain' + chart.chart_id}
					chart={chart}
					chartStyle={getChartStyle(chart)}
				/>
			}
		</div>
	)
}

const Proview = ({
	canvasChart,
	chartData,
	adaptive_scale,
} : {
	canvasChart: ChartType
	chartData: ChartType[]
	adaptive_scale: number
}) => {

	return (
		<div className="preview-container">
			<div className="kanban-preview-content" style={kanbanStyle(canvasChart, adaptive_scale)}>
				{chartData.map((chart: ChartType) => <RenderChart key={chart.chart_id} chart={chart} />)}
			</div>
			<div className="kanban-bg" style={{backgroundColor: canvasChart.bg_color}}></div>
		</div>
	)
}

export default Proview