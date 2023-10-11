import Action from './Action'
import { connect } from 'react-redux'
import { doChartActionManage } from 'store/action/chart_base'
import { doActionVisible } from 'store/action/visible'


const mapDispatchToProps = (dispatch: Function) => {
    return {
		doChartActionManage: (value: any) => dispatch(doChartActionManage(value)),
        doActionVisible: (value: any) => dispatch(doActionVisible(value)),
    }
}

const mapStateToProps = (state: any) => {

    return {
        actionStyle: state.chart.actionStyle,
        actionVisible: state.visible.action_visible,
        activeChart: state.chart.activeChart,
        screen: state.chart.screen
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Action)
