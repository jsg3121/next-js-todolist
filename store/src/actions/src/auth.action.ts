import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { Jwt } from 'jsonwebtoken'
import { signIn, signOut, tokenCheck } from 'service'

type LoginFormType = {
  email: string
  name: string
  password: string
}

interface UserData {
  name: string
  email: string
  id: number
  accessToken: Jwt
}

export const removeUser = createAction<any, '@@USER/REMOVEUSER'>(
  '@@USER/REMOVEUSER'
)
export const login = createAsyncThunk<any, LoginFormType>(
  '@@USER/LOGIN',
  signIn
)
export const logout = createAsyncThunk<any, string>('@@USER/LOGOUT', signOut)
export const loginCheck = createAsyncThunk<UserData, void>(
  '@@USER/TOKENCHECK',
  tokenCheck
)
