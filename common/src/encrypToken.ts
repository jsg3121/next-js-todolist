import { Jwt } from 'jsonwebtoken'
import CryptoJs from 'crypto-js'
import { CRYPTO_KEY } from './cryptoKey'

interface UserData {
  name: string
  email: string
  token: Jwt
}

type TokenEncryption = (data: UserData) => void

export const tokenEncryption: TokenEncryption = (data) => {
  const { token, name } = data
  console.log(token)
  localStorage.setItem(
    'accessToken',
    CryptoJs.AES.encrypt(
      `{"data":"${token}", "name":"${name}"}`,
      CRYPTO_KEY
    ).toString()
  )
}
