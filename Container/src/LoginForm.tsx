import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import React from 'react';
import useSWR, { useSWRConfig } from 'swr';
import http from 'axios';
import { Actions, useDispatch } from '../../store';

interface LoginFormProps {}

export const LoginForm: NextPage<LoginFormProps> = (props) => {
  const { register, handleSubmit } = useForm();
  const { mutate } = useSWRConfig();

  const handleClick = React.useCallback((data) => {
    // mutate('/api/login', async () => {
    //   await http
    //     .request({
    //       method: 'POST',
    //       url: '/api/login',
    //       data: data,
    //       headers: { 'Content-Type': 'application/json' },
    //     })
    //     .then((res) => res.data);
    // });
  }, []);

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
        <div>
          <p>Name</p>
          <input type="text" {...register('name')} />
        </div>
        <button>Login</button>
      </form>
    </>
  );
};
