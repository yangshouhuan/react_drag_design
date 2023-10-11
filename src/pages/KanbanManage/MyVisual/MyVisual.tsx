import { LogoutOutlined } from "@ant-design/icons"
import { useState } from "react"
import KanbanList from "./KanbanList"
import LeftSide from "./LeftSide"
import './index.less'

const MyVisual = ({
    crop_id,
	user_id
} : {
    crop_id: number | undefined
	user_id: number | undefined
}) => {
	// 选中项id	
	const [kId, setKId] = useState(1)

    return (
        <div className="w-h-100-pc MyVisual-container">
            {/* <LeftSide
				kId={kId}
				userId={user_id}
				setKId={(id: number) => setKId(id)}
			/> */}
			<KanbanList
				kId={kId}
				cropId={crop_id}
				userId={user_id}
			/>
        </div>
    )

}

export default MyVisual