import './index.less'
import classnames from 'classnames'
import {
	SIDE_VISIBLE,
	MY_LAYER_VISIBLE,
	ALL_LAYER_VISIBLE
}from 'store/constants'

import { Link } from 'react-router-dom'
import {
	FilterOutlined,
	AppstoreOutlined,
	FundProjectionScreenOutlined,
	DeleteOutlined,
	SendOutlined,
	MinusSquareOutlined,
	MenuUnfoldOutlined,
	LogoutOutlined,
	BlockOutlined,
	CopyOutlined
} from '@ant-design/icons'
import { ChartType } from 'types/chart'
import RecycleBin from './components/RecycleBin'
import { message } from 'antd'
import MyModalCodemirror from 'components/MyModalCodemirror'
import { useState } from 'react'
import { setPreviewData } from 'useApi/auth'

const Header = ({
	side_visible,
	my_layer_visible,
	handleHeaderVisible,
	logout,
	all_layer_visible,
	kId
} : {
	handleHeaderVisible: Function
	side_visible: boolean
	my_layer_visible: boolean
	logout: Function
	all_layer_visible: boolean
	kId: any
}) => {
	const [recycle_visible, setRecycleVisible] = useState(false)

	return (
		<div className="flex-both design-header">
			<div className="flex-a header-left">
				<span
					className={classnames({ 'icon-span': true, active: my_layer_visible })}
					title="图层"
					onClick={() => handleHeaderVisible(MY_LAYER_VISIBLE, !my_layer_visible)}
				><BlockOutlined /></span>
				<span
					className={classnames({ 'icon-span': true, active: all_layer_visible })}
					title="组件"
					onClick={() => handleHeaderVisible(ALL_LAYER_VISIBLE, !all_layer_visible)}
				><CopyOutlined /></span>
			</div>
			<div className="kanban-name">
				<Link to="/KanbanManage" className="flex-center project-icon">
					<FundProjectionScreenOutlined />
					<span style={{marginLeft: 10}}>项目名称</span>
				</Link>
			</div>
			<div className="flex-end header-right">
				<span
					className={classnames({ 'icon-span': true, active: side_visible })}
					title={side_visible ? '关闭右侧面板' : '显示右侧面板'}
					onClick={() => handleHeaderVisible(SIDE_VISIBLE, true)}
				>
					<MenuUnfoldOutlined style={{transform: side_visible ? 'rotate(0)' : 'rotate(180deg)'}} />
				</span>
				<span
					className={classnames({ 'icon-span': true, active: recycle_visible })}
					title="组件回收站"
					// onClick={() => handleHeaderVisible(RECYCLE_VISIBLE)}
					onClick={() => setRecycleVisible(true)}
				><DeleteOutlined /></span>
				{/* <span className="icon-span" title="分享" onClick={() => message.info('尚未实现分享')}><SendOutlined /></span> */}
				<span className="icon-span" title="预览" onClick={() => window.open('/#/KanbanPreview/' + kId)}><MinusSquareOutlined /></span>
				<span className='icon-span' title='退出登录' onClick={() => logout()}><LogoutOutlined /></span>
			</div>

			{/* 被删除的图层 */}
			<RecycleBin
				recycle_visible={recycle_visible}
				onRecycleVisible={() => setRecycleVisible(false)}
			/>
		</div>
	)
}

export default Header
