import { connect } from 'react-redux'
import { doSourceType } from 'store/action/data_source'
import RightDataSource from './RightDataSource'

const mapStateToProps = (state: any) => {
    return {
        activeChart: Object.assign({}, state.chart.activeChart),
        sourceIndex: state.chart.sourceIndex
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        doSourceType: (value: any) => dispatch(doSourceType(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightDataSource)
