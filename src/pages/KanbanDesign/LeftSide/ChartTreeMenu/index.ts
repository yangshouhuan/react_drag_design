import { connect } from 'react-redux'
import { doActionStyle, doChangeActiveById, doDropMoveAction } from 'store/action/chart_base'
import { doActionVisible } from 'store/action/visible'
import ChartTreeMenu from './ChartTreeMenu'

const mapStateToProps = (state: any) => {
	return {
		chartData: state.chart.chartData,
		activeId: state.chart.activeId,
		expandedKeys: state.chart.expandedKeys
	}
}
const mapDispatchToProps = (dispatch: Function) => {
	return {
		doDropMoveAction: (value: any) => dispatch(doDropMoveAction(value)),
		changeActiveById: (value: number) => dispatch(doChangeActiveById(value)),
		doActionVisible: (value: any) => dispatch(doActionVisible(value)),
		doActionStyle: (value: any) => dispatch(doActionStyle(value))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartTreeMenu)

