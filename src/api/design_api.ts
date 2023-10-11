import { RequestPost, RequestGet, RequestDel } from 'api'
import request from 'utils/request'


// 获取看板数据
export const getDesignData = (kid: string) => {
	// return RequestGet('/design/kb_data', { kid })
	return request({
		url: '/design/kb_data',
		method: 'get',
		params: { kid }
	})
}

// 获取json
export const getJSON = (url: string) => {
	return request({
		url,
		method: 'get',
		params: {}
	})
}
