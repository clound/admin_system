import request from '@/utils/request'

export function fetchCrawel(params) {
  return request({
    url: '/crawel/fetch',
    method: 'get',
    params
  })
}

export function postCrawel(params) {
  return request({
    url: '/crawel/list',
    method: 'get',
    params
  })
}
