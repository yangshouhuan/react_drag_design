import { BaseChartType } from "types/chart"

import environment from 'assetss/images/starfield.jpg'
import baseTexture from 'assetss/images/world.topo.bathy.200401.jpg'
const texture = 'assetss/images/pisa.hdr'

const earthChartList: BaseChartType[] = [
        {
        id: 81,
        option_id: '0-8|0-1',
        component: '3Dmap',
        name: '3D 地球',
        is_echarts: true,
        config: {
            backgroundColor: '#000',
            globe: {
                baseTexture: baseTexture,
                heightTexture: baseTexture,
                displacementScale: 0.04,
                shading: 'realistic',
                environment: environment,
                realisticMaterial: {
                  roughness: 0.9
                },
                postEffect: {
                  enable: true
                },
                light: {
                  main: {
                    intensity: 5,
                    shadow: true
                  },
                  ambientCubemap: {
                    texture: texture,
                    diffuseIntensity: 0.2
                  }
                }
              }
        }
    }
]

export default earthChartList
