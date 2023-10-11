import { objMerge } from 'utils/shared'

// 阴影
const shadow = {
    shadowBlur: 0,
    shadowColor: '',
    shadowOffsetX: 0,
    shadowOffsetY: 0,
}
// 边框
const border = {
    borderColor: '#000',
    borderWidth: 0,
    borderType: 'solid',
}
// 文字
const font = {
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 10,
}
// 文本阴影
const textShadow = {
    textBorderColor: '',
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
    textBorderWidth: 0
}
// objMerge
// 标题
const getTitle = (mergeValue = {}) => {
    const option = {
        show: false,  // 是否显示
        text: '标题',  // 标题
        subtext: '',  // 子标题
        align: 'left',  // 对其方式
        textStyle: {
            color: '#ffffff', // 字体颜色
            fontSize: 18,  // 字体大小
            fontWeight: 'bolder', // 字体粗细
            fontStyle: 'normal',  // 字体风格
            // width: 0,  // 宽
            // overflow: 'none',  // 溢出显示方式 none, truncate, break, breakAll
            // ellipsis: '...',  // 溢出填充字符
        }
    }
    
    return objMerge(option, mergeValue)
}
// 提示框
const getTooltip = (mergeValue = {}) => {
    const option = {
        show: true,
        trigger: 'item',
        padding: 5,
        axisPointer: {
            type: 'cross'
        },
        textStyle: {
            color: '#999999',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14
        }
    }

    return objMerge(option, mergeValue)
}
// 网格
const getGrid = (mergeValue = {}) => {
    const option = {
        show: true,
        top: 70,
        bottom: 50,
        right: 0,
        left: 0,
        borderColor: '#ccc',
        borderWidth: 1,
        tooltip: {
            show: true,
            trigger: 'item',
            textStyle: {
                color: '#00ffff',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 14
            }
        }
    }

    return objMerge(option, mergeValue)
}
// axis
const getAxisNameTextStyle = (mergeValue = {}) => {

    const option = {
        color: '#ffffff',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        align: 'left'
    }

    return objMerge(option, mergeValue)
}
// 坐标轴轴线相关设置。
const getAxisLine = (mergeValue = {}) => {
    const option = {
        show: true,
        onZero: true,
        onZero: false,
        lineStyle: {
            color: '#EE6666',
            width: 1,
            type: 'solid'
        }
    }

    return objMerge(option, mergeValue)
}
// 坐标轴刻度相关设置。
const getAxisTick = (mergeValue = {}) => {
    const option = {
        show: true,
        alignWithLabel: true,
        inside: true,
        length: 5,
        lineStyle: {
            color: '#63677A',
            width: 1,
            type: 'solid'
        }
    }

    return objMerge(option, mergeValue)
}
// 坐标轴刻度标签的相关设置
const getAxisLabel = (mergeValue = {}) => {
    const option = {
        show: true,
        inside: false,
        rotate: 0,
        margin: 8,
        color: '#464646',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        align: 'left',
        padding: 4,
    }

    return objMerge(option, mergeValue)
}
// 坐标轴指示器配置项
const getAxisPointer = (mergeValue = {}) => {
    const option = {
        show: true,
        type: 'line',
        lineStyle: {
            color: '#555555',
            width: 1,
            type: 'solid',
        },
        label: {
            show: true,
            margin: 3,
            padding: 5,
            color: '#fff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 12,
            lineHeight: 10,
    
        }
    }

    return objMerge(option, mergeValue)
}
// 图例组件
const getLegend = (mergeValue = {}) => {
    const option = {
        show: true,
        zlevel: 0,
        type: 'plain',
        left: 'auto', // 布局方式, 可以是 '20%' 或者  'left', 'center', 'right'
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        orient: 'horizontal', // 图例列表的布局朝向。horizontal、vertical
        align: 'auto', // 图例标记和文本的对齐。默认自动
        padding: 0,
        itemGap: 0,
    
        itemStyle: {
            opacity: 1,
            color: '#2fd26b',
            borderColor: '#2fd26b',
            borderWidth: 0,
            borderType: 'solid',
    
            // shadowBlur: 0,
            // shadowColor: '',
            // shadowOffsetX: 0,
            // shadowOffsetY: 0,
        },
        lineStyle: {
            type: 'solid',
            color: '',
            width: 0,
    
            // shadowBlur: 0,
            // shadowColor: '',
            // shadowOffsetX: 0,
            // shadowOffsetY: 0,
        },
        textStyle: {
            color: '#ffffff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 12,
            lineHeight: 16,
            
            borderColor: '',
            borderWidth: 0,
            borderType: 'solid',
            padding: 4,
            // backgroundColor: 'rgba(0,23,11,0.3)',
        }
    }

    return objMerge(option, mergeValue)
}
// 极坐标系
const getPolar = (mergeValue = {}) => {
    const option = {
        center: ['50%', '50%'],
        radius: '20%',
        tooltip: getTooltip()
    }

    return objMerge(option, mergeValue)
}
// 极坐标系的角度轴
const getAngleAxis = (mergeValue = {}) => {
    const option = {
        type: 'value',
        startAngle: 90,
        clockwise: true,
        // min: 0,
        // max: 100,
        // splitNumber: 5,
        axisTick: getAxisTick(),
        axisLabel: getAxisLabel(),
        axisPointer: getAxisPointer(),
        axisLine: {
            show: true,
            lineStyle: {
                color: '#555555',
                width: 1,
                type: 'solid',
            }
        }
    }

    return objMerge(option, mergeValue)
}
// 极坐标系的径向轴
const getRadiusAxis = (mergeValue = {}) => {
    const option = {
        type: 'value',
        nameLocation: 'end',
        nameTextStyle: getAxisNameTextStyle(),
        nameGap: 15,
        nameRotate: 0,
        inverse: false,
        // min: 0,
        // max: 100,
        // splitNumber: 5,
        axisTick: getAxisTick(),
        axisLabel: getAxisLabel(),
        axisPointer: getAxisPointer(),
        axisLine: {
            show: true,
            lineStyle: {
                color: '#555555',
                width: 1,
                type: 'solid',
            }
        },
        data: []
    }

    return objMerge(option, mergeValue)
}
// 坐标轴在 grid 区域中的分隔线。
const getSplitLine = (mergeValue = {}) => {
    const option = {
        show: true,
        interval: 100,
        lineStyle: {
            color: ['#aaa', '#ddd'],
            width: 1,
            type: 'solid'
        }
    }
    
    return objMerge(option, mergeValue)
}
// 视觉映射组件
const getVisualMap = (mergeValue = {}) => {
    const option = {
        show: false,
        // type: 'continuous',
        min: 10,
        max: 100,
        inverse: true,
        itemWidth: 20,
        itemHeight: 40,
        align: 'auto',
        textGap: 10,
        dimension: 0,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        orient: 'vertical',
        padding: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        text: ['High Score', 'Low Score'],
        textStyle: {
            color: '#333333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 12,
            lineHeight: 10
        }
    }

    return objMerge(option, mergeValue)
}
// 雷达图
const getRadar = (mergeValue = {}) => {
    const option = {
        center: ['50%', '50%'],
        radius: '75%',
        startAngle: 90,
        nameGap: 15,
        splitNumber: 5,
        shape: 'polygon',
        axisName: {
            show: true,
            padding: 4,
            
            color: '#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 12,
            lineHeight: 10,
    
            borderColor: '',
            borderWidth: 1,
            borderType: 'solid'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#333',
                width: 1,
                type: 'solid'
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#333',
                width: 1,
                type: 'solid'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#ccc'],
                width: 1,
                type: 'solid'
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)'],
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffsetX: 0,
                shadowOffsetY: 0
            }
        },
        axisLabel: {
            show: true,
            rotate: 0,
            margin: 8,
            padding: 4,
    
            color: '',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 12,
            align: 'left',
            lineHeight: 10,
    
            verticalAlign: 'auto',
            borderColor: '',
            borderWidth: 1,
            borderType: 'solid',
    
            shadowColor: '',
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0
        },
        indicator: []
    }

    return objMerge(option, mergeValue)
}
// 环形图
const getPieSeries = (mergeValue = {}) => {
    const option = {
        type: 'gauge',
        name: '',
        // colorBy: 'data',
        // selectedOffset: 10,
        center: ['50%', '50%'],
        radius: ['50%', '70%'],
        seriesLayoutBy: 'column',
    
        clockwise: true,
        startAngle: 90,
        minAngle: 0,
        minShowLabelAngle: 0,
        roseType: false,
        avoidLabelOverlap: true,
        stillShowZeroSum: true,
        percentPrecision: 2,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        emptyCircleStyle: {
            color: '',
            ...border,
            ...shadow
        },
        label: {
            show: false,
            position: 'outside',
            rotate: 0,
    
            ...font,
            ...border,
            ...shadow,
            borderColor: '',
        },
        labelLine: {
            show: true,
            showAbove: true,
            lineStyle: {
                ...border,
                ...shadow,
                color: '',
                borderColor: '',
            }
        },
        itemStyle: {
            color: '',
            borderRadius: 0,
            ...border,
            ...shadow
        }
    }

    return objMerge(option, mergeValue)
}
// serice中的通用label
const series_label = {
    show: false,
    position: 'inside',
    distance: 5,
    rotate: 0,
    offset: [0, 0],
    ...font,
    align: 'left',
    ...border,
    borderRadius: 0,
    ...shadow,
    padding: 0,
    ...textShadow
}
// 地图
const getGeo = (mergeValue = {}) => {
    const option = {
        show: true,
        map: 'china',
        roam: true,
        // center: [115.97, 29.71],
        aspectScale: 0.75,
        zoom: 1,
        nameMap: {
            China: '中国'
        },
        // left: '50%',
        // top: '50%',
        // right: 'auto',
        // bottom: 'auto',
        layoutCenter: ['50%', '50%'],
        layoutSize: 1000,
        tooltip: {
            show: false,
            position: 'top',
            borderColor: '#333',
            borderWidth: 0,
            padding: 5,
            backgroundColor: '',
            textStyle: {
                ...font,
                width: 100,
                height: 20,
            }
        },
        scaleLimit: {
            min: 0,
            max: 1
        },
        label: Object.assign({}, series_label),
        itemStyle: {
            areaColor: '#eee',
            color: '',
            ...border,
            ...shadow
        },
        emphasis: {
            disabled: false,
            focus: 'none',
            label: Object.assign({}, series_label),
            itemStyle: {
                areaColor: '#eee',
                color: '',
                ...border,
                ...shadow
            }
        }
    }

    return objMerge(option, mergeValue)
}
// 点
const getEffectScatter = (mergeValue = {}) => {
    const option = {
        type: 'effectScatter',
        zlevel: 0,
        z: 2,
        // colorBy: 'series',
        legendHoverLink: true,
        effectType: 'ripple',
        showEffectOn: 'render',
        coordinateSystem: 'cartesian2d',
    
        symbol: 'circle',
        symbolSize: 10,
        symbolRotate: 10,
        symbolKeepAspect: false,
        symbolOffset: [0, 0],
    
        // selectedMode: 'single',
        // seriesLayoutBy: 'column',
        animation: true,
    
        rippleEffect: {
            color: '',
            number: 3,
            period: 4,
            scale: 2.5,
            brushType: 'fill',
        },
        label: Object.assign({}, series_label, {position: 'right'}),
        labelLine: {
            show: true,
            showAbove: true,
            length2: 10,
            smooth: false,
            lineStyle: {
                color: '#000',
                width: 1,
                type: 'solid',
                miterLimit: 10,
                ...shadow
            }
        },
        // labelLayout: {
        //     hideOverlap: true,
        //     moveOverlap: 'shiftX',
        //     x: '20%',
        //     y: '20%',
        //     dx: 0,
        //     dy: 0,
        //     rotate: 0,
        //     width: 100,
        //     height: 20,
        //     align: 'left',
        //     verticalAlign: 'top',
        //     fontSize: 12
        // },
        itemStyle: {
            color: '',
            ...border,
            ...shadow
        },
        emphasis: {
            disabled: false,
            scale: 1.1,
            focus: 'none',
            blurScope: 'coordinateSystem',
            label: Object.assign({}, series_label),
            labelLine: {
                show: true,
                lineStyle: {
                    color: '#000',
                    width: 1,
                    type: 'solid',
                    miterLimit: 10,
                    ...shadow
                }
            },
            itemStyle: {
                color: '',
                ...border,
                ...shadow
            }
        }
    }

    return objMerge(option, mergeValue)
}
// 线s
const getLines = (mergeValue = {}) => {
    const option = {
        type: 'lines',
        // colorBy: 'series',
        coordinateSystem: 'geo',
        large: false,
        // symbol: 'none',
        // symbolSize: 10,
        // selectedMode: 'single',
        // progressive: 400,
        // progressiveThreshold: 3000,
        // clip: true,
        // silent: false,
    
        largeThreshold: 2000,
        zlevel: 0,
        z: 2,
        animation: true,
        // animationThreshold: 2000,
        // animationDuration: 1000,
        // animationEasing: 'cubicOut',
        // animationDelay: 1000,
        // animationDurationUpdate: 300,
        // animationEasingUpdate: 'cubicInOut',
        effect: {
            show: false,
            color: '',
            period: 4,
            delay: 1000,
            symbol: 'circle',
            symbolSize: 3,
            trailLength: 0.2,
            loop: true,
            roundTrip: false
        },
        lineStyle: {
            color: '#000',
            width: 1,
            type: 'solid',
            miterLimit: 10,
            ...shadow
        },
        label: Object.assign({}, series_label),
        // labelLayout: {
        //     hideOverlap: true,
        //     moveOverlap: 'shiftX',
        //     x: '20%',
        //     y: '20%',
        //     dx: 0,
        //     dy: 0,
        //     rotate: 0,
        //     width: 100,
        //     height: 20,
        //     align: 'left',
        //     verticalAlign: 'top',
        //     fontSize: 12
        // },
        emphasis: {
            disabled: true,
            focus: 'none',
            blurScope: 'coordinateSystem',
            
            lineStyle: {
                color: '#000',
                width: 1,
                type: 'solid',
                miterLimit: 10,
                ...shadow
            },
            label: Object.assign({}, series_label),
        }
    }
    
    return objMerge(option, mergeValue)
}
const getFunnel = (mergeValue = {}) => {
    const option = {
        name: '',
        type: 'funnel',
        min: 0,
        max: 100,
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
            show: true,
            position: 'inside',
            formatter: "{b}",
            ...font,
            ...border,
            ...shadow,
            ...textShadow
        },
        labelLine: {
            show: true,
            length: 10,
            lineStyle: {
                width: 1,
                type: 'solid',
                ...shadow
            }
        },
        itemStyle: {
            color: "",
            ...border,
            ...shadow
        },
        emphasis: {
            label: {
                fontSize: 20
            }
        },
        tooltip: {
            position: ['50%', '50%'],
            formatter: '{b} {c}',
            backgroundColor: 'rgba(50,50,50,0.7)',
            borderColor: '#333',
            borderWidth: 0,
            padding: 5,
            textStyle: {
                ...font,
                ...textShadow
            }
        }
    }
    
    return objMerge(option, mergeValue)
}

export {
    getTitle,
    getTooltip,
    getAxisNameTextStyle,
    getAxisLine,
    getAxisTick,
    getAxisLabel,
    getGrid,
    getAxisPointer,
    getLegend,
    getPolar,
    getAngleAxis,
    getRadiusAxis,
    getSplitLine,
    getVisualMap,
    getRadar,
    getPieSeries,
    getGeo,
    getEffectScatter,
    getLines,
    getFunnel
}