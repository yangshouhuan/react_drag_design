import MyMatchCmpt from 'components/MyMatchCmpt'
import './index.less'
import { AttrConfigType } from 'types/chart'
import MyCollapse from 'components/MyCollapse'
import { getOptionByFidles } from 'store/core/chart'
import { hasOwn, isString } from 'utils/validate'

const FindMatchCmpt = ({
    attr,
    onBlur,
    option,
    activeId
} : {
    attr: AttrConfigType
    onBlur: (value: any, fields: string) => void
    option: any
    activeId: number
}) => {
    
    const currentFields = (isString(attr.fields) ? attr.fields : '') || ''
    const currentOption = getOptionByFidles(option, attr.fields)
    const show = (hasOwn(attr, 'enabledItem') && hasOwn(currentOption, 'show')) ? currentOption.show : true

    if (attr.type === 'group') {
        return <MyCollapse
                header={attr.name}
                onBlur={(value: any) => onBlur(value, currentFields + '-show')}
                enabledChecked={attr.enabledItem}
                checked={show}
                activeId={activeId}
                children={
                    <AttrConfig
                        attrList={attr.children || []}
                        onBlur={(value: any, fields: string) => onBlur(value, currentFields + '-' + fields)}
                        option={currentOption}
                        activeId={activeId}
                    />
                }
            />
    }
    
    return (
        <div className='config-item'>
            <div className='flex-a config-label-name' title={attr.name}>
                <span className='plac'></span>
                <span className='ellipsis-1 config-label-name-name'>{attr.name}</span>
            </div>
            <div className='config-content'>
                <MyMatchCmpt
                    props={attr}
                    onBlur={(value: any, fields?: string) => {
                        if (fields) {
                            fields = currentFields + '-' + fields
                            onBlur(value, fields)
                        } else {
                            onBlur(value, currentFields)
                        }
                    }}
                    type={attr.type}
                    value={currentOption}
                />
            </div>
        </div>
    )
}

const AttrConfig = ({
    attrList,
    onBlur,
    option,
    activeId
}: {
    attrList: AttrConfigType[]
    onBlur: (value: any, fields: string) => void
    option: any
    activeId: number
}) => {

    return (
        <div className='attr-config-list'>
            {attrList.map((item: AttrConfigType, index) => (
                <FindMatchCmpt
                    attr={item}
                    onBlur={(value: any, fields: string) => onBlur(value, fields)}
                    key={index}
                    option={option}
                    activeId={activeId}
                />
            ))}
        </div>
    )
}

export default AttrConfig
