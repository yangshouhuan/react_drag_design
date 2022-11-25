import { Input, InputNumber, Select, Slider, Switch } from "antd"
import SketchExample from "components/SketchExample";
import MyInput from "components/MyInput";
import MyNumberInput from "components/MyNumberInput";
import MyMultiInput from "components/MyMultiInput";
import { IsComponentType } from "types/chart";

const IsComponent = ({
    data,
    onBlur,
    value
}: {
    data: IsComponentType
    onBlur: (e: any) => void
    value: any
}) => {
    const {component, types} = data

    // 多个值设置
    const onMulitBlur = (e: any) => {
        e.persist()
        let value = e.target.value
        // 逗号分割值
        value = value.replace(/\s*/g, "")
        onBlur(value.split(',') || [])
    }

    const onColorMultiChange = (color: string, index: number) => {
        value[index] = color
        onBlur(value)
    }
    
    switch (component) {
        case 'Input':
            return <MyInput
                        value={value}
                        props={data.types}
                        onBlur={(value: any) => onBlur(value)}
                    />
        case 'InputNumber':
            return  <MyNumberInput
                        props={data.types}
                        value={value}
                        onBlur={(value: number) => onBlur(value)}
                    />
        case 'Switch':
            return <Switch
                        size="small"
                        {...types}
                        checked={value}
                        onChange={(checked: boolean) => onBlur(checked)}
                    />
        case 'Select':
            return <Select
                        size='small'
                        {...types}
                        style={{ width: 120 }}
                        value={value}
                        onChange={(id: string) => onBlur(id)}
                    />
        case 'ColorPicker':
            return <SketchExample
                        color={value}
                        onChange={(color: string) => onBlur(color)}
                    />
        // 多个值，逗号分割
        case 'MultiInput':
            return <MyMultiInput
                        {...types}
                        value={value}
                        props={data.types}
                        onBlur={(e: any) => onMulitBlur(e)}
                    />
        case 'Slider':
            return <Slider
                        {...types}
                        min={0}
                        max={1}
                        style={{ width: 80, height: 'auto' }}
                        value={value}
                    />
        case 'ColorMulti':
            return <div className="flex-a">
                {value.map((color: string, index: number) => (
                    <SketchExample
                        style={{marginRight: 10}}
                        key={index.toString()}
                        color={color}
                        onChange={(nc: string) => onColorMultiChange(nc, index)}
                    />
                ))}
            </div>
        default:
            return <></>
    }
}

export default IsComponent
