import request from '@/request/index'

// 获取模拟数据
export function getDataFromApi(params) {
  return request({
    url: '/data/tableData',
    method: 'get',
    params
  })
}
