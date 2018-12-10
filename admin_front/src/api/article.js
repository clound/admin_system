import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/article/getlist',
    method: 'get',
    params
  })
}

export function fetchArticle(params) {
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

export function deleteOne(params) {
  // console.log(params)
  return request({
    url: '/article/delete',
    method: 'post',
    data: params
  })
}

export function changeStatus(params) {
  // console.log(params)
  return request({
    url: '/article/update',
    method: 'post',
    data: params
  })
}
