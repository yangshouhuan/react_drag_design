import { useState } from 'react'
import './index.less'

import LeftSide from './LeftSide'
import KanbanList from './KanbanList'
import { LogoutOutlined } from '@ant-design/icons'

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
	const [kId, setKId] = useState(0)

	return (
		<div className="kanban-manage-container" onContextMenuCapture={(e:any) => e.preventDefault()}>
			<LeftSide
				kId={kId}
				userId={user_id}
				setKId={(id: number) => setKId(id)}
			/>
			<div className="flex-end kanban-manage-header">
				<span className='icon-span' title='退出登录' onClick={() => logout()}><LogoutOutlined /></span>
			</div>
			<KanbanList
				kId={kId}
				cropId={crop_id}
				userId={user_id}
			/>
		</div>
	)
}

export default KanbanManage
