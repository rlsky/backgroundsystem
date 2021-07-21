import http from '@/request/base/index'

// 本地服务--上传
export function getImg(data) {
  return http({
    url: '/api/getimg',
    method: 'get',
    params: data
  })
}

