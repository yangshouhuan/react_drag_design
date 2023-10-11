import { Select, Slider, Switch } from "antd"
import SketchExample from "components/SketchExample";
import MyInput from "components/MyInput";
import MyNumberInput from "components/MyNumberInput";
import MyMultiInput from "components/MyMultiInput";
import MyCodemirror from "components/MyCodemirror";
import MyTabs from "components/MyTabs";
import MySuite from "components/MySuite";
import MyUploadImg from "components/MyUploadImg";
import MyMargin from "components/MyMargin";

const FindMatchCmpt = ({
    props,
    onBlur,
    value,
    type,
    width
}: {
    props: any
    onBlur: (e: any, fields?: string) => void
    value?: any
    type: string
    width?: number
}) => {
    // 多个值设置
    const onMulitBlur = (e: any) => {
        e.persist()
        let value = e.target.value
        // 逗号分割值
        value = value.replace(/\s*/g, "")
        onBlur(value.split(',') || [])
    }

    const onMulitNumberBlur = (e: any) => {
        e.persist()
        let value = e.target.value
        // 逗号分割值
        value = value.replace(/\s*/g, "")
        const arr = value.split(',') || []
        arr.forEach((v: any, i: number) => {
            arr[i] = parseInt(v)
        })
        onBlur(arr)
    }

    const onColorMultiChange = (color: string, index: number) => {
        const newvalue = [...value]
        newvalue[index] = color
        onBlur(newvalue)
    }
    
    switch (type) {
        case 'text':
            return <MyInput
                        value={value}
                        props={props}
                        style={{ width: width ? width : '96%' }}
                        onBlur={(e: any, value: any) => onBlur(value)}
                    />
        case 'number':
            return  <MyNumberInput
                        value={value}
                        props={props}
                        style={{ width: width ? width : '96%' }}
                        onBlur={(value: any) => onBlur(value)}
                    />
        case 'boolean':
            return <Switch
                        size="small"
                        {...props}
                        checked={value}
                        defaultChecked={props.default}
                        onChange={(checked: boolean) => onBlur(checked)}
                    />
        case 'select':
            return <Select
                        size='small'
                        {...props}
                        style={{ width: width ? width : '96%' }}
                        value={value}
                        defaultValue={props.default}
                        onChange={(id: string) => onBlur(id)}
                    />
        case 'multiselect':
            return <Select
                        mode="multiple"
                        size='small'
                        {...props}
                        style={{ width: width ? width : '96%' }}
                        value={value}
                        defaultValue={props.default}
                        onChange={(id: string) => onBlur(id)}
                    />
        case 'color':
            return <SketchExample
                        {...props}
                        color={value}
                        defaultValue={props.default}
                        style={{ width: width ? width : '96%' }}
                        onChange={(color: string) => onBlur(color)}
                    />
        // 多个值，逗号分割
        case 'multitext':
            return <MyMultiInput
                        {...props}
                        value={value}
                        props={props}
                        onBlur={(e: any) => onMulitBlur(e)}
                    />
        case 'multinumber':
            return <MyMultiInput
                        {...props}
                        value={value}
                        props={props}
                        onBlur={(e: any) => onMulitNumberBlur(e)}
                    />
        case 'slider':
            return <Slider
                        {...props}
                        defaultValue={props.default}
                        style={{ width: 80, height: 'auto' }}
                        value={value}
                    />
        case 'multicolor':
            return <div className="my-multi-color flex-a">
                {value.map((color: string, index: number) => (
                    <SketchExample
                        style={{marginRight: 10}}
                        key={index.toString()}
                        color={color}
                        onChange={(nc: string) => onColorMultiChange(nc, index)}
                    />
                ))}
            </div>
        case 'mycodemirror':
            return <MyCodemirror
                {...props}
                title={'配置URL'}
                height={props.height ? props.height : 100}
                codeValue={''}
            />
        case 'tabs':
            return <MyTabs options={props.options} value={value} onBlur={onBlur} />
        case 'suite':
            return <MySuite list={props.children} onBlur={onBlur} value={value} />
        case 'upimg':
            return <MyUploadImg url={value} onBlur={onBlur} />
        case 'margin':
            return <MyMargin margin={value} onBlur={onBlur} />
        default:
            return <></>
    }
}

export default FindMatchCmpt
