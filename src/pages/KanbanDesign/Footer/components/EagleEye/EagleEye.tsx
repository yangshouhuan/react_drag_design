import { useEffect, useRef, useState } from 'react'
import { ActionEnumType, ChartType } from 'types/chart'
import ChartItem from '../ChartItem'
import './index.less'

// 鹰眼固定宽高
const eyeW = 210
const eyeH = 125
let timer: any = null

const eagleEyeStyle = (visible: boolean) => {
	return {
		width: visible ? '210px' : '0px',
		height: visible ? '125px' : '0px',
		border: visible ? '1px solid #2681ff' : 'none'
	}
}

const EagleEye = ({
	eyeVisible,
	chartData,
	activeId,
	chart,
	scale,
	adaptive_scale,
	doCanvasStyle
}: {
	eyeVisible: boolean
	chartData: ChartType[]
	activeId: number
	chart: ChartType
	scale: number
	adaptive_scale: number
	doCanvasStyle: Function
}) => {
	// 旧的缩放值
	const oldRef = useRef(scale)
	// 小视野是否显示
	const [viewShow, setViewShow] = useState({
		leaveFlag: true,
		upFlag: true
	})
	// 小视野
	const [viewStyle, setViewStyle] = useState({
		left: 0,
		top: 0,
		width: eyeW * 0.9,
		height: eyeH * 0.9
	})
	// 图层列表父元素
	const [minCanvas, setMinCanvas] = useState({
		width: eyeW * 0.9,
		height: eyeH * 0.9,
		scale: 0.1
	})

	useEffect(() => {
		// 面板宽高改变，修改内容元素宽高
		// 计算鹰眼、面板宽高比
		let ratio1 = eyeH / eyeW,
			ratio2 = chart.height / chart.width

		// 计算鹰眼缩放 使用比值较小的一边作为参考，保证面板全部显示
		let newscale = (eyeW / chart.width) * 0.9
		if (ratio1 < ratio2) {
			newscale = (eyeH / chart.height) * 0.9
		}

		// 计算小面板宽高
		setMinCanvas({
			width: chart.width * newscale,
			height: chart.height * newscale,
			scale: newscale
		})
		
		// 缩放改变，修改小视野宽高
		if (scale !== oldRef.current) {
			oldRef.current = scale
			let width = 0
			let height = 0
			// 是否溢出可视范围
			if (scale >= Number(adaptive_scale)) {  // 是
				// 重新计算宽高
				width = minCanvas.width * (adaptive_scale / scale)
				height = minCanvas.height * (adaptive_scale / scale)
			} else {  // 否
				// 占满小面板
				width = minCanvas.width
				height = minCanvas.height
			}
			setViewStyle({
				top: 0,
				left: 0,
				width,
				height
			})
		}
	}, [chart, scale, adaptive_scale, minCanvas.width, minCanvas.height])

	const onMouseDown = (e: any) => {

		// 自适应或小于看板大小时，不允许修改
		if (scale <= adaptive_scale) return

		e.persist()
		const target = e.target
		const tx = e.clientX - target.offsetLeft
		const ty = e.clientY - target.offsetTop
		
		if (viewShow.upFlag) {
			setViewShow({
				leaveFlag: viewShow.leaveFlag,
				upFlag: false
			})
		}

		// 监听移动，设置看板位置
		document.onmousemove = (e: any) => {
			// 元素的位置
			let left = e.clientX - tx
			let top = e.clientY - ty

			// 设置小面板可移动范围
			if (left < -5) left = -5;
			if (left > ((minCanvas.width - (viewStyle.width - 10)))) {
				left = (minCanvas.width - (viewStyle.width - 10))
			}
			if (top < -5) top = -5;
			if (top > ((minCanvas.height - (viewStyle.height - 10)))) {
				top = (minCanvas.height - (viewStyle.height - 10))
			}
			
			//绑定元素位置到positionX和positionY上面
			setViewStyle({
				...viewStyle,
				left: left,
				top: top
			})

			// 隔100毫秒才设置看板位置
			if (!timer) {
				timer = setTimeout(() => {

					// 计算视图面板偏移量
					doCanvasStyle({
						type: ActionEnumType.XY,
						x: -(left / minCanvas.width) * chart.width,
						y: -(top / minCanvas.height) * chart.height
					})
					timer = null
				}, 100)
			}
		}

		// 鼠标抬起，取消监听
		document.onmouseup = (e) => {
			setViewShow({
				leaveFlag: viewShow.leaveFlag,
				upFlag: true
			})
			document.onmousemove = null
			document.onmouseup = null
		}
	}

	return (
		<div
			className="eagle-eye-container"
			style={eagleEyeStyle(eyeVisible)}
			onMouseEnter={() => setViewShow({ leaveFlag: false, upFlag: viewShow.upFlag })}
			onMouseLeave={() => setViewShow({ leaveFlag: true, upFlag: viewShow.upFlag })}
		>
			<div className="eagle-eye-content">
				<div className="eagle-chart-list">
					<div className="backdrop-canvas" style={{ width: minCanvas.width, height: minCanvas.height }}>
						{chartData.map((chart: ChartType) => (
							<ChartItem
								key={chart.chart_id}
								chart={chart}
								activeId={activeId}
								scale={minCanvas.scale}
							/>
						))}
					</div>
					<div
						className="backdrop-area"
						style={{ ...viewStyle, display: (!viewShow.leaveFlag || !viewShow.upFlag) ? 'block' : 'none'}}
						onMouseDown={onMouseDown}
					></div>
				</div>
			</div>
		</div>
	)
}

export default EagleEye
