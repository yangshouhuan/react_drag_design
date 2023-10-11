import { OptionsType } from "types/chart"
import classnames from 'classnames'
import './index.less'

const width = (length: number) : string => {
    return (100 / length) + '%'
}

const MyTabs = ({
    options,
    value,
    onBlur
}: {
    options: OptionsType[]
    value: string
    onBlur: (value: any, fields?: string) => void
}) => {

    // 最多三个选项, 超出请用 select
    if (options.length > 3) {
        return <></>
    }
    
    return (
        <div className="flex-both tabs-list">
            {options.map((item: OptionsType) => (
                <button
                    title={item.value}
                    className={classnames({'tabs-item': true, 'tabs-item-active': value === item.value})}
                    style={{ width: width(options.length) }}
                    key={item.value}
                    onClick={() => onBlur(item.value)}
                >
                    <div className="ellipsis-1">{item.label}</div>
                </button>
            ))}
        </div>
    )
}

export default MyTabs
