import { forwardRef, useEffect, useState } from "react"
import './index.less'

let updatetime = 100
const random = (toFixed: number) => {
    const num = Math.pow(10, toFixed)
    return Math.floor(Math.random() * num);
}
const MyDigitalFlop = forwardRef(({
    config
} : {
    config: any
}) => {
    const {
        value: newvalue,
        animationTime = 1000,
        toFixed = 0,
        prefix,
        suffix,
        title,
        layout,

        value_style,
        title_style,
        prefix_style,
        suffix_style
    } = config
    const [oldValue, setOldValue] = useState<number>(newvalue)
    const [formattedNumber, setFormattedNumber] = useState('')

    useEffect(() => {
        const poor = Math.floor(Math.abs(newvalue - oldValue))
        const time = animationTime <= 100 ? 100 : animationTime
        const count = Math.floor(time / updatetime)
        const reduce = Math.floor(poor / count)
        const hook = []
        let reduceValue = oldValue

        for (let i = 0; i < count; i++) {
            //  加上小数点
            if (toFixed > 0) {
                reduceValue += random(toFixed) / Math.pow(10, toFixed)
            }
            // 在千分位加上点
            hook.push(reduceValue.toLocaleString('zh-CN'))
            if (newvalue > oldValue) {
                reduceValue = reduceValue + reduce
            } else {
                reduceValue = reduceValue - reduce
            }
        }
        hook.push(Number(newvalue.toFixed(toFixed)).toLocaleString('zh-CN'))

        hook.forEach((v: string, index: number) => {
            setTimeout(() => {
                setFormattedNumber(v)
            }, index * updatetime)
        })
        setOldValue(newvalue)
    }, [config.value, config.toFixed])

    return (
        <div className="my-digita-flop">
            <div className="content">
                {layout === 'top' ? <div className="title title-top" style={{...title_style}}>{title}</div> : <></>}
                <div className="flex-a">
                    {layout === 'left' ? <div className="title title-left" style={{...title_style}}>{title}</div> : <></>}
                    <div className="w-100 flex-a">
                        <div className="prefix" style={{...prefix_style}}>{prefix}</div>
                        <div className="w-100 value" style={{...value_style}}>{formattedNumber}</div>
                        <div className="suffix" style={{...suffix_style}}>{suffix}</div>
                    </div>
                    {layout === 'right' ? <div className="title title-right" style={{...title_style}}>{title}</div> : <></>}
                </div>
                {layout === 'bottom' ? <div className="title title-bottom" style={{...title_style}}>{title}</div> : <></>}
            </div>
        </div>
    )
})

export default MyDigitalFlop
