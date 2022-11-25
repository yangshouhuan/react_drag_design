import { Fragment, useEffect, useMemo, useState } from "react"
import { ChartType } from "types/chart"
import ChartItem from "../ChartItem"
import GroupItem from "../GroupItem"

// 创建图层列表
const CreateChartList = ({
    chart,
    activeId,
    openIds,
    onActive,
    onOpen,
    pdLeft,
    onDragEnter,
    onDragStart,
    onRightKeyClick,
}: {
    chart: ChartType
    activeId: number | null
    openIds: number[]
    onActive: (data: ChartType) => void
    onOpen: (data: ChartType) => void
    pdLeft: number
    onDragEnter: (key: number) => void
    onDragStart: (key: number) => void
    onRightKeyClick: (e: any, id: number) => void
}) => {

    // 删除则不渲染
    if (chart.is_del) return <></>

    const key = chart.id
    const isActive = activeId === key

    pdLeft++  // 嵌套层数

    if (!chart.is_group) {
        return (
            <Fragment>
                <ChartItem
                    pdLeft={pdLeft}
                    data={chart}
                    isActive={isActive}
                    onActive={() => onActive(chart)}
                    onDragEnter={() => onDragEnter(chart.id)}
                    onDragStart={() => onDragStart(chart.id)}
                    onRightKeyClick={(e: any) => onRightKeyClick(e, key)}
                />
            </Fragment>
        )
    }

    const isOpen = openIds.includes(key)
    return (
        <Fragment>
            <GroupItem
                pdLeft={pdLeft}
                data={chart}
                isOpen={isOpen}
                isActive={isActive}
                onOpen={onOpen}
                onActive={() => onActive(chart)}
                onDragEnter={() => onDragEnter(chart.id)}
                onDragStart={() => onDragStart(chart.id)}
                onRightKeyClick={(e: any) => onRightKeyClick(e, key)}
            />
            {isOpen && chart.children?.map((items: ChartType) => ((
                <CreateChartList
                    key={items.id}
                    chart={items}
                    activeId={activeId}
                    openIds={openIds}
                    onActive={onActive}
                    onOpen={onOpen}
                    pdLeft={pdLeft}
                    onDragEnter={onDragEnter}
                    onDragStart={onDragStart}
                    onRightKeyClick={onRightKeyClick}
                />
            )))}
        </Fragment>
    )
}

export default CreateChartList
