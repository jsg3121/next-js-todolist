import CryptoJs from 'crypto-js'
import { CRYPTO_KEY } from './cryptoKey'

type DecrypToken = (data: string) => string

export const decrypToken: DecrypToken = (data) => {
  return CryptoJs.AES.decrypt(data, CRYPTO_KEY).toString(CryptoJs.enc.Utf8)
}
