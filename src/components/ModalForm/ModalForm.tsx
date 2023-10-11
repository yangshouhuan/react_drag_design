import {
  Modal,
  Form,
  Spin,
  FormInstance
} from 'antd'
import MyFormItemCmpt from 'components/MyFormItemCmpt'
import { MyFormItemCmptType } from 'types/chart'

// 添加、编辑项目表单
const ModalForm = ({
  modalVisible,
  onSubmit,
  onChangeModalVisible,
  form,
  title,
  loading,
  formItems,
  maskClosable = true,
  initialValues
} : {
  modalVisible: boolean
  loading: boolean
  title: string
  onSubmit: Function
  onChangeModalVisible: Function
  form: FormInstance<any>
  formItems: MyFormItemCmptType[]
  maskClosable?: boolean
  initialValues?: object
}) => {

  const onBlur = (value: any, fields: string) => {
    form.setFieldValue(fields, value)
  }

  return (
    <Modal
      title={title}
      visible={modalVisible}
      onOk={() => onSubmit()}
      onCancel={() => onChangeModalVisible(false, 2)}
      width={900}
      okText="确认"
      cancelText="取消"
      maskClosable={maskClosable}
     >
      <Spin spinning={loading}>
        <Form
          initialValues={initialValues}
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
        >
          {formItems.map((item: MyFormItemCmptType) => (
            <Form.Item
              hidden={item.types?.hidden}
              key={item.fields}
              label={item.text}
              name={item.fields}
              rules={[{ required: true, message: '请输入'+item.text+'!' }]}
            >
              <MyFormItemCmpt
                data={item}
                onBlur={(value: any) => onBlur(value, item.fields)}
              />
            </Form.Item>
          ))}
        </Form>
      </Spin>
    </Modal>
  )
}

export default ModalForm