import DataVComponent from "components/DataVComponent"
import EchartsComponent from "components/EchartsComponent"
import { Fragment, useEffect, useState } from "react"
import { ChartType } from "types/chart"
import { getPreviewData } from "useApi/auth"
import './index.less'

const kanbanStyle = (canvasStyle: any) => {
	
	return {
		transform: `scale(${canvasStyle.scale}) translate(0px, 0px)`,
		width: canvasStyle.width,
		height: canvasStyle.height,
		backgroundColor: canvasStyle.config.backgroundColor,
		backgroundImage: canvasStyle.config.backgroundImage
	}
}

const getChartStyle = (chart: ChartType) => {
	return {
		width: chart.width,
		height: chart.height,
		left: chart.x,
		top: chart.y
	}
}

const RenderChart = ({
	chart
}: {
	chart: ChartType
}) => {

	if (chart.is_hide || chart.is_del) {
		return <></>
	}

	if (chart.is_group) {
		return (
			<Fragment>
				{chart.children?.map((chart: ChartType) => <RenderChart key={chart.id} chart={chart} />)}
			</Fragment>
		)
	}

	const chartStyle = {
        position: 'absolute',
        width: chart.width,
        height: chart.height,
        backgroundColor: chart.bg_color
    }
	return (
		<div className="chart-item" style={getChartStyle(chart)}>
			{ chart.is_echarts ? <EchartsComponent chart={chart} chartStyle={chartStyle}  />
				: <DataVComponent chart={chart} chartStyle={chartStyle} />
			}
		</div>
	)
}

const Proview = () => {
	// 画布背景样式
	const [canvasStyle, setCanvasStyle] = useState({
		scale: 1,
		width: 1920,
		height: 1080,
		config: {
			backgroundColor: 'rgb(14, 42, 66)',
			backgroundImage: '',
			fit: 0
		}
	})
	const [chartData, setChartData] = useState([])

	useEffect(() => {
		const {data, kb_style} = getPreviewData()
		setChartData(data)
		setCanvasStyle(kb_style)

		const screenWidth = document.documentElement.clientWidth
		const scale = (screenWidth / kb_style.width).toFixed(6)
		setCanvasStyle({...kb_style, scale: scale as unknown as number})
		window.onresize = () => {
			const screenWidth = document.documentElement.clientWidth
			const scale = (screenWidth / kb_style.width).toFixed(6)
			setCanvasStyle({...kb_style, scale: scale as unknown as number})
		}
	}, [])

	return (
		<div className="preview-container">
			<div className="kanban-preview-content" style={kanbanStyle(canvasStyle)}>
				{chartData.map((chart: ChartType) => <RenderChart key={chart.id} chart={chart} />)}
			</div>
			<div className="kanban-bg" style={{backgroundColor: canvasStyle.config.backgroundColor}}></div>
		</div>
	)
}

export default Proview