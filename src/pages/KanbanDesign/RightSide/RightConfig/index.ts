import { connect } from 'react-redux'
import { doBaseConfig, doCanvasStyle, doImportantConfig } from 'store/action/chart_base'
import RightConfig from './RightConfig'

const mapStateToProps = (state: any) => {
    return {
        activeChart: state.chart.activeChart,
        activeId: state.chart.activeId,
        canvasStyle: state.chart.canvasStyle,
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        dispatchBaseConfig: (value: any) => dispatch(doBaseConfig(value)),
		dispatchImportantConfig: (value: any) => dispatch(doImportantConfig(value)),
        doCanvasStyle: (value: any) => dispatch(doCanvasStyle(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightConfig)