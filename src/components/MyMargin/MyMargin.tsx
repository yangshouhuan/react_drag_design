import { InputNumber } from "antd"
import './index.less'
import { useEffect, useState } from "react"

const MyMargin = ({
    margin,
    onBlur
} : {
    onBlur: Function
    margin: any
}) => {
    const [data, setData] = useState<any>({})

    useEffect(() => {
        setData(margin)
    }, [margin])

    return (
        <div className="my-margin">
            <div className="flex-center">
                <InputNumber
                    onBlur={() => onBlur(data.marginTop, 'marginTop')}
                    onChange={(num: number | null) => setData({marginTop: num || 0})}
                    value={margin.marginTop || 0}
                    className="minput top-input"
                    size="small"
                />
            </div>
            <div className="text-center">
                <span>-</span>
            </div>
            <div className="flex-both">
                <InputNumber
                    onBlur={() => onBlur(data.marginLeft, 'marginLeft')}
                    onChange={(num: number | null) => setData({marginLeft: num || 0})}
                    value={margin.marginLeft || 0}
                    className="minput left-input"
                    size="small"
                />
                -<div className="element">边距</div>-
                <InputNumber
                    onBlur={() => onBlur(data.marginRight, 'marginRight')}
                    onChange={(num: number | null) => setData({marginRight: num || 0})}
                    value={margin.marginRight || 0}
                    className="minput right-input"
                    size="small"
                />
            </div>
            <div className="text-center">
                <span>-</span>
            </div>
            <div className="flex-center">
                <InputNumber
                    onBlur={() => onBlur(data.marginBottom, 'marginBottom')}
                    onChange={(num: number | null) => setData({marginBottom: num || 0})}
                    value={margin.marginBottom || 0}
                    className="minput bottom-input"
                    size="small"
                />
            </div>
        </div>
    )
}

export default MyMargin
