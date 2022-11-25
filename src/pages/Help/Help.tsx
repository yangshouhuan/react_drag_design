import Global from "api/globalConfigApi"

const Help = () => {
    
    return (
        <div style={{ textAlign: 'center'}}>
            <img style={{margin: 20, width: '60%'}} src={ require("assetss/images/help1.jpg").default} alt="" />
            <img style={{margin: 20, width: '60%'}} src={ require("assetss/images/help2.jpg").default} alt="" />
            <img style={{margin: 20, width: '60%'}} src={ require("assetss/images/help3.jpg").default} alt="" />
            <img style={{margin: 20, width: '60%'}} src={ require("assetss/images/help4.jpg").default} alt="" />
        </div>
    )
}

export default Help
