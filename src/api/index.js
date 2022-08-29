import request from '@/utils/request'

/**
 * 用户信息
 * @param loginParams 
 */ 
const USER_INFO = ''

export function getUserInfo(params) {
  return request.get(USER_INFO, params)
}