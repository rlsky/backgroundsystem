import request from '@/request/index'

// 获取天气
export function getWeather (data) {
  return request({
    url: '',
    method: 'get',
    params: data
  })
}