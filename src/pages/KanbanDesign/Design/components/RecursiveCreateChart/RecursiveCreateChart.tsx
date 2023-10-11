import { ChartType } from "types/chart"
import CrateChart from "../CrateChart"

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
            {chart.is_group ? <>
                {chart.children?.map((item: ChartType) => (
                    <RecursiveCreateChart
                        key={item.chart_id}
                        onBaseConfig={onBaseConfig}
                        onSetActiveId={onSetActiveId}
                        chart={item}
                        activeId={activeId}
                        onRightKeyClick={onRightKeyClick}
                        onDragStart={onDragStart}
                    />
                ))}
            </> :  <>
                <CrateChart
                    key={chart.chart_id}
                    onBaseConfig={onBaseConfig}
                    chart={chart}
                    onSetActiveId={() => onSetActiveId(chart.chart_id)}
                    isActive={activeId === chart.chart_id}
                    onRightKeyClick={onRightKeyClick}
                    activeId={activeId}
                    onDragStart={onDragStart}
                />
            </>
            }
        </>
}

export default RecursiveCreateChart
