import { connect } from 'react-redux'
import { doLogout } from 'store/action/user'
import KanbanManage from './KanbanManage'

const mapDispatchToProps = (dispatch: Function) => {
	return {
		logout: () => dispatch(doLogout()),
	}
}

const mapStateToProps = (state: any) => {
	return {
		crop_id: state.user.crop_id,
		user_id: state.user.user_id
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(KanbanManage)
