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
import Action from './Action'
import { calculateScale } from 'layouts/KanbanDesignLayout'
import { ChartType } from 'types/chart'

const KanbanDesign = () => {

	return (
		<div
			className="kanban-design-container"
			style={{ backgroundImage: 'url(' + ponit + ')' }}
			onContextMenuCapture={(e: any) => e.preventDefault()}
		>
			<Header />
			<LeftSide />
			<AllLayers />
			<Design />
			<RightSide />
			<Footer />
			{/* 行为组件 */}
			<Action />
		</div>
	)
}

export default KanbanDesign
