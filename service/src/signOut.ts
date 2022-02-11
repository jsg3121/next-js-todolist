import http from 'axios'
import { decrypToken } from 'common'

export const signOut = async (data: any) => {
  const decrypy = JSON.parse(decrypToken(data))

  return await http
    .request({
      method: 'POST',
      url: '/api/auth/signout',
      data: { token: decrypy.data },
    })
    .then((res) => {
      console.log(res)
      return res.status
    })
}
