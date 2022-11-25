import { connect } from 'react-redux'
import { doAddChart } from 'store/action/chart_base'
import { handleHeaderVisible } from 'store/action/visible'

import AllLayers from './AllLayers'

const layerStyle = (allVisible: boolean, myVisible: boolean) => {
	return {
		width: allVisible ? 290 : 0,
		left: myVisible ? 210 : 0,
		borderRight: allVisible ? '1px solid #000000' : 'none'
	}
}

const mapStateToProps = (state: any) => {
	return {
		layerStyle: layerStyle(state.visible.all_layer_visible, state.visible.my_layer_visible),
		chartOptionList: state.defaultJson.chartOptionList
	}
}

const mapDispatchToProps = (dispatch: Function) => {
	return {
		handleHeaderVisible: (type: string, values = false) => dispatch(handleHeaderVisible(type, values)),
		doAddChart: (value: any) => dispatch(doAddChart(value)) 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllLayers)
