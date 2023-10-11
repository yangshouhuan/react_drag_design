import {
    title_config,
    tooltip_config,
    textStyleConfig,
    xAxis_config,
    grid_config,
    legend_config,
    axisTick_config,
    axisLabel_config,
    axisPointer_config,
    polar_config,
    angleAxis_config,
    radiusAxis_config,
    axisLine_linestyle_config,
    splitLine_config,
    visualMap_config,
    border_config,
    shadow_config,
    radar_config,
    series_pie_config,
    geo_config,
    series_effectScatter_config,
    series_lines_config,
    series_guage_config
} from './common_config'
import { align, fontWeight, repeat, iconList, transition } from './index'

const config_db = [
    {
        group_id: 12,
        group_name: '其他',
        list: [
            {
                config_id: 1201,
                config: [
                    {
                        type: 'menuchild',
                        name: '通用',
                        fields: '',
                        children: [
                            // {
                            // 	type: 'text',
                            // 	name: '标题',
                            // 	fields: 'title',
                            // 	default: '标题'
                            // },
                            {
                                type: 'boolean',
                                name: '溢出隐藏',
                                fields: 'ellipsis',
                            },
                            {
                                type: 'select',
                                name: '排列方式',
                                fields: 'vertical',
                                default: '0',
                                options: [
                                    {
                                        label: '水平',
                                        value: '0'
                                    },
                                    {
                                        label: '垂直',
                                        value: '1'
                                    }
                                ]
                            },
                            {
                                type: 'suite',
                                name: '文本样式',
                                fields: '',
                                children: [
                                    {
                                        type: 'color',
                                        name: '颜色',
                                        fields: 'color',
                                        default: '标题'
                                    },
                                    {
                                        type: 'number',
                                        name: '字号',
                                        fields: 'fontSize',
                                        default: '标题'
                                    },
                                    {
                                        type: 'select',
                                        name: '字体粗细',
                                        fields: 'fontWeight',
                                        default: '300',
                                        options: fontWeight
                                    },
                                    {
                                        type: 'select',
                                        name: '对齐方式',
                                        fields: 'align',
                                        default: 'left',
                                        options: align
                                    },
                                    {
                                        type: 'number',
                                        name: '间隔',
                                        fields: 'letterSpacing',
                                        default: 0
                                    },
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 1202,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'upimg',
                                name: '背景图片',
                                fields: 'bgimg',
                                default: ''
                            },
                            {
                                type: 'select',
                                name: '图片重复',
                                fields: 'repeat',
                                default: 'no-repeat',
                                options: repeat
                            }
                        ]
                    }
                ]
            },
            {
                config_id: 1203,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'select',
                                name: '图标',
                                fields: 'icon',
                                default: 'FullscreenOutlined',
                                options: iconList
                            },
                            {
                                type: 'number',
                                name: '大小',
                                fields: 'fontSize',
                                default: 24
                            },
                            {
                                type: 'color',
                                name: '颜色',
                                fields: 'color',
                                default: '#fff'
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 1204,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '基本',
                        children: [
                            // {
                            // 	type: 'number',
                            // 	fields: 'value',
                            // 	name: '数值',
                            // 	default: 1000
                            // },
                            {
                                type: 'text',
                                fields: 'title',
                                name: '标题',
                                default: ''
                            },
                            {
                                type: 'text',
                                fields: 'prefix',
                                name: '前缀',
                                default: ''
                            },
                            {
                                type: 'text',
                                fields: 'suffix',
                                name: '后缀',
                                default: ''
                            },
                            {
                                type: 'number',
                                fields: 'toFixed',
                                name: '小数位数',
                                default: 0
                            },
                            {
                                type: 'number',
                                fields: 'animationTime',
                                name: '动效帧数',
                                default: 1000
                            },
                            {
                                type: 'select',
                                fields: 'layout',
                                name: '布局方式',
                                default: 'top',
                                options: [
                                    { label: '标题在上', value: 'top'},
                                    { label: '标题在下', value: 'bottom'},
                                    { label: '标题在左', value: 'left'},
                                    { label: '标题在右', value: 'right'},
                                ]
                            },
                            {
                                type: 'group',
                                fields: 'value_style',
                                name: '数字样式	',
                                children: [
                                    {
                                        type: 'select',
                                        fields: 'fontStyle',
                                        name: '数字样式',
                                        default: 'normal',
                                        options: [
                                            { label: 'normal', value: 'normal' },
                                            { label: 'italic', value: 'italic' },
                                            { label: 'oblique', value: 'oblique' },
                                        ]
                                    },
                                    {
                                        type: 'number',
                                        fields: 'fontSize',
                                        name: '字号',
                                        default: 12
                                    },
                                    {
                                        type: 'select',
                                        fields: 'fontWeight',
                                        name: '字体粗细',
                                        default: 'normal',
                                        options: fontWeight
                                    },
                                    {
                                        type: 'select',
                                        fields: 'textAlign',
                                        name: '对齐方式',
                                        default: 'left',
                                        options: align
                                    },
                                    {
                                        type: 'number',
                                        fields: 'letterSpacing',
                                        name: '间隔',
                                        default: 0
                                    }
                                ]
                            },
                            {
                                type: 'group',
                                fields: 'title_style',
                                name: '标题样式	',
                                children: [
                                    {
                                        type: 'select',
                                        fields: 'fontStyle',
                                        name: '标题样式',
                                        default: 'normal',
                                        options: [
                                            { label: 'normal', value: 'normal' },
                                            { label: 'italic', value: 'italic' },
                                            { label: 'oblique', value: 'oblique' },
                                        ]
                                    },
                                    {
                                        type: 'number',
                                        fields: 'fontSize',
                                        name: '字号',
                                        default: 12
                                    },
                                    {
                                        type: 'select',
                                        fields: 'fontWeight',
                                        name: '字体粗细',
                                        default: 'normal',
                                        options: fontWeight
                                    },
                                    {
                                        type: 'select',
                                        fields: 'textAlign',
                                        name: '对齐方式',
                                        default: 'left',
                                        options: align
                                    },
                                    {
                                        type: 'number',
                                        fields: 'letterSpacing',
                                        name: '间隔',
                                        default: 0
                                    },
                                    {
                                        type: 'margin',
                                        fields: '',
                                        name: '边距'
                                    }
                                ]
                            },
                            {
                                type: 'group',
                                fields: 'prefix_style',
                                name: '前缀样式	',
                                children: [
                                    {
                                        type: 'select',
                                        fields: 'fontStyle',
                                        name: '前缀样式',
                                        default: 'normal',
                                        options: [
                                            { label: 'normal', value: 'normal' },
                                            { label: 'italic', value: 'italic' },
                                            { label: 'oblique', value: 'oblique' },
                                        ]
                                    },
                                    {
                                        type: 'number',
                                        fields: 'fontSize',
                                        name: '字号',
                                        default: 12
                                    },
                                    {
                                        type: 'number',
                                        fields: 'marginRight',
                                        name: '右间距',
                                        default: 0
                                    },
                                    {
                                        type: 'select',
                                        fields: 'fontWeight',
                                        name: '字体粗细',
                                        default: 'normal',
                                        options: fontWeight
                                    }
                                ]
                            },
                            {
                                type: 'group',
                                fields: 'suffix_style',
                                name: '后缀样式	',
                                children: [
                                    {
                                        type: 'select',
                                        fields: 'fontStyle',
                                        name: '后缀样式',
                                        default: 'normal',
                                        options: [
                                            { label: 'normal', value: 'normal' },
                                            { label: 'italic', value: 'italic' },
                                            { label: 'oblique', value: 'oblique' },
                                        ]
                                    },
                                    {
                                        type: 'number',
                                        fields: 'fontSize',
                                        name: '字号',
                                        default: 12
                                    },
                                    {
                                        type: 'number',
                                        fields: 'marginLeft',
                                        name: '左间距',
                                        default: 0
                                    },
                                    {
                                        type: 'select',
                                        fields: 'fontWeight',
                                        name: '字体粗细',
                                        default: 'normal',
                                        options: fontWeight
                                    }
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 1205,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '基本',
                        children: [
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '背景颜色',
                                default: '#319cff'
                            },
                            {
                                type: 'number',
                                fields: 'borderWidth',
                                name: '边界宽',
                                default: 0
                            },
                            {
                                type: 'color',
                                fields: 'borderColor',
                                name: '边界颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                            {
                                type: 'number',
                                fields: 'borderRadius',
                                name: '边界圆角',
                                default: 0
                            },
                            {
                                type: 'select',
                                fields: 'borderStyle',
                                name: '边界类型',
                                default: 'no',
                                options: [
                                    { label: 'no ', value: ''},
                                    { label: 'dotted ', value: 'dotted '},
                                    { label: 'solid ', value: 'solid '},
                                    { label: 'double ', value: 'double '},
                                    { label: 'dashed ', value: 'dashed '},
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 1206,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '基本',
                        children: [
                            {
                                type: 'text',
                                fields: 'format',
                                name: '格式',
                                default: '{y}-{m}-{d} {h}:{i}:{s}'
                            },
                            {
                                type: 'number',
                                fields: 'interval',
                                name: '时间间隔',
                                default: 1000
                            },
                            {
                                type: 'suite',
                                fields: 'style',
                                name: '文本样式',
                                children: [
                                    {
                                        type: 'color',
                                        fields: 'color',
                                        name: '字体颜色',
                                        default: '#fff'
                                    },
                                    {
                                        type: 'number',
                                        fields: 'fontSize',
                                        name: '字体字号',
                                        default: 12
                                    },
                                    {
                                        type: 'select',
                                        fields: 'fontWeight',
                                        name: '字体粗细',
                                        default: 'normal',
                                        options: fontWeight
                                    },
                                    {
                                        type: 'select',
                                        fields: 'textAlign',
                                        name: '对齐方式',
                                        default: 'center',
                                        options: align
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                config_id: 1207,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '基本',
                        children: [
                            {
                                type: 'color',
                                fields: 'bg_color',
                                name: '背景颜色',
                                default: '#999999'
                            },
                            {
                                type: 'color',
                                fields: 'progress_color',
                                name: '前景颜色',
                                default: '#00ffff'
                            },
                            {
                                type: 'number',
                                fields: 'height',
                                name: '背景高',
                                default: 10
                            },
                            {
                                type: 'text',
                                fields: 'unit',
                                name: '单位',
                                default: ''
                            },
                            {
                                type: 'number',
                                fields: 'total',
                                name: '总值',
                                default: 80
                            },
                            {
                                type: 'number',
                                fields: 'value',
                                name: '值',
                                default: 80
                            },
                            {
                                type: 'suite',
                                fields: 'value_style',
                                name: '标题样式',
                                children: [
                                    {
                                        type: 'number',
                                        fields: 'fontSize',
                                        name: '字号',
                                        default: 20
                                    },
                                    {
                                        type: 'select',
                                        fields: 'fontSize',
                                        name: '字体粗细',
                                        default: 'normal',
                                        options: fontWeight
                                    },
                                    {
                                        type: 'color',
                                        fields: 'color',
                                        name: '字体颜色',
                                        default: '#ffffff',
                                    },
                                    {
                                        type: 'margin',
                                        fields: '',
                                        name: '边距'
                                    },
                                ]
                            },
                            {
                                type: 'suite',
                                fields: 'unit_style',
                                name: '单位样式',
                                children: [
                                    {
                                        type: 'number',
                                        fields: 'fontSize',
                                        name: '字号',
                                        default: 20
                                    },
                                    {
                                        type: 'select',
                                        fields: 'fontSize',
                                        name: '字体粗细',
                                        default: 'normal',
                                        options: fontWeight
                                    },
                                    {
                                        type: 'color',
                                        fields: 'color',
                                        name: '字体颜色',
                                        default: '#ffffff',
                                    },
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        group_id: 4,
        group_name: '边框',
        list: [
            {
                config_id: 401,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                            
                        ]
                    }
                ]
            },
            {
                config_id: 402,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 403,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 404,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                            {
                                type: 'boolean',
                                fields: 'reverse',
                                name: '反转',
                                default: false
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 405,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 406,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 407,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 408,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                            {
                                type: 'boolean',
                                fields: 'reverse',
                                name: '反转',
                                default: true
                            },
                            {
                                type: 'number',
                                fields: 'dur',
                                name: '动画时间',
                                default: 3
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 409,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 4010,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 4011,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                            {
                                type: 'text',
                                fields: 'title',
                                name: '边框标题',
                                default: ''
                            },
                            {
                                type: 'number',
                                fields: 'titleWidth',
                                name: '标题宽度',
                                default: 200
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 4012,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        group_id: 5,
        group_name: '装饰',
        list: [
            {
                config_id: 501,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                            {
                                type: 'boolean',
                                fields: 'reverse',
                                name: '反转',
                                default: false
                            },
                            {
                                type: 'number',
                                fields: 'dur',
                                name: '动画时长',
                                default: 1
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 502,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                            {
                                type: 'boolean',
                                fields: 'reverse',
                                name: '反转',
                                default: false
                            },
                            {
                                type: 'number',
                                fields: 'dur',
                                name: '动画时长',
                                default: 1
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 503,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                            {
                                type: 'boolean',
                                fields: 'reverse',
                                name: '反转',
                                default: false
                            },
                            {
                                type: 'number',
                                fields: 'dur',
                                name: '动画时长',
                                default: 1
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 504,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                            {
                                type: 'boolean',
                                fields: 'reverse',
                                name: '反转',
                                default: false
                            },
                            {
                                type: 'number',
                                fields: 'dur',
                                name: '动画时长',
                                default: 1
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 505,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                            {
                                type: 'boolean',
                                fields: 'reverse',
                                name: '反转',
                                default: false
                            },
                            {
                                type: 'number',
                                fields: 'dur',
                                name: '动画时长',
                                default: 1
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 506,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                            {
                                type: 'boolean',
                                fields: 'reverse',
                                name: '反转',
                                default: false
                            },
                            {
                                type: 'number',
                                fields: 'dur',
                                name: '动画时长',
                                default: 1
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 507,
                config: []
            },
            {
                config_id: 508,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                            {
                                type: 'boolean',
                                fields: 'reverse',
                                name: '反转',
                                default: false
                            },
                            {
                                type: 'number',
                                fields: 'dur',
                                name: '动画时长',
                                default: 1
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 509,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                            {
                                type: 'boolean',
                                fields: 'reverse',
                                name: '反转',
                                default: false
                            },
                            {
                                type: 'number',
                                fields: 'dur',
                                name: '动画时长',
                                default: 1
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 5010,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                            {
                                type: 'boolean',
                                fields: 'reverse',
                                name: '反转',
                                default: false
                            },
                            {
                                type: 'number',
                                fields: 'dur',
                                name: '动画时长',
                                default: 1
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 5011,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                type: 'multicolor',
                                fields: 'color',
                                name: '边框颜色',
                                default: ['#fff', '#999']
                            },
                            {
                                type: 'color',
                                fields: 'backgroundColor',
                                name: '边框颜色',
                                default: 'rgba(0, 0, 0, 0)'
                            },
                            {
                                type: 'boolean',
                                fields: 'reverse',
                                name: '反转',
                                default: false
                            },
                            {
                                type: 'number',
                                fields: 'dur',
                                name: '动画时长',
                                default: 1
                            },
                        ]
                    }
                ]
            },
            {
                config_id: 5012,
                config: []
            }
        ]
    },
    {
        group_id: 6,
        group_name: '轮播',
        list: [
            {
                config_id: 601,
                config: [
                    {
                        type: 'menuchild',
                        name: '基础',
                        fields: '',
                        children: [
                            {
                                name: '暂停轮播',
                                fields: 'hoverPause',
                                type: 'boolean',
                                default: true
                            },
                            {
                                name: '轮播间隔',
                                fields: 'waitTime',
                                type: 'number',
                                default: '#0A2732'
                            },
                            {
                                name: '轮播方式',
                                fields: 'carousel',
                                type: 'select',
                                default: 'single',
                                options: [
                                    {
                                        label: 'single',
                                        value: 'single'
                                    },
                                    {
                                        label: 'page',
                                        value: 'page'
                                    }
                                ]
                            },
                            {
                                type: 'suite',
                                fields: '',
                                name: '表行',
                                children: [
                                    {
                                        name: '表头高度',
                                        fields: 'headerHeight',
                                        type: 'number',
                                        default: 35
                                    },
                                    {
                                        name: '表行数',
                                        fields: 'rowNum',
                                        type: 'number',
                                        default: 5,
                                        min: 1
                                    },
                                    {
                                        name: '表头背景色',
                                        fields: 'headerBGC',
                                        type: 'color',
                                        default: '#00BAFF'
                                    },
                                    {
                                        name: '奇数行背景色',
                                        fields: 'oddRowBGC',
                                        type: 'color',
                                        default: '#003B51'
                                    },
                                    {
                                        name: '偶数行背景色',
                                        fields: 'evenRowBGC',
                                        type: 'color',
                                        default: '#0A2732'
                                    },
                                ]
                            },
                            {
                                type: 'suite',
                                name: '列设置',
                                fields: '',
                                children: [
                                    {
                                        name: '列宽度',
                                        fields: 'columnWidth',
                                        type: 'multinumber',
                                        default: []
                                    },
                                    {
                                        name: '列对齐方式',
                                        fields: 'align',
                                        type: 'select',
                                        default: 'left',
                                        options: align
                                    },
                                ]
                            },
                            {
                                type: 'suite',
                                name: '行设置',
                                fields: '',
                                children: [
                                    {
                                        name: '显示行号',
                                        fields: 'index',
                                        type: 'boolean',
                                        default: false
                                    },
                                    {
                                        name: '行号表头',
                                        fields: 'indexHeader',
                                        type: 'text',
                                        default: '#'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                config_id: 602,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '基础',
                        children: [
                            {
                                name: '表行数',
                                fields: 'rowNum',
                                type: 'number',
                                default: 5
                            },
                            {
                                name: '轮播间隔',
                                fields: 'waitTime',
                                type: 'number',
                                default: 2000
                            },
                            {
                                name: '轮播方式',
                                fields: 'carousel',
                                type: 'select',
                                default: 'single',
                                options: [
                                    {
                                        label: 'single',
                                        value: 'single'
                                    },
                                    {
                                        label: 'page',
                                        value: 'page'
                                    }
                                ]
                            },
        
                            {
                                name: '数值单位',
                                fields: 'unit',
                                type: 'text',
                                default: '单位'
                            },
                            {
                                name: '自动排序',
                                fields: 'sort',
                                type: 'boolean',
                                default: true
                            },
                        ]
                    }
                ]
            }
        ]
    },
    {
        group_id: 7,
        group_name: '折线图',
        list: [
            {
                config_id: 701,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            },
                            {
                                type: 'group',
                                name: '网格',
                                fields: 'grid',
                                enabledItem: true,
                                children: grid_config
                            }
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'legend',
                        name: '图例',
                        children: legend_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'xAxis',
                        name: 'X轴',
                        children: xAxis_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'yAxis',
                        name: 'Y轴',
                        children: xAxis_config
                    }
                ]
            },
            {
                config_id: 702,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            },
                            {
                                type: 'group',
                                name: '网格',
                                fields: 'grid',
                                enabledItem: true,
                                children: grid_config
                            }
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'legend',
                        name: '图例',
                        children: legend_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'xAxis',
                        name: 'X轴',
                        children: [
                            {
                                type: 'group',
                                name: '下轴',
                                fields: '0',
                                enabledItem: true,
                                children: xAxis_config
                            },
                            {
                                type: 'group',
                                name: '上轴',
                                fields: '1',
                                enabledItem: true,
                                children: xAxis_config
                            }
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'yAxis',
                        name: 'Y轴',
                        children: xAxis_config
                    }
                ]
            },
            {
                config_id: 703,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            },
                            {
                                type: 'group',
                                name: '网格',
                                fields: 'grid',
                                enabledItem: true,
                                children: grid_config
                            }
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'legend',
                        name: '图例',
                        children: legend_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'xAxis',
                        name: 'X轴',
                        children: xAxis_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'yAxis',
                        name: 'Y轴',
                        children: xAxis_config
                    }
                ]
            }
        ]
    },
    {
        group_id: 8,
        group_name: '仪表盘',
        list: [
            {
                config_id: 801,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            },
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'series-0',
                        name: '仪表盘',
                        children: series_guage_config
                    }
                ]
            },
            {
                config_id: 802,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            },
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'series-0',
                        name: '仪表盘',
                        children: [
                            {
                                type: 'text',
                                name: '仪表盘半径',
                                fields: 'radius',
                                default: '75%'
                            },
                            {
                                type: 'number',
                                name: '最小数值',
                                fields: 'min',
                                default: 0
                            },
                            {
                                type: 'number',
                                name: '最大数值',
                                fields: 'max',
                                default: 100
                            },
                            {
                                type: 'number',
                                name: '分割段数',
                                fields: 'splitNumber',
                                default: 10
                            },
                            ...series_guage_config
                        ]
                    }
                ]
            },
            {
                config_id: 803,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            },
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'series-0',
                        name: '仪表盘',
                        children: [
                            {
                                type: 'number',
                                name: '起始角度',
                                fields: 'startAngle',
                                default: 225
                            },
                            {
                                type: 'number',
                                name: '结束角度',
                                fields: 'endAngle',
                                default: -45
                            },
                            ...series_guage_config
                        ]
                    }
                ]
            },
        ]
    },
    {
        group_id: 1,
        group_name: '柱状图',
        list: [
            {
                config_id: 101,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            },
                            {
                                type: 'group',
                                name: '网格',
                                fields: 'grid',
                                enabledItem: true,
                                children: grid_config
                            }
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'legend',
                        name: '图例',
                        children: legend_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'xAxis',
                        name: 'X轴',
                        children: xAxis_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'yAxis',
                        name: 'Y轴',
                        children: xAxis_config
                    }
                ]
            },
            {
                config_id: 102,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            },
                            {
                                type: 'group',
                                name: '网格',
                                fields: 'grid',
                                enabledItem: true,
                                children: grid_config
                            }
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'xAxis',
                        name: 'X轴',
                        children: xAxis_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'yAxis',
                        name: 'Y轴',
                        children: xAxis_config
                    }
                ]
            },
            {
                config_id: 103,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            },
                            {
                                type: 'group',
                                name: '网格',
                                fields: 'grid',
                                enabledItem: true,
                                children: grid_config
                            }
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'legend',
                        name: '图例',
                        children: legend_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'xAxis',
                        name: 'X轴',
                        children: xAxis_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'yAxis',
                        name: 'Y轴',
                        children: xAxis_config
                    }
                ]
            },
            {
                config_id: 104,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            },
                            {
                                type: 'group',
                                name: '网格',
                                fields: 'grid',
                                enabledItem: true,
                                children: grid_config
                            }
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '极坐标系',
                        children: polar_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'angleAxis',
                        name: '角度轴',
                        children: angleAxis_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'radiusAxis',
                        name: '径向轴',
                        children: radiusAxis_config
                    }
                ]
            }
        ]
    },
    {
        group_id: 13,
        group_name: '条形图',
        list: [
            {
                config_id: 1301,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            },
                            {
                                type: 'group',
                                name: '网格',
                                fields: 'grid',
                                enabledItem: true,
                                children: grid_config
                            },
                            {
                                type: 'group',
                                name: '视觉映射',
                                fields: 'visualMap',
                                enabledItem: true,
                                children: visualMap_config
                            }
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'xAxis',
                        name: 'X轴',
                        children: xAxis_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'yAxis',
                        name: 'Y轴',
                        children: xAxis_config
                    }
                ]
            },
            {
                config_id: 1302,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            },
                            {
                                type: 'group',
                                name: '网格',
                                fields: 'grid',
                                enabledItem: true,
                                children: grid_config
                            }
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'legend',
                        name: '图例',
                        children: legend_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'xAxis',
                        name: 'X轴',
                        children: xAxis_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'yAxis',
                        name: 'Y轴',
                        children: xAxis_config
                    }
               ]
            },
            {
                config_id: 1303,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            },
                            {
                                type: 'group',
                                name: '网格',
                                fields: 'grid',
                                enabledItem: true,
                                children: grid_config
                            }
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'legend',
                        name: '图例',
                        children: legend_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'xAxis',
                        name: 'X轴',
                        children: xAxis_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'yAxis',
                        name: 'Y轴',
                        children: xAxis_config
                    }
                ]
            },
        ]
    },
    {
        group_id: 14,
        group_name: '漏斗图',
        list: [
            {
                config_id: 1401,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            }
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'legend',
                        name: '图例',
                        children: legend_config
                    },
                ]
            },
            {
                config_id: 1402,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            }
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'legend',
                        name: '图例',
                        children: legend_config
                    },
                ]
            }
        ]
    },
    {
        group_id: 15,
        group_name: '雷达图',
        list: [
            {
                config_id: 1501,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            }
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'legend',
                        name: '图例',
                        children: legend_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'radar',
                        name: '雷达图',
                        children: radar_config
                    }
                ]
            },
            {
                config_id: 1502,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            }
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'legend',
                        name: '图例',
                        children: legend_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'visualMap',
                        name: '映射组件',
                        children: visualMap_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'radar',
                        name: '雷达图',
                        children: radar_config
                    }
                ]
            },
        ]
    },
    {
        group_id: 2,
        group_name: '环形图',
        list: [
            {
                config_id: 201,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            }
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'legend',
                        name: '图例',
                        children: legend_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'series-0',
                        name: '环形图',
                        children: series_pie_config
                    }
                ]
            },
            {
                config_id: 202,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            }
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'legend',
                        name: '图例',
                        children: legend_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'series-0',
                        name: '环形图',
                        children: series_pie_config
                    }
                ]
            },
            {
                config_id: 203,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            }
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'legend',
                        name: '图例',
                        children: legend_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'series-0',
                        name: '环形图',
                        children: series_pie_config
                    }
                ]
            }
        ]
    },
    {
        group_id: 3,
        group_name: '地域图',
        list: [
            {
                config_id: 301,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            }
                        ]
                    },
                    {
                        type: 'menuchild',
                        fields: 'geo',
                        name: '地图',
                        children: geo_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'series-0',
                        name: '点配置',
                        children: series_effectScatter_config
                    },
                    {
                        type: 'menuchild',
                        fields: 'series-1',
                        name: '线配置',
                        children: series_lines_config
                    }
                ]
            },
            {
                config_id: 302,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            },
                            {
                                type: 'group',
                                name: '映射视觉',
                                fields: 'visualMap',
                                enabledItem: true,
                                children: visualMap_config
                            }
                        ]
                    }
                ]
            },
            {
                config_id: 303,
                config: [
                    {
                        type: 'menuchild',
                        fields: '',
                        name: '通用',
                        children: [
                            {
                                type: 'group',
                                name: '标题',
                                fields: 'title',
                                enabledItem: true,
                                children: title_config
                            },
                            {
                                type: 'group',
                                name: '提示',
                                fields: 'tooltip',
                                enabledItem: true,
                                children: tooltip_config
                            },
                            {
                                type: 'group',
                                name: '映射视觉',
                                fields: 'visualMap',
                                enabledItem: true,
                                children: visualMap_config
                            }
                        ]
                    }
                ]
            },
        ]
    }
]

export default config_db