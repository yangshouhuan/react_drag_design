import { connect } from 'react-redux'
import { doSourceType } from 'store/action/data_source'
import RightDataSource from './RightDataSource'

const mapStateToProps = (state: any) => {
    return {
        activeId: state.chart.activeId,
        activeChart: state.chart.activeChart
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        doSourceType: (value: any) => dispatch(doSourceType(value))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RightDataSource)
