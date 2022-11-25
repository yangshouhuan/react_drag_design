import {
    ArrowDownOutlined,
    ArrowUpOutlined,
    FolderOpenOutlined,
    CopyOutlined,
    DeleteOutlined,
    EyeOutlined,
    LockOutlined,
    VerticalAlignBottomOutlined,
    VerticalAlignTopOutlined
} from "@ant-design/icons"
import './index.less'
import ReactDOM from 'react-dom'
import { useEffect, useState } from "react"
import { ChartType } from "types/chart"

const action = [
    {
        text: '置顶',
        icon: VerticalAlignTopOutlined,
        action: 'top'
    },
    {
        text: '置底',
        icon: VerticalAlignBottomOutlined,
        action: 'bottom'
    },
    {
        text: '上移',
        icon: ArrowUpOutlined,
        action: 'up'
    },
    {
        text: '下移',
        icon: ArrowDownOutlined,
        action: 'down'
    },
    {
        text: '复制',
        icon: CopyOutlined,
        action: 'copy'
    },
    {
        text: '删除',
        icon: DeleteOutlined,
        action: 'del'
    }
]

const ActionComponent = ({
    isShow,
    chart,
    onActionClick,
    left,
    top,
    onSetActionShow
}: {
    isShow: boolean
    chart: ChartType | null
    onActionClick: (type: string) => void
    left: number
    top: number
    onSetActionShow: (flag: boolean) => void
}) => {

    useEffect(() => {
        const click = () => onSetActionShow(false)
        
        if (isShow) {
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
    }, [isShow])

    return ReactDOM.createPortal(
        <div className="chart-manage-action" style={{ display: isShow ? 'block' : 'none', left, top }}>
            <p title="添加分组" onClick={() => onActionClick('add_group')}>
                <span className="icon-span"><FolderOpenOutlined /></span>添加分组
            </p>
            {chart && !chart.is_group ? <p title="成为分组" onClick={() => onActionClick('into_group')}>
                <span className="icon-span"><FolderOpenOutlined /></span>成为分组
            </p> :
                <p title="取消分组" onClick={() => onActionClick('into_group')}>
                    <span className="icon-span"><FolderOpenOutlined /></span>取消分组
                </p>}
            {action.map((item: any) => (
                <p key={item.action} title={item.text} onClick={() => onActionClick(item.action)}>
                    <span className="icon-span"><item.icon /></span>{item.text}
                </p>
            ))}
            {chart && chart.is_hide ? <p title="显示" onClick={() => onActionClick('show')}>
                <span className="icon-span"><EyeOutlined /></span>显示
            </p> :
                <p title="隐藏" onClick={() => onActionClick('show')}>
                    <span className="icon-span"><EyeOutlined /></span>隐藏
                </p>
            }
            {chart && chart.is_lock ? <p title="解锁" onClick={() => onActionClick('lock')}>
                    <span className="icon-span" title="解锁"><LockOutlined /></span>解锁
                </p> :
                <p title="锁定" onClick={() => onActionClick('lock')}>
                    <span className="icon-span" title="锁定"><LockOutlined /></span>锁定
                </p>
            }
        </div>
        , document.body)
}

export default ActionComponent
