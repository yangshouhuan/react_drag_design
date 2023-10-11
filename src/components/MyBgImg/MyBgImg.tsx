import Global from "api/globalConfigApi";
import { forwardRef } from "react";
const imgUrl = Global.fileUrl + '/update_images/'

const style = (config: any) => {

    return {
        width: '100%',
        height: '100%',
        backgroundImage: 'url('+ imgUrl + config.bgimg +')',
        backgroundRepeat: config.repeat,
        backgroundSize: config.repeat === 'no-repeat' ? '100% 100%' : 'auto auto'
    }
}

const support = ['png', 'jpg']

const MyBgImg = forwardRef(({
    config
} : {
    config: any
}) => {
    // const url = config.bgimg
    // 获取后缀
    // const suffix = url.substring(url.lastIndexOf('.') + 1)
    // const flag = support.includes(suffix)

    return (
        <div className="my-bg-img" style={style(config)}>
            {/* {!flag ? <img src={url} alt="" style={{ width: '100%', height: '100%'}} /> : <></>} */}
        </div>
    )
})

export default MyBgImg
