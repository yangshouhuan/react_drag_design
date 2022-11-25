import './index.less'
import { register } from 'api/user'

import { Form, Input, Button, message } from 'antd'
import { LockOutlined, UserOutlined, MobileOutlined, DingdingOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const Register = () => {

	const navigate = useNavigate()

	const onRegister = (values: any) => {
		if (values.Pwd !== values.Pwd2) {
			message.error('两次密码不一致')
			return
		}
		register(values)
		.then((res: any) => {
			if (res.status) {
				navigate('/', {replace: true})
			}
		})
	}

  return (
  	<div className="login-container">
  		<div className="login-content">
	  		<div className="login-title">
	  			<h3>注册</h3>
	  		</div>
		    <Form
		    	style={{width: 450}}
		      name="basic"
		      wrapperCol={{ span: 24 }}
		      initialValues={{ remember: true }}
		      onFinish={onRegister}
		      autoComplete="off"
		    >
		      <Form.Item
		        name="Name"
		        rules={[{ required: true, message: '用户名格式有误!' }]}
		      >
		        <Input placeholder="请输入用户名" size="large" prefix={<UserOutlined />} />
		      </Form.Item>

		      <Form.Item
		      	style={{marginTop: 20, marginBottom: 20}}
		        name="Phone"
		        rules={[{ required: true, message: '手机号格式有误!' }]}
		      >
		        <Input placeholder="请输入手机号" size="large" prefix={<MobileOutlined />} />
		      </Form.Item>

		      <Form.Item
		      	style={{marginTop: 20, marginBottom: 20}}
		        name="Pwd"
		        rules={[{ required: true, message: '密码格式有误!' }]}
		      >
		        <Input.Password placeholder="请输入密码" size="large" prefix={<LockOutlined />} />
		      </Form.Item>

		      <Form.Item
		      	style={{marginTop: 20, marginBottom: 20}}
		        name="Pwd2"
		        rules={[{ required: true, message: '密码格式有误!' }]}
		      >
		        <Input.Password placeholder="请输入确认密码" size="large" prefix={<LockOutlined />} />
		      </Form.Item>

		      <Form.Item
		      	style={{marginTop: 20, marginBottom: 20}}
		        name="Email"
		        rules={[{ required: true, message: '邮箱格式有误!' }]}
		      >
		        <Input placeholder="请输入邮箱" size="large" prefix={<DingdingOutlined />} />
		      </Form.Item>

		      <Form.Item wrapperCol={{ span: 24}}>
		        <Button type="primary" htmlType="submit" style={{width: '100%'}}>
		          注册
		        </Button>
		      </Form.Item>
		    </Form>
	    </div>
    </div>
  )
}

export default Register