import axios from 'axios'

const development = process.env.NODE_ENV == 'development'

let request = axios.create({
  baseURL: development ? '/bs' : '',
  timeout: 30000      //超时时间
});

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  function (res) {
    return res.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);



export default request