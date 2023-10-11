import { connect } from 'react-redux'
import RecycleBin from './RecycleBin'
import { doDeleteChart, doRecoverChart } from 'store/action/chart_base'

const mapStateToProps = (state: any) => {
	return {
		chartData: state.chart.chartData
	}
}
const mapDispatchToProps = (dispatch: Function) => {
	return {
		doRecoverChart: (value: any) => dispatch(doRecoverChart(value)),
		doDeleteChart: (value: any) => dispatch(doDeleteChart(value))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RecycleBin)
