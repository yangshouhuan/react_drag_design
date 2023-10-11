import { BarChartOutlined } from "@ant-design/icons"
import './index.less'
import { AttrConfigType } from "types/chart"
import classNames from "classnames"

const AttrMenu = ({
    menulist,
    handleChangeMenuIndex,
    value
}: {
    menulist: AttrConfigType[]
    handleChangeMenuIndex: (fields: string, index: number) => void
    value: number | string
}) => {

    return (
        <div className='menu-config-cmpt'>
            <div className='left-group-list'>
                {menulist.map((item: AttrConfigType, index: number) => (
                    <div
                        className={classNames({'group-item': true, 'group-item-active': value === index })}
                        key={index}
                        onClick={() => handleChangeMenuIndex(item.fields || '', index)}
                    >
                        <BarChartOutlined className='group-item-icon' />
                        <div>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AttrMenu
