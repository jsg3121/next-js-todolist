import http from 'axios';
import type { NextPage } from 'next';
import Router from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSWRConfig } from 'swr';
import { Actions, useDispatch } from '../../store';

interface LoginFormProps {}

export const LoginForm: NextPage<LoginFormProps> = () => {
  const { register, handleSubmit } = useForm();
  const { mutate } = useSWRConfig();
  const dispatch = useDispatch();

  const handleClick = React.useCallback(
    (data) => {
      mutate('/api/login', async () => {
        await http
          .request({
            method: 'POST',
            url: '/api/login',
            data: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
          })
          .then((res) => {
            localStorage.setItem('check', 'true');
            dispatch(Actions.user.user(res.data));
            Router.push('/');
          })
          .catch(() => {
            alert('err!!!');
          });
      });
    },
    [dispatch, mutate]
  );

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
  );
};
