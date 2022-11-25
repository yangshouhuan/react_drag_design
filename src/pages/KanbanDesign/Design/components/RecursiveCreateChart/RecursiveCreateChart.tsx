import { ChartType } from "types/chart"
import CrateEchartComponent from "../CrateChartComponent"

// 递归创建图层
const RecursiveCreateChart = ({
        chart,
        activeId,
        onSetActiveId,
        onBaseConfig,
        onRightKeyClick,
        onDragStart
    } : {
        chart: ChartType
        activeId: number | null
        onSetActiveId: (id: number) => void
        onBaseConfig: Function
        onRightKeyClick: (x: number, y: number) => void
        onDragStart: (e: any) => void
    }) => {

        // 删除或者隐藏状态下，不显示
        if (chart.is_hide || chart.is_del) return <></>

        return <>
            {!chart.is_group ? <>
                <CrateEchartComponent
                    key={chart.id}
                    onBaseConfig={onBaseConfig}
                    chart={{...chart}}
                    onSetActiveId={() => onSetActiveId(chart.id)}
                    isActive={activeId === chart.id}
                    onRightKeyClick={onRightKeyClick}
                    activeId={activeId}
                    onDragStart={onDragStart}
                />
            </> : <>
                {chart.children?.map((chartItem: ChartType) => (
                    <RecursiveCreateChart
                        key={chartItem.id}
                        onBaseConfig={onBaseConfig}
                        onSetActiveId={onSetActiveId}
                        chart={chartItem}
                        activeId={activeId}
                        onRightKeyClick={onRightKeyClick}
                        onDragStart={onDragStart}
                    />
                ))}
            </>}
        </>
}

export default RecursiveCreateChart
