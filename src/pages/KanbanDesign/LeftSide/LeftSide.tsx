import './index.less'
import {
	ALL_LAYER_VISIBLE,
	MY_LAYER_VISIBLE
} from 'store/constants'

import {
	CodepenOutlined,
	VerticalAlignTopOutlined,
	VerticalAlignBottomOutlined,
	ArrowUpOutlined,
	ArrowDownOutlined,
	LeftOutlined
} from '@ant-design/icons'
import { ActionEnumType } from 'types/chart'
import ChartTreeMenu from './ChartTreeMenu'

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
		type: ActionEnumType.UP
	},
	{
		id: '1',
		title: '下移一层',
		icon: ArrowDownOutlined,
		type: ActionEnumType.DOWN
	},
	{
		id: '2',
		title: '置顶',
		icon: VerticalAlignTopOutlined,
		type: ActionEnumType.TOP
	},
	{
		id: '3',
		title: '置底',
		icon: VerticalAlignBottomOutlined,
		type: ActionEnumType.BOTTOM
	}
]

const LeftSideLayer = ({
	all_layer_visible,
	my_layer_visible,
	handleHeaderVisible,
	doChartActionManage,
} : {
	all_layer_visible: boolean
	my_layer_visible: boolean
	handleHeaderVisible: Function
	doChartActionManage: Function
}) => {

	return (
		<div className="design-left-side-layer-container" style={containerStyle(my_layer_visible)}>
			<div className="header">
				<div className="flex-around layer-move">
					{headerManage.map((item: any) => (
						<span
							key={item.id}
							className="icon-span"
							title={item.title}
							onClick={() => doChartActionManage({ type: item.type })}
						><item.icon /></span>
					))}
				</div>
			</div>
			<ChartTreeMenu />
		</div>
	)
}

export default LeftSideLayer
