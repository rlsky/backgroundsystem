import http from '@/request/base/index'

// 获取本地服务--列表数据
export function getTableData (data) {
  return http({
    url: '/api/getTableData',
    method: 'get',
    params: data
  })
}

// 获取本地服务--城市列表
export function getAddress (data) {
  return http({
    url: '/api/addressData',
    method: 'get',
    params: data
  })
}