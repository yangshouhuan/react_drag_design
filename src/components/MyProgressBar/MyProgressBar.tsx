import { forwardRef } from "react"
import './index.less'
import classNames from "classnames"

const MyTitle = ({
    config,
    cname
} : {
    cname: string
    config: any
}) => {

    return (
        <div
            className={classNames({'value': true, cname})}
            style={{...config.value_style}}
        >
            {config.value}
            <span style={{...config.unit_style}}>{config.unit}</span>
        </div>
    )
}

const MyProgressBar = forwardRef(({
    config
} : {
    config: any
}) => {
    const width = (config.value /config.total)

    return (
        <div className="w-h-pc-100 flex-center my-progress-bar">
            <div className="w-100">
                {config.layout === 'top' ? <MyTitle config={config} cname="top-value" /> : <></>}
                <div className="flex-a content">
                    {config.layout === 'left' ? <MyTitle config={config} cname="left-value" /> : <></>}
                    <div
                        className="bg-progress"
                        style={{
                            backgroundColor: config.bg_color,
                            height: config.height 
                        }}
                    >
                        <div
                            className="progress"
                            style={{
                                width: width > 1 ? '100%' : width * 100 + '%',
                                backgroundColor: config.progress_color
                            }}
                        ></div>
                    </div>
                    {config.layout === 'right' ? <MyTitle config={config} cname="right-value" /> : <></>}
                </div>
                {config.layout === 'bottom' ? <MyTitle config={config} cname="bottom-value" /> : <></>}
            </div>
        </div>
    )
})

export default MyProgressBar
