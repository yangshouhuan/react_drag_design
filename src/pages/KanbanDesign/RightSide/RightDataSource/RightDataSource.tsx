import { useCallback, useMemo, useState } from "react"
import { ChartType, DataSourceType } from "types/chart"
import BaseDataSource from "../components/BaseDataSource"
import MainDataSource from "../components/MainDataSource"
import './index.less'

const RightDataSource = ({
    activeChart,
    doSourceType
} : {
    activeChart: ChartType
    doSourceType: Function
}) => {
    const [visible, setVisible] = useState(false)

    const source = useMemo(() => {
        return activeChart.source as DataSourceType
    }, [activeChart])
    
    const filterCode = useMemo(() : string => {
        const fields = source.data_fields.split('-') || []
        let parent = activeChart.config
        for (let i = 0; i < fields.length - 1; i++) {
            parent = parent[fields[i]]
        }
        return JSON.stringify(parent[fields[fields.length - 1]], null, 1)
    }, [activeChart])

    return (
        <div className="desing-config-content right-data-source-container">
            {/* 基本数据源配置 */}
            <BaseDataSource
                setVisible={setVisible}
                source={source}
                filterCode={filterCode}
                doSourceType={doSourceType}
            />
            {/* 主要数据源配置 */}
            <MainDataSource
                visible={visible}
                setVisible={setVisible}
                source={source}
                filterCode={filterCode}
                doSourceType={doSourceType}
            />
        </div>
    )
}

export default RightDataSource
