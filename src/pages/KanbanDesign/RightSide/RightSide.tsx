import './index.less'

import { Tabs } from 'antd'
import { ChartType } from 'types/chart'
import CanvasConfig from './CanvasConfig'
import MyConfigTabs from './MyConfigTabs'
const { TabPane } = Tabs

const RightSideConfig = ({
	side_visible,
	activeId,
    doCanvasStyle,
    canvasChart
}: {
	side_visible: boolean
	activeId: number
    canvasChart: ChartType
	doCanvasStyle: Function
}) => {

	return (
		<div
			className="design-right-side-config"
			style={{ transform: side_visible ? 'translateX(0px)' : 'translateX(336px)' }}
		>
			{!activeId ? <CanvasConfig
				canvasChart={canvasChart}
				doCanvasStyle={doCanvasStyle}
			/> : <MyConfigTabs
				activeId={activeId}
			/>}
		</div>
	)
}

export default RightSideConfig
