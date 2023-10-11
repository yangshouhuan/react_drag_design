import { AttrConfigType, ChartType } from 'types/chart';
import BaseConfigCmpt from '../components/BaseConfigCmpt';
import { useCallback, useEffect, useState } from 'react';
import MyConfig from '../components/MyConfig';
import './index.less'
import { getOptionByFidles } from 'store/core/chart';
import ChartBaseInfo from '../components/ChartBaseInfo';
import { getSource } from 'store/core/source';
import { isArray } from 'utils/validate';
import config_db from 'chart-config-json/shared/config_db';

const getConfig = (config_id: number | number[]) => {
    let config = null
    if (isArray(config_id)) {
        config_id = config_id[0]
    }
    for (let i = 0; i < config_db.length; i++) {
        const list = config_db[i].list || []
        for (let j = 0; j < list.length; j++) {
            const item = list[j]
            if (item.config_id === config_id) {
                config = item.config
                break
            }
        }
        if (config) break
    }
    return config
}

const RightConfig = ({
    activeChart,
    dispatchBaseConfig,
    doImportantConfig,
    activeId
}: {
    activeChart: ChartType
    dispatchBaseConfig: Function
    doImportantConfig: Function
    activeId: number
}) => {
    const [configList, setConfigList] = useState<any[]>([])
    const [option, setOption] = useState({})
    const [menuFields, setMenuFields] = useState('')  // 字段 'a-b-c'
    const [menuList, setMenuList] = useState<AttrConfigType[]>([])  // 菜单列表
    const [menuIndex, setMenuIndex] = useState(0)  // 当前菜单列表索引
    const [showFlag, setShowFlag] = useState(false) // 是否存在config列表
    const [currentSource, setCurrentSource] = useState<any>(null)

    useEffect(() => {
        setMenuIndex(0)
        // 设置配置
        let config = getConfig(activeChart.config_id)
        config = config ? config : []
        setMenuList(config as AttrConfigType[])
        // 设置数据源
        const source = getSource(activeChart.source)
        setCurrentSource(source)
    }, [activeId])

    // 获取图层的option、config
    useEffect(() => {
        const config = getConfig(activeChart.config_id)
        if (config && config[menuIndex] && config[menuIndex].children) {
            const children = config[menuIndex].children || []
            const fields = config[menuIndex].fields || ''
            
            if (fields && fields.length > 0) {
                setMenuFields(fields + '-')
            }
            setConfigList(children)
            setShowFlag(children.length > 0 && !activeChart.is_group)
            setOption(getOptionByFidles(activeChart.option, fields))
        } else {
            setMenuFields('')
            setConfigList([])
            setOption({})
            setShowFlag(false)
        }
    }, [menuIndex, activeId, activeChart.option, activeChart.is_group])

    // 切换菜单
    const handleChangeMenuIndex = useCallback((fields: string, index: number) => {
        setMenuIndex(index)
        if (fields && fields.length > 0) {
            setMenuFields(fields + '-')
        } else {
            setMenuFields('')
        }
    }, [menuIndex, activeChart.option])
    // 修改值
    const handleConfigBlur = useCallback((value: any, fields: string) => {
        doImportantConfig({fields: menuFields + fields, value})
    }, [menuIndex, activeChart.option])

    return (
        <div className='desing-config-content'>
            <ChartBaseInfo
                title={currentSource ? currentSource.name : activeChart.chart_name}
                subTitle={activeChart.chart_name}
                iconFlag={activeChart.source && isArray(activeChart.source) && activeChart.source.length > 0}
            />
            {/* 基本属性 */}
            <BaseConfigCmpt
                chart={activeChart}
                onChange={dispatchBaseConfig}
                activeId={activeId}
            />
            { showFlag ? <MyConfig
                    menulist={menuList}
                    handleChangeMenuIndex={handleChangeMenuIndex}
                    menuIndex={menuIndex}
                    configList={configList}
                    onBlur={handleConfigBlur}
                    option={option}
                    activeId={activeId}
                /> : <></>
            }
        </div>
    )
}

export default RightConfig