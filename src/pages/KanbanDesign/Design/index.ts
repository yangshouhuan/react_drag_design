import { connect } from 'react-redux'
import { doActionStyle, doChartActionManage, doChangeActiveById } from 'store/action/chart_base'
import { doActionVisible } from 'store/action/visible'
import Design from './Design'

export const designLeft = (data: any) => {
	let left = data.all_layer_visible ? 500 : 210
	left = data.my_layer_visible ? left : left - 210

	return left
}

const mapDispatchToProps = (dispatch: Function) => {
	return {
		changeActiveById: (value: any) => dispatch(doChangeActiveById(value)),
		handleBaseConfig: (value: any) => dispatch(doChartActionManage(value)),
		doActionVisible: (value: any) => dispatch(doActionVisible(value)),
		doActionStyle: (value: any) => dispatch(doActionStyle(value))
	}
}

const mapStateToProps = (state: any) => {
	return {
		designLeft: designLeft(state.visible),
		chartData: state.chart.chartData,
		activeId: state.chart.activeId,
		scale: state.chart.scale,
		canvasChart: state.chart.canvasChart
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Design)
