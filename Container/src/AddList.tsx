import type { NextPage } from 'next';
import React from 'react';
import useSWR, { useSWRConfig } from 'swr';
import http from 'axios';
import { useForm } from 'react-hook-form';

export const AddList: NextPage = (props) => {
  const { register, handleSubmit } = useForm();
  const { mutate } = useSWRConfig();
  const { data } = useSWR('/api/test', async (...args) => {
    const res = await fetch(...args);
    return await res.json();
  });

  const handleClick = React.useCallback(
    (data) => {
      mutate('/api/mutate', async () => {
        await http
          .request({
            method: 'POST',
            url: '/api/mutate',
            data: data,
          })
          .then((res) => res.data);
      });
    },
    [mutate]
  );

  return (
    <>
      <form onSubmit={handleSubmit(handleClick)}>
        <input type="text" {...register('email')} />
        <input type="password" {...register('password')} />
        <input type="text" {...register('name')} />
        <button>mutate</button>
      </form>
    </>
  );
};
