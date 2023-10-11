import { useEffect } from "react"
import { Outlet, useParams } from "react-router-dom"
import { calculateScale } from "store/core/chart"
import { ChartType } from "types/chart"

let clientEl = document.documentElement
let timer: any = null

const onresize = (canvasChart: ChartType, doCanvasScale: Function) =>{
	if (timer) return

	timer = setTimeout(() => {
		const sw = Number(clientEl.clientWidth) || 1920
		const sh = Number(clientEl.clientHeight) || 1080
		const scale = (sw / canvasChart.width).toFixed(6)

		doCanvasScale({ scale, adaptive_scale: scale })
		timer = null
	}, 300)
}

const KanbanDesignLayout = ({
	setKanBanId,
	canvasChart,
	doCanvasScale
} : {
	setKanBanId: Function
	canvasChart: any
	doCanvasScale: Function
}) => {
	const { id } = useParams()
	// 监听窗口大小，修改缩放
	useEffect(() => {
		// 设置看板id
		setKanBanId(id)
		onresize(canvasChart, doCanvasScale)
		// 监听缩放
		window.onresize = () => onresize(canvasChart, doCanvasScale)

		return () => {
			window.onresize = null
		}
	}, [])

	return <Outlet />
}

export default KanbanDesignLayout

