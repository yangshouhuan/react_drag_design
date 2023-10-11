import { Popover } from 'antd'
import { SketchPicker } from 'react-color'
import './index.less'

const SketchExample = ({
    onChange,
    color,
    style,
    defaultValue
} : {
    onChange: (color: any, e?: any) => void
    color?: any
    defaultValue?: any
    style?: any
}) => {

    const handleChange = (e: any) => {
        if (e.source === 'rgb') {
            const { r, g, b, a} = e.rgb
            const rgba = `rgba(${r}, ${g}, ${b}, ${a})`
            onChange(rgba, e)
        } else {
            onChange(e.hex, e)
        }
    }

    return (
        <div className='sketch-example' style={style}>
                <Popover
                    placement="bottom"
                    trigger="click"
                    overlayClassName="my-overlay-class-name"
                    content={
                        <SketchPicker
                            color={color ? color : defaultValue}
                            onChange={(e: any) => handleChange(e)}
                            presetColors={[]}
                        />
                    }
                >
                <div className='sketch-swatch'>
                    <div className='sketch-color' style={{backgroundColor: color ? color : defaultValue}} />
                </div>
            </Popover>
        </div>
    )
}

export default SketchExample