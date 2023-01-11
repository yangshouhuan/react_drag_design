import { RequestPost, RequestGet, RequestDel } from 'api'


// 删除看板
export const KB_Del_List = (uuid: string) => {
	return RequestDel('/KBManage/KB_Del_List?uuid=' + uuid)
}

// 复制看板
export const KB_Copy = (uuid: string) => {
	return RequestPost('/KBManage/KB_Copy?uuId=' + uuid)
}


// 创建看板
export const KB_Create_List = (kId: number, values: any) => {
	return RequestPost('/KBManage/KB_Create_List', {
		GroupId: kId,
		Remark: '',
		...values
	})
}

// 修改看板名称
export const KB_Edit_Name = (id: string, value: string) => {
	return RequestPost('/KBManage/KB_Edit_Name?uuId=' + id + '&name=' + value)
}

// 获取看板列表
export const get_KB_List = (kId: number) => {
	return new Promise((resolve, rejects) => {
		setTimeout(() => {
			resolve({
				status: 1,
				data: [
					{uuId: '1c9416ea-ad31-48c2-8c7c-76deadd95a67', name: '看板1'},
					{uuId: '2c9416ea-ad31-48c2-8c7c-76deadd95a67', name: '看板2'}
				]
			})
		})
	})
}

// leftside
// 获取分组列表
export const get_KB_Group = (uid: number) => {
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
export const KB_Edit_Group = (params: any) => RequestPost('/KBManage/KB_Edit_Group', params)
export const KB_Create_Group = (params: any) => RequestPost('/KBManage/KB_Create_Group', params)
export const KB_Del_Group = (id: number) => RequestDel('/KBManage/KB_Del_Group?id=' + id)
export const KB_Get_Detail = (kid: number) => RequestGet('/KBManage/KB_Get_Detail?id=' + kid)
