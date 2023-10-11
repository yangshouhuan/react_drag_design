import { forwardRef } from "react";
import * as antdIcon from '@ant-design/icons'

const Icon: any = {
    FullscreenOutlined: antdIcon.FullscreenOutlined,
    FullscreenExitOutlined: antdIcon.FullscreenExitOutlined,
    QuestionCircleOutlined: antdIcon.QuestionCircleOutlined,
    CheckOutlined: antdIcon.CheckOutlined,
    StopOutlined: antdIcon.StopOutlined,
    WarningOutlined: antdIcon.WarningOutlined,
    RedoOutlined: antdIcon.RedoOutlined,
    AreaChartOutlined: antdIcon.AreaChartOutlined,
    PieChartOutlined: antdIcon.PieChartOutlined,
    BarChartOutlined: antdIcon.BarChartOutlined,
    RiseOutlined: antdIcon.RiseOutlined,
    DotChartOutlined: antdIcon.DotChartOutlined,
    AndroidOutlined: antdIcon.AndroidOutlined,
    AppleOutlined: antdIcon.AppleOutlined,
    AimOutlined: antdIcon.AimOutlined,
    CloudUploadOutlined: antdIcon.CloudUploadOutlined,
    CaretUpOutlined: antdIcon.CaretUpOutlined,
    CaretDownOutlined: antdIcon.CaretDownOutlined,
    CaretLeftOutlined: antdIcon.CaretLeftOutlined,
    StepBackwardOutlined: antdIcon.StepBackwardOutlined,
    CaretRightOutlined: antdIcon.CaretRightOutlined,
    PlayCircleOutlined: antdIcon.PlayCircleOutlined
}

const style = (config: any) => {

    return {
        fontSize: config.fontSize || 36,
        color: config.color || '#fff'
    }
}

const MyIcon = forwardRef(({
    config,
} : {
    config: any
}) => {
    const RenderIcon = Icon[config.icon]

    return (
        <div className="flex-center w-h-100-pc my-icon">
            <span>
                <RenderIcon style={style(config)} />
            </span>
        </div>
    )
})

export default MyIcon
