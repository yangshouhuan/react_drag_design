import './index.less'
import ponit from 'assetss/icons/point.png'

// 头
import Header from './Header'
// 底
import Footer from './Footer'
// 左侧我的图层
import LeftSide from './LeftSide'
// 左侧所有图层
import AllLayers from './AllLayers'
// 右侧配置
import RightSide from './RightSide'
// 主要内容 设计
import Design from './Design'
// 行为组件
import Action from './Action'
// 辅助线
import AuxiliaryLine from './AuxiliaryLine'
// 子组件
import ChildrenCmpt from './ChildrenCmpt'

const KanbanDesign = () => {

	return (
		<div
			className="kanban-design-container"
			style={{ backgroundImage: 'url(' + ponit + ')' }}
			onContextMenuCapture={(e: any) => e.preventDefault()}
		>
			
			<AuxiliaryLine />
			<Header />
			<LeftSide />
			<AllLayers />
			<Design />
			<RightSide />
			<Footer />
			{/* <ChildrenCmpt /> */}
			{/* 行为组件 */}
			<Action />
		</div>
	)
}

export default KanbanDesign
