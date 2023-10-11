import { PicLeftOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
import MyVisual from './MyVisual'
import MySource from './MySource'
import MyAssets from './MyAssets'
import './index.less'
const { TabPane } = Tabs

const KanbanManage = ({
	crop_id,
	user_id,
	logout
} : {
	crop_id: number | undefined
	user_id: number | undefined
	logout: Function
}) => {
	// 选中项id
	
	return (
		<div className="kanban-manage-container" onContextMenuCapture={(e:any) => e.preventDefault()}>
			{/* <Tabs defaultActiveKey="1" centered>
				<TabPane tab={<span><PicLeftOutlined /> 我的可视化</span>} key="1">
					<MyVisual user_id={1} crop_id={1} />
				</TabPane>
				<TabPane tab={<span><PicLeftOutlined /> 我的数据</span>} key="2">
					<MySource />
				</TabPane>
				<TabPane tab={<span><PicLeftOutlined /> 我的资产</span>} key="3">
					<MyAssets user_id={1} crop_id={1} />
				</TabPane>
			</Tabs> */}
			<MyVisual user_id={1} crop_id={1} />
		</div>
	)
}

export default KanbanManage
