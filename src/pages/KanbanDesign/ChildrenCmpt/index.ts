import { connect } from 'react-redux'
import { doChartActionManage } from 'store/action/chart_base'
import ChildrenCmpt from './ChildrenCmpt'

const mapStateToProps = (state: any) => {
	return {
		all_layer_visible: state.visible.all_layer_visible,
		my_layer_visible: state.visible.my_layer_visible,
		activeChart: state.chart.activeChart
	}
}

const mapDispatchToProps = (dispatch: Function) => {
	return {
		doChartActionManage: (value: any) => dispatch(doChartActionManage(value)) 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenCmpt)
