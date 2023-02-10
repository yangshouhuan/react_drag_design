import { Input } from "antd"
import { useEffect, useState } from "react"

const MyInput = ({
    onBlur,
    value,
    props,
    size
} : {
    onBlur: (e: any, value?: any) => void
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
            onBlur={(e: any) => onBlur(e, newValue)}
            onChange={(e: any) => {
                e.persist()
                setNewValue(e.target.value)      
            }}
        />
    )
}

export default MyInput

