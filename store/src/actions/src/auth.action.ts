import { createAsyncThunk } from '@reduxjs/toolkit'
import { signIn, signOut, tokenCheck } from 'service'

type LoginFormType = {
  email: string
  name: string
  password: string
}

export const login = createAsyncThunk<any, LoginFormType>(
  '@@USER/LOGIN',
  signIn
)
export const logout = createAsyncThunk<any, string>('@@USER/LOGOUT', signOut)
export const loginCheck = createAsyncThunk<UserData, void>(
  '@@USER/TOKENCHECK',
  tokenCheck
)
