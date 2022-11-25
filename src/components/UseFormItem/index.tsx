import {
	Form,
	Input,
	Checkbox,
	Select,
	Radio,
	DatePicker,
	Space,
	Switch
} from 'antd'

import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Components } from 'types/component';

const { TextArea } = Input
const { Option } = Select

const getOutlined = (name: string) => {
	if (name === 'UserOutlined') {
		return <UserOutlined className="site-form-item-icon" />
	}
	if (name === 'LockOutlined') {
		return <LockOutlined className="site-form-item-icon" />
	}
	return <></>
}

const Cmpt = (item: Components.FormItem) => {

	if (item.component === 'Input') {
		return <Input type="text" prefix={getOutlined(item.outlined || '')} placeholder={'请输入' + item.label} />
	}
	if (item.component === 'Checkbox') {
		return <Checkbox.Group options={item.options} />
	}
	if (item.component === 'Textarea') {
		return <TextArea rows={4}>{item.content}</TextArea>
	}
	if (item.component === 'Radio') {
		return <Radio.Group options={item.options} />
	}
	if (item.component === 'Switch') {
		return <Switch checkedChildren={item.content}></Switch>
	}
	if (item.component === 'Password') {
		return <Input type="password" prefix={getOutlined(item.outlined || '')} placeholder={'请输入' + item.label} />
	}
	if (item.component === 'DatePicker') {
		return <DatePicker />
	}
	if (item.component === 'Select') {
		return (
			<Select>
				{item.options ? item.options.map(items => <Option key={items.value} value={items.value}>{items.label}</Option>) : ''}
			</Select>
		)
	}
	if (item.component === 'Div') {
		return <div>{item.content}</div>
	}

	return <></>
}

const FormItem = ({
		items,
		FormLayout
	} : {
		items: Components.FormItem
		FormLayout?: string
	}) => {

	if (!items.rules) {
		let rule: any = {
			required: items.required ? items.required : false,
			message: items.message ? items.message : '请输入' + items.label
		}
		if (items.maxLength) {
			rule.maxLength = items.maxLength
		}
		if (items.minLength) {
			rule.minLength = items.minLength
		}
		if (items.pattern) {
			rule.pattern = items.pattern
		}
		if (items.type) {
			rule.type = items.type
		}
		if (items.whitespace) {
			rule.whitespace = items.whitespace
		}
		items.rules = [rule]
	}

	let props: any = {}
	if (items.component === 'Checkbox') {
		props.valuePropName = 'checked'
	}
	if (FormLayout && FormLayout === 'hideLabel') {
		props.label = ''
	} else {
		props.label = items.label
	}

	return (
		<Form.Item
			{...props}
			name={items.name}
			rules={items.rules}
			wrapperCol={items.wrapperCol}
			labelCol={items.labelCol}
		>
			{Cmpt(items)}
		</Form.Item>
	)
}

export default FormItem