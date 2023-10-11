import { connect } from 'react-redux'
import { doChartActionManage, doImportantConfig, doCanvasStyle } from 'store/action/chart_base'
import RightConfig from './RightConfig'

const mapStateToProps = (state: any) => {
    return {
        activeChart: Object.assign({}, state.chart.activeChart),
        activeId: state.chart.activeId,
        canvasChart: state.chart.canvasChart
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        dispatchBaseConfig: (value: any) => dispatch(doChartActionManage(value)),
		doImportantConfig: (value: any) => dispatch(doImportantConfig(value)),
        doCanvasStyle: (value: any) => dispatch(doCanvasStyle(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightConfig)