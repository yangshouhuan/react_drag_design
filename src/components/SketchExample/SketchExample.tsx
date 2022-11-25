import { Popover } from 'antd'
import { SketchPicker } from 'react-color'
import './index.less'

const SketchExample = ({
    onChange,
    color,
    style
} : {
    onChange: (color: any, e?: any) => void
    color: any
    style?: any
}) => {

    return (
        <div className='sketch-example' style={style}>
                <Popover
                    placement="bottom"
                    trigger="click"
                    overlayClassName="my-overlay-class-name"
                    content={
                        <SketchPicker
                            color={color}
                            onChange={(e: any) => onChange(e.hex, e)}
                            presetColors={[]}
                        />
                    }
                >
                <div className='sketch-swatch'>
                    <div className='sketch-color' style={{backgroundColor: color}} />
                </div>
            </Popover>
        </div>
    )
}

export default SketchExample