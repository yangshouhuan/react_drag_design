import { InputNumber, Slider } from "antd"
import SketchExample from "components/SketchExample"
import { ActionEnumType, ChartType } from "types/chart"
import './index.less'
import { CaretDownOutlined, CaretUpOutlined, DoubleLeftOutlined, LeftOutlined, UpOutlined, VerticalLeftOutlined } from "@ant-design/icons"
import { useState } from "react"
import classNames from "classnames"

const scaleType = [
    {
        label: '等比宽度铺满可滚动',
        value: 1,
        icon: <LeftOutlined />
    },
    {
        label: '等比高度铺满居中',
        value: 2,
        icon: <UpOutlined />
    },
    {
        label: '全屏铺满',
        value: 3,
        icon: <CaretUpOutlined />
    },
    {
        label: '等比高度可滚动',
        value: 4,
        icon: <CaretDownOutlined />
    },
    {
        label: '居中',
        value: 5,
        icon: <DoubleLeftOutlined />
    },
    {
        label: '不缩放',
        value: 6,
        icon: <VerticalLeftOutlined />
    },
]

const CanvasConfig = ({
    canvasChart,
    doCanvasStyle
} : {
    canvasChart: ChartType
    doCanvasStyle: Function
}) => {

    const handleChange = (e: any, type: string | ActionEnumType) => {
        let value: any = {}
        e.persist && e.persist()
        switch(type) {
            case 'w':
                value.width = Number(e.target.value.trim())
                value.height = canvasChart.height
                type = ActionEnumType.WH
                break
            case 'h':
                value.height = Number(e.target.value.trim())
                value.width = canvasChart.width
                type = ActionEnumType.WH
                break
            case 'bg_color':
                value.bg_color = e
                type = ActionEnumType.BG_COLOR
                break
            case 'opacity':
                value.opacity = e / 10
                type = ActionEnumType.OPACITY
                break
            case 'repeatType':
                value.repeatType = e
                type = ActionEnumType.REPEAT
            break
            default:
                break
        }
        
        doCanvasStyle({ type, ...value })
    }

    return (
        <div className='canvas-config-container'>
            <div className="title">页面设置</div>
            <div className="canvas-content">
                <div className='flex-a base-item'>
                    <div className='base-label'>图表尺寸</div>
                    <div className='base-right'>
                        <InputNumber size="small"  style={{ marginRight: 10 }} value={canvasChart.width} min={0} onBlur={(e: any) => handleChange(e, 'w')} />
                        <InputNumber size="small" value={canvasChart.height} min={0} onBlur={(e: any) => handleChange(e, 'h')} />
                    </div>
                </div>
                <div className='flex-a base-item'>
                    <div className='base-label'>背景颜色</div>
                    <div className='flex-both base-right'>
                        <SketchExample
                            style={{ width: 88 }}
                            color={canvasChart.bg_color}
                            onChange={(color: any) => handleChange(color, 'bg_color')}
                        />
                    </div>
                </div>
                <div className='flex-a base-item'>
                    <div className='flex-a base-right'>
                        <span className="base-label">透明度</span>
                        <Slider
                            style={{ width: 150, height: 'auto' }}
                            min={1}
                            max={10}
                            value={canvasChart.opacity * 10}
                            onChange={(value: number) => handleChange(value, 'opacity')}
                        />
                    </div>
                </div>
                <div className='flex-a base-item'>
                    <div className='base-label'>缩放方式</div>
                    <div className='flex-both base-right scale-label'>
                        {scaleType.map((item: any) => (<span
                                key={item.value}
                                className={classNames({'icon-active': item.value === canvasChart.option.repeatType})}
                                title={item.label}
                                onClick={() => handleChange(item.value, 'repeatType')}
                            >{item.icon}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CanvasConfig
