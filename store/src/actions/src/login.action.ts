import { createAsyncThunk } from '@reduxjs/toolkit'
import http from 'axios'

type LoginFormType = {
  email: string
  name: string
  password: string
}

export const login = createAsyncThunk<any, LoginFormType>(
  '@@USER/LOGIN',
  async (data) => {
    return
  }
)

export const logout = createAsyncThunk<any, any>('@@USER/LOGOUT', async () => {
  await http.request({
    method: 'GET',
    url: '/api/test',
  })
  return
})
