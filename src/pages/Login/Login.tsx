import './index.less'
import { Form, Input, Button, message, Spin } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = ({
	doLogin,
	isLogin
}: {
	doLogin: Function
	isLogin: boolean
}) => {
	const [spinning, setSprinning] = useState(false)
	const formRef = useRef<any>(null)
	const navigate = useNavigate()

	const onLogin = async (values: any) => {
		setSprinning(true)
		const res = await doLogin(values)
		setSprinning(false)
		if (res.status) {
			navigate('/KanbanManage', { replace: true })
		} else {
			message.error(res.message)
		}
	}

	useEffect(() => {
		if (isLogin) {
			navigate('/KanbanManage', { replace: true })
		}
		
		if (formRef.current) {
			formRef.current?.setFieldValue('name', '18888888888')
			formRef.current?.setFieldValue('pwd', '123456')
		}

		return () => setSprinning(false)
	}, [])

	return (
		<Spin spinning={spinning}>
			<div className="login-container">
				<div className="login-content">
					<div className="login-title">
						<h3>登录</h3>
					</div>
					<Form
						ref={formRef}
						style={{ width: 450 }}
						name="basic"
						wrapperCol={{ span: 24 }}
						initialValues={{ remember: true }}
						onFinish={onLogin}
						autoComplete="off"
					>
						<Form.Item
							name="name"
							rules={[{ required: true, message: '手机号格式有误!' }]}
						>
							{/* <Input placeholder="请输入手机号" size="large" prefix={<UserOutlined />} /> */}
							<Input placeholder="18888888888" defaultValue={'18888888888'} size="large" prefix={<UserOutlined />} />
						</Form.Item>

						<Form.Item
							style={{ marginTop: 20, marginBottom: 20 }}
							name="pwd"
							rules={[{ required: true, message: '密码格式有误!' }]}
						>
							{/* <Input.Password placeholder="请输入密码" size="large" prefix={<LockOutlined />} /> */}
							<Input.Password placeholder="123456" defaultValue={'123456'} size="large" prefix={<LockOutlined />} />
						</Form.Item>
						<Form.Item wrapperCol={{ span: 24 }}>
							<Button type="primary" htmlType="submit" style={{ width: '100%' }}>
								登录
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</Spin>
	)
}

export default Login