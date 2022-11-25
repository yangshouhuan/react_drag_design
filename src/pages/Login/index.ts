import { connect } from 'react-redux'
import { doLogin, successLogin } from 'store/action/user'
import Login from './Login'

const mapStateToProps = (state: any) => {
	return {
		isLogin: state.user.isLogin
	}
}

const mapDispatchToProps = (dispatch: Function) => {
	return {
		doLogin: (value: any) => dispatch(doLogin(value))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
