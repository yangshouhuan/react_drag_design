import { useEffect, useRef, useState } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import './index.less'
import { ExpandOutlined } from '@ant-design/icons';
import MyModalCodemirror from 'components/MyModalCodemirror';
// import 'codemirror/theme/material.css';
// require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
require('codemirror/theme/dracula.css')

const MyCodemirror = ({
    readOnly,
    codeValue,
    height = 300,
    lineNumbers = true,
    onBlur = (value: string) => {},
    render,
    isScreen = true,
    title,
    status
} : {
    title?: string
    readOnly?: boolean
    codeValue: string
    height?: number | string
    lineNumbers?: boolean
    onBlur?: (value: string) => void
    render?: Function
    isScreen?: boolean
    status?: boolean
}) => {
    const codemirrorRef = useRef<any>(null)
    const [value, setValue] = useState(codeValue)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (codemirrorRef.current) {
            setValue(codeValue)
            setTimeout(() => {
                codemirrorRef.current?.editor.refresh()
            }, 10)
        }
    }, [codeValue, status])

    return (
        <div className='my-codeMirror-container'>
            <CodeMirror
                ref={codemirrorRef}
                className='my-code-mirror'
                value={value}
                options={{
                    tabSize: 1,
                    mode: 'javascript',
                    theme: 'dracula',
                    lineNumbers: lineNumbers,
                    lineWrapping: true,
                    extraKeys: { "Ctrl": 'autocomplete' },
                    lineWiseCopyCut: true,
                    showCursorWhenSelecting: true,
                    matchBrackets: true,
                    readOnly: readOnly,
                    line: true
                }}
                editorDidMount={(editors: any) => editors.setSize('auto', height)}
                onBeforeChange={(editor: any, data: any, value: any) => setValue(value)}
                onBlur={(e: any) => onBlur(e.valueOf().getValue())}
            />
            {isScreen ? <ExpandOutlined className='full-screen-icon' title='全屏' onClick={() => setVisible(!visible)} /> : <></>}
            <MyModalCodemirror
                title={title}
                visible={visible}
                onBlur={onBlur}
                codeValue={codeValue}
                onCancel={() => setVisible(false)}
                render={render}
                readOnly={readOnly}
            />
        </div>
    )
}

export default MyCodemirror
