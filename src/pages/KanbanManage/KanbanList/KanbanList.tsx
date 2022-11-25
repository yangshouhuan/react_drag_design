import { useState, useEffect } from 'react'
import { RequestPost, RequestGet, RequestDel } from 'api'
import './index.less'

import {
	Form,
	Modal,
	message
} from 'antd'
import {
	EditOutlined,
	DeleteOutlined,
	CopyOutlined,
	EyeOutlined,
	ExclamationCircleOutlined
} from '@ant-design/icons'
import ModalForm from '../components/ModalForm'

interface formItemType {
	name: string
	label: string
	component: string
}
const formItems: formItemType[] = [
	{
		name: 'Name',
		label: '看板名称',
		component: 'Input'
	}
]

// 删除看板
const delKanban = (uuid: string, callback: Function) => {
	Modal.confirm({
		title: '删除提示',
		icon: <ExclamationCircleOutlined />,
		content: '确定删除该看板吗？',
		okText: '确定',
		cancelText: '取消',
		onOk: () => {
			RequestDel('/KBManage/KB_Del_List?uuid=' + uuid)
				.then((res: any) => {
					if (res.status) {
						message.success(res.message)
						callback()
					} else {
						message.error(res.message)
					}
				})
		}
	})
}
// 复制看板
const copyKanban = (uuid: string, callback: Function) => {
	RequestPost('/KBManage/KB_Copy?uuId=' + uuid)
		.then((res: any) => {
			if (res.status) {
				message.success(res.message)
				callback()
			} else {
				message.error(res.message)
			}
		})
}

// 创建看板
const createKBList = (kId: number, values: any) => RequestPost('/KBManage/KB_Create_List', {
	GroupId: kId,
	Remark: '',
	...values
})
// 修改看板名称
const updateKBName = (id: string, value: string) => RequestPost('/KBManage/KB_Edit_Name?uuId=' + id + '&name=' + value)
// 获取看板列表
const getKBList = (kId: number) => {
	return new Promise((resolve, rejects) => {
		setTimeout(() => {
			resolve({
				status: 1,
				data: [
					{uuId: '1c9416ea-ad31-48c2-8c7c-76deadd95a67', name: '看板1'},
					{uuId: '2c9416ea-ad31-48c2-8c7c-76deadd95a67', name: '看板2'}
				]
			})
		})
	})
}

const KanbanList = ({
	kId,
	cropId,
	userId
}: {
	kId: number
	cropId: number | undefined
	userId: number | undefined
}) => {
	const [form] = Form.useForm()  // 表单
	const [loading, setLoading] = useState(false)  // 加载
	const [modalVisible, setModalVisible] = useState(false)  // modal状态
	const [kanbanList, setKanbanList] = useState<any>([])  // 看板列表
	const [kanbanInfo, setKanbanInfo] = useState<any>({})  // 看板详情
	const [status, setStatus] = useState(false)  // 重置列数据
	const [updateUid, setUpdateUid] = useState<null | string>(null)  // 修改看板id

	// 修改modal状态
	const changeModalVisible = (visible: boolean) => {
		if (loading) return
		if (kId === 0) {
			return message.error('请选择要添加的分组')
		}
		form.resetFields()
		setModalVisible(visible)
	}

	// 创建看板
	const onSubmit = () => {
		if (loading) return
		setLoading(true)
		form.validateFields()
			.then((values: { Name: string }) => {
				createKBList(kId, values)
					.then((res: any) => {
						if (res.status) {
							form.resetFields()
							setModalVisible(false)
							setStatus(!status)
						} else {
							message.error(res.message)
						}
					}).finally(() => setLoading(false))
			})
	}

	// 修改看板名称
	const handleEditName = (e: any, defaultValue: string) => {
		let value = e.target.value.trim()

		if (value === defaultValue) {
			return setUpdateUid(null)
		} else if (value.length === 0) {
			message.error('看板名称不能为空!')
			e.target.value = defaultValue
			setUpdateUid(null)
			return
		}

		updateKBName(updateUid as string, value)
			.then((res: any) => {
				if (res.status) {
					message.success(res.message)
					setStatus(!status)
				} else {
					message.error(res.message)
				}
			})

		setUpdateUid(null)
	}

	// 获取看板列表
	useEffect(() => {
		if (kId) {
			getKBList(1).then((res: any) => {
				if (res.status) {
					setKanbanList(res.data)
				} else {
					message.error(res.message)
				}
			})
		}
	}, [kId, status])

	return (
		<div className="kanban-list-container">
			<h3 className="title">{kanbanInfo.proj_name}</h3>
			<p className="remark">{kanbanInfo.proj_desc}</p>
			<div className="flex-wrap kanban-list">
				<div className="add-kanban" onClick={() => changeModalVisible(true)}>+</div>
				{kanbanList.map((item: any) => (
					<div className="kanban-item" key={item.uuId}>
						<div className="edit-kanban" onClick={() => window.open('/#/KanbanDesign/' + item.uuId)}>
							<img src={require('assetss/images/PreviewImg.png').default} alt={item.name} />
							<div className="mask"></div>
							<span className="edit-kanban-icon"><EditOutlined /></span>
						</div>
						<div className="flex-both kanban-item-note">
							<div className="flex-a edit-kanban-name">
								{updateUid !== item.uuId ? (
									<span
										title="双击编辑"
										onDoubleClick={() => setUpdateUid(item.uuId)}
									>{item.name}</span>
								) : (
									<input
										type="text"
										placeholder="请输入看板名称"
										defaultValue={item.name}
										autoFocus={true}
										onBlur={(e: any) => handleEditName(e, item.name)}
									/>
								)}
							</div>
							<span className="note">
								<span
									title="删除"
									className="note-icon"
									onClick={() => delKanban(item.uuId, () => setStatus(!status))}
								><DeleteOutlined /></span>
								<span
									title="复制"
									className="note-icon"
									onClick={() => copyKanban(item.uuId, () => setStatus(!status))}
								><CopyOutlined /></span>
								<span
									title="预览"
									className="note-icon"
									onClick={() => window.open('/#/Preview/' + item.uuId)}
								><EyeOutlined /></span>
							</span>
						</div>
					</div>
				))}
			</div>
			<ModalForm
				title="创建看板"
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

export default KanbanList
