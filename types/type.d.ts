import { Jwt } from 'jsonwebtoken'

declare global {
  export type UserData = {
    name: string
    email: string
    id: number
    token: Jwt | string
  }
}
