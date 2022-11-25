import { InputNumber } from "antd"
import { useEffect, useState } from "react"

const MyNumberInput = ({
    onBlur,
    value,
    props,
    size
} : {
    onBlur: (e: any) => void
    value: any
    props?: any
    size?: string
}) => {
    const [newValue, setNewValue] = useState(value)

    useEffect(() => {
        setNewValue(value)
    }, [onBlur, value])

    return (
        <InputNumber
            {...props}
            size={size || "small"}
            value={newValue}
            onBlur={() => onBlur(newValue)}
            onChange={(num: number) => setNewValue(num)}
        />
    )
}

export default MyNumberInput
