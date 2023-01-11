import { InputNumber } from "antd"
import SketchExample from "components/SketchExample"

const CanvasConfig = ({
    canvasStyle,
    doCanvasStyle
} : {
    canvasStyle: any
    doCanvasStyle: Function
}) => {

    const handleChange = (e: any, type: string) => {
        e.persist && e.persist()
        switch(type) {
            case 'w':
                canvasStyle.width = Number(e.target.value.trim())
                break
            case 'h':
                canvasStyle.height = Number(e.target.value.trim())
                break
            case 'bg_color':
                canvasStyle.config.backgroundColor = e
                break
            default:
                break
        }
        doCanvasStyle({type: 'canvas', value: canvasStyle})
    }

    return (
        <div className='general-content'>
            <div className='flex-both base-item'>
                <div className='base-label'>图表尺寸</div>
                <div className='base-right'>
                    <InputNumber size="small" value={canvasStyle.width} min={0} onBlur={(e: any) => handleChange(e, 'w')} />
                    <InputNumber size="small" value={canvasStyle.height} min={0} onBlur={(e: any) => handleChange(e, 'h')} />
                </div>
            </div>
            <div className='flex-both base-item'>
                <div className='base-label'>背景颜色</div>
                <div className='flex-both base-right'>
                    <SketchExample
                        style={{ width: 88 }}
                        color={canvasStyle.config.backgroundColor}
                        onChange={(color: any) => handleChange(color, 'bg_color')}
                    />
                </div>
            </div>
        </div>
    )
}

export default CanvasConfig
