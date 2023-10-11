import {
    ArrowDownOutlined,
    ArrowUpOutlined,
    FolderOpenOutlined,
    CopyOutlined,
    DeleteOutlined,
    EyeOutlined,
    LockOutlined,
    VerticalAlignBottomOutlined,
    VerticalAlignTopOutlined,
    EyeInvisibleOutlined,
    UnlockOutlined,
    FolderOutlined
} from "@ant-design/icons"
import './index.less'
import ReactDOM from 'react-dom'
import { useEffect, useState } from "react"
import { ActionEnumType, ChartType } from "types/chart"

const action = [
    {
        text: '置顶',
        icon: VerticalAlignTopOutlined,
        action: ActionEnumType.TOP
    },
    {
        text: '置底',
        icon: VerticalAlignBottomOutlined,
        action: ActionEnumType.BOTTOM
    },
    {
        text: '上移',
        icon: ArrowUpOutlined,
        action: ActionEnumType.UP
    },
    {
        text: '下移',
        icon: ArrowDownOutlined,
        action: ActionEnumType.DOWN
    },
    {
        text: '复制',
        icon: CopyOutlined,
        action: ActionEnumType.COPY
    },
    {
        text: '删除',
        icon: DeleteOutlined,
        action: ActionEnumType.DEL
    }
]

const ActionComponent = ({
    actionVisible,
    activeChart,
	doChartActionManage,
	actionStyle,
	doActionVisible,
	screen,
}: {
    actionVisible: boolean
    activeChart: ChartType | null
	doChartActionManage: Function
	actionStyle: any
	doActionVisible: Function
	screen: any
}) => {
    const [leftAndTop, setLetAndTop] = useState({left: 0, top: 0})

     // 行为组件坐标
    useEffect(() => {
        const between = screen.sh - actionStyle.y

        setLetAndTop({
            left: actionStyle.x,
            top: between > 352 ? actionStyle.y : actionStyle.y - 352
        })
    }, [actionStyle, screen])

    // 行为组件显示时，监听全局点击事件
    useEffect(() => {
        const click = () => doActionVisible(false)
        
        if (actionVisible) {
            window.addEventListener('click', click)
            window.addEventListener('contextmenu', click)
        } else {
            window.removeEventListener('click', click)
            window.removeEventListener('contextmenu', click)
        }

        return () => {
            window.removeEventListener('click', click)
            window.removeEventListener('contextmenu', click)
        }
    }, [actionVisible])

    return ReactDOM.createPortal(
        <div className="chart-manage-action" style={{ display: actionVisible ? 'block' : 'none', left: leftAndTop.left, top: leftAndTop.top }}>
            {activeChart && !activeChart.is_group ? <p title="成为分组" onClick={() => doChartActionManage({type: ActionEnumType.BECOME_GROUP})}>
                <span className="icon-span"><FolderOpenOutlined /></span>成组
            </p> :
                <p title="取消分组" onClick={() => doChartActionManage({type: ActionEnumType.DISBAND_GROUP})}>
                    <span className="icon-span"><FolderOutlined /></span>解组
                </p>}
            {action.map((item: any) => (
                <p key={item.action} title={item.text} onClick={() => doChartActionManage({ type: item.action })}>
                    <span className="icon-span"><item.icon /></span>{item.text}
                </p>
            ))}
            {activeChart && activeChart.is_hide ? <p title="显示" onClick={() => doChartActionManage({ type: ActionEnumType.SHOW })}>
                <span className="icon-span"><EyeOutlined /></span>显示
            </p> :
                <p title="隐藏" onClick={() => doChartActionManage({ type: ActionEnumType.SHOW })}>
                    <span className="icon-span"><EyeInvisibleOutlined /></span>隐藏
                </p>
            }
            {activeChart && activeChart.is_lock ? <p title="解锁" onClick={() => doChartActionManage({ type: ActionEnumType.LOCK })}>
                    <span className="icon-span" title="解锁"><UnlockOutlined /></span>解锁
                </p> :
                <p title="锁定" onClick={() => doChartActionManage({ type: ActionEnumType.LOCK })}>
                    <span className="icon-span" title="锁定"><LockOutlined /></span>锁定
                </p>
            }
        </div>
        , document.body)
}

export default ActionComponent
