import request from '@/utils/request'

export function fetchCrawel(params) {
  return request({
    baseURL: '/api',
    url: '/crawel/start',
    method: 'get',
    params
  })
}

export function postCrawel(params) {
  // console.log(params)
  return request({
    baseURL: '/api',
    url: '/crawel',
    method: 'get',
    params
  })
}
