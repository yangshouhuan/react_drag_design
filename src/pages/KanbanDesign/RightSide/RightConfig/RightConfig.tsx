import './index.less'
import { Collapse } from 'antd'
import { BaseConfigType, ChartType, IsComponentType } from 'types/chart';
import CreateConfigComponent from '../components/CreateConfigComponent';
import GrnealComponent from '../components/GrnealComponent';
import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import CanvasConfig from '../components/CanvasConfig';
import chartConfigList from 'chart-config/chart-base-config'

const { Panel } = Collapse

const RightConfig = ({
    activeChart,
    dispatchBaseConfig,
    dispatchImportantConfig,
    activeId,
    canvasStyle,
    doCanvasStyle,
}: {
    activeChart: ChartType
    dispatchBaseConfig: Function
    dispatchImportantConfig: Function
    activeId: number
    canvasStyle: any
    doCanvasStyle: Function
}) => {
    const [activeKey, setActiveKey] = useState<string[]>([])

    // 图层配置规则
    const configTypes = useMemo(() => {
        setActiveKey([])
        let types = []
        if (activeChart && chartConfigList.length > 0) {
            const optionId = activeChart.option_id.split('|')
            let children: string | any[] = []
            // 循环遍历获取对应的规则
            for (let i = 0; i < chartConfigList.length; i++) {
                if (chartConfigList[i].id === optionId[0]) {
                    children = chartConfigList[i].children
                    break
                }
            }
            for (let i = 0; i < children.length; i++) {
                if (children[i].id === optionId[1]) {
                    types = children[i].configType
                    break
                }
            }
        }
        return types
    }, [chartConfigList, activeId])
    // 图层配置
    const chartConfig = useMemo(() => {
        return activeChart?.config || {}
    }, [activeChart?.config])

    // 设置属性
    const dispatchConfig = useCallback((value: any, fields: string) => dispatchImportantConfig({ value, fields }), [])

    // 设置打开项
    const handleCollapseChange = (key: string | string[]) => {
        const keys = typeof key === 'string' ? [key] : key
        setActiveKey(keys)
    }

    return (
        <div className="desing-config-content">
            {/* 基本属性 */}
            {
                activeChart ? <GrnealComponent
                    chart={activeChart}
                    onChange={dispatchBaseConfig}
                    activeId={activeId}
                />
                : <CanvasConfig
                    canvasStyle={canvasStyle}
                    doCanvasStyle={doCanvasStyle}
                />
            }
            {/* 主要配置 */}
            <div className='base-cmpt'>
                <Collapse activeKey={activeKey} onChange={handleCollapseChange} ghost>
                    {configTypes.map((item: BaseConfigType, index: number) => (
                        <Panel header={item.title} key={index.toString()}>
                            {item.children.map((data: IsComponentType, i: number) => (
                                <CreateConfigComponent
                                    key={i.toString()}
                                    config={chartConfig}
                                    data={data}
                                    onBlur={dispatchConfig}
                                />
                            ))}
                        </Panel>
                    ))}
                </Collapse>
            </div>
        </div>
    )
}

export default RightConfig