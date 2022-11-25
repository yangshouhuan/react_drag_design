import { Form } from 'antd'
import { Components } from 'types/component'
import FormItem from '../UseFormItem'

const customLayout = {
	labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const UseForm =  ({
		formItems,
		onSubmit,
		FormItemLayout,
		FormLayout,
		children,
		values
	} : {
		formItems: Components.FormItem[]
		onSubmit: (values: any) => void
		FormItemLayout?: Components.FormItemLayout
		FormLayout?: string
		values?: Components.FieldData[]
		children: any
	}) => {

	return (
		<Form
			size="large"
			onFinish={onSubmit}
			wrapperCol={FormItemLayout ? FormItemLayout.wrapperCol : customLayout.wrapperCol}
			labelCol={FormItemLayout ? FormItemLayout.labelCol : customLayout.labelCol}
			fields={values || []}
		>
			{formItems.map(item => <FormItem key={item.name} items={item} FormLayout={FormLayout} />)}
			{children}
		</Form>
	)
}

export default UseForm