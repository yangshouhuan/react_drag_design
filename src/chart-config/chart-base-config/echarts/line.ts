import { fontWeight } from "chart-config/shared"
import { BaseConfigType } from "types/chart"

const configType: BaseConfigType[] = [
  {
    title: '基础设置',
    children: [
      {
        fields: 'grid-left',
        text: '左距',
        component: 'InputNumber',
        types: {
          min: 0,
          defaultValue: 300
        }
      },
      {
        fields: 'grid-top',
        text: '上距',
        component: 'InputNumber',
        types: {
          min: 0,
          defaultValue: 50
        }
      },
      {
        fields: 'grid-right',
        text: '右距',
        component: 'InputNumber',
        types: {
          min: 0,
          defaultValue: 33
        }
      },
      {
        fields: 'grid-bottom',
        text: '下距',
        component: 'InputNumber',
        types: {
          min: 0,
          defaultValue: 40
        }
      }
    ]
  },
  {
    title: '标题',
    children: [
      {
        fields: 'title-show',
        text: '是否显示',
        component: 'Switch',
        types: {
          defaultChecked: true
        }
      },
      {
        text: '主标题颜色',
        fields: 'title-textStyle-color',
        component: 'ColorPicker',
        types: {
          defaultValue: '#ffffff'
        }
      },
      {
        text: '字体大小',
        fields: 'title-textStyle-fontSize',
        component: 'InputNumber',
        types: {
          defaultValue: 26
        }
      },
      {
        text: '字体粗细',
        fields: 'title-textStyle-fontWeight',
        component: 'Select',
        types: {
          options: fontWeight,
          defaultValue: '300'
        }
      }
    ]
  },
  {
    title: '说明',
    children: [
      {
        fields: 'legend-show',
        text: '是否显示',
        component: 'Switch',
        types: {
          defaultChecked: true
        }
      },
      {
        fields: 'legend-textStyle-color',
        text: '文字颜色',
        component: 'ColorPicker',
        types: {
          defaultValue: '#ffffff'
        }
      },
      {
        fields: 'legend-textStyle-fontSize',
        text: '字体大小',
        component: 'InputNumber',
        types: {
          defaultValue: 18
        }
      },
      {
        fields: 'legend-textStyle-fontWeight',
        text: '字体粗细',
        component: 'Select',
        types: {
          options: fontWeight,
          defaultValue: '300'
        }
      }
    ]
  },
  {
    title: 'X轴',
    children: [
      {
        text: '是否显示',
        fields: 'xAxis-show',
        component: 'Switch',
        types: {
          defaultChecked: true
        }
      },
      {
        fields: 'xAxis-axisLabel-color',
        text: '文字颜色',
        component: 'ColorPicker',
        types: {
          defaultValue: '#ffffff'
        }
      },
      {
        fields: 'xAxis-axisLabel-fontSize',
        text: '字体大小',
        component: 'InputNumber',
        types: {
          defaultValue: 18
        }
      },
      {
        fields: 'xAxis-axisLabel-color',
        text: '字体粗细',
        component: 'Select',
        types: {
          options: fontWeight,
          default: '300'
        }
      },
      {
        text: '线条颜色',
        fields: 'xAxis-axisLine-lineStyle-color',
        component: 'ColorPicker',
        types: {
          defaultValue: '#666666'
        }
      }
    ]
  },
  {
    title: 'Y轴',
    children: [
      {
        fields: 'yAxis-axisLabel-color',
        text: '文字颜色',
        component: 'ColorPicker',
        types: {
          defaultValue: '#ffffff'
        }
      },
      {
        text: '字体大小',
        fields: 'yAxis-axisLabel-fontSize',
        component: 'InputNumber',
        types: {
          defaultValue: 18
        }
      },
      {
        text: '字体粗细',
        fields: 'yAxis-axisLabel-fontWeight',
        component: 'Select',
        types: {
          options: fontWeight,
          defaultValue: '300'
        }
      },
      {
        fields: 'yAxis-axisLine-lineStyle-color',
        text: '线条颜色',
        component: 'ColorPicker',
        types: {
          defaultValue: '#666666'
        }
      }
    ]
  }
]

export default [
  {
    id: '0-1',
    configType
  }
]
