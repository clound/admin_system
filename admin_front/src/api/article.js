import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/article/getlist',
    method: 'get',
    params
  })
}

export function postArticle(params) {
  // console.log(params)
  return request({
    url: '/article/create',
    method: 'post',
    data: params
  })
}
