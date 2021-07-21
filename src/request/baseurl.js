// 根据环境切换请求api
const urlParams = {
  baseUrl: ''
}
console.log(process.env.VUE_APP_ENV_ALIAS, 'process.env.VUE_APP_ENV_ALIAS')
switch (process.env.VUE_APP_ENV_ALIAS) {
  case 'dev':
    urlParams.baseUrl = '/bs' // 开发环境url
    break
  case 'prod':
    urlParams.baseUrl = '' // 生产环境url
    break
  case 'test':
    urlParams.baseUrl = '' // 测试环境url
    break
  default:
    urlParams.baseUrl = ''
}
export default urlParams
