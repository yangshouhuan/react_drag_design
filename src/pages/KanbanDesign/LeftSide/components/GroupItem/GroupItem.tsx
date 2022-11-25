import { CaretDownOutlined, CaretRightOutlined, FolderOpenOutlined } from "@ant-design/icons"
import classnames from "classnames"
import { ChartType } from "types/chart"

// 分组
const GroupItem = ({
    data,
    isOpen,
    isActive,
    onOpen,
    onActive,
    pdLeft,
    onDragEnter,
    onDragStart,
    onRightKeyClick
  } : {
    data: ChartType
    isOpen: boolean
    isActive: boolean
    onOpen: (data: ChartType) => void
    onActive: () => void
    pdLeft: number
    onDragEnter: () => void
    onDragStart: () => void
    onRightKeyClick: (e: any) => void
  }) => {
  
    return (
      <div
        draggable
        onContextMenu={onRightKeyClick}
        className={classnames(['chart-item group-item flex-a', isActive ? 'active-item' : ''])}
        onClick={onActive}
        style={{paddingLeft: pdLeft * 10}}
        onDragEnter={onDragEnter}
        onDragStart={onDragStart}
      >
        <div className='flex-a'>
          <span
            className='open-icon'
            onClick={(e: any) => {
              e.stopPropagation()
              onOpen(data)
            }}
          >
            {isOpen ? <CaretDownOutlined /> : <CaretRightOutlined />}
          </span>
          <span>
            <FolderOpenOutlined />
          </span>
        </div>
        <div className='chart-name'>{data.name}</div>
      </div>
    )
  }

  export default GroupItem
  