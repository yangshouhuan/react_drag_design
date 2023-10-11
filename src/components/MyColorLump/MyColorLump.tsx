import { forwardRef } from "react"


const MyColorLump = forwardRef(({
    config
} : {
    config: any
}) => {

    return (
        <div className="w-h-100-pc my-color-lump" style={{...config}}></div>
    )
})

export default MyColorLump
