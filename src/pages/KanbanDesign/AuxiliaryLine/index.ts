import AuxiliaryLine from './AuxiliaryLine'

import { connect } from 'react-redux'
import { designLeft } from '../Design'

const mapStateToProps = (state: any) => {
	return {
        designLeft: designLeft(state.visible),
		canvasChart: state.chart.canvasChart,
		scale: state.chart.scale
	}
}

export default connect(mapStateToProps)(AuxiliaryLine)
