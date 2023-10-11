import { useState, useEffect } from 'react'
import classnames from 'classnames'
import './index.less'
import { Checkbox } from 'antd'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import { ChartType } from 'types/chart'
import { isArray } from 'utils/validate'
import { isObject } from 'utils/shared'

const layerStyle = (allVisible: boolean, myVisible: boolean) => {
	return {
		width: allVisible ? 290 : 0,
		left: myVisible ? 210 : 0,
		borderRight: allVisible ? '1px solid #000000' : 'none'
	}
}

const getSourceList = (source: any) => {
	if (isArray(source)) {
		return source
	} else if (isObject(source)) {
		return [source]
	}
	return []
}

const ChildrenCmpt = ({
	all_layer_visible,
	my_layer_visible,
	activeChart
} : {
	all_layer_visible: boolean
	my_layer_visible: boolean
	activeChart: ChartType
}) => {
	// 激活项
	const [activeId, setActiveId] = useState(0)
	const sourceList = getSourceList(activeChart.source)
	
	return (
		<div
			className="design-children-cmpt-container"
			style={layerStyle(all_layer_visible, my_layer_visible)}
			onDragOver={(e: any) => {
                e.persist()
                e.preventDefault()
            }}
		>
			<div className="flex-both header">
				<span>子组件</span>
			</div>
			<div className='children-list'>
				{sourceList.map((source: any) => (
					<div className='flex-both child'>
						<div className='flex-a child-left'>
							<Checkbox />
							<span className='child-name'>{source.name}</span>
						</div>
						{source.hide ? <EyeInvisibleOutlined title='显示' /> : <EyeOutlined title='隐藏' />}
					</div>
				))}
			</div>
			<hr />
			<div className='flex-both child'>
				<div className='flex-a child-left'>
					<Checkbox />
					<span className='child-name'>{activeChart.chart_name}</span>
				</div>
				{/* <EyeOutlined title='隐藏' /> */}
			</div>
		</div>
	)
}



export default ChildrenCmpt
