import axios from "axios";
import qs from "querystring";
// 根据环境不同引入不同api地址
import { baseApi } from '@/config'
// 创建axios实例
const service = axios.create({
  // 在请求地址前面加上baseURL
  baseURL: baseApi,
  // 当发送跨域请求时携带cookie
  // withCredentials: true,
  timeout: 5000,
});

// // 请求拦截
service.interceptors.request.use(
  (config) => {
    // 模拟指定请求令牌
    const token = window.localStorage.getItem("authToken");
    config.headers.Authorization = token;
    return config;
  },
  (error) => {
    // 请求错误的统一处理
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  /**
   * 通过判断状态码统一处理响应，根据情况修改
   * 同时也可以通过HTTP状态码判断请求结果
   */
  (response) => {
    const res = response;

    return res;
  },
  (error) => {
    // const { response } = error;
    return Promise.reject(error);
  },
);

export default class request {
  static get(url, params) {
    return new Promise((resolve, reject) => {
      if (params) {
        url = `${url}?${qs.stringify(params)}`;
      }
      service
        .get(url)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static post(url, params) {
    return new Promise((resolve, reject) => {
      service
        .post(url, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  }
}
