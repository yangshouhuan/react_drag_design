import { connect } from 'react-redux'
import { doCanvasScale, setKanBanId, setScreen } from "store/action/chart_base"
import KanbanPreviewLayout from './KanbanPreviewLayout'

const mapStateToProps = (state: any) => {
	return {
		canvasChart: state.chart.canvasChart
	}
}

const mapDispatchToProps = (dispatch: Function) => {
	return {
		setKanBanId: (value: any) => dispatch(setKanBanId(value)),
		doCanvasScale: (value: any) => dispatch(doCanvasScale(value))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(KanbanPreviewLayout)
