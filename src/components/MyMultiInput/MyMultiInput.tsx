import { Input } from "antd"
import { SizeType } from "antd/lib/config-provider/SizeContext"
import { useEffect, useState } from "react"

const MyMultiInput = ({
    onBlur,
    value,
    props,
    size
} : {
    onBlur: (e: any) => void
    value: any
    props?: Record<string, any>
    size?: SizeType
}) => {
    const [newValue, setNewValue] = useState(value)

    useEffect(() => {
        setNewValue(value)
    }, [onBlur, value])

    return (
        <Input
            {...props}
            size={size || "small"}
            value={newValue}
            defaultValue={props ? props.default : ''}
            onChange={(e: any) => {
                e.persist()
                setNewValue(e.target.value)      
            }}
            onBlur={(e: any) => onBlur(e)}
        />
    )
}

export default MyMultiInput
