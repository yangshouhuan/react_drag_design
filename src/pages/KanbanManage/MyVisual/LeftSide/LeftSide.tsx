import { useState, useEffect } from 'react'
import { getKbGroup, updateKbGroup, createKbGroup, delKbGroup, getKbDetail } from 'api/kanbanmanage'

import './index.less'

import {
    Menu,
    Modal,
    Form,
    message,
    FormInstance
} from 'antd'
import {
    PlusOutlined,
    DeleteOutlined,
    ExclamationCircleOutlined
} from '@ant-design/icons'


// 增删改项目
const DelProject = (id: number, callback: Function) => {
    Modal.confirm({
        title: '删除提示',
        icon: <ExclamationCircleOutlined />,
        content: '确定删除该项目吗？',
        okText: '确定',
        cancelText: '取消',
        onOk: () => {
            delKbGroup(id)
            .then((res: any) => {
                if (res.status) {
                    message.success(res.message)
                    callback(res)
                } else {
                    message.error(res.message)
                }
            })
        }
    })
}

const LeftSide = ({
    kId,
    userId,
    setKId,
}: {
    kId: number
    userId: number | undefined
    setKId: Function
}) => {
    const [form] = Form.useForm()  // 表单
    const [loading, setLoading] = useState(false)  // 加载
    const [status, setStatus] = useState<boolean>(false)  // 是否修改项目
    const [kanbanMenus, setKanbanMenus] = useState<any>([])  // 左侧项目列表
	const [updateId, setUpdateId] = useState<null | number>(null)

    // 创建、编辑面板
    const handleAddGroup = () => {
        if (loading) return

        createKbGroup({ name: '新分组', UserId: userId })
        .then((res: any) => {
            if (res.status) {
                message.success(res.message)
            } else {
                message.error(res.message)
            }
        })
        .finally(() => setLoading(false))
    }

    // 获取分组列表
    useEffect(() => {
        getKbGroup(1)
        .then((res: any) => {
            if (res.status) {
                setKanbanMenus(res.data || [])
                if (res.data?.length > 0) {
                    setKId(res.data[0].id)
                }
            } else {
                message.error(res.message)
            }
        }).catch(() => console.log('请求错误'))
    }, [status])

    // 修改分组名称
    const handleUpdateName = (e: any, defaultValue: string) => {
        let value = e.target.value.trim()

        if (value === defaultValue) {
			return setUpdateId(null)
		} else if (value.length === 0) {
			message.error('分组名称不能为空!')
			e.target.value = defaultValue
			return setUpdateId(null)
		}

        setLoading(true)
        updateKbGroup({ id: kId, name: value })
        .then((res: any) => {
            if (res.status) {
                message.success(res.message)
            } else {
                message.error(res.message)
            }
        })
        .finally(() => {
            setLoading(false)
            setUpdateId(null)
        })
    }

    return (
        <div className="kanban-left-side">
            <div className="flex-both kanban-control">
                <span>我的资产</span>
                <span title="添加" onClick={() => handleAddGroup()} className="span-icon"><PlusOutlined /></span>
            </div>
            <Menu
                mode="inline"
                theme="dark"
                style={{ backgroundColor: '#1C2026' }}
                selectedKeys={[kId.toString()]}
                onSelect={(record: any) => setKId(record.key)}
            >
                {kanbanMenus.map((item: any) => (
                    <Menu.Item key={item.id}>
                        <div className='flex-both item-name' title="双击编辑" onDoubleClick={() => {
                            if (!loading) {
                                setUpdateId(item.id)
                            }
                        }}>
                            {updateId !== item.id ? (
                                <span>{item.name}</span>
                            ) : (
                                <input
                                    type="text"
                                    placeholder="请输入看板名称"
                                    defaultValue={item.name}
                                    autoFocus={true}
                                    onBlur={(e: any) => handleUpdateName(e, item.name)}
                                />
                            )}
                            
                            <span className='del-icon'>
                                <DeleteOutlined
                                    title='删除'
                                    onClick={() => DelProject(item.id, () => {
                                        setStatus(!status)
                                        setKId(0)
                                    })}
                                />
                            </span>
                        </div>
                    </Menu.Item>
                ))}
            </Menu>
        </div>
    )
}

export default LeftSide

