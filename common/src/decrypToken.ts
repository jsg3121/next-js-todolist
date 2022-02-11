import CryptoJs from 'crypto-js'
import { CRYPTO_KEY } from './cryptoKey'

type DecrypToken = (data: string) => string

/**
 * ! 페이지 접속시 토큰 체크를 위해 localStorage에 저장되어 있는 토큰 복호화
 * @auth 장선규
 * @param {string} data `string`
 * @returns {string}
 */
export const decrypToken: DecrypToken = (data: string): string => {
  return CryptoJs.AES.decrypt(data, CRYPTO_KEY).toString(CryptoJs.enc.Utf8)
}
