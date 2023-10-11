import { Input } from "antd"
import { SizeType } from "antd/lib/config-provider/SizeContext"
import { useEffect, useState } from "react"

const MyInput = ({
    onBlur,
    value,
    props,
    size,
    style
} : {
    onBlur: (e: any, value?: any) => void
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
        <Input
            {...props}
            defaultValue={props ? props.default : 0}
            size={size || "small"}
            value={newValue}
            onBlur={(e: any) => onBlur(e, newValue)}
            style={style}
            onChange={(e: any) => {
                e.persist()
                setNewValue(e.target.value)      
            }}
        />
    )
}

export default MyInput

