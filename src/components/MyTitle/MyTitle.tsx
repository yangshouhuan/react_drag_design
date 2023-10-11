import { forwardRef } from "react";
import './index.less'
import classNames from "classnames";

const style = (config: any) : React.CSSProperties => {

    return {
        color: config.color,
        fontSize: config.fontSize || 24,
        fontWeight: config.fontWeight || 300,
        letterSpacing: (config.letterSpacing / 10) + 'em',
        textAlign: config.align || 'left',
        writingMode: config.vertical === '0' ? 'horizontal-tb' : 'vertical-lr'
    }
}

const MyTitle = forwardRef(({
    config
} : {
    config: any
}) => {

    return (
        <div className="my-title">
            <span
                className={classNames({'ellipsis-1': config.ellipsis })}
                style={style(config)}
            >{config.title}</span>
        </div>
    )
})

export default MyTitle
