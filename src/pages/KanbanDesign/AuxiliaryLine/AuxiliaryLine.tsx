import { useState, useEffect } from 'react'
import './index.less'

import {
	EyeInvisibleOutlined,
	EyeOutlined
} from '@ant-design/icons'
import { ChartType } from 'types/chart';

let canvasX: any = null,
	canvasY: any = null,
	contextX: any = null,
	contextY: any = null;

// 绘制刻度
const contextSpace = (context: any, wh: number, scale: number) => {
	let nv = 100 / scale,
		rm = nv % 100,
		sv = (nv - rm),
		rd = -((rm / 10) * scale);

	// 大格取余100
	if (rm >= 50) {
		sv = (nv - rm + 100)
		rd = ((100 - rm) / 10) * scale
	}

	// 绘制刻度  10小格，1大格
	let i = 0
	while (i < wh) {
		const x = (i * (10 + rd))
		if (i % 10 === 0) {
			context.moveTo(x, 0)
			context.lineTo(x, 20)
			context.textAlign = 'left'
			context.fillText(sv * (i / 10), x + 3, 15)
		} else {
			context.moveTo(x, 15)
			context.lineTo(x, 20)
		}
		context.stroke()
		i++
	}
}

// 绘制设置属性
const contextScale = (context: any, wh: number, scale: number) => {
	context.save()
	context.strokeStyle = '#ffffff'
	context.fillStyle = '#ffffff'
	context.lineWidth = 0.2
	contextSpace(context, wh, scale)
	context.restore()
}

// 删除指定项并返回
const removeIndexItem = (data: number[], index: number): number[] => {
	data.splice(index, 1)
	return [...data]
}

const AuxiliaryLine = ({
	canvasChart,
	scale,
	designLeft
}: {
	canvasChart: ChartType
	scale: number
	designLeft: number
}) => {
	const [crossLeft, setCrossLeft] = useState(-1)   // 横、纵轴辅助线位置
	const [verticalTop, setVerticalTop] = useState(-1)
	const [crossList, setCrossList] = useState<number[]>([])  // 横、纵轴辅助线值
	const [verticalList, setVerticalList] = useState<number[]>([])
	const [visibleLine, setVisibleLine] = useState(true)

	// 获取画布
	useEffect(() => {
		canvasX = document.getElementById('canvasRulerX')
		canvasY = document.getElementById('canvasRulerY')
		contextX = canvasX.getContext('2d')
		contextY = canvasY.getContext('2d')
	}, [])

	// 绘制刻度
	useEffect(() => {
		// 清空画布值
		contextX.clearRect(0, 0, canvasX.width, 20)
		contextY.clearRect(0, 0, canvasY.width, 20)
		// 重置宽
		canvasX.width = canvasChart.width
		canvasY.width = canvasChart.height
		// 绘制刻度
		contextScale(contextX, (canvasChart.width / 10) + 50, scale)
		contextScale(contextY, (canvasChart.height / 10) + 50, scale)
	}, [scale, canvasChart.width, canvasChart.height])

	return (
		<div
			style={{left: designLeft}}
			className="design-AuxiliaryLine-container"
			onClick={(e: any) => {
				e.persist()
				e.preventDefault()
			}}
		>
			<div className="flex-center show-auxiliary" title="显示辅助线" onClick={() => setVisibleLine(!visibleLine)}>
				{visibleLine ? <EyeOutlined /> : <EyeInvisibleOutlined />} 
			</div>
			<div className="cross">
				<div className="ruler-wrapper cross-canvas">
					<canvas id="canvasRulerX" width="1920" height="20"></canvas>
				</div>
				<div
					className="cross-dotted"
					onMouseMove={(e: any) => setCrossLeft(e.nativeEvent.layerX)}
					onMouseOut={() => setCrossLeft(-1)}
					onClick={() => setCrossList([...crossList, parseInt((crossLeft / scale).toString())])}
				></div>
				<div
					className="dotted-line cross-line"
					style={{
						left: crossLeft,
						height: canvasChart.height,
						display: crossLeft >= 0 ? 'block' : 'none'
					}}
				></div>
				<div className="solid-line-list">
					{visibleLine && crossList.map((num: number, index: number) => (
						<div
							key={index}
							className="solid-line cross-line"
							style={{ left: (num * scale), height: canvasChart.height }}
							title="双击删除"
							onDoubleClick={() => setCrossList(removeIndexItem(crossList, index))}
						></div>
					))}
				</div>
			</div>
			<div className="vertical">
				<div className="ruler-wrapper vertical-canvas">
					<canvas id="canvasRulerY" width="1080" height="20"></canvas>
				</div>
				<div
					className="vertical-dotted"
					style={{ height: canvasChart.height }}
					onMouseMove={(e: any) => setVerticalTop(e.nativeEvent.layerY)}
					onMouseOut={() => setVerticalTop(-1)}
					onClick={() => setVerticalList([...verticalList, parseInt((verticalTop / scale).toString())])}
				></div>
				<div
					className="dotted-line vertical-line"
					style={{
						top: verticalTop,
						width: canvasChart.width,
						display: verticalTop >= 0 ? 'block' : 'none'
					}}
				></div>
				<div className="solid-line-list">
					{visibleLine && verticalList.map((num: number, index: number) => (
						<div
							key={index}
							className="solid-line vertical-line"
							style={{ top: (num * scale), width: canvasChart.width }}
							title="双击删除"
							onDoubleClick={() => setVerticalList(removeIndexItem(verticalList, index))}
						></div>
					))}
				</div>
			</div>
		</div>
	)
}

export default AuxiliaryLine
