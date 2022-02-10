import { createAction } from '@reduxjs/toolkit'
import { Jwt } from 'jsonwebtoken'

interface UserData {
  name: string
  email: string
  id: number
  token: Jwt
}
export const user = createAction<UserData, '@@/USER'>('@@/USER')
