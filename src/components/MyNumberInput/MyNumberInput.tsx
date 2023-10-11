import { InputNumber } from "antd"
import { SizeType } from "antd/lib/config-provider/SizeContext"
import { useEffect, useState } from "react"

const MyNumberInput = ({
    onBlur,
    value,
    props,
    size,
    style
} : {
    onBlur: (e: any) => void
    value: any
    props?: Record<string, any>
    size?: SizeType
    style?: any
}) => {
    const [newValue, setNewValue] = useState(value)

    useEffect(() => {
        setNewValue(value)
    }, [onBlur, value])

    return (
        <InputNumber
            {...props}
            defaultValue={props ? props.default : ''}
            size={size || "small"}
            value={newValue}
            onBlur={() => onBlur(newValue)}
            style={style}
            onChange={(num: number | null) => setNewValue(num)}
        />
    )
}

export default MyNumberInput
