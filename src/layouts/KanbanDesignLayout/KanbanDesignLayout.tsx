import { useEffect } from "react"
import { Outlet, useParams } from "react-router-dom"
import { calculateScale } from "store/core/chart"
import { ChartType } from "types/chart"

let clientEl = document.documentElement
let timer: any = null

const onresize = (canvasChart: ChartType, doCanvasScale: Function, doScreen: Function) =>{
	if (timer) return

	timer = setTimeout(() => {
		const sw = Number(clientEl.clientWidth) || 1920
		const sh = Number(clientEl.clientHeight) || 1080
		const scale = calculateScale(sw, sh, canvasChart.width, canvasChart.height)

		doCanvasScale({ scale, adaptive_scale: scale })
		doScreen({sw, sh})
		timer = null
	}, 300)

	return onresize
}

const onkeydown = (doShortcutKey: Function) => {
	document.onkeydown = (e: any) => {
		if (e.target.localName !== 'body') return

		const event = window.event ? window.event : e
		const ctrlKey = event.ctrlKey
		const keyCode = event.keyCode
		// 阻止ctrl+s
		if (ctrlKey && keyCode === 83) e.preventDefault()

		doShortcutKey({ ctrlKey, keyCode })
	}
}

const KanbanDesignLayout = ({
	doShortcutKey,
	setKanBanId,
	canvasChart,
	doScreen,
	doCanvasScale
} : {
	doShortcutKey: Function
	setKanBanId: Function
	canvasChart: any
	doScreen: Function
	doCanvasScale: Function
}) => {
	const { id } = useParams()
	// 监听窗口大小，修改缩放
	useEffect(() => {
		// 设置看板id
		setKanBanId(id)
		// 监听快捷键
		document.onkeydown = () => onkeydown(doShortcutKey)
		onresize(canvasChart, doCanvasScale, doScreen)
		// 监听缩放
		window.onresize = () => onresize(canvasChart, doCanvasScale, doScreen)

		return () => {
			document.onkeydown = null
			window.onresize = null
		}
	}, [canvasChart.width, canvasChart.height])

	return <Outlet />
}

export default KanbanDesignLayout

