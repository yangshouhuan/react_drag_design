import { ChartType } from "types/chart"

const chartStyle = (chart: ChartType, minScale: number, activeId: number) => {

	return {
		width: (chart.width * minScale) + 'px',
		height: (chart.height * minScale) + 'px',
		top: (chart.y * minScale) + 'px',
		left: (chart.x * minScale) + 'px',
		opacity: 0.7,
		backgroundColor: chart.chart_id === activeId ? 'rgb(77, 190, 231, .7)' : 'rgb(194, 194, 194, .7)'
	}
}

const ChartItem = ({
	chart,
	activeId,
	scale
} : {
	chart: ChartType
	activeId: number
	scale: number
}) => {

	if (chart.is_hide || chart.is_del) {
		return <></>
	}

	if (chart.is_group) {
		return <>{chart.children?.map((item: ChartType) => (
			<ChartItem
				key={item.chart_id}
				chart={item}
				activeId={activeId}
				scale={scale}
			/>
		))}</>
	}

	return <div
		className='simulate'
		key={chart.chart_id}
		style={chartStyle(chart, scale, activeId)}
	/>
}

export default ChartItem