import { Modal } from "antd"
import MyCodemirror from "components/MyCodemirror";
import { useEffect } from "react";
import './index.less'

const MyModalCodemirror = ({
    visible = false,
    onBlur = (value: string) => {},
    lineNumbers = true,
    codeValue,
    onCancel,
    render,
    title,
    readOnly
} : {
    readOnly?: boolean
    title?: string
    visible: boolean
    lineNumbers?: boolean
    codeValue: string
    onCancel: Function
    onBlur?: (value: string) => void
    render?: Function
}) => {

    const Codemirror = () => (<MyCodemirror
        readOnly={readOnly}
        codeValue={codeValue}
        height={600}
        onBlur={onBlur}
        lineNumbers={lineNumbers}
        isScreen={false}
    />)

    return (
        <Modal
            className="my-modal-codemirror"
            title={title + (readOnly ? '（只读）' : '')}
            visible={visible}
            onCancel={() => onCancel()}
            width={1200}
            footer={null}
        >
            {render ? render(Codemirror) : <Codemirror />}
        </Modal>
    )
}

export default MyModalCodemirror
