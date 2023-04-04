import { connect } from 'react-redux'
import { doChartActionManage, setKanBanId } from 'store/action/chart_base'
import { doActionVisible } from 'store/action/visible'
import Action from './Action'

const mapDispatchToProps = (dispatch: Function) => {
    return {
		onActionClick: (value: any) => dispatch(doChartActionManage(value)),
        doActionVisible: (value: any) => dispatch(doActionVisible(value)),
    }
}


const mapStateToProps = (state: any) => {

    return {
        chart: state.chart.actionChart,
        actionStyle: state.chart.actionStyle,
        isShow: state.visible.action_visibld,
        screen: state.chart.screen
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Action)
