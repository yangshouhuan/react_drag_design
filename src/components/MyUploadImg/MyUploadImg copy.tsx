import React, { useEffect, useState } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import { Button, Input, Modal, Upload } from 'antd'
import type { RcFile, UploadProps } from 'antd/es/upload'
import type { UploadFile } from 'antd/es/upload/interface'
import './index.less'

interface PropsType {
    url?: any
    onBlur: (e: any, fields?: string) => void
}
const action = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'

const MyUploadRequest = ({
    name
} : {
    name: any
}) => {

    return new Promise((resolve) => {
        resolve({
            url: 'http://localhost:8088/' + name
        })
    })
}

const getBase64 = (file: RcFile): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = (error) => reject(error)
    })
}

const MyUploadImg: React.FC<PropsType> = ({url = '', onBlur}) => {
    const [previewOpen, setPreviewOpen] = useState(false)
    const [previewImage, setPreviewImage] = useState('')
    const [previewTitle, setPreviewTitle] = useState('')
    const [fileList, setFileList] = useState<any>([])

    const handleCancel = () => setPreviewOpen(false)
    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile)
        }

        setPreviewImage(file.url || (file.preview as string))
        setPreviewOpen(true)
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1))
    }

    const handleChange = (data: any) => {
        const file = data.fileList[0]
        if (file && file.status === 'done') {
            onBlur(file.response?.url || '')
        }  else {
            setFileList([file])
        }
    }

    useEffect(() => {
        setFileList([{url}])
    }, [url])

    return (
        <div className='my-upload-img'>
            <Upload
                action={action}
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                maxCount={1}
            >
                <Button size='small' icon={<UploadOutlined />}>上传图片</Button>
            </Upload>
            <Input value={url} />
            <Modal
                visible={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </div>
    )
}

export default MyUploadImg