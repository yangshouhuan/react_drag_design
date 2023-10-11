import { useState } from 'react'
import './index.less'

import {
	Select,
	Slider
} from 'antd'
import {
	MinusOutlined,
	PlusOutlined,
	BlockOutlined
} from '@ant-design/icons'

import EagleEye from './components/EagleEye'
import { ChartType } from 'types/chart'
import classNames from 'classnames'
import { calculateScale } from 'store/core/chart'

const selectRatio = [
	{ value: 0, text: '自适应' },
	{ value: 1, text: '50%' },
	{ value: 2, text: '100%' },
	{ value: 3, text: '150%' },
	{ value: 4, text: '200%' },
]

const Footer = ({
	footerStyle,
	chartData,
	activeId,
	canvasChart,
	doCanvasStyle,
	doCanvasScale,
	screen,
	scale,
	adaptive_scale
}: {
	footerStyle: Object
	chartData: ChartType[]
	activeId: number
	canvasChart: ChartType
	doCanvasStyle: Function
	doCanvasScale: Function
	screen: any
	scale: number
	adaptive_scale: number
}) => {
	const [eyeVisible, setEyeVisible] = useState(true)

	// 计算缩放
	const onCalculateScale = () => {
		const newscale = calculateScale(screen.sw, screen.sh, canvasChart.width, canvasChart.height)
		doCanvasScale({ scale: newscale })
	}

	// 修改缩放
	const onClickEidtScale = (type: number) => {
		if (type === 0) {
			scale = scale - 0.15
			scale = (scale >= 0.2 ? scale : 0.2)
		} else {
			scale = scale + 0.15
			scale = (scale <= 2 ? scale : 2)
		}
		doCanvasScale({ scale })
	}

	return (
		<div className="flex-end design-footer" style={footerStyle}>
			{/* 选择缩放 */}
			<Select
				defaultValue={0}
				size="small"
				style={{ width: 120 }}
				onSelect={(value: number) => (value === 0) ? onCalculateScale() : doCanvasScale({ scale: value / 2 })}
			>
				{selectRatio.map((item: any) => <Select.Option key={item.value} value={item.value}>{item.text}</Select.Option>)}
			</Select>
			{/* 控制缩放 */}
			<div className="flex-a ratio-slider">
				<MinusOutlined className="slider-icon" onClick={() => onClickEidtScale(0)} />
				<Slider
					style={{ width: 150, height: 'auto' }}
					min={20}
					max={200}
					value={scale * 100}
					onChange={(value: number) => doCanvasScale({ scale: value / 100 })}
				/>
				<PlusOutlined className="slider-icon" onClick={() => onClickEidtScale(1)} />
			</div>
			<BlockOutlined className={classNames(["eagle-eye-icon", eyeVisible ? 'active' : ''])} onClick={() => setEyeVisible(!eyeVisible)} />
			{/* 鹰眼 */}
			<EagleEye
				doCanvasStyle={doCanvasStyle}
				chart={canvasChart}
				scale={scale}
				adaptive_scale={adaptive_scale}
				activeId={activeId}
				eyeVisible={eyeVisible}
				chartData={chartData}
			/>
		</div>
	)
}

export default Footer
