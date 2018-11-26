import request from '@/utils/request'

export function getList(params) {
  return request({
    baseURL: '/api',
    url: '/crawel',
    method: 'get',
    params
  })
}
