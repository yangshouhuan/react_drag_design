import { useState, useEffect } from 'react'
import classnames from 'classnames'
import './index.less'
import { getAssetsGroup, getAssetsListByGid } from 'api/assets-api'
import { ActionEnumType, ChartType } from 'types/chart'
import Global from 'api/globalConfigApi'

const AllLayers = ({
	layerStyle,
	doChartActionManage
} : {
	layerStyle: any
	doChartActionManage: Function
}) => {
	// 激活项
	const [activeId, setActiveId] = useState(12)
	// 图层分组
	const [assetsGroup, setAssetsGroup] = useState([])
	// 图层列表
	const [assetsList, setAssetsList] = useState<ChartType[]>([])

	// 获取分组
	useEffect(() => {
		getAssetsGroup()
		.then((res: any) => {
			setAssetsGroup(res.data)
			setActiveId(12)
		})
	}, [])
	// 获取列表
	useEffect(() => {
		getAssetsListByGid(activeId)
		.then((res: any) => {
			setAssetsList(res.data)
		})
	}, [activeId])

	// 拖拽结束
	const handleDragEnd = (e: any, cid: number) => {
		e.persist()
        e.preventDefault()

		const x = e.pageX - (layerStyle.left + 290)
		const y = e.pageY - 70

		// 添加图层
		if (x >= 0 && y >= 0) {
			doChartActionManage({
				cid,
				xy: {x, y},
				type: ActionEnumType.ADD
			})
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
				<span>全部组件</span>
			</div>
			{/* 分组 */}
			<div className="custom-scroll left-layer-classify">
				{assetsGroup.map((item: any) => (
					<div
						title={item.group_name}
						className={classnames({'classify-item': true, 'classify-active': activeId === item.group_id})}
						key={item.group_id}
						onClick={() => setActiveId(item.group_id)}
					>{item.group_name}</div>
				))}
			</div>
			{/* 列表 */}
			<div className="custom-scroll right-classify-layer">
				<ul>
					{assetsList.map((chart: ChartType) => (
						<li
							draggable
							key={chart.chart_id}
							onClick={() => doChartActionManage({ cid: chart.chart_id, type: ActionEnumType.ADD})}
							onDragEnd={(e: any) => handleDragEnd(e, chart.chart_id)}
						>
							<div className="layer-title">{chart.chart_name}</div>
							<div className="flex-center layer-img">
								{/* <img
									draggable="false"
									src={Global.fileUrl + '/echarts_images/' + chart.chart_img}
									alt=""
								/> */}
								<img
									draggable="false"
									src={require('assetss/echarts_images/' + chart.chart_img).default}
									alt=""
								/>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}



export default AllLayers
