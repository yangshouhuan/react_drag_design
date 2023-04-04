import './index.less'
import classnames from 'classnames'
import {
	SIDE_VISIBLE,
	MY_LAYER_VISIBLE
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
	QuestionCircleOutlined,
	CodeSandboxOutlined
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
	activeChart,
	doSourceType,
	chartData,
	canvasStyle
} : {
	handleHeaderVisible: Function
	side_visible: boolean
	my_layer_visible: boolean
	logout: Function
	activeChart: ChartType
	doSourceType: Function
	chartData: ChartType[]
	canvasStyle: any
}) => {
	const [filter_visible, setFilterVisible] = useState(false)
	const [recycle_visible, setRecycleVisible] = useState(false)

	// 缓存看板数据到内存中
	const toPreview = () => {
		setPreviewData({
			data: chartData || [],
			kb_style: canvasStyle || {}
		})
		// window.open('/#/KanbanPreview/id')
		// window.open('/#/KanbanPreview/1c9416ea-ad31-48c2-8c7c-76deadd95a67')
		window.open('/KanbanPreview/1c9416ea-ad31-48c2-8c7c-76deadd95a67')
	}
	
	return (
		<div className="flex-both design-header">
			<div className="flex-a header-left">
				<span
					className={classnames({ 'icon-span': true, active: filter_visible })}
					title="过滤器"
					onClick={() => {
						if (!activeChart || !activeChart.source) {
							return message.info('该图层不需要配置过滤器')
						}
						setFilterVisible(true)
					}}
				><FilterOutlined /></span>
				<span
					className={classnames({ 'icon-span': true, active: my_layer_visible })}
					title="我的图层"
					onClick={() => handleHeaderVisible(MY_LAYER_VISIBLE, !my_layer_visible)}
				><AppstoreOutlined /></span>
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
					title="隐藏"
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
				<span className="icon-span" title="分享" onClick={() => message.info('尚未实现分享')}><SendOutlined /></span>
				<span className="icon-span" title="预览" onClick={toPreview}><MinusSquareOutlined /></span>
				<span className='icon-span' title='退出登录' onClick={() => logout()}><LogoutOutlined /></span>
			</div>

			{/* 被删除的图层 */}
			<RecycleBin recycle_visible={recycle_visible} onRecycleVisible={() => setRecycleVisible(false)} />
			{/*过滤器 */}
            <MyModalCodemirror
                title={'配置过滤器'}
                visible={filter_visible}
                onCancel={() => setFilterVisible(false)}
                codeValue={activeChart?.source?.filter_fun || ''}
                onBlur={(value: string) => doSourceType({data: value, type: 'filter_fun'})}
                render={(Children: any) => (
                    <>
                        <div className="filter-header">function filter(data) {'{'}</div>
                            <Children />
                        <div className="filter-footer">{'}'}</div>
                    </>
                )}
            />
		</div>
	)
}

export default Header
