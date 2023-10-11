export const baseFormItems = [
    {
      fields: 'chart_name',
      text: '图层名称',
      component: 'Input',
      types: {
        defaultValue: '图层名称'
      }
    },
    {
      fields: 'img_url',
      text: '图层图片',
      component: 'UpdateImg'
    },
    {
      fields: 'idx',
      text: '图层排序',
      component: 'InputNumber',
      types: {
        defaultValue: 0,
        min: 0
      }
    },
    {
      fields: 'option',
      text: '配置数据',
      component: 'MyCodemirror',
      style: {
        height: 200
      }
    }
  ]