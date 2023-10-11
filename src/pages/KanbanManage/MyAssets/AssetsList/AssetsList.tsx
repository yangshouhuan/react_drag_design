import { useState } from 'react'
import './index.less'

import {
	Form,
	Modal,
	message,
	Button,
	Table
} from 'antd'
import ModalForm from 'components/ModalForm'

const getcolumns = () => {
	return [
		{
			title: '图层名称',
			dataIndex: 'chart_name',
			render: (val: string) => <span>{val}</span>
		},
		{
			title: '图层图片',
			dataIndex: 'chart_img',
			render: (val: string) => <span>{val}</span>
		},
		{
			title: '图层排序',
			dataIndex: 'chart_idx',
			render: (val: number) => <span>{val}</span>
		},
		{
			title: '选项数据',
			dataIndex: 'option',
			render: (val: string) => <a>查看数据</a>
		},
		{
			title: '配置项',
			dataIndex: 'config',
			render: (val: string) => <a>查看数据</a>
		},
		{
			title: '数据源配置',
			dataIndex: 'source',
			render: (val: string) => <a>查看数据</a>
		},
		{
			title: '配置状态',
			dataIndex: 'chart_status',
			render: (val: boolean) => <span>{val ? '成功' : '失败'}</span>
		},
		{
			title: '行为',
			dataIndex: 'action',
			render: () => (
				<div>
					<a>删除</a>
					<span style={{ margin: '0 5px' }}></span>
					<a>编辑</a>
					<span style={{ margin: '0 5px' }}></span>
					<a>预览</a>
				</div>
			)
		},
	]
}

const data = [
	{
		key: '1',
		chart_name: '图层名称',
		chart_img: '/img/i.png',
		chart_idx: 1,
		chart_option: '{backgroundColor: red;}',
		chart_status: true,
	}
]

const formItems = [
	{
		fields: 'chart_name',
		text: '图层名称',
		component: 'Input',
		types: {
			defaultValue: '图层名称'
		}
	},
	{
		fields: 'chart_img',
		text: '图层图片',
		component: 'UpdateImg'
	},
	{
		fields: 'chart_idx',
		text: '图层排序',
		component: 'InputNumber',
		types: {
			defaultValue: 0,
			min: 0
		}
	},
	{
		fields: 'option',
		text: '选项数据',
		component: 'MyCodemirror',
		style: {
			height: 200
		}
	},
	{
		fields: 'config',
		text: '配置项',
		component: 'MyCodemirror',
		style: {
			height: 200
		}
	},
	{
		fields: 'source',
		text: '数据源配置',
		component: 'MyCodemirror',
		style: {
			height: 200
		}
	}
]

const AssetsList = () => {
	const [loading, setLoading] = useState(false)  // 加载
	const [form] = Form.useForm()
	const [visible, setVisible] = useState(false)

	const onSubmit = () => {
		const values = form.getFieldsValue()
	}

	return (
		<div className="kanban-list-container Assets-container">
			<div className='kanban-content'>
				<div className="source-fields-table">
					<div className="flex-both m-b-10">
						<span className="ft-c-w">响应数据匹配字段</span>
						<Button type="primary" onClick={() => setVisible(true)}>添加映射</Button>
					</div>
					<Table
						size="small"
						rowClassName="row-class-name"
						columns={getcolumns()}
						dataSource={data}
						pagination={false}
					/>
				</div>
			</div>
			{/* 添加图层弹窗 */}
			<ModalForm
				title="创建看板"
				modalVisible={visible}
				onSubmit={onSubmit}
				onChangeModalVisible={() => setVisible(false)}
				form={form}
				loading={loading}
				formItems={formItems}
				maskClosable={false}
			/>
		</div>
	)
}

export default AssetsList
