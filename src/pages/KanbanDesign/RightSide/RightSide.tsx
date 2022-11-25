import './index.less'

import { Tabs } from 'antd'
import {
	PicLeftOutlined,
	MinusSquareOutlined,
	DeploymentUnitOutlined
} from '@ant-design/icons'
import RightConfig from './RightConfig'
import RightDataSource from './RightDataSource'
import { ChartType } from 'types/chart'
const { TabPane } = Tabs

const RightSideConfig = ({
	side_visible,
	activeChart
}: {
	side_visible: boolean
	activeChart: ChartType | null
}) => {

	return (
		<div className="design-right-side-config" style={{ transform: side_visible ? 'translateX(0px)' : 'translateX(336px)' }}>
			<Tabs defaultActiveKey="1" centered>
				<TabPane tab={<PicLeftOutlined title='属性' />} key="1">
					<RightConfig />
				</TabPane>
				<TabPane tab={<DeploymentUnitOutlined title='数据' />} key="2">
					{activeChart?.source ? <RightDataSource /> : <span className='font-color-white'>图层无可配置数据</span>}
				</TabPane>
				<TabPane tab={<MinusSquareOutlined title='交互' />} key="3">
					<span className='font-color-white'>暂未实现交互</span>
				</TabPane>
			</Tabs>
		</div>
	)
}

export default RightSideConfig
