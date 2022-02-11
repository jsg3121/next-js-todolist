import http from 'axios'
import { decrypToken } from 'common'

interface SignIn {
  email: string
  password: string
}

export const signIn = async (data: SignIn) => {
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

export const signOut = async (data: any) => {
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

export const tokenCheck = async () => {
  const token = localStorage.getItem('accessToken') || ''
  return await http
    .request({
      method: 'POST',
      url: '/api/tokencheck',
      data: { token },
    })
    .then((res) => {
      return res.data
    })
}
