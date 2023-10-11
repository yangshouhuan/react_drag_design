import { RequestPost, RequestGet, RequestDel } from 'api'
import request from 'utils/request'


// 删除看板
export const delKbList = (uuid: string) => {
	return RequestDel('/KBManage/delKbList?uuid=' + uuid)
}

// 复制看板
export const copyKb = (uuid: string) => {
	return RequestPost('/KBManage/copy?uuId=' + uuid)
}


// 创建看板
export const createKbList = (kId: number, values: any) => {
	return RequestPost('/KBManage/createKbList', {
		GroupId: kId,
		Remark: '',
		...values
	})
}

// 修改看板名称
export const updateKbName = (id: string, value: string) => {
	return RequestPost('/KBManage/updatename?uuId=' + id + '&name=' + value)
}

// 获取看板列表
export const getKbList = (uid: number) => {
	// return RequestGet('/manage/list', { uid })
    return request({
		url: '/manage/list',
		method: 'get',
		params: { uid }
	})
}

// leftside
// 获取分组列表
export const getKbGroup = (uid: number) => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve({
                status: 1,
                data: [
                    { id: 1, name: '看板分组1' },
                    { id: 2, name: '看板分组2' }
                ]
            })
        }, 0)
    })
}

// 增删改查项目
export const updateKbGroup = (params: any) => RequestPost('/KBManage/updateKbGroup', params)
export const createKbGroup = (params: any) => RequestPost('/KBManage/createKbGroup', params)
export const delKbGroup = (id: number) => RequestDel('/KBManage/delKbGroup?id=' + id)
export const getKbDetail = (kid: number) => RequestGet('/KBManage/getKbDetail?id=' + kid)
