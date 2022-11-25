import { connect } from 'react-redux'
import EchartsComponent from './EchartsComponent'

const mapStateToProps = (state: any) => {

    return {
        getJson: state.defaultJson.getJson
    }
}

export default connect(mapStateToProps)(EchartsComponent)