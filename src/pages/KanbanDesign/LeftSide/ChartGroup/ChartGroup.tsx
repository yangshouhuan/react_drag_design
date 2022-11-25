import { useState } from 'react'
import './index.less'

import { ChartType } from 'types/chart'
import CreateChartList from '../components/CreateChartList'

const ChartGroup = ({
    chartData,
    activeId,
    changeActiveId,
    doMoveDispose,
    openGroupIds,
    setGroupIds,
    activeChart,
    doActionVisible,
    doActionStyle
}: {
    chartData: ChartType[]
    activeId: number | null
    changeActiveId: Function
    doMoveDispose: Function
    openGroupIds: number[]
    setGroupIds: Function
    activeChart: ChartType
    doActionVisible: Function
    doActionStyle: Function
}) => {
    const [startKey, setStartKey] = useState(0)
    const [endKey, setEndKey] = useState(0)

    // 打开/关闭分组事件
    const handleGroupClick = (data: ChartType) => {
        doActionVisible(false)
        
        const key = data.id
        const index = openGroupIds.indexOf(key)
        // 增加/删除打开分组id
        if (index === -1) {
            setGroupIds([...openGroupIds, key])
            setGroupIds([...openGroupIds, key])
        } else {
            openGroupIds.splice(index, 1)
            setGroupIds(openGroupIds)
        }
    }

    // 记录拖拽元素
    const onDragStart = (key: number) => {
        doActionVisible(false)
        setStartKey(key)
        const keyIndex = openGroupIds.indexOf(key)
        // 增加/删除打开分组id
        if (keyIndex !== -1) {
            openGroupIds.splice(keyIndex, 1)
            setGroupIds(openGroupIds)
        }
    }
    // 拖拽结束
    const onDragEnd = (e: any) => {
        if (startKey === endKey) return
        // 获取开始/结束索引
        doMoveDispose({startKey, endKey})
        setEndKey(0)
        setStartKey(0)
    }

    return (
        <div
            className='custom-scroll chart-list-container'
            onDragEnd={onDragEnd} 
            onDragOver={(e: any) => {
                e.persist()
                e.preventDefault()
            }}
        >
            {/* 图层列表 */}
            {chartData.map((chart: ChartType) => (
                <CreateChartList
                    key={chart.id}
                    chart={chart}
                    activeId={activeId}
                    openIds={openGroupIds}
                    pdLeft={0}
                    onActive={(data: ChartType) => changeActiveId(data.id)}
                    onOpen={handleGroupClick}
                    onDragEnter={(key: number) => setEndKey(key)}
                    onDragStart={onDragStart}
                    onRightKeyClick={(e: any, id: number) => {
                        e.persist()
                        e.stopPropagation()
                        // 不是当前激活项，返回
                        if (activeId !== id) {
                            return doActionVisible(false)
                        }
                        const x = e.pageX
                        const y = e.pageY
                        doActionVisible(true)
                        doActionStyle({x, y})
                    }}
                />
            ))}
        </div>
    )
}

export default ChartGroup