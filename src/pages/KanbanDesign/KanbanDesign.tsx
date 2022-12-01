import { useState, useEffect, useRef, useMemo } from 'react'
import './index.less'
import ponit from 'assetss/icons/point.png'
import { useParams } from 'react-router-dom'

// 头
import Header from './Header'
// 底
import Footer from './Footer'
// 左侧我的图层
import LeftSide from './LeftSide'
// 左侧所有图层
import AllLayers from './AllLayers'
// 右侧配置
import RightSide from './RightSide'
// 主要内容 设计
import Design from './Design'
import ActionComponent from './components/ActionComponent'
import { calculateScale } from 'layouts/KanbanDesignLayout'
import { ChartType } from 'types/chart'

const KanbanDesign = ({
	chartData,
	canvasStyle,
	doCanvasStyle,
	activeChart,
	doChartActionManage,
	actionStyle,
	actionVisible,
	doActionVisible,
	screen
}: {
	chartData: ChartType[]
	canvasStyle: any
	doCanvasStyle: Function
	activeChart: ChartType | null
	doChartActionManage: Function
	actionStyle: any
	actionVisible: boolean
	doActionVisible: Function
	screen: any
}) => {

	// 行为组件坐标
	const actionXY = useMemo(() => {
		const between = screen.sh - actionStyle.y

		if (between < 390) {
			return {
				x: actionStyle.x,
				y: actionStyle.y - 390
			}
		}

		return {
			x: actionStyle.x,
			y: actionStyle.y
		}
	}, [actionStyle])

	return (
		<div
			className="kanban-design-container"
			style={{ backgroundImage: 'url(' + ponit + ')' }}
			onContextMenuCapture={(e: any) => e.preventDefault()}
		>
			<Header />
			<LeftSide />
			<AllLayers />
			<Design canvasStyle={canvasStyle} />
			<RightSide />
			<Footer />
			{/* 行为组件 */}
			<ActionComponent
				left={actionXY.x}
				top={actionXY.y}
				isShow={actionVisible}
				chart={activeChart}
				onActionClick={(type: string) => doChartActionManage(type)}
				onSetActionShow={(flag: boolean) => doActionVisible(flag)}
			/>
		</div>
	)
}

export default KanbanDesign
