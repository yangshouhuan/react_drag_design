import { CloseOutlined, SearchOutlined, SyncOutlined } from "@ant-design/icons";
import { Collapse, Drawer, Select, Space, Switch, Table } from "antd"
import MyCodemirror from "components/MyCodemirror";
import { memo } from "react";
import { DataSourceType, FieldType } from "types/chart";
import './index.less'

const {Option} = Select

// 映射字段列
const columns = [
    {
        title: '字段',
        dataIndex: 'old_name',
        width: 60,
        ellipsis: true
    },
    {
        title: '映射',
        dataIndex: 'new_name',
        width: 90,
        render: (val: string) => (<span>{(val && val.trim().length > 0 )? val : '-'}</span>),
        ellipsis: true
    },
    {
        title: '说明',
        dataIndex: 'text',
        width: 80,
        ellipsis: true
    }
]

const MainDataSource = ({
    visible,
    setVisible,
    source,
    filterCode,
    doSourceType
} : {
    visible: boolean
    setVisible: Function
    source: DataSourceType
    doSourceType: Function
    filterCode: string
}) => {

    return (
        <Drawer
            className="data-source-drawer"
            title="设置数据源"
            placement="right"
            onClose={() => setVisible(false)}
            closable={false}
            visible={visible}
            width={500}
            extra={<CloseOutlined onClick={() => setVisible(false)} />}
            drawerStyle={{ backgroundColor: '#1C2026' }}
        >
            <div className="flex-a group-content-header">
                <span className="status-span"></span>数据源
            </div>
            <div className="config-data-source">
                <div className="source-title">数据源类型</div>
                <Select
                    style={{ width: '100%' }}
                    defaultValue="static"
                    value={source.source_type || 'static'}
                    onChange={(value: string) => doSourceType({data: value, type: 'source_type'})}
                >
                    <Option value="static">静态数据</Option>
                    <Option value="api">api</Option>
                    <Option value="sql" disabled>sql</Option>
                </Select>
                {
                    source.source_type !== 'static' ? <>
                        <div className="source-title">请求类型</div>
                        <Select
                            style={{ width: '100%' }}
                            defaultValue="get"
                            value={source.request_type || 'get'}
                            onChange={(value: string) => doSourceType({data: value, type: 'request_type'})}
                        >
                            <Option value="get">get</Option>
                            <Option value="post">post</Option>
                        </Select>
                        <div className="source-title">
                            <div>URL</div>
                            <p className="">将回调参数配置到url中，例：http://api.test?value=value</p>
                        </div>
                        <div>
                            <MyCodemirror
                                status={visible}
                                title={'配置URL'}
                                readOnly={false}
                                lineNumbers={false}
                                height={100}
                                codeValue={source.api_url || ''}
                                onBlur={(value: string) => doSourceType({data: value, type: 'api_url'})}
                            />
                        </div>
                        <div className="source-title show-response">
                            <SearchOutlined /> <span title="预览数据源返回结果">预览数据源返回结果</span>
                        </div>
                    </> : <></>
                }
            </div>
            <div className="filter-content">
                <div className="group-content-header">
                    <span className="status-span" style={{top: 21}}></span>
                    {/* <Checkbox className="font-color-white" defaultChecked={source?.auth_filter} checked={source?.auth_filter}>数据过滤器</Checkbox> */}
                    数据过滤器
                </div>
                <Collapse>
                    <Collapse.Panel header="添加过滤器" key="1">
                        <div className="filter-func">function filter(data) {'{'}</div>
                        <MyCodemirror
                            status={visible}
                            title={'设置过滤器'}
                            readOnly={false}
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
                        <div className="filter-func">{'}'}</div>
                    </Collapse.Panel>
                </Collapse>
                <p className="flex-a source-title">
                    <Switch
                        size="small"
                        checked={source.auth_filter}
                        onChange={(checked: boolean) => doSourceType({data: checked, type: 'auth_filter'})}
                    /> &nbsp;&nbsp;开启过滤器调试(数据量过大时建议关闭)
                </p>
            </div>
            {source.map_field ? <div className="source-fields-table">
                <div className="source-title">数据响应结果应为数据列表，列表元素包含如下字段</div>
                <Table
                    size="small"
                    rowClassName="row-class-name"
                    columns={columns}
                    dataSource={source.map_field.map((item: FieldType, index: number) => ({
                        key: index.toString(),
                        old_name: item.old_name,
                        new_name: item.new_name,
                        text: item.text
                    }))}
                    pagination={false}
                />
            </div> : <></>}
            {/* 数据响应结果 */}
            <div>
                <div className="flex-a group-content-header">
                    <span className="status-span"></span><span title="数据响应结果">数据响应结果</span>
                    <SyncOutlined className="refresh-icon" title="刷新" />
                </div>
                <div>
                    <MyCodemirror
                        status={visible}
                        title={'数据响应结果'}
                        readOnly={true}
                        codeValue={filterCode}
                    />
                </div>
            </div>
        </Drawer>
    )
}

export default memo(MainDataSource)
