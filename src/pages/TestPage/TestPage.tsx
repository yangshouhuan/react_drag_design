import React, { useEffect, useState } from 'react';
import { Tree } from 'antd';
import type { DataNode, DirectoryTreeProps, TreeProps } from 'antd/es/tree';
import { BarChartOutlined, CaretDownOutlined, CaretRightOutlined, CarryOutOutlined, FolderOpenOutlined, FormOutlined } from '@ant-design/icons';
import './index.less'
import classnames from 'classnames';
const { DirectoryTree, TreeNode } = Tree;

const chartData = [
    {
        chart_name: '分组 1',
        chart_id: '0-0',
        children: [
            {
                chart_name: '分组 1-0',
                chart_id: '0-0-0',
                children: [
                    { chart_name: '基础柱状图', chart_id: '0-0-0-0', icon: <BarChartOutlined /> },
                    { chart_name: '环形图', chart_id: '0-0-0-1', icon: <BarChartOutlined /> },
                    { chart_name: '基础柱状图', chart_id: '0-0-0-2', icon: <BarChartOutlined /> },
                ],
            },
            {
                chart_name: '分组 1-1',
                chart_id: '0-0-1',
                children: [
                    { chart_name: '基础柱状图', chart_id: '0-0-1-0', icon: <BarChartOutlined /> }
                ],
            },
            {
                chart_name: '分组 1-2',
                chart_id: '0-0-2',
                children: [
                    { chart_name: '环形图', chart_id: '0-0-2-0', icon: <BarChartOutlined /> },
                    { chart_name: '基础柱状图', chart_id: '0-0-2-1', icon: <BarChartOutlined /> },
                ],
            },
        ],
    },
    {
        chart_name: '分组 2',
        chart_id: '0-1',
        children: [
            {
                chart_name: '分组 2-0',
                chart_id: '0-1-0',
                children: [
                    { chart_name: '基础柱状图', chart_id: '0-1-0-0', icon: <BarChartOutlined /> },
                    { chart_name: '环形图', chart_id: '0-1-0-1', icon: <BarChartOutlined /> },
                ],
            },
        ],
    },
];

const defaultData: DataNode[] = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                children: [
                    { title: 'leaf', key: '0-0-0-0', icon: <BarChartOutlined /> },
                    { title: 'multiple', key: '0-0-0-1', icon: <BarChartOutlined /> },
                    { title: 'leaf', key: '0-0-0-2', icon: <BarChartOutlined /> },
                ],
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [{ title: 'leaf', key: '0-0-1-0', icon: <BarChartOutlined /> }],
            },
            {
                title: 'parent 1-2',
                key: '0-0-2',
                children: [
                    { title: 'leaf', key: '0-0-2-0', icon: <BarChartOutlined /> },
                    { title: 'leaf', key: '0-0-2-1', icon: <BarChartOutlined /> },
                ],
            },
        ],
    },
    {
        title: 'parent 2',
        key: '0-1',
        children: [
            {
                title: 'parent 2-0',
                key: '0-1-0',
                children: [
                    { title: 'leaf', key: '0-1-0-0', icon: <BarChartOutlined /> },
                    { title: 'leaf', key: '0-1-0-1', icon: <BarChartOutlined /> },
                ],
            },
        ],
    },
];

const loopChartData = (data: any) => {
    data.some((item: any) => {
        item.key = item.chart_id
        if (item.children) {
            loopChartData(item.children)
        }
    })
    return data
}

const TestPage: React.FC = () => {
    const [gData, setGData] = useState([]);
    const [expandedKeys] = useState(['0-0', '0-0-0', '0-0-0-0']);

    useEffect(() => {
        setGData(loopChartData(chartData))
    }, [])

    const onDragEnter: TreeProps['onDragEnter'] = (info) => {
        // console.log(info);
        // expandedKeys, set it when controlled is needed
        // setExpandedKeys(info.expandedKeys)
    };

    const onDrop: TreeProps['onDrop'] = (info) => {
        const dropKey = info.node.key;
        const dragKey = info.dragNode.key;
        const dropPos = info.node.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

        const loop = (
            data: DataNode[],
            key: React.Key,
            callback: (node: DataNode, i: number, data: DataNode[]) => void,
        ) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].key === key) {
                    return callback(data[i], i, data);
                }
                if (data[i].children) {
                    loop(data[i].children!, key, callback);
                }
            }
        };
        const data = [...gData];

        // Find dragObject
        let dragObj: DataNode;
        loop(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });

        if (!info.dropToGap) {
            // Drop on the content
            loop(data, dropKey, (item) => {
                item.children = item.children || [];
                // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
                item.children.unshift(dragObj);
            });
        } else if (
            ((info.node as any).props.children || []).length > 0 && // Has children
            (info.node as any).props.expanded && // Is expanded
            dropPosition === 1 // On the bottom gap
        ) {
            loop(data, dropKey, (item) => {
                item.children = item.children || [];
                // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
                item.children.unshift(dragObj);
                // in previous version, we use item.children.push(dragObj) to insert the
                // item to the tail of the children
            });
        } else {
            let ar: DataNode[] = [];
            let i: number;
            loop(data, dropKey, (_item, index, arr) => {
                ar = arr;
                i = index;
            });
            if (dropPosition === -1) {
                ar.splice(i!, 0, dragObj!);
            } else {
                ar.splice(i! + 1, 0, dragObj!);
            }
        }
        setGData(data);
    };

    return (
        <DirectoryTree
            className="draggable-tree"
            multiple
            defaultExpandAll
            defaultExpandedKeys={expandedKeys}
            draggable
            blockNode
            onDragEnter={onDragEnter}
            onDrop={onDrop}
            treeData={gData}
            fieldNames={{
                title: 'chart_name'
            }}
        >
        </DirectoryTree>
    );
};

export default TestPage;