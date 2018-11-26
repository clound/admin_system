import request from '@/utils/request'

export function fetchList(params) {
  return request({
    baseURL: '/fibapi',
    url: '/list',
    method: 'get',
    params
  })
}

export function postArticle(params) {
  // console.log(params)
  return request({
    baseURL: '/fibapi',
    url: '/list',
    method: 'post',
    data: params
  })
}
