import { Jwt } from 'jsonwebtoken'
import CryptoJs from 'crypto-js'
import { CRYPTO_KEY } from './cryptoKey'

interface EncryptData {
  name: string
  token: Jwt
}

/**
 * ! 로그인시 이후 자동로그인을 위한 localStorage 저장 이전 암호화
 * @param {EncryptData} data
 * @return {void}
 */
export const encryptToken = (data: EncryptData): void => {
  const { token, name } = data
  localStorage.setItem(
    'accessToken',
    CryptoJs.AES.encrypt(
      `{"data":"${token}", "name":"${name}"}`,
      CRYPTO_KEY
    ).toString()
  )
}
