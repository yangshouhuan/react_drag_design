import './index.less'

import {
    Table,
    Button
} from 'antd'
import {
    CloseOutlined,
    DeleteOutlined,
    FieldTimeOutlined
} from '@ant-design/icons'
import { ChartType } from 'types/chart'
import { Key, useEffect, useState } from 'react'

const getColumns = ({
    onRecoverChart,
    onDelete
}: {
    onRecoverChart: (chart: ChartType) => void
    onDelete: (chart: ChartType) => void
}) => {

    return [
        {
            title: '名称',
            dataIndex: 'name',
            width: 100,
            ellipsis: true
        },
        {
            title: '类型',
            dataIndex: 'del_type',
            width: 60,
            render: (data: any, record: any) => {
                return <span>{record.is_group ? '分组' : '图层'}</span>
            }
        },
        {
            title: '时间',
            dataIndex: 'del_date',
            width: 160
        },
        {
            title: '操作',
            dataIndex: 'operate',
            width: 80,
            render: (data: any, record: ChartType) => (
                <div className="flex-a operate-icon">
                    <span title="恢复" onClick={() => onRecoverChart(record)}><FieldTimeOutlined /></span>
                    <span title="删除" onClick={() => onDelete(record)}><DeleteOutlined /></span>
                </div>
            )
        }
    ]
}

// 获取所有被删除的图层
const getAllDelChart = (children: ChartType[]): ChartType[] => {
    let list: ChartType[] = []
    children.forEach((chart: ChartType) => {
        if (chart.is_del) {
            list.push(chart)
        } else if (chart.is_group) {
            list = [...list, ...getAllDelChart(chart.children || [])]
        }
    })
    return list
}

const RecycleBin = ({
    recycle_visible,
    onRecycleVisible,
    chartData,
    doRecoverChart,
    doDeleteChart
}: {
    recycle_visible: boolean
    onRecycleVisible: Function
    chartData: ChartType[]
    doRecoverChart: Function
    doDeleteChart: Function
}) => {
    // table数据
    const [tableData, setTableData] = useState<ChartType[]>([])
    // 选择项图层
    const [selectCharts, setSelectCharts] = useState<ChartType[]>([])
    // 选择项keys
    const [selectKeys, setSelectKeys] = useState<Key[]>([])

    useEffect(() => {
        if (recycle_visible) {
            setSelectKeys([])
            setSelectCharts([])
            setTableData(getAllDelChart(chartData))
        }
    }, [chartData, recycle_visible])

    return (
        <div>
            <div className="recycle-bin-container" style={{ transform: recycle_visible ? 'translateX(0px)' : 'translateX(480px)' }}>
                <div className="flex-both recycle-header">
                    <span className="title">组件删除备份</span>
                    <CloseOutlined className="close-icon" onClick={() => onRecycleVisible()} />
                </div>
                <div className="recycle-table">
                    <Table
                        rowKey={'id'}
                        rowClassName="row-class-name"
                        childrenColumnName={'not_children'}
                        rowSelection={{
                            selectedRowKeys: selectKeys,
                            type: 'checkbox',
                            onChange: (keys: any, data: ChartType[]) => {
                                setSelectKeys(keys)
                                setSelectCharts(data)
                            }
                        }}
                        columns={getColumns({
                            onRecoverChart: (chart: ChartType) => doRecoverChart([chart]),
                            onDelete: (chart: ChartType) => doDeleteChart([chart])
                        })}
                        dataSource={tableData}
                        pagination={false}
                        scroll={{ y: 230 }}
                    />
                </div>
                <div className="flex-end recycle-footer">
                    <hr className="footer-hr" />
                    <div className='flex-center'>
                        {
                            selectCharts.length > 0 ? <>
                                <Button type='primary' onClick={() => doRecoverChart(selectCharts)} style={{ marginRight: 10 }}>恢复选择图层</Button>
                                <Button onClick={() => doDeleteChart(selectCharts)}>删除选择图层</Button>
                            </> : <></>
                        }
                    </div>
                </div>
            </div>
            {recycle_visible ? <div className='del-mask' onClick={() => onRecycleVisible()}></div> : <></>}
        </div>
    )
}

export default RecycleBin
