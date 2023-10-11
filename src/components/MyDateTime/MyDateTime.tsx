import { forwardRef, useEffect, useState } from "react";
import { parseTime } from "utils/validate";

const style = (config: any) => {
    
    return {
        width: '100%',
        color: config.style.color,
        fontSize: config.style.fontSize,
        fontWeight: config.style.fontWeight,
        textAlign: config.style.textAlign,
    }
}

const MyDateTime = forwardRef(({
    config
} : {
    config: any
}) => {
    const [datetime, setDateTime] = useState('')

    useEffect(() => {
        const update = () => {
            const time = parseTime(Date.now(), config.format)
            setDateTime(time)
        }

        const interval = config.interval < 1000 ? 1000 : config.interval
        const timer = setInterval(update, interval)
        update()

        return () => clearInterval(timer)
    }, [])


    return (
        <div className="w-h-100-pc flex-a my-date-time">
            <div style={style(config)}>{datetime}</div>
        </div>
    )
})

export default MyDateTime
