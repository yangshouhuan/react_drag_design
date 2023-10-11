import { connect } from 'react-redux'
import { doCanvasScale, setKanBanId, setScreen } from "store/action/chart_base"
import KanbanDesignLayout from './KanbanDesignLayout'
import { doShortcutKey } from 'store/action/shortcut_key'

const mapStateToProps = (state: any) => {
	return {
		canvasChart: state.chart.canvasChart
	}
}

const mapDispatchToProps = (dispatch: Function) => {
	return {
		doShortcutKey: (value: any) => dispatch(doShortcutKey(value)),
		setKanBanId: (value: any) => dispatch(setKanBanId(value)),
		doScreen: (value: any) => dispatch(setScreen(value)),
		doCanvasScale: (value: any) => dispatch(doCanvasScale(value))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(KanbanDesignLayout)
