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

const selectRatio = [
	{ value: 0, text: '自适应' },
	{ value: 1, text: '50%' },
	{ value: 2, text: '100%' },
	{ value: 3, text: '150%' },
	{ value: 4, text: '200%' },
]

const Footer = ({
	footerStyle,
	onCalculateScale,
	onSetScale,
	chartData,
	activeId,
	canvasStyle,
	doCanvasStyle
}: {
	footerStyle: Object
	onCalculateScale: Function
	onSetScale: Function
	chartData: ChartType[]
	activeId: number
	canvasStyle: any
	doCanvasStyle: Function
}) => {
	const [eyeVisible, setEyeVisible] = useState(true)

	// 修改缩放
	const onClickEidtScale = (type: number) => {
		let scale = canvasStyle.scale
		if (type === 0) {
			scale = scale - 0.15
			onSetScale((scale >= 0.2 ? scale : 0.2))
		} else {
			scale = scale + 0.15
			onSetScale((scale <= 2 ? scale : 2))
		}
	}

	return (
		<div className="flex-end design-footer" style={footerStyle}>
			{/* 选择缩放 */}
			<Select
				defaultValue={0}
				size="small"
				style={{ width: 120 }}
				onSelect={(value: number) => (value === 0) ? onCalculateScale() :  onSetScale(value / 2)}
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
					value={canvasStyle.scale * 100}
					onChange={(value: number) => onSetScale(value / 100)}
				/>
				<PlusOutlined className="slider-icon" onClick={() => onClickEidtScale(1)} />
			</div>
			<BlockOutlined className={classNames(["eagle-eye-icon", eyeVisible ? 'active' : ''])} onClick={() => setEyeVisible(!eyeVisible)} />
			{/* 鹰眼 */}
			<EagleEye
				doCanvasStyle={doCanvasStyle}
				canvasStyle={canvasStyle}
				activeId={activeId}
				eyeVisible={eyeVisible}
				chartData={chartData}
			/>
		</div>
	)
}

export default Footer
