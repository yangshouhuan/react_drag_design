import { Input, InputNumber, Slider } from "antd"
import MyInput from "components/MyInput"
import SketchExample from "components/SketchExample"
import { useCallback, useEffect, useRef, useState } from "react"
import { ChartType } from "types/chart"

const GrnealComponent = ({
    chart,
    onChange,
    activeId
}: {
    chart: ChartType
    onChange: Function
    activeId: number
}) => {
    const { width, height, x, y, transform, name } = chart

    // 处理修改值事件
    const handleChange = useCallback((e: any, type: string) => {
        e.persist()
        let value = e.target.value
        
        value = type !== 'name' ? parseInt(value) : value.trim()
        if (value || value === 0 || type === 'name') {
            let data: Record<string, any> = {}
            let flag = false
            switch (type) {
                case 'name':
                    flag = true
                    data.name = value.length === 0 ? chart.name : value
                    break
                case 'w':
                    if (flag = (width !== value)) {
                        data.width = value
                        data.height = chart.height
                        type = 'wh'
                    }
                    break
                case 'h':
                    if (flag = (height !== value)) {
                        data.width = chart.width
                        data.height = value
                        type = 'wh'
                    }
                    break
                case 'x':
                    if (flag = (x !== value)) {
                        data.x = value
                        data.y = y
                        type = 'xy'
                    }
                    break
                case 'y':
                    if (flag = (y !== value)) {
                        data.y = value
                        data.x = x
                        type = 'xy'
                    }
                    break
                case 'rotate':
                    if (flag = (transform !== value)) {
                        data.rotate = value
                    }
                    break
            }
            flag && onChange({ ...data, type })
        }
    }, [])

    return (
        <div className='general-content'>
            <div className='flex-both base-item'>
                <div className='base-label'>图表名称</div>
                <div className='base-right'>
                    <MyInput onBlur={(e: any) => handleChange(e, 'name')} value={name} />
                </div>
            </div>
            {activeId && !chart.is_group ? <>
                <div className='flex-both base-item'>
                    <div className='base-label'>图表尺寸</div>
                    <div className='base-right'>
                        <InputNumber size="small" value={width} min={0} onBlur={(e: any) => handleChange(e, 'w')} />
                        <InputNumber size="small" value={height} min={0} onBlur={(e: any) => handleChange(e, 'h')} />
                    </div>
                </div>
                <div className='flex-both base-item'>
                    <div className='base-label'>图表位置</div>
                    <div className='base-right'>
                        <InputNumber size="small" value={x} onBlur={(e: any) => handleChange(e, 'x')} />
                        <InputNumber size="small" value={y} onBlur={(e: any) => handleChange(e, 'y')} />
                    </div>
                </div>
                <div className='flex-both base-item'>
                    <div className='base-label'>背景颜色</div>
                    <div className='flex-both base-right'>
                        <SketchExample
                            style={{ width: 88 }}
                            color={chart.bg_color ? chart.bg_color : 'rgba(0, 0, 0, 0)'}
                            onChange={(color: any, e: any) => {
                                const {r, b, g, a} = e.rgb
                                onChange({bg_color: `rgba(${r}, ${g}, ${b}, ${a})`, type: 'bg_color'})
                            }}
                        />
                    </div>
                </div>
                <div className='flex-both base-item'>
                    <div className='base-label'>旋转角度</div>
                    <div className='base-right'>
                        <InputNumber size="small" value={transform} onBlur={(e: any) => handleChange(e, 'rotate')} />
                    </div>
                </div>
            </> : <></>}
        </div>
    )
}

export default GrnealComponent
