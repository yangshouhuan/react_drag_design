import MyMatchCmpt from "components/MyMatchCmpt"
import { AttrConfigType } from "types/chart"
import './index.less'
import classNames from "classnames"
import { isString } from "utils/validate"
import { getOptionByFidles } from "store/core/chart"

const wArr = ['margin', 'multicolor']
const MySuite = ({
    list,
    onBlur,
    value
} : {
    list: AttrConfigType[]
    onBlur: (value: any, fields: string) => void
    value: any
}) => {
    return (
        <div className="flex-wrap suite-list">
            {list.map((item: AttrConfigType, index: number) => {
                const currentFields = (isString(item.fields) ? item.fields : '') || ''
                const currentOption = getOptionByFidles(value, currentFields)

                return (
                    <div className={classNames({'suite-item': true, 'reserved-suite': wArr.includes(item.type)})}  key={index}>
                        <MyMatchCmpt
                            props={item}
                            onBlur={(val: any, fields?: string) => onBlur(val, (fields ? currentFields + '-' + fields : currentFields))}
                            type={item.type}
                            value={currentOption}
                        />
                        <div className="suite-label-name">{item.name}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default MySuite
