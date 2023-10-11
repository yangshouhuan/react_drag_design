// 新的
import config_group from 'chart-config-json'

export const MyPromise = (cb: Function) => {
    return new Promise((resolve, reject) => {
        try {
            cb((value: any) => {
                setTimeout(() => resolve(value), 100)
            }, (err: any) => {
                setTimeout(() => reject(err), 100)
            })
        } catch (e) {
            reject(e)
        }
    })
}

// 获取分组数据
export function getAssetsGroup () {
    // return MyPromise((resolve: Function) => resolve(AssetsGroupDB))
    const list = config_group.map((item: any) => ({ group_id: item.group_id, group_name: item.group_name}))
    return MyPromise((resolve: Function) => resolve({
        code: 200,
        data: list,
        msg: '成功'
    }))
}

// 根据分组id获取列表
export function getAssetsListByGid (gid: number) {
    return MyPromise((resolve: Function) => {

        let list: any = []
        if (gid !== 0) {
            list = config_group.filter((item: any) => {
                return item.group_id === gid
            })[0].list
        }
        
        resolve({
            code: 200,
            data: list,
            msg: '成功'
        })
    })
}