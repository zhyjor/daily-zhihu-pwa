import request from '../utils/request'

export function getSlideList(query) {
  return request({
    url: '/last-stories',
    method: 'get',
    query: query
  })
}
