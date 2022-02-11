import http from 'axios'
import type { NextPage } from 'next'
import Router from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Actions, useDispatch } from 'store'
import { useSWRConfig } from 'swr'

interface LoginFormProps {}

export const LoginForm: NextPage<LoginFormProps> = () => {
  const { register, handleSubmit } = useForm()
  const { mutate } = useSWRConfig()
  const dispatch = useDispatch()

  const handleClick = React.useCallback(
    (data) => {
      dispatch(Actions.auth.login(data))

      // mutate('/api/login', async () => {
      //   await http
      //     .request({
      //       method: 'POST',
      //       url: '/api/auth/login',
      //       data: JSON.stringify(data),
      //       headers: { 'Content-Type': 'application/json' },
      //     })
      //     .then((res) => {
      //       // Router.push('/')
      //     })
      //     .catch(() => {
      //       alert('err!!!')
      //     })
      // })
    },
    [dispatch]
  )

  return (
    <>
      <form onSubmit={handleSubmit(handleClick)}>
        <div>
          <p>Email</p>
          <input type="text" {...register('email')} />
        </div>
        <div>
          <p>Password</p>
          <input type="password" {...register('password')} />
        </div>
        <button>Login</button>
      </form>
    </>
  )
}
