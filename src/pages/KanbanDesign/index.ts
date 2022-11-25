import KanbanDesign from './KanbanDesign'
import { connect } from 'react-redux'
import { doCanvasStyle, doChartActionManage, setKanBanId } from 'store/action/chart_base'
import { doShortcutKey } from 'store/action/shortcut-key'
import { doActionVisible } from 'store/action/visible'
import { doLogin } from 'store/action/user'

const mapDispatchToProps = (dispatch: Function) => {
    return {
        doCanvasStyle: (value: any) => dispatch(doCanvasStyle(value)),
        doShortcutKey: (value: any) => dispatch(doShortcutKey(value)),
		doChartActionManage: (value: any) => dispatch(doChartActionManage(value)),
        doActionVisible: (value: any) => dispatch(doActionVisible(value)),
    }
}

const mapStateToProps = (state: any) => {

    return {
        chartData: state.chart.chartData,
        canvasStyle: state.chart.canvasStyle,
        actionChart: state.chart.actionChart,
        actionStyle: state.chart.actionStyle,
        actionVisible: state.visible.action_visibld,
        activeChart: state.chart.activeChart,
        screen: state.chart.screen
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KanbanDesign)
