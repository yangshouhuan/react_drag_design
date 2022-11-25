import { connect } from 'react-redux'
import { doChartActionManage } from 'store/action/chart_base'
import { handleHeaderVisible } from 'store/action/visible'

import LeftSide from './LeftSide'

const mapStateToProps = (state: any) => {
	return {
		all_layer_visible: state.visible.all_layer_visible,
		my_layer_visible: state.visible.my_layer_visible,
		activeChart: state.chart.activeChart
	}
}
const mapDispatchToProps = (dispatch: Function) => {
	return {
		handleHeaderVisible: (type: string, values = false) => dispatch(handleHeaderVisible(type, values)),
		doChartActionManage: (type: string) => dispatch(doChartActionManage(type))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftSide)
