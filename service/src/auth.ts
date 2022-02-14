import http from 'axios'
import { decrypToken } from 'common'

interface SignIn {
  email: string
  password: string
}

/**
 * ! 로그인 async Action Api 요청
 * @auth 장선규
 * @param {SignIn} data
 * @returns {Promise<UserData>}
 */
export const signIn = async (data: SignIn): Promise<UserData> => {
  return await http
    .request({
      method: 'POST',
      url: '/api/auth/login',
      data,
    })
    .then((res) => {
      return res.data
    })
}

/**
 * ! 로그인 async Action Api 요청
 * @auth 장선규
 * @param {string} data
 * @returns {Promise<number>}
 */
export const signOut = async (data: string): Promise<number> => {
  const decrypy = JSON.parse(decrypToken(data))
  return await http
    .request({
      method: 'POST',
      url: '/api/auth/signout',
      data: { token: decrypy.data },
    })
    .then((res) => {
      return res.status
    })
}

/**
 * ! Token Check Action Api
 * @auth 장선규
 * @returns {Promise<UserData>}
 */
export const tokenCheck = async (): Promise<UserData> => {
  const token = localStorage.getItem('accessToken') || ''
  return await http
    .request<UserData>({
      method: 'POST',
      url: '/api/auth/tokencheck',
      data: { token },
    })
    .then((res) => {
      return res.data
    })
}
