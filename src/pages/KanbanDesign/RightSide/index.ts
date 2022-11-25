import { connect } from 'react-redux'
import RightSide from './RightSide'

const mapStateToProps = (state: any) => {
	return {
		side_visible: state.visible.side_visible,
		activeChart: state.chart.activeChart
	}
}


export default connect(mapStateToProps)(RightSide)
