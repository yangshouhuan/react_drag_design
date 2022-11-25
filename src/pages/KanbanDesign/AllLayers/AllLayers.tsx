import { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'
import datavOptions from 'chart-config/chart-options/datav/options'
import echartOptions from 'chart-config/chart-options/echarts/options'
import './index.less'

import {
	ALL_LAYER_VISIBLE
} from 'store/constants'

import {
	LeftOutlined,
	SearchOutlined
} from '@ant-design/icons'
import { AllChartType, BaseChartType } from 'types/chart'
import { Input } from 'antd'

const AllLayers = ({
	layerStyle,
	handleHeaderVisible,
	doAddChart,
	chartOptionList
} : {
	handleHeaderVisible: Function
	layerStyle: any
	doAddChart: Function
	chartOptionList: AllChartType[]
}) => {
	const [activeId, setActiveId] = useState('0-0')
	const [activeList, setActiveList] = useState<BaseChartType[]>([])
	const [searchShow, setSearchShow] = useState(false)
	const [keyWord, setKeyWord] = useState('')
	const InputRef = useRef<any>(null)

	useEffect(() => {
		if (chartOptionList.length !== 0) {
			let list: BaseChartType[] = []
			chartOptionList.forEach((item: AllChartType) => {
				list.push(...item.children)
			})
			chartOptionList.unshift({
				id: '0-0',
				title: '全部',
				children: list
			})
		}
	}, [chartOptionList])

	useEffect(() => {
		if (InputRef.current) {
			InputRef.current.focus()
		}
	}, [searchShow])

	useEffect(() => {
		setKeyWord('')
		chartOptionList.forEach((item: AllChartType) => {
			if (item.id === activeId) {
				setActiveList(item.children)
			}
		})
	}, [chartOptionList, activeId])

	// 拖拽添加结束
	const onDragEnd = (e: any, chart: BaseChartType) => {
		e.persist()
        e.preventDefault()

		const x = e.pageX - (layerStyle.left + 290)
		const y = e.pageY - 70

		if (x > 0 && y > 0) {
			doAddChart(Object.assign({}, chart.is_echarts ? echartOptions() : datavOptions(), chart, {x, y}))
		}
	}
	
	return (
		<div
			className="design-all-layers-container"
			style={layerStyle}
			onDragOver={(e: any) => {
                e.persist()
                e.preventDefault()
            }}
		>
			<div className="flex-both header">
				<span>全部图层</span>
				<div className="flex-a">
					{
						searchShow ? <Input
							size='small'
							className='search-input'
							ref={InputRef}
							value={keyWord}
							onBlur={() => setSearchShow(false)}
							onChange={(e: any) => {
								e.persist()
								setKeyWord(e.target.value)
							}}
						/> : <span
								className="icon-span"
								title="搜索"
								onClick={() => setSearchShow(true)}
							><SearchOutlined />
						</span>
					}
					<span
						className="icon-span"
						title="关闭"
						onClick={() => handleHeaderVisible(ALL_LAYER_VISIBLE, false)}
					><LeftOutlined /></span>
				</div>
			</div>
			{/* 分组 */}
			<div className="custom-scroll left-layer-classify">
				{chartOptionList.map((item: AllChartType) => (
					<div
						className={classnames({'classify-item': true, 'classify-active': activeId === item.id})}
						key={item.id}
						onClick={() => setActiveId(item.id)}
					>{item.title}</div>
				))}
			</div>
			{/* 列表 */}
			<div className="custom-scroll right-classify-layer">
				<ul>
					{activeList.map((chart: BaseChartType) => (
						chart.name.includes(keyWord) ?
						<li
							draggable
							key={chart.id}
							onClick={() => doAddChart(Object.assign({}, chart.is_echarts ? echartOptions() : datavOptions(), chart))}
							onDragEnd={(e: any) => onDragEnd(e, chart)}
						>
							<div className="layer-title">{chart.name}</div>
							<div className="flex-center layer-img">
								<img draggable="false" src={require('assetss/images/histogram.jpg').default} alt="" />
							</div>
						</li> : <></>
					))}
				</ul>
			</div>
		</div>
	)
}



export default AllLayers
