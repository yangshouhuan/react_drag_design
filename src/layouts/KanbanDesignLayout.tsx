import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { connect } from 'react-redux'
import { doShortcutKey } from "store/action/shortcut-key"
import { doCanvasStyle, setKanBanId, setScreen } from "store/action/chart_base"

// 计算缩放
export const calculateScale = (sw: number, sh: number, width: number, height: number): number => {
	let scale = 1

	// 用宽高比小的一方计算, 保证面板全部显示
	if (sw - 605 > (sh * (width / height)) - 200) {
		scale = Number(((sh - 200) / height).toFixed(6))
	} else {
		scale = Number(((sw - 605) / width).toFixed(6))
	}

	return scale < 0.2 ? 0.2 : scale
}

const KanbanDesignLayout = ({
	doShortcutKey,
	setKanBanId,
	canvasStyle,
	doCanvasStyle,
	doScreen
} : {
	doShortcutKey: Function
	setKanBanId: Function
	canvasStyle: any
	doCanvasStyle: Function
	doScreen: Function
}) => {

	// 监听快捷键
	useEffect(() => {
		document.onkeydown = (e: any) => {
			if (e.target.localName !== 'body') return

			const event = window.event ? window.event : e
			const ctrlKey = event.ctrlKey
			const keyCode = event.keyCode
			// 阻止ctrl+s
			if (ctrlKey && keyCode === 83) e.preventDefault()

			doShortcutKey({ ctrlKey, keyCode })
		}

		return () => {
			document.onkeydown = null
		}
	}, [])

	// 监听窗口大小，修改缩放
	useEffect(() => {
		// 设置看板id
		setKanBanId('1-1')

		function setKanbanStyle () {
			const sw = Number(document.documentElement.clientWidth) || 1920
			const sh = Number(document.documentElement.clientHeight) || 1080
			const scale = calculateScale(sw, sh, canvasStyle.width, canvasStyle.height)
			doCanvasStyle({
				...canvasStyle,
				scale: scale,
				adaptive_scale: scale,
				x: 0,
				y: 0
			})
			doScreen({sw, sh})

			return setKanbanStyle
		}
		window.onresize = setKanbanStyle()

		return () => {
			window.onresize = null
		}
	}, [])

	return (
		<Outlet />
	)
}

export default connect((state: any) => {
    return {
        canvasStyle: state.chart.canvasStyle
    }
}, (dispatch: Function) => {
    return {
        doShortcutKey: (value: any) => dispatch(doShortcutKey(value)),
        doCanvasStyle: (value: any) => dispatch(doCanvasStyle(value)),
		setKanBanId: (value: any) => dispatch(setKanBanId(value)),
		doScreen: (value: any) => dispatch(setScreen(value))
    }
})(KanbanDesignLayout)
