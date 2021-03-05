import request from '@/utils/request'

export const getUsers = (params: any) =>
  request({
    url: '/user',
    method: 'get',
    params
  })

export const getUserInfo = (data: any) =>
  request({
    url: '/user/info',
    method: 'get',
    data
  })

export const getUserByName = (username: string) =>
  request({
    url: `/user/${username}`,
    method: 'get'
  })

export const updateUser = (username: string, data: any) =>
  request({
    url: `/user/${username}`,
    method: 'put',
    data
  })

export const deleteUser = (username: string) =>
  request({
    url: `/user/${username}`,
    method: 'delete'
  })

export const login = (data: any) =>
  request({
    url: '/login',
    method: 'post',
    data
  })

export const logout = () =>
  request({
    url: '/user/logout',
    method: 'post'
  })

export const register = (data: any) =>
  request({
    url: '/user/register',
    method: 'post',
    data
  })
