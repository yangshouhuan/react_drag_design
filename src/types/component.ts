
export namespace Components {
	export interface FormItemLayout {
		labelCol: object
		wrapperCol: object
	}

	export interface FormItem {
		name: string
		component: string
		label?: string
		rules?: any[]
		required?: boolean
		message?: string
		callback?: Function
		content?: string
		maxLength?: number
		minLength?: number
		pattern?: any
		type?: string
		whitespace?: boolean
		labelCol?: object
		wrapperCol?: object
		outlined?: string
		options?: {
			value: string
			label: string
		}[],
	}


	export interface FieldData {
	  name: string | number | (string | number)[];
	  value?: any;
	  touched?: boolean;
	  validating?: boolean;
	  errors?: string[];
	}
}