import { BaseChartType } from "types/chart"

import heightTexture from 'assetss/images/bathymetry_bw_composite_4k.jpg'
import baseTexture from 'assetss/images/world.topo.bathy.200401.jpg'

import flights from 'chart-config/shared/flights.json'

function getAirportCoord(idx: number) {
    return [flights.airports[idx][3], flights.airports[idx][4]];
  }
var routes = flights.routes.map(function (airline: any) {
    return [getAirportCoord(airline[1]), getAirportCoord(airline[2])];
});

const earthPathChartList: BaseChartType[] = [
        {
        id: 91,
        option_id: '0-9|0-1',
        component: '3Dmap',
        name: '3D 路径图',
        is_echarts: true,
        config: {
            backgroundColor: '#000',
            globe: {
            baseTexture: baseTexture,
            heightTexture: heightTexture,
            shading: 'lambert',
            light: {
                ambient: {
                intensity: 0.4
                },
                main: {
                intensity: 0.4
                }
            },
            viewControl: {
                autoRotate: false
            }
            },
            series: {
            type: 'lines3D',
            coordinateSystem: 'globe',
            blendMode: 'lighter',
            lineStyle: {
                width: 1,
                color: 'rgb(50, 50, 150)',
                opacity: 0.1
            },
            data: routes
            }
        }
    }
]

export default earthPathChartList
