import { connect } from 'react-redux'
import { doCanvasScale, doCanvasStyle } from 'store/action/chart_base'
import Footer from './Footer'

const footerStyle = (data: any) => {
	let left = data.all_layer_visible ? 500 : 210
	left = data.my_layer_visible ? left : left - 210
	return {
		left,
		right: data.side_visible ? 336 : 0
	}
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        doCanvasStyle: (value: any) => dispatch(doCanvasStyle(value)),
		doCanvasScale: (value: any) => dispatch(doCanvasScale(value))
    }
}

const mapStateToProps = (state: any) => {
	return {
		footerStyle: footerStyle(state.visible),
		activeId: state.chart.activeId,
		chartData: state.chart.chartData,
		screen: state.chart.screen,
		canvasChart: state.chart.canvasChart,
		scale: state.chart.scale,
		adaptive_scale: state.chart.adaptive_scale
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
