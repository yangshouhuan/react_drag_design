import './index.less'

import { ChartType } from 'types/chart'
import RecursiveCreateChart from './components/RecursiveCreateChart'

// 看板样式
const kanbanStyle = (chart: ChartType, scale: number) => {
	return {
		transform: `scale(${scale}) translate(0px, 0px)`,
		width: chart.width,
		height: chart.height,
		left: chart.x + 40,
		top: chart.y + 40,
		backgroundColor: chart.bg_color,
		backgroundImage: chart.bg_color,
		opacity: chart.opacity
	}
}

const Design = ({
	designLeft,  // 左边距离
	chartData,
	activeId,
	changeActiveById,
	handleBaseConfig,
	doActionVisible,
	doActionStyle,
	scale,
	canvasChart
} : {
	designLeft: number
	chartData: ChartType[]
	activeId: number | null
	changeActiveById: Function
	handleBaseConfig: Function
    doActionVisible: Function
    doActionStyle: Function
	scale: number,
	canvasChart: ChartType
}) => {

	return (
		<div
			className='design-container'
			onDragOver={(e: any) => {
                e.persist()
                e.preventDefault()
            }}
			onClick={() => changeActiveById(0)}
		>
			<div className="design-content" style={{left: designLeft}}>
				{/* 图层面板 */}
				<div className="kanban-layer-content" style={kanbanStyle(canvasChart, scale)}>
					{chartData.map((chart: ChartType) => (
						<RecursiveCreateChart
							key={chart.chart_id}
							chart={chart}
							activeId={activeId}
							onSetActiveId={(cid: number) => changeActiveById(cid)}
							onBaseConfig={handleBaseConfig}
							onDragStart={() => doActionVisible(false)}
							onRightKeyClick={(x: number, y: number) => {
								doActionVisible(true)
								doActionStyle({x, y})
							}}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Design
