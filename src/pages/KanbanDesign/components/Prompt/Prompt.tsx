import { Modal } from "antd"
import { useState } from "react";

const Prompt = () => {
    const [isModalVisible, setIsModalVisible] = useState(true)

    return (
        <Modal
            title="提示"
            visible={isModalVisible}
            onOk={() => setIsModalVisible(false)}
            onCancel={() => setIsModalVisible(false)}
            okText="确定"
            cancelText="取消"
        >
            <p>
                1、由于开发时间较短，项目还在持续开发中，许多功能并未实现和完善。如果您发现某个操作或功能与您的预想结果出现偏差，或者出现bug都属于正常现象。
            </p>
            <p>
                2、由于开发时间较短，该页面并未实现与后端数据交互，您的所有操作均只修改本地数据，页面刷新后所有数据将被重置。
            </p>
        </Modal>
    )
}

export default Prompt
