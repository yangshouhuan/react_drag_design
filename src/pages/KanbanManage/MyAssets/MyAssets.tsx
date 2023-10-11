import { useState } from "react"
import AssetsList from "./AssetsList"
import LeftSide from "./LeftSide"

const MyAssets = ({
    crop_id,
	user_id
} : {
    crop_id: number | undefined
	user_id: number | undefined
}) => {
	// 选中项id	
	const [kId, setKId] = useState(0)

    return (
        <div className="flex MyAssets-container">
            <LeftSide
				kId={kId}
				userId={user_id}
				setKId={(id: number) => setKId(id)}
			/>
			<AssetsList />
        </div>
    )

}

export default MyAssets