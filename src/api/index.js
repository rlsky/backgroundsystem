import request from '@/request/index'

// 获取天气
export function getWeather(data) {
  return request({
    url: '',
    method: 'get',
    params: data
  })
}

export function getlunbo(data) {
  return request({
    url: 'http://123.207.32.32:8000/home/multidata',
    method: 'get',
    params: data
  })
}
