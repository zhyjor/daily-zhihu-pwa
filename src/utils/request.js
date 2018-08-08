import axios from 'axios'
// import store from '../store/index'

// create an axios isntance
const service = axios.create({
  baseURL: 'https://zhihu-daily.leanapp.cn/api/v1',
  timeout: '5000'
})

// request interceptor
service.interceptors.request.use(config => {
  // do sth before request is sent
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// response interceptor
service.interceptors.response.use(response => response,
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  })

export default service
