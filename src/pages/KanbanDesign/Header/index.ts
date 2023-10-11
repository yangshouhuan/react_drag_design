import { connect } from 'react-redux'
import Header from './Header'
import { handleHeaderVisible } from 'store/action/visible'
import { doLogout } from 'store/action/user'
import { doSourceType } from 'store/action/data_source'

const mapStateToProps = (state: any) => {
	return {
		side_visible: state.visible.side_visible,
		my_layer_visible: state.visible.my_layer_visible,
		recycle_visible: state.visible.recycle_visible,
		all_layer_visible: state.visible.all_layer_visible,
		kId: state.chart.kId
	}
}

const mapDispatchToProps = (dispatch: Function) => {
	return {
		handleHeaderVisible: (type: string, values = false) => dispatch(handleHeaderVisible(type, values)),
		logout: () => dispatch(doLogout()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
