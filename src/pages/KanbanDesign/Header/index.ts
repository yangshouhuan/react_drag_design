import { connect } from 'react-redux'
import Header from './Header'
import { handleHeaderVisible } from 'store/action/visible'
import { doLogout } from 'store/action/user'
import { doSourceType } from 'store/action/data_source'

const mapStateToProps = (state: any) => {
	return {
		side_visible: state.visible.side_visible,
		my_layer_visible: state.visible.my_layer_visible,
		recycle_visible: state.visible.recycle_visible,
		activeChart: state.chart.activeChart,
		chartData: state.chart.chartData,
		canvasStyle: state.chart.canvasStyle
	}
}

const mapDispatchToProps = (dispatch: Function) => {
	return {
		handleHeaderVisible: (type: string, values = false) => dispatch(handleHeaderVisible(type, values)),
		logout: () => dispatch(doLogout()),
		doSourceType: (value: any) => dispatch(doSourceType(value))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
