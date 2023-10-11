import { InputNumber, Slider } from "antd"
import MyInput from "components/MyInput"
import SketchExample from "components/SketchExample"
import { ActionEnumType, ChartType } from "types/chart"

const BaseConfigCmpt = ({
    chart,
    onChange,
    activeId
}: {
    chart: ChartType
    onChange: Function
    activeId: number
}) => {

    // 处理修改值事件
    const handleChange = (e: any, type: string | ActionEnumType) => {
        e.persist()
        let value = e.target.value
        
        value = type !== 'chart_name' ? parseInt(value) : value.trim()
        if (value || value === 0 || type === 'chart_name') {
            let data: Record<string, any> = {}
            let flag = false
            switch (type) {
                case 'chart_name':
                    flag = true
                    data.name = value.length === 0 ? chart.chart_name : value
                    type = ActionEnumType.CHART_NAME
                    break
                case 'w':
                    flag = (chart.width !== value)
                    if (flag) {
                        data.width = value
                        data.height = chart.height
                        type = ActionEnumType.WH
                    }
                    break
                case 'h':
                    flag = chart.height !== value
                    if (flag) {
                        data.width = chart.width
                        data.height = value
                        type = ActionEnumType.WH
                    }
                    break
                case 'x':
                    flag = (chart.x !== value)
                    if (flag) {
                        data.x = value
                        data.y = chart.y
                        type = ActionEnumType.XY
                    }
                    break
                case 'y':
                    flag = (chart.y !== value)
                    if (flag) {
                        data.y = value
                        data.x = chart.x
                        type = ActionEnumType.XY
                    }
                    break
                case 'rotate':
                    flag = (chart.rotate !== value)
                    if (flag) {
                        data.rotate = value
                        type = ActionEnumType.ROTATE
                    }
                    break
            }
            flag && onChange({ ...data, type })
        }
    }



    return (
        <div className='general-content'>
            <div className='flex-both base-item'>
                <div className='base-right'>
                    <MyInput onBlur={(e: any) => handleChange(e, 'chart_name')} value={chart.chart_name} />
                </div>
            </div>
            {activeId && !chart.is_group ? <>
                <div className='flex-both base-item'>
                    <div className='base-right'>
                        <InputNumber addonAfter={'W'} size="small" value={chart.width} min={0} onBlur={(e: any) => handleChange(e, 'w')} />
                        <InputNumber addonAfter={'H'} size="small" value={chart.height} min={0} onBlur={(e: any) => handleChange(e, 'h')} />
                        <InputNumber addonAfter={'°'} size="small" value={chart.rotate} onBlur={(e: any) => handleChange(e, 'rotate')} />
                    </div>
                </div>
                <div className='flex-both base-item'>
                    <div className='base-right'>
                        <InputNumber addonAfter={'X'} size="small" value={chart.x} onBlur={(e: any) => handleChange(e, 'x')} />
                        <InputNumber addonAfter={'Y'} size="small" value={chart.y} onBlur={(e: any) => handleChange(e, 'y')} />
                        <SketchExample style={{ width: 80 }} color={chart.bg_color} onChange={(color: any) => onChange({ bg_color: color, type: ActionEnumType.BG_COLOR})} />
                    </div>
                </div>
                <div className='flex-both base-item'>
                    <div className='flex-a base-right'>
                        <span className="base-label">透明度</span>
                        <Slider
                            style={{ width: 150, height: 'auto' }}
                            min={1}
                            max={10}
                            value={chart.opacity * 10}
                            onChange={(value: number) => onChange({ opacity: value / 10, type: ActionEnumType.OPACITY})}
                        />
                    </div>
                </div>
            </> : <></>}
        </div>
    )
}

export default BaseConfigCmpt
