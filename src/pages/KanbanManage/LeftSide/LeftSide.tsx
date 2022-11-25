import { useState, useEffect } from 'react'
import { RequestPost, RequestDel, RequestGet } from 'api'
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
    EditOutlined,
    ExclamationCircleOutlined
} from '@ant-design/icons'

import ModalForm from '../components/ModalForm'
import { resolve } from 'dns'
import { rejects } from 'assert'

interface KanbanType {
    Name: string
    Remark: string
}
interface formItemType {
    name: string
    label: string
    component: string
}

const formItems: formItemType[] = [
    {
        name: 'Name',
        label: '项目名称',
        component: 'Input'
    },
    {
        name: 'Remark',
        label: '项目备注',
        component: 'TextArea'
    },
]

// 获取分组列表
const getKBGroup = (uid: number) => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve({
                status: 1,
                data: [
                    { id: 1, name: '看板分组1' },
                    { id: 2, name: '看板分组2' }
                ]
            })
        }, 0)
    })
}
// 增删改项目
const EditProject = (params: any) => RequestPost('/KBManage/KB_Edit_Group', params)
const CreateProject = (params: any) => RequestPost('/KBManage/KB_Create_Group', params)
const DelProject = (id: number, callback: Function) => {
    Modal.confirm({
        title: '删除提示',
        icon: <ExclamationCircleOutlined />,
        content: '确定删除该项目吗？',
        okText: '确定',
        cancelText: '取消',
        onOk: () => {
            RequestDel('/KBManage/KB_Del_Group?id=' + id)
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
// 获取项目详情
const GetProjectDetail = (kid: number, form: FormInstance<any>) => {
    RequestGet('/KBManage/KB_Get_Detail?id=' + kid)
        .then((res: any) => {
            if (res.status) {
                // 设置表单初始数据
                form.setFieldsValue({
                    Name: res.data.name,
                    Remark: res.data.remark
                })
            } else {
                message.error(res.message)
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
    const [modalVisible, setModalVisible] = useState(false)  // modal状态
    const [title, setTitle] = useState('创建项目')  // modal title
    const [status, setStatus] = useState<boolean>(false)  // 是否修改项目
    const [kanbanMenus, setKanbanMenus] = useState<any>([])  // 左侧项目列表

    // 修改modal状态
    const changeModalVisible = (visible: boolean, status: number) => {
        if (loading) return
        form.resetFields()
        setModalVisible(visible)
        if (status === 0) {
            setTitle('创建项目')
        } else {
            setTitle('编辑项目')
            GetProjectDetail(kId, form)
        }
    }

    // 请求完成重置表单
    const ResetForm = (res: any) => {
        setLoading(false)
        if (res.status) {
            message.success(res.message)
            form.resetFields()
            setModalVisible(false)
            setStatus(!status)
        } else {
            message.error(res.message)
        }
    }

    // 创建、编辑面板
    const onSubmit = () => {
        if (loading) return

        form.validateFields()
            .then((values: KanbanType) => {
                setLoading(true)
                if (title.includes('编辑')) {
                    EditProject({ id: kId, ...values })
                        .then(ResetForm)
                        .finally(() => setLoading(false))
                } else {
                    CreateProject({ ...values, UserId: userId })
                        .then(ResetForm)
                        .finally(() => setLoading(false))
                }
            })
    }

    // 获取项目数据
    useEffect(() => {
        getKBGroup(1).then((res: any) => {
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

    return (
        <div className="kanban-left-side">
            <div className="sidebar-logo-container">
                <div className="sidebar-logo-link router-link-active">
                    <img src={require('assetss/logo.png').default} title="数据可视化" alt="数据可视化" className="sidebar-logo" />
                    <h1 title="数据可视化" className="sidebar-title">数据可视化 </h1>
                </div>
            </div>
            <div className="flex-around kanban-menu-operate">
                <span title="添加" onClick={() => changeModalVisible(true, 0)}><PlusOutlined /></span>
                <span
                    title="删除"
                    onClick={() => DelProject(kId, () => {
                        setStatus(!status)
                        setKId(0)
                    })}
                ><DeleteOutlined /></span>
                <span title="修改" onClick={() => changeModalVisible(true, 1)}><EditOutlined /></span>
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
                        {item.name}
                    </Menu.Item>
                ))}
            </Menu>
            <ModalForm
                title={title}
                modalVisible={modalVisible}
                onSubmit={onSubmit}
                onChangeModalVisible={changeModalVisible}
                form={form}
                loading={loading}
                formItems={formItems}
            />
        </div>
    )
}

export default LeftSide

