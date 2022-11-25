import './index.less'

import AuxiliaryLine from './components/AuxiliaryLine'
import { ChartType } from 'types/chart'
import RecursiveCreateChart from './components/RecursiveCreateChart'

// 看板样式
const kanbanStyle = (canvasStyle: any) => {
	return {
		transform: `scale(${canvasStyle.scale}) translate(0px, 0px)`,
		width: canvasStyle.width,
		height: canvasStyle.height,
		left: canvasStyle.x + 40,
		top: canvasStyle.y + 40,
		backgroundColor: canvasStyle.config.backgroundColor,
		backgroundImage: canvasStyle.config.backgroundImage
	}
}

const Design = ({
	designLeft,  // 左边距离
	chartData,
	activeId,
	changeActiveId,
	handleBaseConfig,
	activeChart,
	canvasStyle,
	doActionVisible,
	doActionStyle
} : {
	designLeft: number
	chartData: ChartType[]
	activeId: number | null
	changeActiveId: Function
	handleBaseConfig: Function
	activeChart: ChartType
	canvasStyle: any,
    doActionVisible: Function
    doActionStyle: Function
}) => {
	
	return (
		<div
			className='design-container'
			onDragOver={(e: any) => {
                e.persist()
                e.preventDefault()
            }}
		>
			<div className="design-content" style={{left: designLeft}}>
				{/* 辅助线 */}
				<AuxiliaryLine canvasStyle={canvasStyle} />
				{/* 图层面板 */}
				<div className="kanban-layer-content" style={kanbanStyle(canvasStyle)}>
					{chartData?.map((chart: ChartType) => (
						<RecursiveCreateChart
							key={chart.id}
							chart={chart}
							activeId={activeId}
							onSetActiveId={(id: number) => changeActiveId(id)}
							onBaseConfig={handleBaseConfig}
							onDragStart={() => doActionVisible(false)}
							onRightKeyClick={(x: number, y: number) => {
								doActionVisible(true)
								doActionStyle({x, y})
							}}
						/>
					))}
				</div>
				<div className='design-bg' onClick={() => changeActiveId(null)}></div>
			</div>
		</div>
	)
}

export default Design
