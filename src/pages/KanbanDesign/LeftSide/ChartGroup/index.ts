import ChartGroup from './ChartGroup'
import { connect } from 'react-redux'
import { doActionStyle, doChartActionManage, doChartActiveId, doMoveDispose, setGroupIds } from 'store/action/chart_base'
import { doActionVisible } from 'store/action/visible'

const mapDispatchToProps = (dispatch: Function) => {
	return {
		changeActiveId: (values: any) => dispatch(doChartActiveId(values)),
		doMoveDispose: (values: any) => dispatch(doMoveDispose(values)),
		setGroupIds: (values: any) => dispatch(setGroupIds(values)),
		doActionVisible: (value: any) => dispatch(doActionVisible(value)),
		doActionStyle: (value: any) => dispatch(doActionStyle(value))
	}
}

const mapStateToProps = (state: any) => {
	return {
		chartData: state.chart.chartData,
		activeId: state.chart.activeId,
		openGroupIds: state.chart.openGroupIds,
		activeChart: state.chart.activeChart,
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ChartGroup)