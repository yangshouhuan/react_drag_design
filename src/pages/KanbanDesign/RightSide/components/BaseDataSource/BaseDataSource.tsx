import { SyncOutlined } from "@ant-design/icons"
import { Button, Checkbox, InputNumber, Table, Timeline } from "antd"
import MyCodemirror from "components/MyCodemirror"
import MyModalCodemirror from "components/MyModalCodemirror"
import { memo, useState } from "react"
import './index.less'
import { ChartSourceMapType, ChartSourceType } from "types/source"
import MyInput from "components/MyInput"

// 获取封装后的columns
const getColumns = (onChange: Function) => ([
    {
        title: '字段',
        dataIndex: 'fields',
        width: 60,
        ellipsis: true
    },
    {
        title: '映射',
        dataIndex: 'map_fields',
        width: 90,
        render: (value: string, record: any) => {
            return (
                <div className="flex-a config-map">
                    <MyInput value={value} onBlur={(e: any) => onChange(e, record)} />
                </div>
            )
        }
    },
    {
        title: '状态',
        dataIndex: 'status',
        width: 80,
        render: (val: boolean, item: any) => {
            return <div className="flex-a config-status">
                <span className="status-span" style={{ backgroundColor: val ? '#1980ff' : '#cc9e1d' }}></span>
                {item.require ? '必须' : '可选'}
            </div>
        }
    }
])

const BaseDataSource = ({
    setVisible,
    source,
    dataResult,
    doSourceType
}: {
    setVisible: Function
    source: ChartSourceType
    dataResult: string
    doSourceType: Function
}) => {
    const [filterVisible, setFilterVisible] = useState(false)

    // 修改属性
    const onFieldInputChange = (e: any, record: any) => {
        e.persist()
        const value = e.target.value
        const fields = record.fields
        doSourceType({data: {value, fields}, type: 'update_fields'})
    }

    return (
        <div className="base-data-source-container">
            <div className="flex-both source-config-header">
                <div>数据接口</div>
                <div className="flex-a config-status">
                    <span className="status-span" style={{ backgroundColor: source.fields_status ? '#1980ff' : '#cc9e1d' }}></span>
                    {source.fields_status ? '配置完成' : '配置失败'}
                </div>
            </div>
            {/* 映射字段 */}
            {source.result_structure && source.result_structure.length > 0 ? <div className="source-fields-table">
                <Table
                    size="small"
                    rowClassName="row-class-name"
                    columns={getColumns(onFieldInputChange)}
                    dataSource={source.result_structure?.map((item: ChartSourceMapType, index: number) => ({
                        key: index.toString(),
                        fields: item.fields,
                        map_fields: item.map_fields,
                        status: item.status,
                        require: item.require
                    }))}
                    pagination={false}
                />
            </div> : <></>}
            {/* 数据响应结果 */}
            <div className="data-response-result">
                <div className="flex-a source-config-header">
                    <span>数据响应结果</span>
                </div>
                <div className="flex-a auto-update">
                    <Checkbox
                        className="font-color-white"
                        defaultChecked={source.auto_update}
                        checked={source.auto_update}
                        onChange={(e: any) => doSourceType({data: e.target.checked, type: 'auto_update'})}
                    >自动更新请求</Checkbox>
                    <InputNumber
                        size="small"
                        className="input-number"
                        value={source.update_time}
                        min={3}
                        onBlur={(e: any) => {
                            e.persist()
                            const value = e.target.value
                            if (value > 3) {
                                doSourceType({data: value, type: 'update_time'})
                            }
                        }}
                    />
                    <span>秒一次</span>
                </div>
                <Timeline className="time-line-content">
                    <Timeline.Item>
                        <div className="flex-both font-color-white">
                            <span className="soure-des">{source.source_type === 'static' ? '静态数据' : '动态获取'}</span>
                            <Button size="small" type="primary" ghost onClick={() => setVisible(true)}>配置数据源</Button>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item color="gray">
                        <div className="flex-both">
                            <div title="开启过滤器">
                                <Checkbox
                                    className="font-color-white"
                                    defaultChecked={source.auto_filter}
                                    checked={source.auto_filter}
                                    onChange={(e: any) => doSourceType({data: e.target.checked, type: 'auto_filter'})}
                                >数据过滤器</Checkbox>
                            </div>
                            <Button size="small" type="primary" ghost onClick={() => setFilterVisible(true)}>配置过滤器</Button>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item>
                        <div className="flex-both font-color-white">
                            <span>数据响应结果(只读)</span>
                            <SyncOutlined className="refresh-icon" />
                        </div>
                    </Timeline.Item>
                </Timeline>
                <div className="use-my-codemirror">
                    <MyCodemirror
                        title="数据响应结果"
                        readOnly={true}
                        codeValue={dataResult}
                    />
                </div>
            </div>
            {/* 配置过滤器 */}
            <MyModalCodemirror
                title={'配置过滤器'}
                visible={filterVisible}
                onCancel={() => setFilterVisible(false)}
                codeValue={source.filter_fun || ''}
                onBlur={(value: string) => doSourceType({data: value, type: 'filter_fun'})}
                render={(Children: any) => (
                    <>
                        <div className="filter-header">function filter(data) {'{'}</div>
                            <Children />
                        <div className="filter-footer">{'}'}</div>
                    </>
                )}
            />
        </div>
    )
}

export default memo(BaseDataSource)