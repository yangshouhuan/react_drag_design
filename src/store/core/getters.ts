import { ChartType } from "types/chart"

export const getActiveChart = (data: ChartType[], id: number) : ChartType | null => {
    let chart = null
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            chart = data[i]
            break
        }
        if (data[i].is_group) {
            chart = getActiveChart(data[i].children || [], id)
            if (chart) break
        }
    }
    return chart
}
