import { BarChartOutlined } from "@ant-design/icons";
import './index.less'
import { useEffect, useState } from "react";
import { ChartType } from "types/chart";
import { DataNode, TreeProps } from "antd/lib/tree";
import DirectoryTree from "antd/lib/tree/DirectoryTree";

const loopChartData = (data: ChartType[]) : DataNode[] => {
    let ndata: DataNode[] = []
    for (let i = 0; i < data.length; i++) {
        const chart = data[i]
        if (!chart.is_del) {
            ndata.push({
                title: chart.chart_name,
                key: chart.chart_id,
                children: loopChartData(chart.children || []),
                icon: !chart.is_group ? <BarChartOutlined /> : ''
            })
        }
    }
    return ndata
}

const ChartTreeMenu = ({
    doDropMoveAction,
    chartData,
    activeId,
    changeActiveById,
    doActionVisible,
    doActionStyle,
    expandedKeys
} : {
    doDropMoveAction: (action: any) => void
    chartData: ChartType[]
    activeId: number
    changeActiveById: (activeId: number) => void
    doActionVisible: Function
    doActionStyle: Function
    expandedKeys: number[]
}) => {
    const [treeData, setTreeData] = useState<DataNode[]>([])

    useEffect(() => {
        setTreeData(loopChartData(chartData))
    }, [chartData])

    const onRightClick = (info: any) => {
        if (activeId !== info.node.key) return
        const e = info.event
        e.persist()
        e.stopPropagation()
        const x = e.clientX
        const y = e.clientY

        doActionVisible(true)
		doActionStyle({x, y})
    }

    const onDrop: TreeProps['onDrop'] = (info) => {
        const dropKey = info.node.key;  // 目标元素
        const dragKey = info.dragNode.key;  // 被拖拽的元素
        const dropPos = info.node.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
        // const dropToGap = info.dropToGap
        const { children, expanded } = info.node
        
        doDropMoveAction({
            dropKey,
            dragKey,
            dropPosition,
            dropToGap: true,
            children: children || [],
            expanded
        })
    };

    return (
        <div className="custom-scroll chart-tree-menu">
            <DirectoryTree
                className="draggable-tree"
                // multiple
                defaultExpandParent
                defaultExpandAll
                draggable
                blockNode
                onDrop={onDrop}
                treeData={treeData}
                selectedKeys={[activeId]}
                expandedKeys={expandedKeys}
                onRightClick={onRightClick}
                onSelect={(selectKeys: any) => changeActiveById(selectKeys[0])}
            />
        </div>
    )
}

export default ChartTreeMenu
