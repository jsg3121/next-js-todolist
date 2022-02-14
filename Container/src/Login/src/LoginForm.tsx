import { Button, Input, Spacer } from '@nextui-org/react'
import type { NextPage } from 'next'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Actions, useDispatch } from 'store'
import styled from 'styled-components'

interface LoginFormProps {}

const LoginButton = styled(Button)`
  width: 100%;
`

export const LoginForm: NextPage<LoginFormProps> = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const handleClick = React.useCallback(
    (data) => {
      dispatch(Actions.auth.login(data))
    },
    [dispatch]
  )

  return (
    <>
      <Spacer y={2} />
      <form onSubmit={handleSubmit(handleClick)}>
        <Input
          type="text"
          fullWidth
          labelPlaceholder="Email"
          status="primary"
          {...register('email')}
        />
        <Spacer y={1.5} />
        <Input.Password
          labelPlaceholder="Password"
          fullWidth
          status="primary"
          {...register('password')}
        />
        <Spacer y={2} />
        <LoginButton>Login</LoginButton>
      </form>
    </>
  )
}
