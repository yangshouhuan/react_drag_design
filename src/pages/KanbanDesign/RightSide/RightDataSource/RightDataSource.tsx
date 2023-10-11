import { useEffect, useMemo, useState } from "react"
import { ChartType } from "types/chart"
import BaseDataSource from "../components/BaseDataSource"
import MainDataSource from "../components/MainDataSource"
import './index.less'
import { ChartSourceType } from "types/source"
import { getSource } from "store/core/source"
import ChartBaseInfo from "../components/ChartBaseInfo"
import { isArray } from "utils/validate"


const RightDataSource = ({
    activeChart,
    doSourceType,
    sourceIndex
} : {
    activeChart: ChartType
    doSourceType: Function
    sourceIndex: number
}) => {
    const [visible, setVisible] = useState(false)
    const [currentSource, setCurrentSource] = useState<any>(null)

    const dataResult = useMemo(() : string => {
        const source = getSource(activeChart.source, sourceIndex)
        setCurrentSource(source)
        if (source) {
            const defaultValue = source.default ? source.default : ''
            if (typeof defaultValue === 'string' && defaultValue.length === 0) {
                return defaultValue
            }
            return JSON.stringify(defaultValue, null, 1)
        } 
        return ''
    }, [activeChart.source])

    return (
        <div className="right-data-source-container">
            {currentSource ? <>
                <ChartBaseInfo
                    title={currentSource ? currentSource.name : activeChart.chart_name}
                    subTitle={activeChart.chart_name}
                    iconFlag={activeChart.source && isArray(activeChart.source) && activeChart.source.length > 0}
                />
                {/* 基本数据源配置 */}
                <BaseDataSource
                    setVisible={setVisible}
                    source={currentSource}
                    dataResult={dataResult}
                    doSourceType={doSourceType}
                />
                {/* 主要数据源配置 */}
                <MainDataSource
                    visible={visible}
                    setVisible={setVisible}
                    source={currentSource}
                    dataResult={dataResult}
                    doSourceType={doSourceType}
                />
            </> : <div className='font-color-white not-source-prompt'>图层无可配置数据</div>}
        </div>
    )
}

export default RightDataSource
