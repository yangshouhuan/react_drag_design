import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const UserId = 'Admin-User-Id'

export function setToken (token) {
  Cookies.set(TokenKey, token)
}
export function setUserId (id) {
  Cookies.set(UserId, id)
}
export function getToken () {
  return Cookies.get(TokenKey)
}
export function getUserId () {
  return Cookies.get(UserId)
}
export function removeUserInfo() {
  Cookies.remove(TokenKey)
  Cookies.remove(UserId)
  return false
}

// 设置看板信息
const ProjectUId = 'Project-UId'
const ProjectId = 'Project-Id'

export function setProjectUId (id) {
  return localStorage.setItem(ProjectUId, id)
}
export function getProjectUId () {
  return localStorage.getItem(ProjectUId)
}
export function setProjectId (id) {
  return localStorage.setItem(ProjectId, id)
}
export function getProjectId () {
  return localStorage.getItem(ProjectId)
}
export function removeProject () {
  localStorage.clear()
  return false
}

// 清除父类引用
const clearCite = (data) => {
  data.forEach((item, index) => {
    data[index] = Object.assign({}, item)
    if (data[index].children) {
      clearCite(data[index].children)
    }
  })
}

// 设置预览信息
const KB_Data = 'KB_Data'
const KB_Style = 'KB_Style'
export function setPreviewData (values) {
  const {data, kb_style} = values
  let newData = [...data]
  clearCite(newData)

  sessionStorage.setItem(KB_Data, JSON.stringify(newData || []))
  sessionStorage.setItem(KB_Style, JSON.stringify(kb_style || {}))
}
export function getPreviewData() {
  return {
    data: JSON.parse(sessionStorage.getItem(KB_Data) || JSON.stringify([])),
    kb_style: JSON.parse(sessionStorage.getItem(KB_Style) || JSON.stringify({}))
  }
}