import { connect } from 'react-redux'
import { doActionStyle, doBaseConfig, doChartActiveId } from 'store/action/chart_base'
import { doActionVisible } from 'store/action/visible'
import Design from './Design'

const designLeft = (data: any) => {
	let left = data.all_layer_visible ? 500 : 210
	left = data.my_layer_visible ? left : left - 210

	return left
}

const mapDispatchToProps = (dispatch: Function) => {
	return {
		changeActiveId: (value: any) => dispatch(doChartActiveId(value)),
		handleBaseConfig: (value: any) => dispatch(doBaseConfig(value)),
		doActionVisible: (value: any) => dispatch(doActionVisible(value)),
		doActionStyle: (value: any) => dispatch(doActionStyle(value))
	}
}

const mapStateToProps = (state: any) => {
	return {
		designLeft: designLeft(state.visible),
		chartData: state.chart.chartData,
		activeId: state.chart.activeId,
		activeChart: state.chart.activeChart,
		canvasStyle: state.chart.canvasStyle
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Design)
