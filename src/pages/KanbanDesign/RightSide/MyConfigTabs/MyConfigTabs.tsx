import { DeploymentUnitOutlined, PicLeftOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import './index.less'
import classNames from "classnames"
import RightConfig from "../RightConfig"
import RightDataSource from "../RightDataSource"

const MyConfigTabs = ({
    activeId,
} : {
    activeId: number
}) => {
    const [selKey, setSelKey] = useState(0)

    useEffect(() => {
        setSelKey(0)
    }, [activeId])

    return (
        <div className="my-config-tabs">
            <div className="flex-both header">
                <div className={classNames({"my-tab": true, 'my-tab-active': selKey === 0})} onClick={() => setSelKey(0)}>
                    <PicLeftOutlined title="样式" /><span> 样式</span>
                </div>
                <div className={classNames({"my-tab": true, 'my-tab-active': selKey !== 0})} onClick={() => setSelKey(1)}>
                    <DeploymentUnitOutlined title="数据源" /><span> 数据源</span>
                </div>
            </div>
            <div className="custom-scroll datav-tab-content">
                <div style={{display: selKey === 0 ? 'block' : 'none'}}>
                    <RightConfig />
                </div>
                <div style={{display: selKey !== 0 ? 'block' : 'none'}}>
                    <RightDataSource />
                </div>
            </div>
        </div>
    )
}

export default MyConfigTabs
