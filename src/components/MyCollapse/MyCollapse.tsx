import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons'
import './index.less'
import { Switch } from 'antd'
import { useEffect, useState } from 'react'

const MyCollapse = ({
    children,
    header,
    onBlur,
    checked = true,
    enabledChecked,
    activeId
} : {
    children?: any
    header: string
    onBlur: (v: any) => void
    checked?: boolean
    enabledChecked?: boolean
    activeId: number
}) => {
    const [openFlag, setOpenFlag] = useState(false)
    
    const onChange = (value: boolean, e: any) => {
        e.persist()
        e.stopPropagation()
        onBlur(value)
    }

    const handleHeaderClick = () => {
        if (enabledChecked) {
            checked && setOpenFlag(!openFlag)
        } else {
            setOpenFlag(!openFlag)
        }
    }

    useEffect(() => {
        setOpenFlag(false)
    }, [activeId])

    useEffect(() => {
        if (!checked) {
            setOpenFlag(false)
        }
    }, [checked])

    return (
        <div className='my-collapse'>
            <div className='my-collapse-header' onClick={handleHeaderClick}>
                <div className='flex-a my-collapse-header-left'>
                {enabledChecked ? <Switch className='my-collapse-switcn' size='small' checked={checked} onChange={onChange} /> : <></>}
                    <span className='my-collapse-header-text'>{header}</span>
                </div>
                {openFlag && checked ? <CaretDownOutlined /> : <CaretRightOutlined />}
            </div>
            {(openFlag && checked) ? <div className='my-collapse-content'>
                <div className='my-collapse-content-box'>
                    {children}
                </div>
            </div> : <></>}
            
        </div>
    )
}

export default MyCollapse
