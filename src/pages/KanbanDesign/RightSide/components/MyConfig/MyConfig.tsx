import { AttrConfigType } from "types/chart"
import AttrMenu from "../AttrMenu"
import AttrConfig from "../AttrConfig"
import { memo } from "react"

const MyConfig = ({
    menulist,
    handleChangeMenuIndex,
    menuIndex,
    configList,
    onBlur,
    option,
    activeId
} : {
    menulist: AttrConfigType[]
    handleChangeMenuIndex: (fields: string, index: number) => void
    menuIndex: number
    configList: AttrConfigType[]
    onBlur: (value: any, fields: string) => void
    option: any
    activeId: number
}) => {
    
    return (
        <div className='attr-config-content'>
            {/* 左侧菜单 */}
            <AttrMenu
                menulist={menulist}
                handleChangeMenuIndex={handleChangeMenuIndex}
                value={menuIndex}
            />
            {/* 属性配置 */}
            <div className='menu-config-content'>
                <AttrConfig
                    attrList={configList}
                    onBlur={onBlur}
                    option={option || {}}
                    activeId={activeId}
                />
            </div>
        </div>
    )
}

export default memo(MyConfig)