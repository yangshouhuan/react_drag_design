import { connect } from 'react-redux'
import KanbanPreview from './KanbanPreview'

const mapStateToProps = (state: any) => {
	return {
		canvasChart: state.chart.canvasChart,
        chartData: state.chart.chartData,
        adaptive_scale: state.chart.adaptive_scale,
	}
}

export default connect(mapStateToProps, null)(KanbanPreview)