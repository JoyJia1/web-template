import axios from 'axios'

export default createAxiosInstance({
  baseURL: import.meta.env.VITE_FETCH_URL,
  jsonContentType: true,
  timeout: 10 * 1000,
  resSuccessKey: 'code',
  resSuccessValue: 0,
  resErrorKey: 'msg',
  resDataKey: 'result',
})

function createAxiosInstance(config: {
  baseURL: string
  jsonContentType: boolean
  resSuccessKey: 'code' | 'status'
  resSuccessValue: 0 | 'ok'
  resErrorKey: 'msg' | 'errorMsg'
  resDataKey: 'result' | 'content'
  timeout?: number | undefined
}) {
  const { baseURL, timeout, jsonContentType, resSuccessKey, resSuccessValue, resErrorKey, resDataKey } = config
  const axiosInstance = axios.create({
    baseURL,
    timeout,
    withCredentials: true,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'content-type': jsonContentType
        ? 'application/json'
        : 'application/x-www-form-urlencoded',
    }
  })

  axiosInstance.interceptors.response.use(response => {
    const res: ServerResponse<unknown> = response.data
  
    if (!res || res[resSuccessKey] !== resSuccessValue) {
      window.$message.error(res[resErrorKey] || '网络请求异常')
      return Promise.reject(new Error(res[resErrorKey]))
    }
  
    return res[resDataKey]
  },  error => {
    window.$message.error(error.message)
    return Promise.reject(error);
  });
  
  return axiosInstance
}
