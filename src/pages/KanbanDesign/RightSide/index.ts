import { connect } from 'react-redux'
import RightSide from './RightSide'
import { doCanvasStyle } from 'store/action/chart_base'

const mapStateToProps = (state: any) => {
	return {
		side_visible: state.visible.side_visible,
		activeId: state.chart.activeId,
        canvasChart: state.chart.canvasChart
	}
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        doCanvasStyle: (value: any) => dispatch(doCanvasStyle(value))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RightSide)
