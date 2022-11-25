import IsComponent from "components/IsComponent"
import { memo, useEffect, useMemo, useState } from "react"
import { IsComponentType } from "types/chart"

const getValue = (value: any, data: IsComponentType) => {
    const fields = data.fields.split('-')
    fields.forEach((type: string) => {
        value = value[type]
    })
    return value
}

const CreateConfigComponent = ({
        data,
        onBlur,
        config
    } : {
        data: IsComponentType
        onBlur: (value: any, fields: string) => void
        config: any
    }) => {
        const newValue = useMemo(() => {
            return getValue(config, data)
        }, [config, data])

        return (
            <div className='base-item'>
                <div className='ellipsis-1 base-label' title={data.text}>{data.text}</div>
                <div className='base-right'>
                    <IsComponent
                        data={data}
                        value={newValue}
                        onBlur={(value: any) => onBlur(value, data.fields)}
                    />
                </div>
            </div>
        )
}

export default memo(CreateConfigComponent)
