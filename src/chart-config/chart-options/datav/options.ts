import { ChartType } from "types/chart"

const getOptions = () : ChartType => {
    return {
        id: 0,
        option_id: '0|0',
        component: 'div',
        name: 'name',
        is_lock: false,
        is_del: false,
        is_hide: false,
        is_echarts: false,
        is_group: false,
        father_ids: [0],
        x: 0,
        y: 0,
        width: 300,
        height: 300,
        opacity: 1,
        transform: 0,
        idx: 0,
        config: {}
    }
}

export default getOptions