import classnames from "classnames"
import { ChartSvg } from "components/ChartSvg"
import { ChartType } from "types/chart"

// 图层
const ChartItem = ({
    data,
    isActive,
    onActive,
    pdLeft,
    onDragEnter,
    onDragStart,
    onRightKeyClick
  } : {
    data: ChartType,
    isActive: boolean
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
        className={classnames(['chart-item', 'flex-a', isActive ? 'active-item' : ''])}
        onClick={onActive}
        style={{paddingLeft: pdLeft * 10}}
        onDragEnter={onDragEnter}
        onDragStart={onDragStart}
      >
        <div className='flex-center chart-svg'><ChartSvg /></div>
        <div className='chart-name'>{data.name}</div>
      </div>
    )
  }

  export default ChartItem
  