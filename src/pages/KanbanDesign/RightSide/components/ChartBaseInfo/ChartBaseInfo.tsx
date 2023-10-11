import { ColumnHeightOutlined } from '@ant-design/icons'
import './index.less'

const ChartBaseInfo = ({
    title,
    subTitle,
    iconFlag
} : {
    title: string
    subTitle: string
    iconFlag?: boolean
}) => {

    return (
        <div className='flex-a header-chart-base-info'>
            {iconFlag ? <ColumnHeightOutlined className='list-icon' title='子组件' /> : <></>}
            <div className='info'>
                <div className='title'>{title}</div>
                <div className='sub-title'>{subTitle}</div>
            </div>
        </div>
    )
}

export default ChartBaseInfo
