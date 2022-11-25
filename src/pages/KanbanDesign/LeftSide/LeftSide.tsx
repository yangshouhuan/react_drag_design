import './index.less'
import {
	ALL_LAYER_VISIBLE,
	MY_LAYER_VISIBLE
} from 'store/constants'

import ChartGroup from './ChartGroup'

import {
	CodepenOutlined,
	CopyOutlined,
	DeleteOutlined,
	EyeOutlined,
	LockOutlined,
	VerticalAlignTopOutlined,
	VerticalAlignBottomOutlined,
	ArrowUpOutlined,
	ArrowDownOutlined,
	LeftOutlined
} from '@ant-design/icons'
import { ChartType } from 'types/chart'

const containerStyle = (visible: boolean) => {
	return {
		transform: visible ? 'translateX(0)' : 'translateX(-210px)', 
		borderRight: visible ? '1px solid #000000' : 'none'
	}
}

const headerManage = [
	{
		id: '0',
		title: '上移一层',
		icon: ArrowUpOutlined,
		type: 'up'
	},
	{
		id: '1',
		title: '下移一层',
		icon: ArrowDownOutlined,
		type: 'down'
	},
	{
		id: '2',
		title: '置顶',
		icon: VerticalAlignTopOutlined,
		type: 'top'
	},
	{
		id: '3',
		title: '置底',
		icon: VerticalAlignBottomOutlined,
		type: 'bottom'
	}
]

const LeftSideLayer = ({
	all_layer_visible,
	my_layer_visible,
	handleHeaderVisible,
	doChartActionManage,
	activeChart
} : {
	all_layer_visible: boolean
	my_layer_visible: boolean
	handleHeaderVisible: Function
	doChartActionManage: Function
	activeChart: ChartType
}) => {

	return (
		<div className="design-left-side-layer-container" style={containerStyle(my_layer_visible)}>
			<div className="header">
				<div className="flex-both header-title">
					<span>图层</span>
					<div className="flex-a">
						<span
							className="icon-span"
							title="全部图层"
							style={{color: all_layer_visible ? '#1890ff' : '#ffffff'}}
							onClick={() => handleHeaderVisible(ALL_LAYER_VISIBLE, !all_layer_visible)}
						><CodepenOutlined /></span>
						<span
							className="icon-span"
							title="关闭"
							onClick={() => handleHeaderVisible(MY_LAYER_VISIBLE, !my_layer_visible)}
						><LeftOutlined /></span>
					</div>
				</div>
				<div className="flex-around layer-move">
					{headerManage.map((item: any) => (
						<span
							key={item.id}
							className="icon-span"
							title={item.title}
							onClick={() => doChartActionManage(item.type)}
						><item.icon /></span>
					))}
				</div>
			</div>
			<ChartGroup />
			<div className="flex-around footer">
				<span className="icon-span" title="复制" onClick={() => doChartActionManage('copy')}><CopyOutlined /></span>
				<span className="icon-span" title="删除" onClick={() => doChartActionManage('del')}><DeleteOutlined /></span>
				<span className="icon-span" title="显示" onClick={() => doChartActionManage('show')}><EyeOutlined /></span>
				<span className="icon-span" title="锁定" onClick={() => doChartActionManage('lock')}><LockOutlined /></span>
			</div>
		</div>
	)
}

export default LeftSideLayer
