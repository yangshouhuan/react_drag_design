import { connect } from 'react-redux'
import Footer from './Footer'

const footerStyle = (data: any) => {
	let left = data.all_layer_visible ? 500 : 210
	left = data.my_layer_visible ? left : left - 210
	return {
		left,
		right: data.side_visible ? 336 : 0
	}
}

const mapStateToProps = (state: any) => {
	return {
		footerStyle: footerStyle(state.visible),
		activeId: state.chart.activeId
	}
}

export default connect(mapStateToProps)(Footer)
