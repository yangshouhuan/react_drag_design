import RenderDataV from 'components/RenderDataV'
import RenderEcharts from 'components/RenderEcharts'
import { useEffect, useRef, useState } from 'react'
import Moveable from 'react-moveable'
import { ActionEnumType, ChartType } from 'types/chart'
import './index.less'

const setStyle = (target: HTMLElement, style: Record<string, any>) => {
    for (const key in style) {
        target.style[key as any] = style[key]
    }
}

const CrateEchartCmpt = ({
    chart,
    isActive,
    onSetActiveId,
    onBaseConfig,
    onRightKeyClick,
    activeId,
    onDragStart
}: {
    chart: ChartType
    isActive: boolean,
    onSetActiveId: Function
    onBaseConfig: Function
    onRightKeyClick: (x: number, y: number) => void
    onDragStart: (e: any) => void
    activeId: number | null
}) => {
    const [target, setTarget] = useState<HTMLElement>()
    const moveRef = useRef<any>(null)
    const [chartElId] = useState('eMain' + chart.chart_id)

    // 获取元素
    useEffect(() => {
        setTarget(document.getElementById(chartElId)!)
    }, [chartElId])

    // 动态修改图层位置
    useEffect(() => {
        if (moveRef.current) {
            moveRef.current.updateRect({
                left: chart.x,
                top: chart.y,
                width: chart.width,
                height: chart.height,
                rotation: chart.rotate
            })
        }
    }, [chart.width, chart.height, chart.x, chart.y, activeId, chart.rotate])

    // 大小
    const onResize = (e: any) => {
        const style = {
            width: `${e.width}px`,
            height: `${e.height}px`,
            transform: e.drag.transform
        }
        setStyle(e.target, style)
    }
    // 旋转
    const onRotate = (e: any) => {
        setStyle(e.target, {
            transform: e.drag.transform
        })
    }
    // 拖拽
    const onDrag = (e: any) => {
        setStyle(e.target, {
            transform: e.transform
        })
        !isActive && onSetActiveId()
    }

    // 大小结束
    const onResizeEnd = (e: any) => {
        if (e.lastEvent) {
            const width = e.lastEvent.width
            const height = e.lastEvent.height
            onBaseConfig({ width, height, type: ActionEnumType.WH })
        }
    }
    // 旋转结束
    const onRotateEnd = (e: any) => {
        if (e.lastEvent) {
            const rotate = e.lastEvent.rotate
            onBaseConfig({ rotate, type: ActionEnumType.ROTATE })
        }
    }
    // 拖拽结束
    const onDragEnd = (e: any) => {
        if (e.lastEvent) {
            const x = e.lastEvent.translate[0]
            const y = e.lastEvent.translate[1]
            onBaseConfig({ x, y, type: ActionEnumType.XY })
        }
    }

    // 右键行为设置
    const onContextMenu = (e: any) => {
        if (!isActive) return
        e.persist()
        e.stopPropagation()
        // 不是当前激活项，返回
        const x = e.clientX
        const y = e.clientY

        onRightKeyClick(x, y)
    }

    // 点击
    const onClick = () => {
        !isActive && onSetActiveId()
    }

    const chartStyle = {
        position: 'absolute',
        width: chart.width,
        height: chart.height,
        backgroundColor: chart.bg_color,
        transform: `matrix(1, 0, 0, 1, 0, 0) translate(${chart.x}px, ${chart.y}px) rotate(${chart.rotate}deg)`,
        opacity: chart.opacity
    }
    
    return (
        <div
            className='chart-mmoveable'
            onContextMenu={onContextMenu}
            onClick={(e: any) => e.stopPropagation()}
        >
            {chart.is_echart ?
                <RenderEcharts chart={chart} chartStyle={chartStyle} chartElId={chartElId} />
                :
                <RenderDataV chartElId={chartElId} chart={chart} chartStyle={chartStyle} />
            }
            <Moveable
                ref={moveRef}
                target={target}
                onClick={onClick}
                className={isActive ? 'active-chart' : 'not-active-chart'}
                draggable={!chart.is_lock}
                rotatable={!chart.is_lock}
                resizable={!chart.is_lock}
                origin={false}
                onResize={onResize}
                onRotate={onRotate}
                onDrag={onDrag}
                onResizeEnd={onResizeEnd}
                onRotateEnd={onRotateEnd}
                onDragEnd={onDragEnd}
                onDragStart={onDragStart}
            ></Moveable>
        </div>
    )
}

export default CrateEchartCmpt
