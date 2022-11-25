import { Input } from "antd"
import { useEffect, useState } from "react"

const MyMultiInput = ({
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
        <Input
            {...props}
            size={size || "small"}
            value={newValue}
            onChange={(e: any) => {
                e.persist()
                setNewValue(e.target.value)      
            }}
            onBlur={(e: any) => onBlur(e)}
        />
    )
}

export default MyMultiInput
