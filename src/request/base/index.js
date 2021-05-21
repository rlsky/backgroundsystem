// 本地服务接口使用http
import axios from 'axios'

let http = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 30000      //超时时间
});

// 请求拦截器
http.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (res) => {
    console.log(res)
    if(res.status==200){
      return res.data;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);



export default http