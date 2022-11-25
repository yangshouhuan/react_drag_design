import {
  Modal,
  Form,
  Input,
  Spin,
  FormInstance
} from 'antd'

interface FormItemType {
  name: string
  label: string
  component: string
}

// 添加、编辑项目表单
const ModalForm = ({
  modalVisible,
  onSubmit,
  onChangeModalVisible,
  form,
  title,
  loading,
  formItems
} : {
  modalVisible: boolean
  loading: boolean
  title: string
  onSubmit: Function
  onChangeModalVisible: Function
  form: FormInstance<any>
  formItems: FormItemType[]
}) => {

  return (
    <Modal
      title={title}
      visible={modalVisible}
      onOk={() => onSubmit()}
      onCancel={() => onChangeModalVisible(false, 2)}
      width={800}
      okText="确认"
      cancelText="取消"
     >
      <Spin spinning={loading}>
        <Form
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
        >
          {formItems.map((item: FormItemType) => (
            <Form.Item
              key={item.name}
              label={item.label}
              name={item.name}
              rules={[{ required: true, message: '请输入'+item.label+'!' }]}
            >
              {
                item.component === 'Input' ?  <Input placeholder={'请输入'+item.label+'!'} /> : <Input.TextArea rows={6} placeholder={'请输入'+item.label+'!'} />
              }
            </Form.Item>
           ))}
        </Form>
      </Spin>
    </Modal>
  )
}

export default ModalForm