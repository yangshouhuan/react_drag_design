import { Spin } from "antd"

const style = {
	display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
}


const LoadingComponent = () => {

    return <div style={style}>
        <Spin tip="加载缓慢，请耐心等待..." />
    </div>
}

export default LoadingComponent
