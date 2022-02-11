import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import http from 'axios'
import { Jwt } from 'jsonwebtoken'
import { signOut } from 'service'

type LoginFormType = {
  email: string
  name: string
  password: string
}

interface UserData {
  name: string
  email: string
  id: number
  token: Jwt
}
export const user = createAction<UserData, '@@/USER'>('@@/USER')
export const removeUser = createAction<UserData, '@@/REMOVEUSER'>(
  '@@/REMOVEUSER'
)

export const login = createAsyncThunk<any, LoginFormType>(
  '@@USER/LOGIN',
  async (data) => {
    return
  }
)

export const logout = createAsyncThunk<any, string>('@@USER/LOGOUT', signOut)
